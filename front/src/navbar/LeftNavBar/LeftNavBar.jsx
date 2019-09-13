import './LeftNavBar.css';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class LeftNavBar extends Component {
    render() {
        return (
            <div className={"left-nav-bar"}>
                <div className={"spacer"}/>
                <div className={"content"}></div>
            </div>
        )
    }
}

LeftNavBar.propTypes = {

};

function mapStateToProps(store) {
    return {

    };
}

export default (connect(mapStateToProps)(LeftNavBar));
