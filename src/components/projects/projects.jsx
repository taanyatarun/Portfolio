import React from "react";
import './projects.css'
import IMG1 from '../../assets/Portfolio 1.png'
import IMG2 from '../../assets/Portfolio 2.png'
import IMG3 from '../../assets/Portfolio 3.png'
import IMG4 from '../../assets/Portfolio 4.png'
import {FaPython} from 'react-icons/fa'
import {SiOpencv} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiOpenai} from 'react-icons/si'


const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>CodeWhiz</h3>
                    <h5>An OpenAI powered chat bot that answers all you coding queries.</h5>
                    <div className="portfolio__tech-stack">
                        <FaReact />
                        <FaNodeJs />
                        <SiOpenai />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/CodeWhiz" className="btn">Github</a>
                        <a href="https://code-whiz.vercel.app/" className="btn btn-primary" target='_blank'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Calci</h3>
                    <h5>An OpenCv powered calculator that uses finger movements to operate.</h5>
                    <div className="portfolio__tech-stack">
                        <FaPython />
                        <SiOpencv />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/Virtual-Calculator" className="btn portfolio__item-cta">Github</a>
                        <a href="https://drive.google.com/file/d/1Gjmb5zHUPATaHxBJC66CFMG0KUXrMzp4/view?usp=sharing" className="btn btn-primary" target='_blank' >Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Snake-Game</h3>
                    <h5>The classic snake and apple game made in python using PyGame module.</h5>
                    <div className="portfolio__tech-stack">
                        <FaPython />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/Snake_game" className="btn portfolio__item-cta">Github</a>
                        <a href="https://github.com/taanyatarun/Snake_game" className="btn btn-primary" target='_blank'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>Made In Fashion</h3>
                    <h5>A fully functional and responsive front end of an E-Commerce Website.</h5>
                    <div className="portfolio__tech-stack">
                        <FaHtml5 />
                        <SiCss3 />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/E-commerce-Website" className="btn">Github</a>
                        <a href="https://taanyatarun.github.io/E-commerce-Website/" className="btn btn-primary" target='_blank'>Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Projects