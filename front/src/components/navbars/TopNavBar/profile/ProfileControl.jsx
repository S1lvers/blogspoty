import './ProfileControl.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {NavLink} from "react-router-dom"

class ProfileControl extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={"d-flex flex-row"}>
                <NavLink to={"/login"} className={"control-href"}>Войти</NavLink>
                <NavLink to={"/signup"} className={"control-href"}>Зарегестрироваться</NavLink>
            </div>
        )
    }
}

ProfileControl.propTypes = {};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(ProfileControl));
