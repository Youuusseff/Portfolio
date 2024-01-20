import React from 'react'
import pdp from './images/pdp.jpeg'
import './App.css';

export default function Home() {
  return (
    <div className='Home'>
      <div className='pdp-wrapper'>
        <img className='img-pdp' src={pdp} alt='pdp'></img>
      </div>
      <div className='description'>
        <p>Hello, I'm</p>
        <h1>Youssef Benomrane</h1>
        <h3>Frontend Developer</h3>
        <h4>Tech Stack : React | SpringBoot </h4>
        <div className='buttons'>
          <a href='' target='_blank'><button class="button-c" role="button">Contact Me</button></a>
          <a href='https://github.com/Youuusseff' target='_blank'><button class="button-l" role="button">LinkedIn</button></a>
        </div>
      </div>
    </div>
  )
}
