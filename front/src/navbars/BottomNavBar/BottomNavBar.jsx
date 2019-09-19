import './BottomNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import NavButton from "../NavButton/NavButton";
import {faBars, faCoffee} from '@fortawesome/free-solid-svg-icons'

class BottomNavBar extends Component {
    render() {
        return (
            <div className={"bottom-nav-bar"}>
                <div className={"col-sm-4 pl-0 pr-0"}>
                    <NavButton title={"Главная"} alt={"Главная"} linkTo={"/"} icon={faCoffee}/>
                </div>
                <div className={"col-sm-4 pl-0 pr-0"}>
                    <NavButton title={"Популярное"} alt={"Популярное"} linkTo={"/popular"} icon={faBars}/>
                </div>
                <div className={"col-sm-4 pl-0 pr-0"}>
                    <NavButton title={"Восходящие"} alt={"Набирающие популярность"} linkTo={"/rising"}
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
