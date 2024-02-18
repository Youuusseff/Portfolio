import React, { useEffect, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import './About.css';
import Starfield from 'react-starfield';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      tl.to('.scroll',{
        opacity:0.2,
        delay: 500,
        y: 10
      }, "-=1")
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
              <h1 className='hello' style={{color:'white !important'}}>Welcome to my web portfolio!</h1>

<p className='description-about'>I am a passionate college student based in Tunisia, currently pursuing a degree in Computer Science. Beyond my academic pursuits, I lead a dynamic lifestyle filled with diverse interests and experiences.

When I'm not immersed in coding or studying algorithms, you'll often find me indulging in my love for football. Whether it's cheering for my favorite team or engaging in friendly debates about the latest matches, football is a significant part of my life. Additionally, I enjoy the simple pleasures of life, such as meeting friends over coffee to engage in stimulating conversations and share laughter.

Exploring the great outdoors is another cherished aspect of my life. I have a profound affection for camping and traveling, as they offer me the opportunity to connect with nature, explore new cultures, and create lasting memories. From pitching tents under starlit skies to embarking on spontaneous road trips, I thrive on the adventure and spontaneity that travel brings.

Through my portfolio, I aim to showcase not only my technical skills but also my vibrant personality and diverse interests. Join me on this journey as I continue to explore the world of technology while embracing the richness of life's experiences.</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default About;
