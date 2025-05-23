import './LeftNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {LeftNavBarBlock as Block} from "./LeftNavBarBlock";
import NavButton from "../navButton/NavButton";
import {faBars, faCoffee} from '@fortawesome/free-solid-svg-icons'

class LeftNavBar extends Component {
    render() {
        const { collapsedNavBar } = this.props.applicationState;
        const navBarClassName = collapsedNavBar ? "left-nav-bar collapsed" : "left-nav-bar expanded";
        return (
            <div className={navBarClassName}>
                <Block>
                    <NavButton title={"Главная"} alt={"Главная"} linkTo={"/"} icon={faCoffee}/>
                    <NavButton title={"Популярные"} alt={"Популярные"} linkTo={"/popular"} icon={faCoffee}/>
                    <NavButton title={"Случайные"} alt={"Случайные"} linkTo={"/random"} icon={faBars}/>
                </Block>
            </div>
        )
    }
}

LeftNavBar.propTypes = {

};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(LeftNavBar));
