import './Signup.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Input from '../../../components/html/Input/Input'
import Checkbox from '../../../components/html/Checkbox/Checkbox'
import Button from '../../../components/html/Button/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTwitch,
    faTwitter,
    faVk,
    faYoutube,
    faTelegramPlane,
    faGoogle
} from "@fortawesome/free-brands-svg-icons"
import {NavLink} from "react-router-dom";
import GoogleLogo from '../components/GoogleLogo';
import AuthorizationCard from "../components/AuthorizationCard/AuthorizationCard";

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    handleChange = event => {
        console.log(event.target.id)
    };

    signup = () => {

    }

    render() {
        return (
            <AuthorizationCard>
                <div className={"signup-title"}>
                    Зарегестрируйся
                </div>

                <div className={"signup-form"}>
                    <Input placeholder={"Nickname"} onChange={this.handleChange} id={"nickname"}
                           label={"Как к Вам обращаться"}/>
                    <Input placeholder={"Email"} onChange={this.handleChange} id={"email"} label={"Email"}/>
                    <Input placeholder={"от 6 до 32 букв или цифр"} onChange={this.handleChange} id={"password"}
                           label={"Надежный пароль"} type={"password"}/>
                    <Input placeholder={"Повторите пароль"} onChange={this.handleChange} id={"checkPassword"}
                           label={"Повторите пароль"} type={"password"}/>
                    <Checkbox className={"politics"} id={"politics"} onChange={this.handleChange}>
                        {"Я ознакомлен и принимаю ваше "}
                        <NavLink exact to={"/"} title={"Пользовательско соглашение"}>
                            <span>Пользовательское соглашение и Политику конфиденциальности</span>
                        </NavLink>
                    </Checkbox>
                    <Button id={"loginBtn"} onClick={this.signup} size={"lg"}>ЗАРЕГЕСТРИРОВАТЬСЯ</Button>
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

                <div className={"auth-bottom"}>
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
