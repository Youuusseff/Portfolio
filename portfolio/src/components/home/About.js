import React, { useEffect, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import './About.css';
import Starfield from 'react-starfield';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactComponent as CampingTent} from './assets/camping.svg';
import {ReactComponent as Tunisia} from './assets/tunisia.svg';
import {ReactComponent as Computer} from './assets/computer.svg';
import {ReactComponent as Travel} from './assets/travel.svg';

gsap.registerPlugin(ScrollTrigger);

function About() { 
  const width = window.innerWidth
  //Scroll trigger animation 
  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      let tl = gsap.timeline({
        defaults: {
          duration: 6000
        },
        scrollTrigger: {
          trigger: ".line-1",
          start: width>850? "-700%": "-1099%",
          end: "+=100%",
          pin: ".details",
          scrub: true
        }
      });
      tl.to(".card", {
        opacity: 1,
        y: -550,
        delay: -600
      })
      tl.to('.line-1', {
        y: -100,
        opacity: 0,
      })
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
            <div className='card'>
              <h1 className='hello'>Welcome to my Portfolio!</h1>

<p className='description-about'>I am a passionate college student based in <b style={{color:"rgb(78, 133, 222)", letterSpacing:"4px"}}>Tunisia</b><Tunisia/>, currently pursuing a degree in <b style={{color:"rgb(87, 245, 247)",paddingRight:"5px"}}>Computer Science</b><Computer/>. Beyond my academic pursuits, I lead a dynamic lifestyle filled with diverse interests and experiences.
Exploring the great outdoors is another cherished aspect of my life as I have a profound affection for <b style={{color:"rgb(83, 125, 75)"}}>Camping</b> <CampingTent/> and <b style={{color:"rgb(81, 109, 252)"}}>Traveling</b> <Travel/>.</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default About;
