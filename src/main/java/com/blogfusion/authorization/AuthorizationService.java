package com.blogfusion.authorization;

import com.blogfusion.model.request.SignupRequest;
import com.blogfusion.model.response.SignupResponse;
import com.blogfusion.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService {

    private static String EMAIL_ALREADY_EXIST = "Пользователь с email %s уже зарегестрирован в системе";
    private static String PASSWORDS_DONT_MATCH = "Пароли не совпадают";

    private final UserService userService;

    public AuthorizationService(UserService userService) {
        this.userService = userService;
    }

    public SignupResponse signup(SignupRequest signupRequest) {
        var signupErrorMessage = this.getSignupErrorMessage(signupRequest);
        if (signupErrorMessage != null) {
            return new SignupResponse().setErrorMessage(signupErrorMessage).setHttpStatus(HttpStatus.BAD_REQUEST);
        }
        userService.createUser(signupRequest);
        return new SignupResponse().setHttpStatus(HttpStatus.OK);
    }



    private String getSignupErrorMessage(SignupRequest signupRequest) {
        var email = signupRequest.getEmail();
        if (this.emailAlreadyExist(email)) {
            return String.format(EMAIL_ALREADY_EXIST, email);
        }
        if (!this.isPasswordsMatch(signupRequest.getPassword(), signupRequest.getCheckPassword())) {
            return PASSWORDS_DONT_MATCH;
        }
        return null;
    }

    private boolean emailAlreadyExist(String email) {
        return (email == null || userService.getUserByEmail(email).isPresent());
    }

    private boolean isPasswordsMatch(String password, String checkPassword) {
        return password.equals(checkPassword);
    }
}
