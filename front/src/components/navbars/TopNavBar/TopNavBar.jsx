import './TopNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {ACTION_COLLAPSED_NAVBAR, ACTION_CHANGE_TOP_NAV_BAR} from '../../../redux/reducers/applicationState'
import MonitorSearchInput from './searchInput/MonitorSearchInput'
import CollapsedSearchInput from './searchInput/CollapsedSearchInput'

class TopNavBar extends Component {

    collapseNavBar = () => {
        this.props.dispatch({
            type: ACTION_COLLAPSED_NAVBAR,
            collapsedNavBar: !this.props.applicationState.collapsedNavBar
        })
    };

    showDefaultNavBar = () => {
        this.props.dispatch({
            type: ACTION_CHANGE_TOP_NAV_BAR,
            searchNavBar: false
        })
    };


    render() {
        return (
            this.props.applicationState.searchNavBar ? this.renderSearchNavBar() : this.renderDefaultNavBar()
        )
    }

    renderDefaultNavBar = () => {
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
                <div className={"center-nav"}>
                    <MonitorSearchInput/>
                </div>
                <div className={"right-nav"}>
                    <CollapsedSearchInput/>
                </div>
            </div>
        )
    }

    renderSearchNavBar = () => {
        return (
            <div className={"search-nav-bar"} onBlur={this.showDefaultNavBar}>
                <div className={"back-icon"} onClick={this.showDefaultNavBar}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <MonitorSearchInput/>
            </div>
        )
    }
}

TopNavBar.propTypes = {};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(TopNavBar));
