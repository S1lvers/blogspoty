import './LeftNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {LeftNavBarBlock as Block} from "./LeftNavBarBlock/LeftNavBarBlock";
import NavButton from "../NavButton/NavButton";
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import applicationState from "../../redux/reducers/applicationState";

class LeftNavBar extends Component {
    render() {
        const { collapsedNavBar } = this.props.applicationState;
        const navBarClassName = collapsedNavBar ? "left-nav-bar collapsed" : "left-nav-bar expanded";
        return (
            <div className={navBarClassName}>
                <Block>
                    <NavButton title={"Главная"} alt={"Главная"} linkTo={"/"} icon={faCoffee}/>
                    <NavButton title={"Набирающие популярность"} alt={"Набирающие популярность"} linkTo={"/rising"} icon={faCoffee}/>
                    <NavButton title={"Популярное"} alt={"Популярное"} linkTo={"/popular"} icon={faBars}/>
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
