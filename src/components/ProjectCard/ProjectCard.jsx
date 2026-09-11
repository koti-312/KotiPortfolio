import React from 'react'
import "../ProjectCard/ProjectCard.css"
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"
import project3 from "../../assets/images/project3.png"
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = () => {

    const projects = [
        {
            id: 1,
            title: "Ecommerce website",
            image: project1,
            description: "A full-featured online shopping website with authentication, cart, and product management.",
            technologies: ["React.js", "Node.js","Express", "MongoDB"],
            github: "https://github.com/koti-312/E-commerce-app",
            live: "https://e-commerce-app-frontend-zeta-seven.vercel.app"
        },
        {
            id: 2,
            title: "Finance Management Dashboard",
            image: project2,
            description: "A comprehensive dashboard for managing personal or business finances with data visualization and reporting features.",
            technologies: ["React.js", "Node.js","Express", "MongoDB"],
            github: "https://github.com/koti-312/FinanceManagementDashboard",
            live: "https://finance-management-dashboard-rust.vercel.app"
        },

        {
            id: 3,
            title: "Design agency website ",
            image: project3,
            description: "A responsive agency website with modern UI, featuring Hero, About, Projects, Contact, and Footer sections.",
            technologies: ["React.js", "Next.js"],
            github: "https://github.com/koti-312/design-agency",
            live: "https://design-agency-ebon.vercel.app"
        },

    ]

    return (

        <section className='project-section' data-aos="fade-up" id='projects'>
            <div className='project-headline'>
                <h1>My Projects</h1>
                <p>Here are some of my recent projects, each thoughtfully built to solve real-world problems and showcase my frontend development skills.</p>
            </div>

            <div className='project-container'>
                <div className='project-cards'>
                    {
                        projects.map((project) => (
                            <div className='projects-show' key={project.id} data-aos="fade-up" data-aos-delay={project.id * 100}>
                                <img src={project.image} alt={project.title} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="tech-stack">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.live} target="_blank" rel="noreferrer">
                                        <FiExternalLink /> Live Demo
                                    </a>

                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <FaGithub /> Code
                                    </a>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>

        </section>


    )
}

export default ProjectCard