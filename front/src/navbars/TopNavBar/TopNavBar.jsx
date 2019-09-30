import './TopNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {InputGroup, FormControl, Button} from 'react-bootstrap';
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
                    <NavLink className={"logo"} exact to={"/"} title={"Главная страница BlogHole"}>
                        <span>BLOGFUSION</span>
                    </NavLink>
                </div>
                <div className={"center-nav"}>
                    <InputGroup className="search-input">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
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
