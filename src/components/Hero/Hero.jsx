import React from 'react'
import "../Hero/Hero.css"
import profile from "../../assets/images/Koti-photo.png"

const Hero = () => {
    return (

        <section className='hero-section' data-aos="fade-up" id="hero">

            <div className='hero-content'>
                <div className='hero-text'>
                    <p className='name'>Hi I'm <span className='developer-name'>Koteswar Singh</span> </p>
                    <h2>Frontend React Developer</h2>
                    <p className='hero-description'>I build responsive and interactive web applications using React.js,
                        JavaScript, HTML5 and CSS3. Passionate about creating clean user
                        interfaces and integrating REST APIs.
                    </p>

                    <div className='hero-buttons'>
                        <a href='#projects'>View Projects</a>
                        <a href='#contact'>Contact Me</a>

                  </div>
                </div>

                <div className='profile-photo'>
                    <img src={profile} alt="Koteswar Singh" />
                </div>
            </div>
        </section>
    )
}

export default Hero