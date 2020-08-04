import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <img
          src="hamburger.png"
          alt="hamburger icon for nav bar"
          height="100%"
          width="auto"
        />
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
