import './BottomNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import NavButton from "../navButton/NavButton";
import {faBars, faCoffee} from '@fortawesome/free-solid-svg-icons'

class BottomNavBar extends Component {
    render() {
        return (
            <div className={"bottom-nav-bar"}>
                <div className={"col-sm-4 pl-0 pr-0"}>
                    <NavButton title={"Главная"} alt={"Главная"} linkTo={"/"} icon={faCoffee}/>
                </div>
                <div className={"col-sm-4 pl-0 pr-0"}>
                    <NavButton title={"Популярные"} alt={"Популярные"} linkTo={"/popular"} icon={faBars}/>
                </div>
                <div className={"col-sm-4 pl-0 pr-0"}>
                    <NavButton title={"Случайные"} alt={"Набирающие популярность"} linkTo={"/random"}
                               icon={faCoffee}/>
                </div>
            </div>
        )
    }
}

BottomNavBar.propTypes = {};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(BottomNavBar));
