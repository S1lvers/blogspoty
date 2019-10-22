import {Button, FormControl, InputGroup, FormLabel, Form} from "react-bootstrap";
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
            <Form.Group controlId={"formBasic" + this.props.id}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control value={this.props.value}
                              isValid={this.props.isValid}
                              isInvalid={this.props.error}
                              id={this.props.id}
                              onChange={this.props.onChange}
                              type={this.props.type}
                              placeholder={this.props.placeholder} />

                <Form.Text className="text-muted">
                    {this.props.underText}
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    {this.props.error}
                </Form.Control.Feedback>
            </Form.Group>
        )
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string.required,
    type: PropTypes.string.required,
    onChange: PropTypes.func.required,
    value: PropTypes.string,
    isValid: PropTypes.bool,
    error: PropTypes.string,
    underText: PropTypes.string,
    row: PropTypes.bool,
};

function mapStateToProps(store) {

}

export default (connect(mapStateToProps)(Input));