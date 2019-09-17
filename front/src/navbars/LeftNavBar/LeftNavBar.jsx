import './LeftNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {LeftNavBarBlock as Block} from "./LeftNavBarBlock/LeftNavBarBlock";
import NavButton from "../NavButton/NavButton";
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

class LeftNavBar extends Component {
    render() {
        //const { collapsed } = this.props.leftNavBar;
        return (

            <div className={"left-nav-bar"}>
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
        leftNavBar: store.leftNavBar
    };
}

export default (connect(mapStateToProps)(LeftNavBar));
