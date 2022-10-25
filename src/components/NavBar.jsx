import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg';
import SocialIcons from "./SocialIcons"
import {Link} from 'react-router-dom'
import tabs from "../assets/img/align-justify.svg"
const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);  
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    const onUpdateActiveLine = (value) => {
        setActiveLink(value);
        console.log(activeLink)
    }



  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggle-icon'>
          <img src={tabs} alt="tabs" className="tabs"/>
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLine('home')}}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLine('skills')}}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLine('projects')}}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
        <SocialIcons />

        <button className='connect'>
                 <a href="cv.pdf" download="Michael Micheal - Frontend Developer Reactjs.pdf">Download CV</a> 
        </button>

        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar