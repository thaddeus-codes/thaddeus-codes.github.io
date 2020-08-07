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
      <div id="about-me-div" className='section-content'>
        <img src="sunny.jpg" alt="placeholder" id="about-me-image" />

          <h4>Hi, I'm Thaddeus, and I'm a software engineer.</h4>
          <br/>
        <p className="about-me-text">
          I went to college for Molecular and Cellular biology at the University of Arizona and earned my B.S. with a double major in Plant Biology and a minor in Japanese Language, then worked in research laboratories for a few years working on a wide range of topics from secondary metabolite production in endophytic fungi, to bioassay testing for new pharmaceutical drugs.
        </p>
          <h4>Transition into Medical Technology</h4>
          <p>After working in research laboratories for a few years, I began looking at clinical laboratory work. I worked full time while putting myself through school to get an associates in Medical Laboratory technology so that I could get professionally credentialed as a technologist. After working in the field for 3 years, I also became ASCP certified as a Hematology Technologist.</p>
          <br/>
          <h4>Why software engineering?</h4>
          <p>I've always had a huge interest in computer programming and technology. I took my first programming class back in 2006 (Java) and didn't have a great time with it. Some years later in college, I took a class on Python and another on R and didn't particularly like either. So what happened this time around? I started learning Javascript in my spare time a couple years ago because my interest never went away and I figured maybe I couldn't learn coding and enjoy it because I didn't like the subjects or the teachers who taught it to me. Seems I was correct! After a few weeks of struggling and failing to code on my own with some help with online resources, something "clicked" and I immediately fell in love with coding. Creating such cool and complex products and solving everyday problems with a program makes me feel so empowered like I can do anything. And the best part is there is so much to learn that I don't think I'll ever quite learn it all! After falling in love with coding I realized this is what I wanted to do full time, and so I applied to and got accepted to Fullstack Academy and graduated 4 months later. And while my background as a laboratory scientist was no longer my focus, the skills I learned such as trouble shooting, attention to detail, and documentation will prove essential in this path I've chosen</p>
          <br/>
          <h4>Hobbies and interests</h4>
          <p>Outside of my professional development, I like playing video games such as Darkest Dungeon, Final Fantasy XIV, Resident Evil, and Animal Crossing. I also like cycling around the city of Chicago and knitting. Much like coding, the complexities of garments knitting makes can be broken down into 1s and 0s (Ks and Ps) and it's no surprise I fell in love with knitting after giving it a shot! I also love baking pies and cheesecakes (even if I have no one to share them with) and have been working on getting better at cooking. Feel free to send me recipes or cookings tips!</p>
          <p>I love listening to music and enjoy a wide range of genres but I'm particularly fond of shoegaze and dreampop at the moment, featuring such bands as Beach House, Wild Nothing, and Phantogram. Let's swap music!</p>
      </div>
    </div>
  )
}
