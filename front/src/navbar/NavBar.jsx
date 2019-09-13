import './NavBar.css';
import React, {Component} from 'react';
import TopNavBar from './TopNavBar/TopNavBar'

class NavBar extends Component {
    render() {
        return(
            <div className="layout-navbar">
                <TopNavBar/>
            </div>
        )
    }
}

export default NavBar;
