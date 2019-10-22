import './ForgotPassword.less';
import React, {Component} from 'react';
import Input from '../../../components/html/Input/Input'
import Button from '../../../components/html/Button/Button'
import {NavLink} from "react-router-dom";
import AuthorizationCard from "../components/AuthorizationCard/AuthorizationCard";
import {isEmail, emailErrorMessage} from "../auth-utils";

let emailTimer;

class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: undefined,
            emailError: undefined
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

    revive = () => {

    }

    render() {
        return (
            <AuthorizationCard>
                <div className={"revive-title"}>
                    Введи свой email адрес, и мы вышлем инструкции по восстановлению пароля.
                </div>

                <div className={"revive-form"}>
                    <Input placeholder={"Email"} onChange={this.handleEmailChange} id={"email"}
                           value={this.state.email} error={this.state.emailError}/>
                    <Button id={"loginBtn"} onClick={this.revive} size={"lg"}>ВОССТАНОВИТЬ</Button>
                </div>

                <div className={"revive-bottom"}>
                    <span>ИЛИ</span>
                    <NavLink to={"/login"}>ВОЙДИ</NavLink>
                </div>
            </AuthorizationCard>
        )
    }
}

ForgotPassword.propTypes = {};

export default ForgotPassword;
