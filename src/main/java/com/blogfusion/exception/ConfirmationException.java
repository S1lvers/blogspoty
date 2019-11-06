package com.blogfusion.exception;

import com.blogfusion.model.response.Response;

public class ConfirmationException extends ResponsiveException {

    public ConfirmationException(Response response) {
        super(response);
    }
}
