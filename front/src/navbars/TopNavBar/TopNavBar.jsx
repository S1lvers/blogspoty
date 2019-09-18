import './TopNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {ACTION_COLLAPSED_NAVBAR} from '../../redux/reducers/applicationState'

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
                    <NavLink className={"logo"} exact to={"/"} title={"Главная страница BlogHole"} tabindex={-1}>
                        <span>BLOGHOLE</span>
                    </NavLink>
                </div>
                <div className={"center-nav"}>

                </div>
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
