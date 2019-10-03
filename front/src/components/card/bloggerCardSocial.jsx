import './BloggerCard.less';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {faFacebookF, faInstagram, faTwitch, faTwitter, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class BloggerCardSocial extends Component {
    render() {
        return (
            <div className={"blogger-card__social"}>
                {getSocial(this.props.facebook, "facebook")}
                {getSocial(this.props.vk, "vk")}
                {getSocial(this.props.instagram, "instagram")}
                {getSocial(this.props.youtube, "youtube")}
                {getSocial(this.props.twitch, "twitch")}
                {getSocial(this.props.twitter, "twitter")}

            </div>
        )
    }
}

const getSocial = (url, social) => {
    if (url) return (
        <a href={url} className={"blogger-card-social__item " + social}>
            <FontAwesomeIcon icon={getFaIcon(social)}/>
        </a>
    )
};
const getFaIcon = (social) => {
    switch (social) {
        case "facebook": return faFacebookF;
        case "instagram": return faInstagram;
        case "vk": return faVk;
        case "youtube": return faYoutube;
        case "twitch": return faTwitch;
        case "twitter": return faTwitter;
    }
};

BloggerCardSocial.propTypes = {
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitch: PropTypes.string,
    twitter: PropTypes.string,
    youtube: PropTypes.string,
    vk: PropTypes.string,
};


export default BloggerCardSocial;
