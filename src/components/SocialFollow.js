import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
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
            <a href="https://github.com/MONU8OO8" 
                className="Github social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
            <a href="https://www.linkedin.com/in/monu-kumar-3364a5209/"
                className="linkedin social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
            <a href="https://www.linkedin.com/in/monu-kumar-3364a5209/" className="twitter social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
            <a href="https://www.linkedin.com/in/monu-kumar-3364a5209/"
                className="instagram social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
            </div>
           
        </>
    )
}

export default SocialFollow