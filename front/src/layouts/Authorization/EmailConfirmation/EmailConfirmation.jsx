import './EmailConfirmation.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import AuthorizationCard from "../components/AuthorizationCard/AuthorizationCard";
import axios from 'axios'
import {getBadRequestErrors} from "../../../util/error-utils";

class EmailConfirmation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: undefined,
            emailConfirmMessage: undefined,
            time: 60,
            timerEnabled: false,
        }
    }

    componentDidMount() {

        //this.sendConfirmation();
    }

    sendConfirmation = () => {
        axios.post("/api/authorization/sendConfirmation",
            {
                email: this.state.email,
            }
        ).then(response => {
            this.startTimer();
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
    };

    startTimer = () => {
        this.setState({
            timerEnabled: true,
            time: 60
        }, () => {
            this.timer = setInterval(() => {
                if (this.state.time === 0) this.stopTimerAndReset();
                else this.setState({
                    time: this.state.time === 0 ? 0 : this.state.time - 1
                })
            }, 1000)
        })
    };

    stopTimerAndReset = () => {
        clearInterval(this.timer);
        this.setState({
            timerEnabled: false
        })
    };

    render() {
        return (
            <AuthorizationCard>
                <div className={"email-confirmation-title"}>
                    Подтверждение
                </div>

                {this.state.emailConfirmMessage ? <div className={"warning-message"}>
                    {this.state.emailConfirmMessage}
                </div> : null}

                <div className={"email-confirmation-form"}>
                    На зарегестрированный email было отправлено письмо с подтверждением.
                </div>
                <div className={"email-confirmation-bottom"}>
                    Если тебе ничего не пришло, можно отправить письмо
                    {!this.state.timerEnabled ?
                        <div className={"email-confirmation-bottom__repeat"}>повторно</div>
                        :
                        <div className={"email-confirmation-bottom__timer"}>
                            <span>через {this.getMinutes()}:{this.getSeconds()}</span>
                        </div>
                    }

                </div>
            </AuthorizationCard>
        )
    }

    getMinutes = () => {
        const minutes = Math.trunc(this.state.time / 60);
        return minutes < 10 ? '0' + minutes : minutes;
    }

    getSeconds = () => {
        const seconds = this.state.time % 60;
        return seconds < 10 ? '0' + seconds : seconds;
    }
}

EmailConfirmation.propTypes = {};

function mapStateToProps(store) {
    return {};
}

export default (connect(mapStateToProps)(EmailConfirmation));
