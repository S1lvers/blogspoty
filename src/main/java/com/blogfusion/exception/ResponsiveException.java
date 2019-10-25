package com.blogfusion.exception;

import com.blogfusion.model.response.ErrorMessage;
import com.blogfusion.model.response.Response;
import lombok.Data;

import java.util.Arrays;

@Data
public class ResponsiveException extends RuntimeException {

    private Response response;

    public ResponsiveException(Response response) {
        super(Arrays.stream(response.getErrors()).findFirst().orElse(new ErrorMessage("Неизвестная ошибка","")).getDefaultMessage());
    }
}
