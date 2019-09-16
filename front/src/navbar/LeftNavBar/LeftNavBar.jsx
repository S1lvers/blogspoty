import './LeftNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {LeftNavBarBlock as Block} from "./LeftNavBarBlock/LeftNavBarBlock";
import NavButton from "./NavButton/NavButton";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class LeftNavBar extends Component {
    render() {
        return (
            <div className={"left-nav-bar"}>
                <Block>
                    <NavButton title={"Главная"} alt={"Главная"} linkTo={"/"} icon={faCoffee}/>
                    <NavButton title={"Набирающие популярность"} alt={"Набирающие популярность"} linkTo={"/rising"} icon={faCoffee}/>
                    <NavButton title={"Популярное"} alt={"Популярное"} linkTo={"/popular"} icon={faCoffee}/>
                </Block>
            </div>
        )
    }
}

LeftNavBar.propTypes = {

};

function mapStateToProps(store) {
    return {

    };
}

export default (connect(mapStateToProps)(LeftNavBar));
