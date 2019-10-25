package com.blogfusion.authorization;

import com.blogfusion.model.request.SignupRequest;
import com.blogfusion.model.response.SignupResponse;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService {


    private final SignupService signupService;


    public AuthorizationService(SignupService signupService) {
        this.signupService = signupService;
    }

    public SignupResponse signup(SignupRequest request) {
        return signupService.signup(request);
    }
}
