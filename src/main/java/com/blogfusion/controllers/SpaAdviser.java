package com.blogfusion.controllers;

import com.blogfusion.exception.SignupException;
import com.blogfusion.model.response.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Service
@ControllerAdvice
public class SpaAdviser {

    @ExceptionHandler(SignupException.class)
    public ResponseEntity<Response> handleSignupException(SignupException ex, HttpServletRequest request, HttpServletResponse response) {
        log.error("Resolved Signup Exception with message {}", ex.getMessage());
        return new ResponseEntity<>(ex.getResponse(), ex.getResponse().getHttpStatus());
    }

}
