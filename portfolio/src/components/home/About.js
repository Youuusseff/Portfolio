import React, { useEffect } from 'react'
import Navbar from './Navbar'
import './App.css';
import pdp from './images/pdp.jpeg';
import Starfield from 'react-starfield';
import gsap from 'gsap';
function About() {
  var body = document.body;
  var tl1 = gsap.timeline();
  
  return (
    <div className='About'>
      <Starfield className='starfield'
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar/>  
    </div>
  )
}

export default About
