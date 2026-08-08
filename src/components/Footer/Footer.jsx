import React from 'react'
import "../Footer/Footer.css"
import { LiaGithub, LiaInstagram, LiaLinkedin, LiaWhatsapp } from 'react-icons/lia'
import { MdMail } from 'react-icons/md'
import logo from "../../assets/images/ks_logo.jpg"

const Footer = () => {
    return (
        <footer className='footer-section' data-aos="fade-up" id='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <a href="#hero">
                        <img src={logo} alt="KS Portfolio" />
                        <h3>Koteswar Singh</h3>
                    </a>
                    <p> Frontend React Developer passionate about building responsive,
                        user-friendly web applications.</p>
                </div>



                <div className='footer-links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>

                <div className="footer-socialmedia">
                    <h3>Connect With Me</h3>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/koteswarsingh312" target="_blank" rel="noreferrer">
                                <LiaLinkedin size={35} />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/koteswarsingh" target="_blank" rel="noreferrer">
                                <LiaInstagram size={35} />
                            </a>
                        </li>

                        <li>
                            <a href="https://wa.me/8148780655" target="_blank" rel="noreferrer">
                                <LiaWhatsapp size={35} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/koti-312" target="_blank" rel="noreferrer">
                                <LiaGithub size={35} />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:koteswar31204@gmail.com" target="_blank" rel="noreferrer">
                                <MdMail size={35} />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='footer-bottom'>
                <p>&copy; 2026 Koteswar Singh. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer