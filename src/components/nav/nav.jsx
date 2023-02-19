import React from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {RiMessage2Line} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>

            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>

            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineBook /></a>

            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line /></a>
        </nav>
    )
}

export default Nav