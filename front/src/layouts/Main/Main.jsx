import './Main.css';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class Main extends Component {
    render() {
        return (
            <div className={"main"}>

            </div>
        )
    }
}

Main.propTypes = {

};

function mapStateToProps(store) {
    return {

    };
}

export default (connect(mapStateToProps)(Main));
