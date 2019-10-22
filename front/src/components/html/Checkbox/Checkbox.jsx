import {Form, FormLabel, Row, Col} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import './Checkbox.less';
import React, {Component} from 'react';
import PropTypes from "prop-types";

class Checkbox extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Form className={this.props.className ? this.props.className : ""}>
                <Form.Check type={"checkbox"} id={this.props.id}>
                    <Form.Check.Input type={"checkbox"}/>
                    <Form.Check.Label>{this.props.children}</Form.Check.Label>
                </Form.Check>
            </Form>
        )
    }
}

Checkbox.propTypes = {
    id: PropTypes.string.required,
    onChange: PropTypes.func.required,
};

function mapStateToProps(store) {

}

export default (connect(mapStateToProps)(Checkbox));