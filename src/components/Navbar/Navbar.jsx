import React, { useState } from 'react'
import "../Navbar/Navbar.css"
import logo from "../../assets/images/ks_logo.jpg"
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [menu,setMenu]=useState(false)

    return (

        <>
            <nav className='navbar-section' id='navbar'>

                <div className='logo'>
                    <a href="#hero">
                        <img src={logo} alt="KS Portfolio" />
                        <h3>Koteswar Singh</h3>
                    </a>
                </div>

                <div className='menu-btn'>
                    <button onClick={()=>setMenu(!menu)}>
                        {menu ? <FaTimes size={30} border="none"/> : <FaBars size={30} border="none"/>}
                    </button>
                </div>

                <ul  className={menu ? 'nav-bar active' :"nav-bar"}>
                    <li><a>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className='get-started-btn'>
                    <a href="#contact">Hire Me</a>
                </div>

            </nav>
        </>
    )
}

export default Navbar
