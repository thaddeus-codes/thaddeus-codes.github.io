import React from "react"

export default function AboutMe() {
  // window.addEventListener('scroll', function (e) {
  //     let bottomOpacity = 0
  //     let topOpacity = 100

  //     if(window.scrollY >=400 && window.scrollY <= 600) {
  //         const sunny = document.getElementById('sunny')
  //         const rainy = document.getElementById('rainy')

  //         topOpacity = (600 - window.scrollY) / 2
  //         bottomOpacity = (100 - topOpacity)

  //         console.log(rainy)
  //         rainy.setAttribute('style', `opacity: ${topOpacity}%`)
  //         // sunny.setAttribute('style', `opacity: ${bottomOpacity}%`)
  //     }
  // })

  return (
    <div id="about-me" className="section">
      <h1 className="section-header">About Myself</h1>
      <div id="about-me-div" className="section-content">
        <h4>Bio</h4> <br/><br/>
        <p>I'm a software engineer living in Chicago with a background in molecular biology and clinical laboratory sciences. My interests in coding are varied, spanning technologies such as React.js Phaser.io, and I'm even interested in C# and Unity. I plan on learning ever more about technology and coding practices in my career.</p> 
        <p>Programming to me is real world magic; I'm able to create a wide array of effects and products just by writing out my code and it excites me! I love coding and figured I would transition from a career in medical laboratory sciences to software engineering to further explore this passion of mine.</p>
      </div>
    </div>
  )
}
