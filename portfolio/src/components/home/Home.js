import React from 'react'
import pdp from './images/pdp.jpeg'
import './App.css';
import gsap from 'gsap';

export default function Home(props) {
  function transitionHandler(){
    const tl1 = gsap.timeline();
    tl1.to('.Home', {duration: 2, scale: 1.2,x: "53rem", y:3,ease: 'power2.in'});
  }
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
        <div className='transition-description'>
          <button className='transition-button'onClick={()=>transitionHandler()}>Learn more about me</button>
        </div>
      </div>
    </div>
  )
}
