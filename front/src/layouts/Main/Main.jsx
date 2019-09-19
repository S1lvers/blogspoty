import './Main.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class Main extends Component {
    render() {
        return (
            <div className={"content main d-flex flex-column"}>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4 mb-4"}>123</div>
                <div className={"mt-4"}>123</div>
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
