package com.blogfusion.controllers;

import com.blogfusion.exception.ResponsiveException;
import com.blogfusion.exception.SignupException;
import com.blogfusion.model.response.Response;
import com.blogfusion.model.response.SignupResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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
    public Response handleSignupException(SignupException ex, HttpServletRequest request, HttpServletResponse response) {
        return ex.getResponse();
    }

}
