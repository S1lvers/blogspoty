export const isEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const isPassword = (password) => {
    var re = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/
    return re.test(String(password).toLowerCase());
}

export const isUsername = (username) => {
    var re = /^[a-zA-Z0-9_.-]{3,}$/
    return re.test(String(username).toLowerCase());
}

export const emailErrorMessage = "Неверный адрес электронной почты. Проверь правильность ввода и попробуй снова";