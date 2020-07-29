import React from "react"
import NavBar from "../../components/NavBar"
import ContactMe from "../../components/ContactMe"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"

import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css"

console.log(
  "I see you checking out that console!\n\n\n\n\nInterested in hiring me? Contact me at thaddeuscodes@gmail.com!\n\nFollow me on LinkedIn and Github too!\n\nLinkedIn: https://www.linkedin.com/in/thaddeus-metz/\nGitHub: https://github.com/thaddeus-codes"
)

export default function Home() {
  return (
    <div>
      <div id="header"></div>
      <NavBar />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}
