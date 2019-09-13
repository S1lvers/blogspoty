import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from "./navbar/NavBar";
import {Container} from 'react-bootstrap';
import Main from "./layouts/Main/Main";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={NavBar}/>
                <Switch>
                    <Container fluid className={"content-layout"}>
                        <Route exact path="/" component={Main}/>
                    </Container>
                </Switch>
            </Router>
        )
    }
}

export default App;
