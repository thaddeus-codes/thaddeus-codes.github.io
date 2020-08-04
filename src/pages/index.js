import React from "react"
import NavBar from "../../components/NavBar"
import ContactMe from '../../components/ContactMe'
import AboutMe from '../../components/AboutMe'
import Projects from '../../components/Projects'

import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css"

export default function Home() {
  return (
    <div>
      <div id='header'>

      {/* <img id="header" src='giphy.gif' alt='placeholder for header'></img> */}
      <div id='header-text'>

      <h1>Let's get started!</h1>
      </div>
      </div>
      <NavBar />
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </div>
  )
}
