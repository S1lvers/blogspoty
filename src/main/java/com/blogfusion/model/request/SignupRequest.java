package com.blogfusion.model.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Data
public class SignupRequest {

    @Pattern(regexp = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]" +
            "+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))" +
            "@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])" +
            "|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
            message = "Неверный адрес электронной почты. Проверь правильность ввода и попробуй снова")
    @NotEmpty(message = "Поле \"Email\" не заполнено")
    private String email;

    @NotEmpty(message = "Поле \"Как к вам обращаться\" не заполнено")
    private String username;

    @NotEmpty(message = "Поле \"Надежный пароль\" не заполнено")
    private String password;

    private String checkPassword;
}
