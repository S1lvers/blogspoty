package com.blogfusion.controllers;

import com.blogfusion.model.request.LoginRequest;
import com.blogfusion.model.response.LoginResponse;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/authorization")
public class AuthorizationController {

    @PostMapping("/login")
    public HttpEntity<LoginResponse> login(@RequestBody LoginRequest request, HttpSession session) {
        return new HttpEntity<>();
    }

}
