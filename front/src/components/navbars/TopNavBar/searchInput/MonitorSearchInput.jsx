import './SearchInput.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Button, FormControl, InputGroup} from 'react-bootstrap';

class MonitorSearchInput extends Component {

    componentDidMount(){
        // focus на элемент если у нас мобильная версия и открыт поиск
        if (this.props.applicationState.searchNavBar) {
            this.searchInput.focus();
        }
    }

    render() {
        return (
            <InputGroup className="search-input-monitor">
                <FormControl
                    ref={(input) => this.searchInput = input}
                    placeholder="Введите имя или тэг блогера"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className={"search-form-control"}
                />
                <InputGroup.Append>
                    <Button variant="light" className={"search-btn"}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

MonitorSearchInput.propTypes = {};

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(MonitorSearchInput));
