import React from 'react'
import "../ContactUs/Contact.css"
import { MdMail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { FaLocationDot } from 'react-icons/fa6'

const Contact = () => {
    return (
        <section className='contact-section' id="contact">
            <div className='contact-us'>
                <h1>Lets's <span>Connect</span></h1>
                <p>I'm currently looking for Frontend React Developer opportunities. Feel free to reach out for job opportunities, collaborations, or technical discussions.</p>
            </div>

            <div className='contact-conatiner'>
                <div className='contact-information' data-aos="fade-right">

                    <h2>Contact Information</h2>
                    <div className="info-box">
                        <MdMail className="contact-icon" />
                        <div>
                            <h3>Email</h3>
                            <p>koteswar31204@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <FiPhone className="contact-icon" />
                        <div>
                            <h3>Phone</h3>
                            <p>+91 8148780655</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <FaLocationDot className="contact-icon" />
                        <div>
                            <h3>Location</h3>
                            <p>Chennai, Tamil Nadu</p>
                        </div>
                    </div>

                </div>

                <div className='contact-message' data-aos="fade-left">
                    <form className='contact-form'>
                        <h2>Send Me a Message</h2>

                        <label>Name</label>
                        <input type="text"
                            placeholder='your name'
                            required />

                        <label>Email</label>
                        <input type="email"
                            placeholder='your email'
                            required />

                        <label>Subject</label>
                        <input type="subject"
                            required />

                        <label>Message</label>
                        <textarea
                            placeholder='Type your message'
                            rows="8"
                            required>
                            
                        </textarea>

                        <button>Send Message</button>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact