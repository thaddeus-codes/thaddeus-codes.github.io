import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function NavBar() {
  let menuOpen = false
  
  const animateBurger = function () {
    const menuBtn = document.querySelector(".menu-btn")
    if (!menuOpen && menuBtn) {
      menuBtn.classList.add("open")
      menuOpen = true
    } else if (menuOpen && menuBtn) {
      menuBtn.classList.remove("open")
      menuOpen = false
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={animateBurger}
      >
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link href="#about-me" to="#about-me" onClick={animateBurger}>
            About Me
          </Nav.Link>
          <Nav.Link href='#skills' to='#skills' onClick={animateBurger}>
            Skills
          </Nav.Link>
          <Nav.Link href="#projects" to="#projects" onClick={animateBurger}>
            Projects
          </Nav.Link>
          <Nav.Link href="#contact-me" to="#contact-me" onClick={animateBurger}>
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
