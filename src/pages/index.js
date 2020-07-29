import React from "react"
import NavBar from "../../components/NavBar"
import ContactMe from '../../components/ContactMe'
import AboutMe from '../../components/AboutMe'

import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css"

export default function Home() {
  return (
    <div>
      <div id="header"></div>
      <NavBar />
      <div id="page"></div>
      <AboutMe/>
      <ContactMe/>
    </div>
  )
}
