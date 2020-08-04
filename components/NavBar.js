import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function NavBar() {
  let menuOpen = false
  const menuBtn = document.querySelector(".menu-btn")

  const animateBurger = function () {
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
        <Nav className="ml-auto">
          <Nav.Link href="#about-me" to="#about-me">
            About Me
          </Nav.Link>
          <Nav.Link href="#projects" to="#projects">
            Projects
          </Nav.Link>
          <Nav.Link href="#contact-me" to="#contact-me">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
