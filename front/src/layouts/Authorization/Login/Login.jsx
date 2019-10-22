import './Login.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Input from '../../../components/html/Input/Input'
import Checkbox from '../../../components/html/Checkbox/Checkbox'
import Button from '../../../components/html/Button/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVk} from "@fortawesome/free-brands-svg-icons"
import {NavLink} from "react-router-dom";
import GoogleLogo from '../components/GoogleLogo';
import AuthorizationCard from "../components/AuthorizationCard/AuthorizationCard";
import {isEmail, emailErrorMessage} from "../auth-utils";

let emailTimer;

class Login extends Component {

    constructor(props) {
        super(props);

        // TODO loginMessage - хардкод
        this.state = {
            emailError: undefined,
            loginMessage: undefined,
        }
    }

    handleEmailChange = event => {
        const email = event.target.value;
        this.setState({email});
        this.updateEmailError(email);
    };

    updateEmailError = email => {
        clearTimeout(emailTimer);
        emailTimer = setTimeout(
            () => {
                if (email === "" || !email) {
                    this.setState({emailError: undefined});
                    return;
                }
                this.setState({emailError: isEmail(email) ? undefined : emailErrorMessage});
            }, 400
        );
    };

    handleChange = event => {
        console.log(event.target.id)
    };

    login = () => {
        this.setState({
            loginMessage: "Неверная комбинация Логина\\Пароля. Пожалуйста, попробуй снова или восстанови пароль",
        })
    }

    render() {
        return (
            <AuthorizationCard>

                <div className={"login-title"}>
                    <div className={"login-title__header"}>Войди</div>
                    <div className={"login-title__info"}>
                        <span>Если у тебя еще нет аккаунта, </span>
                        <NavLink to={"/signup"}>зарегистрируйся</NavLink>
                    </div>
                </div>

                {this.state.loginMessage? <div className={"warning-message"}>
                    {this.state.loginMessage}
                </div> : null}

                <div className={"login-form"}>
                    <Input placeholder={"Email"} onChange={this.handleEmailChange} value={this.state.email} id={"email"}
                           label={"Email (Visit ID)"} error={this.state.emailError}/>
                    <Input placeholder={"от 8 до 32 символов, минимум 1 цифра и буква"} onChange={this.handleChange} id={"password"}
                           label={"Пароль"} type={"password"}/>
                    <div className={"login-form__under"}>
                        <Checkbox id={"rememberMe"} onChange={this.handleChange}>Запомнить меня</Checkbox>
                        <NavLink title={"Забыл(-а) пароль?"} to={"/forgotPassword"}>Забыл(-а) пароль?</NavLink>
                    </div>
                    <Button id={"loginBtn"} onClick={this.login} size={"lg"}>ВОЙТИ</Button>
                </div>

                <div className={"line-break"}>
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

            </AuthorizationCard>
        )
    }
}

Login.propTypes = {};

function mapStateToProps(store) {
    return {};
}

export default (connect(mapStateToProps)(Login));
