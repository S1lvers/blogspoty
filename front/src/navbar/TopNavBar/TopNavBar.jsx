import './TopNavBar.css';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class TopNavBar extends Component {
    render() {
        return (
            <div className={"top-nav-bar"}>

            </div>
        )
    }
}

TopNavBar.propTypes = {

};

function mapStateToProps(store) {
    return {

    };
}

export default (connect(mapStateToProps)(TopNavBar));
