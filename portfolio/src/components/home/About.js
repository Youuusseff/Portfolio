import React from 'react'
import Navbar from './Navbar'
import './App.css';
import pdp from './images/pdp.jpeg';

function About() {
  return (
    <div className='About'>
        <Navbar/>
        <div className='about-container'>
            <div className='description'>
                Hi my name is youssef
            </div>
            <div className='pdp-wrapper'>
                <img className='img-pdp' src={pdp} alt='pdp'></img>
            </div>
        </div>
    </div>
  )
}

export default About
