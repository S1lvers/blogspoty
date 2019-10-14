import './Main.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import BloggerCard from '../../components/card/BloggerCard'

class Main extends Component {
    render() {
        return (
            <div className={"content main d-flex flex-column"}>
                <BloggerCard name={"David Guetta"}/>
                <BloggerCard name={"David Guetta"}/>
            </div>
        )
    }
}

Main.propTypes = {};

function mapStateToProps(store) {
    return {};
}

export default (connect(mapStateToProps)(Main));
