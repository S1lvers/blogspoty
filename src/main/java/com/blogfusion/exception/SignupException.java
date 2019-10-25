package com.blogfusion.exception;


import com.blogfusion.model.response.SignupResponse;
import lombok.Data;

@Data
public class SignupException extends ResponsiveException {

    public SignupException(SignupResponse response) {
        super(response);
    }
}
