import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import './About.css';
import Starfield from 'react-starfield';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {  
  return (
    <div className='About'>
      <Starfield
        className='starfield'
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar/>
      <div className='about-wrapper'>
        <div className='details'>
          <div className='details-part'>
            <h1 className="line-1 anim-typewriter">Learn more about me!</h1>
            <p className='scroll'>Scroll to continue</p>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default About;
