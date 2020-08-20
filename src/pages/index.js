import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../../components/NavBar"
import ContactMe from "../../components/ContactMe"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../static/style.css"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Thaddeus Codes</title>
      </Helmet>
      <div id="header">
        <div id="header-text">
          <h1 className='header-content'>Hi, I'm Thaddeus <br/> and I'm a Chicago based software engineer and developer.</h1>
          <img className='header-content' src='/images/profile.jpg' alt='profile pic' id='profile-pic'/>
        </div>
      </div>
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}
