import './SearchInput.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import {ACTION_CHANGE_TOP_NAV_BAR} from "../../../../redux/reducers/applicationState";

class CollapsedSearchInput extends Component {

    showSearchNavBar = () => {
        this.props.dispatch({
            type: ACTION_CHANGE_TOP_NAV_BAR,
            searchNavBar: true
        })
    };

    render() {
        return (
            <InputGroup className="search-input-collapsed">
                <Button onClick={this.showSearchNavBar} variant="light" className={"search-btn"}>
                    <FontAwesomeIcon icon={faSearch}/>
                </Button>
            </InputGroup>
        )
    }
}

CollapsedSearchInput.propTypes = {};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(CollapsedSearchInput));
