import React from "react";
import './footer.css';
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/taanya-tarun-91b623144/" target="_blank" className="social__element"><FiLinkedin /></a>

                <a href="https://github.com/taanyatarun" target="_blank" className="social__element"><FiGithub /></a>

                <a href="https://www.instagram.com/taanya.t_/" target="_blank" className="social__element"><FiInstagram /></a>
        
            </div>

            <div className="footer__copyright">
                <small>&copy; Taanya Tarun. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer