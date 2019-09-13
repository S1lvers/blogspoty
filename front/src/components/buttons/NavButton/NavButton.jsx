import './LeftNavBar.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"

class NavButton extends Component {
    render() {
        const props = this.props
        return (
            <Link to={props.to} alt={props.alt} className={"nav-button"}>
                <div className={"icon"}>{props.icon}</div>
                <div className={"title"}>{props.title}</div>
            </Link>
        )
    }
}

NavButton.propTypes = {
    icon: PropTypes.string.required,
    title: PropTypes.string.required,
    to: PropTypes.string.required,
    alt: PropTypes.string,
    target: PropTypes.string
};


export default NavButton;
