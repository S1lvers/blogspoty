import './App.less';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import TopNavBar from "./components/navbars/TopNavBar/TopNavBar";
import LeftNavBar from "./components/navbars/routeNavBars/LeftNavBar/LeftNavBar";
import BottomNavBar from "./components/navbars/routeNavBars/BottomNavBar/BottomNavBar";
import {Container} from 'react-bootstrap';
import Main from "./layouts/Main/Main";
import connect from "react-redux/es/connect/connect";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch className={"d-flex"}>
                    <div className={"d-flex flex-column"} id={"full-content"}>
                        <TopNavBar/>
                        <div className={"d-flex"}>
                            <LeftNavBar/>
                            <Container fluid className={"content-layout"}>
                                <Route exact path="/" component={Main}/>
                                <Route exact path="/rising" component={Main}/>
                                <Route exact path="/popular" component={Main}/>
                            </Container>
                        </div>
                        <BottomNavBar/>
                    </div>
                </Switch>
            </Router>

        )
    }
}

function mapStateToProps(store) {
    return {
        applicationState: store.applicationState
    };
}

export default (connect(mapStateToProps)(App));
