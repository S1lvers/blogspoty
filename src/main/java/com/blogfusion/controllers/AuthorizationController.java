package com.blogfusion.controllers;

import com.blogfusion.services.authorization.AuthorizationService;
import com.blogfusion.model.request.LoginRequest;
import com.blogfusion.model.request.SignupRequest;
import com.blogfusion.model.response.LoginResponse;
import com.blogfusion.model.response.SignupResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/authorization")
public class AuthorizationController {

    @Autowired
    private AuthorizationService authorizationService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request, HttpSession session) {
        return new ResponseEntity<>(new LoginResponse(), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<SignupResponse> signup(@Valid @RequestBody SignupRequest request) throws Exception {
        SignupResponse signupResponse = authorizationService.signup(request);
        return new ResponseEntity<>(signupResponse, signupResponse.getHttpStatus());
    }

    @GetMapping("/confirm/{hash}")
    public ResponseEntity confirm(@PathVariable("hash") String hash) {
        authorizationService.confirmEmail(hash);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/sendConfirmation")
    public ResponseEntity sendEmailConfirmatiom(@RequestBody String email) throws Exception {
        authorizationService.sendEmailConfirmation(email);
        return new ResponseEntity(HttpStatus.OK);
    }

}
