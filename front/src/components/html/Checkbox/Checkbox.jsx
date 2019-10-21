import {Form, FormLabel, Row, Col} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import './Checkbox.less';
import React, {Component} from 'react';
import PropTypes from "prop-types";

class Checkbox extends Component {

    componentDidMount(){

    }

    render() {
        return (
            <Form.Group as={Row} controlId={"formHorizontal"+this.props.id}>
                <Col>
                    <Form.Check label={this.props.label} />
                </Col>
            </Form.Group>
        )
    }
}

Checkbox.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.required,
    onChange: PropTypes.func.required,
};

function mapStateToProps(store) {

}

export default (connect(mapStateToProps)(Checkbox));