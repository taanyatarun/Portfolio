import React from "react";
import './about.css'
import ME from '../../assets/me2.png'
import {FaPython} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {SiOpencv} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiOpenai} from 'react-icons/si'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaPython />
                        </article>
                        <article className="about__card">
                            <SiCplusplus />
                        </article>
                        <article className="about__card">
                            <SiMysql />
                        </article>
                        <article className="about__card">
                            <FaHtml5 />
                        </article>
                        <article className="about__card">
                            <SiCss3 />
                        </article>
                        <article className="about__card">
                            <SiOpencv />
                        </article>
                        <article className="about__card">
                            <FaReact />
                        </article>
                        <article className="about__card">
                            <FaNodeJs />
                        </article>
                        <article className="about__card">
                            <SiOpenai />
                        </article>
                    </div>

                    <p>As a B.Tech CSE student, I am passionate about the tech industry and driven to launch a successful career in this field. With a strong focus in Web and Android Development, I am constantly seeking new challenges and opportunities to expand my skill set, particularly in the areas of ML and AI. I thrive the most in collaborative environments and am committed to contributing to the community by solving real world problems and working alongside like-minded individuals.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>    
        </section>
    )
}

export default About