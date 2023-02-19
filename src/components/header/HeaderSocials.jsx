import React from "react";
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/taanya-tarun-91b623144/" target="_blank" className="social__element"><FiLinkedin /></a>

            <a href="https://github.com/taanyatarun" target="_blank" className="social__element"><FiGithub /></a>

            <a href="https://www.instagram.com/taanya.t_/" target="_blank" className="social__element"><FiInstagram /></a>
        </div>
    )
}

export default HeaderSocials