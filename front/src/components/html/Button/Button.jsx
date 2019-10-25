import {Button as BootstrapButton} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import './Button.less';
import React, {Component} from 'react';
import PropTypes from "prop-types";

class Button extends Component {

    componentDidMount() {

    }

    render() {
        const className = this.props.className ? this.props.className + " button" : "button";
        return (
            <BootstrapButton onClick={this.props.onClick} className={className}
                             variant="primary" block disabled={this.props.disabled}>
                {this.props.children}
            </BootstrapButton>
        )
    }
}

Button.propTypes = {
    id: PropTypes.string.required,
    onClick: PropTypes.func.required,
    size: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

function mapStateToProps(store) {

}

export default (connect(mapStateToProps)(Button));