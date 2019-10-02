import './BloggerCard.less';
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import BloggerCardSocial from "./BloggerCardSocial";

class BloggerCard extends Component {
    render() {
        // TODO убрать хардкод
        return (
            <div className={"blogger-card mt-5 pt-5"}>
                <div className={"blogger-card__img"}>
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg" alt="profile card"/>
                </div>
                <div className={"blogger-card__cnt"}>
                    <div className={"blogger-card__name"}>
                        {this.props.name}
                    </div>
                    <div className={"blogger-card__tags"}>
                        #lifeblogger #trashblog #santabarbarablog
                    </div>
                    <div className={"blogger-card__inf container"}>
                        <div className="blogger-card__inf-item">
                            <div className="blogger-card__inf-title">1598</div>
                            <div className="blogger-card__inf-txt">Followers</div>
                        </div>
                        <div className="blogger-card__inf-item">
                            <div className="blogger-card__inf-title">41</div>
                            <div className="blogger-card__inf-txt">Subscribtions</div>
                        </div>
                        <div className="blogger-card__inf-item">
                            <div className="blogger-card__inf-title">169</div>
                            <div className="blogger-card__inf-txt">Publications</div>
                        </div>
                    </div>
                    <BloggerCardSocial facebook={"facebook"} instagram={"instagramm"}/>
                </div>
            </div>
        )
    }
}

BloggerCard.propTypes = {
    name: PropTypes.string.required,

    tags: PropTypes.arrayOf(PropTypes.string),

    followers: PropTypes.number.required,
    publications: PropTypes.number.required,

    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitch: PropTypes.string,
    youtube: PropTypes.string,
    vk: PropTypes.string,


};

function mapStateToProps(store) {
    return {

    };
}

export default (connect(mapStateToProps)(BloggerCard));
