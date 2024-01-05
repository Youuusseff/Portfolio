import React from 'react'
import pdp from '../images/pdp.jpeg'

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
      </div>
    </div>
  )
}
