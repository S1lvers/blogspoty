import './NavButton.less';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class NavButton extends Component {
    render() {
        const props = this.props;
        return (
            <NavLink exact to={props.linkTo} title={props.alt} activeClassName={"selected"} className={"left-nav-item"}>
                <div className={"left-nav-btn d-flex align-items-center"}>
                    <div className={"icon"}>
                        <FontAwesomeIcon icon={props.icon}/>
                    </div>
                    {props.title ? <span>{props.title}</span> : null}
                 </div>
            </NavLink>
        )
    }
}

NavButton.propTypes = {
    icon: PropTypes.object.required,
    title: PropTypes.string,
    linkTo: PropTypes.string.required,
    alt: PropTypes.string.required,
    target: PropTypes.string //target like _blank
};


export default NavButton;
