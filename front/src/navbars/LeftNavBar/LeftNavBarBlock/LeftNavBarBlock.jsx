import './LeftNavBarBlock.less';
import React, {Component} from 'react';

export class LeftNavBarBlock extends Component {
    render() {
        return (
            <div className={"left-nav-bar-block"}>
                {this.props.children}
            </div>
        )
    }
}


