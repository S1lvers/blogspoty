package com.blogfusion.model.response;

import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.http.HttpStatus;

@Data
@Accessors(chain = true)
public class ConfirmationResponse extends Response {


    public ConfirmationResponse(ErrorMessage[] errors, HttpStatus httpStatus) {
        super(errors, httpStatus);
    }

    public ConfirmationResponse(String defaultErrorMessage, String errorField, HttpStatus httpStatus) {
        super(defaultErrorMessage, errorField, httpStatus);
    }

    public ConfirmationResponse(HttpStatus httpStatus) {
        super(httpStatus);
    }
}
