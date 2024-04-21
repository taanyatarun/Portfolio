import React from "react";
import './projects.css'
import IMG1 from '../../assets/Portfolio 1.png'
import IMG2 from '../../assets/Portfolio 2.png'
import IMG3 from '../../assets/Portfolio 3.png'
import IMG4 from '../../assets/Portfolio 4.png'
import IMG5 from '../../assets/Portfolio 5.jpg'
import IMG6 from '../../assets/Portfolio 6.jpg'
import IMG7 from '../../assets/Portfolio 7.jpg'
import IMG8 from '../../assets/Portfolio 8.jpg'
import {FaPython} from 'react-icons/fa'
import {SiOpencv} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiOpenai} from 'react-icons/si'
import { SiSolidity } from "react-icons/si";


const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>CoinCause</h3>
                    <h5>Blockchain based Crowdfunding platform to ensure transparency and security.</h5>
                    <div className="portfolio__tech-stack">
                        <FaReact />
                        <FaNodeJs />
                        <SiSolidity />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/CoinCause" className="btn">Github</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG7} alt="" />
                    </div>
                    <h3>SeeClick</h3>
                    <h5>A Computer Vision based eye tracker, that helps you navigate your computer screen by the movement of your eye.</h5>
                    <div className="portfolio__tech-stack">
                        <FaPython />
                        <SiOpencv />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/SeeClick" className="btn">Github</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>KryptVerse</h3>
                    <h5>One stop solution for a transparent and secure cryptocurreny tranfers.</h5>
                    <div className="portfolio__tech-stack">
                        <FaReact />
                        <FaNodeJs />
                        <SiSolidity />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/KryptVerse" className="btn">Github</a>
                    </div>
                </article>
                
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
                        <img src={IMG8} alt="" />
                    </div>
                    <h3>Jarvis</h3>
                    <h5>An OpenAI powered desktop assistant.</h5>
                    <div className="portfolio__tech-stack">
                        <FaPython />
                        <SiOpenai />
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/taanyatarun/Desktop-Assistant" className="btn">Github</a>
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
