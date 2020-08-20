import React from "react"
import Carousel from 'react-bootstrap/Carousel'

export default function Projects() {
  Carousel.interval = 8000;

  return (
    <div id="projects" className="section">
      <h1 className="section-header">Projects</h1>
      <div className="section-content" id='projects-content'>
        <Carousel id='projects-carousel'>
          <Carousel.Item>
            <a href='https://siqbeets.com'>
            <img src='/images/siq_beets.gif' alt='siq beets web application' className='d-block w-100'/>
            <Carousel.Caption><h1>Siq beets</h1></Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://github.com/thaddeus-codes/kanji-flashcards'>
            <img src='/images/Kanji-flashcards.gif' alt='kanji flashcards' className='d-block w-100'/>
            <Carousel.Caption><h1>Kanji Flashcards</h1>
            </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://github.com/thaddeus-codes/Sockets-E-Commerce'>

            <img src='/images/coding.gif' alt='placeholder' className='d-block w-100'/>
            <Carousel.Caption>Text Text Text</Carousel.Caption>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
