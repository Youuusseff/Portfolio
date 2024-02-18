import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import './About.css';
import Starfield from 'react-starfield';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() { 
  gsap.timeline({
    defaults: {
      duration: 6000 },
    scrollTrigger: {
      trigger: '.details',
      scrub: true,
      start: 0,
      end: '+=3000',
      pin: '.about-wrapper'
    }
  })
    .to(".details-part", { opacity: 0, y: -20 })
    .from(".details-part2", { opacity: 0, y: 40})
    .to(".details-part2", { opacity: 0, delay: 600})

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
          <div className='details-part'style={{marginBottom:'100vh'}}>
            <h1 className="line-1 anim-typewriter">Learn more about me!</h1>
            <p className='scroll'>Scroll to continue</p>
          </div>
          <div className='details-part2'>
            <h1 style={{color:'white'}}>Hi</h1>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default About;
