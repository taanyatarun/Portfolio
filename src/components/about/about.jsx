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
import {SiOpenai, SiSolidity} from 'react-icons/si'

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
                            <SiSolidity />
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

                    <p>Greetings! I'm [Your Name], a final year B.Tech Computer Science student with a fervent passion for technology. From crafting intricate web solutions to exploring the revolutionary potential of Blockchain, and diving deep into the realms of Computer Vision and AIML, my journey has been one of relentless curiosity and exploration. Through hands-on projects and academic endeavors, I've honed my skills and embraced the collaborative spirit of innovation. With a firm belief in the transformative power of technology, I'm committed to pushing the boundaries of what's possible and shaping a brighter future for all. Join me as we embark on this exciting journey together.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>    
        </section>
    )
}

export default About
