import './NavButton.less';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container} from 'react-bootstrap';

class NavButton extends Component {
    render() {
        const props = this.props;
        return (
            <NavLink exact to={props.linkTo} title={props.alt} activeClassName={"selected"} className={"left-nav-item"} tabindex={-1}>
                <div className={"left-nav-btn d-flex align-items-center"}>
                    <FontAwesomeIcon icon={props.icon} size={124}/>
                    <span>{props.title}</span>
                </div>
            </NavLink>
        )
    }
}

NavButton.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    linkTo: PropTypes.string,
    alt: PropTypes.string,
    target: PropTypes.string //target like _blank
};


export default NavButton;
