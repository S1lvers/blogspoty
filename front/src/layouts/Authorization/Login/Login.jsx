import './Login.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Input from '../../../components/html/Input/Input'
import {NavLink} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }
    handleChange = event => {
        console.log(event.target.id)
    };
    render() {
        return (
            <div className={"login container"}>
                <div className={"login-title"}>
                    <div className={"login-title__header"}>Войди</div>
                    <div className={"login-title__info"}>Если у тебя еще нет аккаунта,
                        <NavLink to={"/signup"}>зарегистрируйся</NavLink>
                    </div>
                </div>
                <div className={"login-form"}>
                    <Input placeholder={"email"} onChange={this.handleChange} id={"email"} label={"Email"}/>
                    <Input placeholder={"от 6 до 32 букв или цифр"} onChange={this.handleChange} id={"email"} label={"Пароль"}/>
                    <div className={"login-form__under"}>
                        <div className={"remember-me"}></div>
                        <NavLink title={"Забыл(-а) пароль?"}/>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {};

function mapStateToProps(store) {
    return {};
}

export default (connect(mapStateToProps)(Login));
