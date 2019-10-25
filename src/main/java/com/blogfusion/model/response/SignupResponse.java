package com.blogfusion.model.response;

import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.http.HttpStatus;

@Data
@Accessors(chain = true)
public class SignupResponse extends Response {

    public SignupResponse(ErrorMessage[] errors, HttpStatus httpStatus) {
        super(errors, httpStatus);
    }

    public SignupResponse(String defaultErrorMessage, String errorField, HttpStatus httpStatus) {
        super(defaultErrorMessage, errorField, httpStatus);
    }

    public SignupResponse(HttpStatus httpStatus) {
        super(httpStatus);
    }
}
