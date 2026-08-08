import { useEffect, useState } from 'react'
import Hero from './components/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import ProjectCard from './components/ProjectCard/ProjectCard.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from './components/Footer/Footer.jsx'

function App() {

  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
    })
  },[])

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <ProjectCard/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
