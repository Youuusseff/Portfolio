import React, { useEffect, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import './About.css';
import Starfield from 'react-starfield';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() { 
  //Scroll trigger animation 
  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      let tl = gsap.timeline({
        defaults: {
          duration: 60000
        },
        scrollTrigger: {
          trigger: ".line-1",
          start: "top 35%",
          end: "bottom 0%",
          markers: true,
          pin: ".details-part",
          scrub: true
        }
      });
      tl.to('.line-1', {
        y: -50,
        opacity: 0,
      })
      tl.to(".hello", {
        opacity: 1,
        y: -450,
        delay: -600
      })
      tl.from('.scroll',{
        opacity:0.3,
      }, '-=1')
    })
    return () => ctx.revert(); // <-- cleanup!
  },[])
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
          <div className='details-part full-screen'>
            <h1 className="line-1 anim-typewriter">Learn more about me!</h1>
            <p className='scroll'>Scroll to continue</p>
          </div>
          <div className='details-part2 full-screen'>
            <h1 className='hello' style={{color:'white'}}>Hi</h1>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default About;
