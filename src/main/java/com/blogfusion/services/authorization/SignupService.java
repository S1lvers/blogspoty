package com.blogfusion.services.authorization;

import com.blogfusion.exception.ConfirmationException;
import com.blogfusion.exception.SignupException;
import com.blogfusion.model.entity.EmailConfirmationEntity;
import com.blogfusion.model.entity.UserEntity;
import com.blogfusion.model.repositories.EmailConfirmationRepository;
import com.blogfusion.model.request.SignupRequest;
import com.blogfusion.model.response.ConfirmationResponse;
import com.blogfusion.model.response.ErrorMessage;
import com.blogfusion.model.response.SignupResponse;
import com.blogfusion.services.EmailService;
import com.blogfusion.services.UserService;
import com.blogfusion.util.DateUtils;
import com.blogfusion.util.Utils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
class SignupService {

    private final UserService userService;

    private final EmailConfirmationRepository emailConfirmationRepository;

    private final EmailService emailService;

    public SignupService(UserService userService,
                         EmailService emailService,
                         EmailConfirmationRepository emailConfirmationRepository) {

        this.userService = userService;
        this.emailService = emailService;
        this.emailConfirmationRepository = emailConfirmationRepository;
    }

    SignupResponse signup(SignupRequest signupRequest) {
        var errorMessages = this.getSignupErrorMessages(signupRequest);
        if (!Utils.isEmpty(errorMessages)) {
            return new SignupResponse(errorMessages, HttpStatus.BAD_REQUEST);
        }
        userService.createUser(signupRequest);

        return new SignupResponse(HttpStatus.OK).setRegistredEmail(signupRequest.getEmail());
    }

    public void sendEmailConfirmation(String email) throws Exception {
        var CANT_SEND_CONFIRMATION = "Не удалось отправить сообщение с подтверждением, " +
                "поскольку данный email не зарегестрирован в системе";
        log.debug("Sending confirmation to email {}", email);

        var user = this.getUserByEmail(email);

        if (user == null) {
            throw new SignupException(new SignupResponse(CANT_SEND_CONFIRMATION, "email", HttpStatus.BAD_REQUEST));
        }

        var confirmEntity = emailConfirmationRepository.findByUserEmail(email)
                .orElse(new EmailConfirmationEntity().setUser(user));

        if (confirmEntity.getUpdatedAt().isAfter(DateUtils.getCurrentLocalDateTime().minusMinutes(1))) {
            log.debug("Attempt to send confirmation until time has passed");
            throw new ConfirmationException(new ConfirmationResponse("Время для повторного обновления хэша не пришло", "updatedAt", HttpStatus.BAD_REQUEST));
        }

        emailConfirmationRepository.save(confirmEntity.setConfirmationHash(RandomStringUtils.random(42, true, true)));

        emailService.sendConfirmationEmail(email, confirmEntity.getConfirmationHash());

        log.debug("Message for email {} with confirmation details sended");
    }

    public void confirmEmail(String hash) {
        log.debug("Trying to confirm email by hash {}", hash);
        var defaultErrorMessage = "Не удалось подтвердить email по данному хэшу.";
        var confirmEntity = emailConfirmationRepository.findByConfirmationHash(hash)
                .orElseThrow(() -> new ConfirmationException(new ConfirmationResponse(defaultErrorMessage, "", HttpStatus.BAD_REQUEST)));
        if (confirmEntity.getUser().getEnabled()) {
            log.debug("attempt to confirm hash {} which was already confirmed");
            throw new ConfirmationException(new ConfirmationResponse(defaultErrorMessage, "", HttpStatus.BAD_REQUEST));
        }
        userService.updateUser(confirmEntity.getUser().setEnabled(true));
        log.debug("Email confirmation by hash {} complete", hash);
    }

    private ErrorMessage[] getSignupErrorMessages(SignupRequest signupRequest) {
        var EMAIL_ALREADY_EXIST = "Пользователь с таким email уже зарегестрирован в системе";
        var PASSWORDS_DONT_MATCH = "Пароли не совпадают";

        var email = signupRequest.getEmail();
        List<ErrorMessage> messages = new ArrayList<>();
        if (this.getUserByEmail(email) != null) {
            messages.add(new ErrorMessage(EMAIL_ALREADY_EXIST, "email"));
        }
        if (!this.isPasswordsMatch(signupRequest.getPassword(), signupRequest.getCheckPassword())) {
            messages.add(new ErrorMessage(PASSWORDS_DONT_MATCH, "password"));
        }
        return messages.toArray(new ErrorMessage[messages.size()]);
    }

    private UserEntity getUserByEmail(String email) {
        if (email == null) return null;
        return userService.getUserByEmail(email).orElse(null);
    }

    private boolean isPasswordsMatch(String password, String checkPassword) {
        return password.equals(checkPassword);
    }
}
