import './AuthorizationCard.less';
import React, {Component} from 'react';

class AuthorizationCard extends Component {

    render() {
        return (
            <div className={"container d-flex justify-content-center"}>
                <div className={"authorization-card"}>
                    {this.props.children}
                </div>
            </div>

        )
    }
}

AuthorizationCard.propTypes = {};

export default AuthorizationCard;
