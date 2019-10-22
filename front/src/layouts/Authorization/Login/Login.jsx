import './Login.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Input from '../../../components/html/Input/Input'
import Checkbox from '../../../components/html/Checkbox/Checkbox'
import Button from '../../../components/html/Button/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitch, faTwitter, faVk, faYoutube, faTelegramPlane, faGoogle} from "@fortawesome/free-brands-svg-icons"
import {NavLink} from "react-router-dom";
import GoogleLogo from '../components/GoogleLogo';
import AuthorizationCard from "../components/AuthorizationCard/AuthorizationCard";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    handleChange = event => {
        console.log(event.target.id)
    };

    login = () => {

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

                    <div className={"login-form"}>
                        <Input placeholder={"Email"} onChange={this.handleChange} id={"email"} label={"Email (Visit ID)"}/>
                        <Input placeholder={"от 6 до 32 букв или цифр"} onChange={this.handleChange} id={"password"}
                               label={"Пароль"} type={"password"}/>
                        <div className={"login-form__under"}>
                            <Checkbox id={"rememberMe"} onChange={this.handleChange}>Запомнить меня</Checkbox>
                            <NavLink title={"Забыл(-а) пароль?"}>Забыл(-а) пароль?</NavLink>
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
