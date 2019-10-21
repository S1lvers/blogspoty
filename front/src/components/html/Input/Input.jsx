import {Button, FormControl, InputGroup, FormLabel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import connect from "react-redux/es/connect/connect";
import './Input.less';
import React, {Component} from 'react';
import PropTypes from "prop-types";

class Input extends Component {

    componentDidMount(){

    }

    render() {
        return (
            <InputGroup className="ig">
                {this.renderLabel()}
                <FormControl
                    placeholder={this.props.placeholder}
                    className={"ig-control"}
                    id={this.props.id}
                />
            </InputGroup>
        )
    }

    renderLabel = () => {
        return this.props.label ? (
            <FormLabel>{this.props.label}</FormLabel>
        ) : null
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.required,
    row: PropTypes.bool,
};

function mapStateToProps(store) {

}

export default (connect(mapStateToProps)(Input));