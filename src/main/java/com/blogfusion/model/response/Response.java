package com.blogfusion.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

/**
 * Общий вид респонса для всех (все респонсы должны быть отнаследованы от этого класса)
 */
@Data
@AllArgsConstructor
public abstract class Response {
    private ErrorMessage[] errors;

    private HttpStatus httpStatus;

    /**
     *
     * @param defaultErrorMessage - тело ошибки
     * @param errorField - поле, по которому ошибка
     * @param httpStatus - статус ответа
     */
    public Response(String defaultErrorMessage, String errorField, HttpStatus httpStatus){
        this(new ErrorMessage[]{new ErrorMessage(defaultErrorMessage, errorField)}, httpStatus);
    }

    /**
     * Конструктор в случае отсутствия ошибки
     * @param httpStatus
     */
    public Response(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }
}
