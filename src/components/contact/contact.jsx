import React from "react";
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiWhatsapp} from 'react-icons/si'
import {useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w4477kk', 'template_jx0e8k8', form.current, 'OmTW7vj7vU6cWBCNw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <div className="contact">
            <section id="contact">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
               <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <HiOutlineMail className="contact__option-icons"/>
                            <h4>Email</h4>
                            <h5>taanyatarun@gmail.com</h5>
                            <a href="mailto:taanyatarun@gmail.com" target="_top">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <SiWhatsapp className="contact__option-icons"/>
                            <h4>Whatsapp</h4>
                            <h5>+918463807159</h5>
                            <a href="https://api.whatsapp.com/send?phone=+918463807159" target="_blank">Send a message</a>
                        </article>
                    </div>
    
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" columns = "21" rows="7" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn-primary" onclick="this.form.reset();">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
