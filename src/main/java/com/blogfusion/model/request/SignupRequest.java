package com.blogfusion.model.request;

import lombok.Data;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
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

    @Pattern(regexp = "^[a-zA-Z0-9_.-]{3,}$", message = "Имя пользователя должно быть заполнено более чем 3 символами и состоять только из букв и/или цифр")
    @NotEmpty(message = "Поле \"Как к вам обращаться\" не заполнено")
    private String username;

    @NotEmpty(message = "Поле \"Надежный пароль\" не заполнено")
    private String password;

    private String checkPassword;

    @NotNull(message = "Пользовательское соглашение и Политика конфиденциальности должны быть приняты")
    @AssertTrue(message = "Пользовательское соглашение и Политика конфиденциальности должны быть приняты")
    private Boolean confirmation;
}
