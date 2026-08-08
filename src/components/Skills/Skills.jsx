import React from 'react'
import { FaCode, FaCodeBranch, FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import "../Skills/Skills.css"
import { CgVercel } from 'react-icons/cg'
import { SiExpress, SiMongodb, SiVisualparadigm } from 'react-icons/si'

const Skills = () => {
    return (

        <section className='skills-section' data-aos="fade-up" id='skills'>

            <div className="skill-content">
                <h1>My <span>SKILLS</span> </h1>
                <p>Here are the technologies and tools I use to build responsive and modern web applications.</p>
            </div>

            <div className='skills-container'>
                <main className='skills-card'>
                    <h2>Frontend</h2>

                    <div className='tech-skills'>
                        <FaHtml5 color="orange" size={40} />
                        <span>HTML5</span>
                    </div>

                    <div className='tech-skills'>
                        <FaCss3 color='blue' size={40} />
                        <span>CSS3</span>
                    </div>

                    <div className='tech-skills'>
                        <FaJs color='yellow' size={40} />
                        <span>JavaScript</span>
                    </div>

                    <div className='tech-skills'>
                        <FaReact color='#27849e' size={40} />
                        <span>React JS</span>
                    </div>
                </main>

                <div className="skills-card">
                    <h2>Backend Fundamentals</h2>

                    <div className="tech-skills">
                        <FaNodeJs color="green " size={40} />
                        <span>Node.js</span>
                    </div>

                    <div className="tech-skills">
                        <SiExpress color='black' size={40} />
                        <span>Express.js</span>
                    </div>

                    <div className="tech-skills">
                        <SiMongodb color="green" size={40} />
                        <span>MongoDB</span>
                    </div>
                </div>

                <div className="skills-card">
                    <h2>Tools</h2>

                    <div className="tech-skills">
                        <FaGitAlt color="orange" size={40} />
                        <span>Git</span>
                    </div>

                    <div className="tech-skills">
                        <FaGithub color='black' size={40} />
                        <span>GitHub</span>
                    </div>

                    <div className="tech-skills">
                        <CgVercel size={40} />
                        <span>Vercel</span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills