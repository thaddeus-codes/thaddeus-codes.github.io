import React from "react"

export default function ContactMe() {
  return (
    <footer id="contact-me" className="section" style={{backgroundColor:  '#a38a64'}}>
      <h1 className="section-header" >Contact Me!</h1>
        <a href='mailto:thaddeuscodes@gmail.com'>
          <img src='/images/email.png' className='contact-image' alt='email' style={{position: 'relative', bottom: '-4px', marginRight: '9px'}}></img>
        </a>
        <a href='https://github.com/thaddeus-codes'>
          <img src='/images/github.png' className='contact-image' alt='github account'></img>
        </a>
        <a href='https://www.linkedin.com/in/thaddeus-metz/'>
          <img src='/images/linkedin.png' className='contact-image' alt='linkedin profile'></img>
        </a>
    </footer>
  )
}
