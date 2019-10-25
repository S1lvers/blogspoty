package com.blogfusion.authorization;

import com.blogfusion.exception.SignupException;
import com.blogfusion.model.request.SignupRequest;
import com.blogfusion.model.response.ErrorMessage;
import com.blogfusion.model.response.SignupResponse;
import com.blogfusion.services.UserService;
import com.blogfusion.util.Utils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
class SignupService {

    private final UserService userService;

    public SignupService(UserService userService) {
        this.userService = userService;
    }

    SignupResponse signup(SignupRequest signupRequest) {
        var errorMessages = this.getSignupErrorMessages(signupRequest);
        if (!Utils.isEmpty(errorMessages)) {
            return new SignupResponse(errorMessages, HttpStatus.BAD_REQUEST);
        }
        userService.createUser(signupRequest);
        return new SignupResponse(HttpStatus.OK);
    }

    public void sendEmailConfirmation(String email) {
        var CANT_SEND_CONFIRMATION = "Не удалось отправить сообщение с подтверждением, " +
                "поскольку данный email не зарегестрирован в системе";

        if (!this.emailAlreadyExist(email)) {
            throw new SignupException(new SignupResponse(CANT_SEND_CONFIRMATION, "email", HttpStatus.BAD_REQUEST));
        }
    }

    private ErrorMessage[] getSignupErrorMessages(SignupRequest signupRequest) {
        var EMAIL_ALREADY_EXIST = "Пользователь с таким email уже зарегестрирован в системе";
        var PASSWORDS_DONT_MATCH = "Пароли не совпадают";

        var email = signupRequest.getEmail();
        List<ErrorMessage> messages = new ArrayList<>();
        if (this.emailAlreadyExist(email)) {
            messages.add(new ErrorMessage(EMAIL_ALREADY_EXIST, "email"));
        }
        if (!this.isPasswordsMatch(signupRequest.getPassword(), signupRequest.getCheckPassword())) {
            messages.add(new ErrorMessage(PASSWORDS_DONT_MATCH, "password"));
        }
        return messages.toArray(new ErrorMessage[messages.size()]);
    }

    private boolean emailAlreadyExist(String email) {
        return (email == null || userService.getUserByEmail(email).isPresent());
    }

    private boolean isPasswordsMatch(String password, String checkPassword) {
        return password.equals(checkPassword);
    }
}
