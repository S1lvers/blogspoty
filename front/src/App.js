import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import TopNavBar from "./navbar/TopNavBar/TopNavBar";
import LeftNavBar from "./navbar/LeftNavBar/LeftNavBar";
import {Container} from 'react-bootstrap';
import Main from "./layouts/Main/Main";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <div className={"d-flex flex-column"}>
                        <TopNavBar/>
                        <div className={"d-flex"}>
                            <LeftNavBar/>
                            <Container fluid className={"content-layout"}>
                                <Route exact path="/" component={Main}/>
                                <Route exact path="/rising" component={Main}/>
                            </Container>
                        </div>
                    </div>
                </Switch>
            </Router>

        )
    }
}

export default App;
