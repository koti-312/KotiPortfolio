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
                    I'm a React.js and MERN Stack Developer from Chennai with hands-on experience building responsive and full-stack web applications. I specialize in React.js, JavaScript, HTML5, and CSS3, along with Node.js, Express.js, and MongoDB for backend development.
                </p>

                <p className='about-tagline'>
                    I have experience building REST APIs, implementing JWT authentication, integrating third-party APIs, and developing database-driven applications. I enjoy solving real-world problems through clean and maintainable code, and I'm eager to contribute, learn, and grow as a software developer.
                </p>

                <div className='about-tags'>
                    <div className='tag-item'>
                        <FaCheckCircle color='blue' size={20} />
                        <span>Responsive Design</span>
                    </div>

                    <div className='tag-item'>
                        <FaCheckCircle color='blue' size={20} />
                        <span>Full-Stack Development</span>
                    </div>

                    <div className='tag-item'>
                        <FaCheckCircle color='blue' size={20} />
                        <span>Clean & Maintainable Code</span>
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