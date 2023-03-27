import React from "react";
import Typed from 'typed.js';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>
                    <Typed
                        strings={['Taanya Tarun', 'A Coder', 'A Developer', 'A Problem Solver']}
                        typeSpeed={100}
                        backSpeed={80}
                        backDelay={1500}
                        loop
                    />
                </h1>
                <h5 className="text-light">B.Tech CS 2nd Year Student</h5>
                <CTA />
                <div className="header__elements">
                    <HeaderSocials />
            
                    <div className="me">
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className="scroll__down">Scroll Down</a>
                </div>
            </div>
        </header>
    )
}

export default Header