import React from 'react'
import "../About/About.css"
import { FaCheckCircle, FaDownload } from 'react-icons/fa'

const About = () => {
    return (
        
        <section className='about-section' data-aos="fade-right" id='about'>

            <h1 className='about'>About <span>Me</span></h1>
            <div className='about-content'>
                <h3>Who am I?</h3>
                <p className='about-description'>
                    I'm a passionate Frontend React Developer from Chennai with
                    hands-on experience building modern and responsive web applications.
                    I specialize in React.js, JavaScript, HTML5, and CSS3, and have
                    also worked with Node.js, Express.js, and MongoDB to develop REST APIs,
                    implement JWT authentication, and build full-stack projects.
                </p>

                <p className='about-tagline'>
                    I enjoy solving real-world problems through clean, scalable code and I'm eager
                    to contribute, learn, and grow as a Frontend Developer.
                </p>

                <div className='about-tags'>
                    <div className='tag-item'>
                        <FaCheckCircle color='blue' size={20} />
                        <span>Responsive Design</span>
                    </div>

                    <div className='tag-item'>
                        <FaCheckCircle color='blue' size={20} />
                        <span>Frontend Performance Optimization</span>
                    </div>

                    <div className='tag-item'>
                        <FaCheckCircle color='blue' size={20} />
                        <span>Clean Code</span>
                    </div>

                    <div className='tag-item'>
                        <FaCheckCircle color='blue' size={20} />
                        <span>REST API Integration</span>
                    </div>
                </div>

                <div className='about-btns'>
                    <a href="/Koteswar_Singh_Resume.pdf" download="Koteswar_Singh_Resume.pdf"  className='download'>
                    <FaDownload size={20}  className='download-icon'/>Download CV</a>
                    <a href="#contact">Contact Me</a>
                </div>

            </div>

        </section>
    )
}

export default About