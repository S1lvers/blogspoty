import './Signup.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Input from '../../../components/html/Input/Input'
import Checkbox from '../../../components/html/Checkbox/Checkbox'
import Button from '../../../components/html/Button/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faVk
} from "@fortawesome/free-brands-svg-icons"
import {NavLink} from "react-router-dom";
import GoogleLogo from '../components/GoogleLogo';
import AuthorizationCard from "../components/AuthorizationCard/AuthorizationCard";
import {isEmail, isPassword, emailErrorMessage, isUsername} from "../auth-utils";
import axios from 'axios'
import {getBadRequestErrors} from "../../../util/error-utils";

let emailTimer;
let passwordTimer;
let usernameTimer;

const passwordErrorMessage = "Пароль должен состоять из 8-32 знаков, содержать минимум 1 цифру и букву, без пробелов и следующих символов: <, >, ‘, “";
const passwordErrorCheckMessage = "Указанные пароли не совпадают";
const usernameErrorMessage = "Поле должно быть заполнено более чем 3 символами и состоять только из букв и/или цифр";

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: undefined,
            emailError: undefined,
            username: undefined,
            usernameError: undefined,
            password: undefined,
            passwordError: undefined,
            checkPassword: undefined,
            checkPasswordError: undefined,
            confirmation: false,
            signupMessage: undefined,
        }
    }

    handleUsernameChange = event => {
        const username = event.target.value;
        this.setState({username});
        clearTimeout(usernameTimer);
        usernameTimer = this.updateError(username, isUsername, usernameErrorMessage, "usernameError")
    };

    handleEmailChange = event => {
        const email = event.target.value;
        this.setState({email});
        clearTimeout(emailTimer);
        emailTimer = this.updateError(email, isEmail, emailErrorMessage, "emailError")
    };


    handlePasswordChange = event => {
        const password = event.target.value;
        this.setState({password}, () => this.checkPasswords(this.state.password, this.state.checkPassword));
        clearTimeout(passwordTimer);
        passwordTimer = this.updateError(password, isPassword, passwordErrorMessage, "passwordError")
    };

    handleCheckPasswordChange = event => {
        const checkPassword = event.target.value;
        this.setState({checkPassword}, () => this.checkPasswords(this.state.password, this.state.checkPassword))
    };

    handleConfirmChange = event => {
        const confirmation = event.target.checked
        this.setState({confirmation})
    }

    checkPasswords = (password, checkPassword) => {
        if (checkPassword === "" || !checkPassword) {
            this.setState({checkPasswordError: undefined});
            return;
        }
        this.setState({checkPasswordError: password !== checkPassword ? passwordErrorCheckMessage : undefined})
    };

    //TODO если поставить console log то вызывается дважды этот метод, возможно изза смены field и fieldError
    isSignUpBtnDisabled = () => {
        if (!this.state.username && !this.state.usernameError || this.state.usernameError) return true;
        if (!this.state.email && !this.state.emailError || this.state.emailError) return true;
        if (!this.state.password && !this.state.passwordError || this.state.passwordError) return true;
        if (!this.state.checkPassword && !this.state.checkPasswordError || this.state.checkPasswordError) return true;
        return !this.state.confirmation;
    }

    updateError = (field, checker, message, errorField) => {
        return setTimeout(
            () => {
                if (field === "" || !field) {
                    this.setState({[errorField]: undefined});
                    return;
                }
                this.setState({[errorField]: checker(field) ? undefined : message});
            }, 400
        );
    };

    signup = () => {
        axios.post("/api/authorization/signup",
            {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                checkPassword: this.state.checkPassword,
                confirmation: this.state.confirmation
            }
        ).then(response => {
            const data = {response};

        }).catch(error => {
            const response = error.response;
            if (response.status === 400) {
                this.setState({
                    signupMessage: getBadRequestErrors(error)
                })
            } else {
                console.log(response)
            }
        });
    }

    render() {
        return (
            <AuthorizationCard>
                <div className={"signup-title"}>
                    Зарегестрируйся
                </div>

                {this.state.signupMessage ? <div className={"warning-message"}>
                    {this.state.signupMessage}
                </div> : null}

                <div className={"signup-form"}>
                    <Input placeholder={"Имя или Никнейм"} value={this.state.username}
                           onChange={this.handleUsernameChange} id={"username"}
                           label={"Как к Вам обращаться"} error={this.state.usernameError}/>

                    <Input placeholder={"Email"} onChange={this.handleEmailChange} id={"email"}
                           label={"Email"} value={this.state.email} error={this.state.emailError}/>

                    <Input placeholder={"от 8 до 32 символов, минимум 1 цифра"} onChange={this.handlePasswordChange}
                           id={"password"}
                           label={"Надежный пароль"} type={"password"} value={this.state.password}
                           error={this.state.passwordError}/>

                    <Input placeholder={"Повторите пароль"} onChange={this.handleCheckPasswordChange}
                           id={"checkPassword"}
                           label={"Повторите пароль"} value={this.state.checkPassword} type={"password"}
                           error={this.state.checkPasswordError}/>

                    <Checkbox className={"politics"} id={"politics"} value={this.state.confirmation} onChange={this.handleConfirmChange}>
                        {"Я ознакомлен и принимаю ваше "}
                        <NavLink exact to={"/"} title={"Пользовательско соглашение"}>
                            <span>Пользовательское соглашение и Политику конфиденциальности</span>
                        </NavLink>
                    </Checkbox>

                    <Button disabled={this.isSignUpBtnDisabled()} id={"loginBtn"} onClick={this.signup} size={"lg"}>ЗАРЕГЕСТРИРОВАТЬСЯ</Button>
                </div>

                <div className={"centered-text"}>
                    или
                </div>

                <div className={"social-buttons"}>
                    <Button id={"loginViaVKBtn"} className={"vk-button"}>
                            <span className={"button-icon"}>
                                <FontAwesomeIcon icon={faVk}/>
                            </span>
                        <span>Войди через VK</span>
                    </Button>
                    <Button id={"loginViaGoogleBtn"} className={"google-button"}>
                            <span className={"button-icon"}>
                                <GoogleLogo height={"20"} width={"20"}/>
                            </span>
                        <span>Войди через Google</span>
                    </Button>
                </div>

                <div className={"signup-bottom"}>
                    <span>Если у тебя уже есть аккаунт,</span>
                    <NavLink to={"/login"}>войди</NavLink>
                </div>
            </AuthorizationCard>
        )
    }
}

Signup.propTypes = {};

function mapStateToProps(store) {
    return {};
}

export default (connect(mapStateToProps)(Signup));
