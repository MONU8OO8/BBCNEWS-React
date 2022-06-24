import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const SocialFollow = () => {
    return (
        <>
            <div class="social-container">
                <h3 className="text-center">Social Follow</h3>
            </div>
            <div className="text-center mt-4">
            <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="4x" />
            </a>
            <a href="https://www.facebook.com/learnbuildteach/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
            </div>
           
        </>
    )
}

export default SocialFollow