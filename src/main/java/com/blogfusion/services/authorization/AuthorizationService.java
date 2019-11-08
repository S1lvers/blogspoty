package com.blogfusion.services.authorization;

import com.blogfusion.model.request.SignupRequest;
import com.blogfusion.model.response.SignupResponse;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService {

    private final SignupService signupService;

    public AuthorizationService(SignupService signupService) {
        this.signupService = signupService;
    }

    public SignupResponse signup(SignupRequest request) throws Exception {
        return signupService.signup(request);
    }

    public void sendEmailConfirmation(String email) throws Exception {
        signupService.sendEmailConfirmation(email);
    }

    public void confirmEmail(String email) {
        signupService.confirmEmail(email);
    }
}
