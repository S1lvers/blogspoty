import './TopNavBar.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import {ACTION_COLLAPSED_NAVBAR} from '../../../redux/reducers/applicationState'

class SearchInput extends Component {

    collapseSearchInput = () => {
        this.props.dispatch({
            type: ACTION_COLLAPSED_NAVBAR,
            collapsedNavBar: !this.props.applicationState.collapsedNavBar
        })
    };

    render() {
        return (
                <div className={"center-nav"}>
                    <InputGroup className="search-input">
                        <FormControl
                            placeholder="Введите имя или тэг блогера"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className={"search-form-control"}
                        />
                        <InputGroup.Append>
                            <Button className={"search-btn"}>
                                <FontAwesomeIcon icon={faSearch}/>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
        )
    }
}

SearchInput.propTypes = {

};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(SearchInput));
