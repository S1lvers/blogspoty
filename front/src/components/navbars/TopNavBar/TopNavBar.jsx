import './TopNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {ACTION_COLLAPSED_NAVBAR} from '../../../redux/reducers/applicationState'
import SearchInput from './SearchInput'

class TopNavBar extends Component {

    collapseNavBar = () => {
        this.props.dispatch({
            type: ACTION_COLLAPSED_NAVBAR,
            collapsedNavBar: !this.props.applicationState.collapsedNavBar
        })
    };

    render() {
        return (
            <div className={"top-nav-bar"}>
                <div className={"left-nav"}>
                    <div className={"bars"} onClick={this.collapseNavBar}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    <NavLink className={"logo"} exact to={"/"} title={"Главная страница BlogHole"}>
                        <span>BLOGFUSION</span>
                    </NavLink>
                </div>
                <SearchInput/>
                <div className={"right-nav"}>

                </div>
            </div>
        )
    }
}

TopNavBar.propTypes = {

};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(TopNavBar));
