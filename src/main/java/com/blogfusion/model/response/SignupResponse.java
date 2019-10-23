package com.blogfusion.model.response;

import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.http.HttpStatus;

@Data
@Accessors(chain = true)
public class SignupResponse {

    private String errorMessage;

    private HttpStatus httpStatus;
}
