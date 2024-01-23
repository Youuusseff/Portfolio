import React from 'react'
import pdp from './images/pdp.jpeg'
import './App.css';
import gsap from 'gsap';

export default function Home(props) {
  function transitionHandler(){
    let mm1 = gsap.matchMedia(),
      breakPoint = 950;
    mm1.add(
      {
        isDesktop: `(min-width: ${breakPoint + 1}px)`,
        isMobile: `(max-width: ${breakPoint}px)`,
      },
      (context) => {
        let {isDesktop, isMobile} = context.conditions;
        gsap.to('.Home',{
          duration:2,
          scale: isDesktop? 1.2: 1,
          xPercent: isDesktop? 53:100,
          y: isDesktop? 3:0,
          opacity: isMobile? 0:1,
          ease: 'power2.in'
        })
      }
    )
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
          <a href=''><button class="button-c" role="button">Contact Me</button></a>
          <a href='https://linkedin.com/in/youssef-benomrane-b2a35127a' target='_blank'><button class="button-l" role="button">LinkedIn</button></a>
        </div>
        <div className='transition-description'>
          <button className='transition-button'onClick={()=>transitionHandler()}>Learn more about me</button>
        </div>
      </div>
    </div>
  )
}
