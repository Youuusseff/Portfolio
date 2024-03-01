import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from './Navbar';
import './About.css';
import Starfield from 'react-starfield';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactComponent as CampingTent} from './assets/camping.svg';
import {ReactComponent as Tunisia} from './assets/tunisia.svg';
import {ReactComponent as Computer} from './assets/computer.svg';
import {ReactComponent as Travel} from './assets/travel.svg';

gsap.registerPlugin(ScrollTrigger);

function About() { 
  const history = useNavigate();
  let transitionButton = null;
  const [width, setWidth] = useState(window.screen.width);
  const width1 = window.innerWidth
  useEffect(()=>{
    gsap.to('.scroll',{opacity: 1, duration: 2})
  },[])
  //Scroll trigger animation 
  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      let tl = gsap.timeline({
        defaults: {
          duration: 6000
        },
        scrollTrigger: {
          trigger: ".line-1",
          start: width1>850? "-700%": "-1100%",
          end: "+=100%",
          pin: ".details",
          scrub: true
        }
      });
      tl.to('.line-1', {
        y: -100,
        opacity: 0,
      })
      tl.to(".scroll", {
        opacity: 0,
        y: -100,
      })
      tl.from(".part-1", {
        opacity: 0,
        delay: -600
      })
      tl.to(".part-1", {
        opacity: 0,
        y: -100
      })
      tl.from(".part-2", {
        opacity: 0,
        delay: -600
      })
      tl.to(".part-2", {
        opacity: 0,
        y: -100
      })
      tl.to('.t-button', {
        xPercent: width1>850?-350:-60,
        opacity: 1,
        delay: -600,
      })
    })
    return () => ctx.revert(); // <-- cleanup!
  },[])
  function transitionHandler(){
    let mm1 = gsap.matchMedia(),
      breakPoint = 950;
    mm1.add(
      {
        isDesktop: `(min-width: ${breakPoint + 1}px)`,
        isMobile: `(max-width: ${breakPoint}px)`,
      },
      (context) => {
        const tl = gsap.timeline();
        tl.to(".scroll", {opacity: 0, duration:0})
        tl.to('.card',{ yPercent: 10,opacity: 0.4, duration: 1})
        tl.to('.card',{
          duration: 2,
          yPercent: -100,
          opacity: 0,
          ease: 'power2.in',
          onComplete: ()=>{history("/projects")}
        });
      }
    )
    // <--->
  }
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
<p className='description-about part-1 center'>I am a passionate college student based in Tunisia, currently pursuing a degree in Computer Science.</p> <p className='description-about part-2 center'> Beyond my academic pursuits, I lead a dynamic lifestyle filled with diverse interests and experiences.
Exploring the great outdoors is another cherished aspect of my life as I have a profound affection for Camping and Traveling.</p>
            <div className='center t-button'><button className='transition-button' id='transition-button' onClick={transitionHandler}>Projects</button></div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default About;
