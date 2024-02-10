import React, { useEffect } from 'react'
import pdp from './assets/pdp.jpeg'
import './App.css';
import { useState } from 'react';
import gsap from 'gsap';
import {ReactComponent as SpringBoot} from './assets/spring.svg'
import {ReactComponent as ReactLogo} from './assets/react.svg'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  const history = useNavigate();
  let transitionButton = null;
  const [width, setWidth] = useState(window.screen.width);

  //  the landing animation 

  // removed the icons needs changing

  let location = props.location
  useEffect(()=>{
    if (location.pathname === "/home"){
      gsap.set(".Home", {opacity:0});
      const tl = gsap.timeline();
      console.log(location)
      tl.to(".Home", {duration: 1, opacity: 1, scale: 1.05, ease: 'power1.in'});
      tl.to(".Home", {duration : 1, scale: 1});}
  },[location]);

  // it keep track of the width which i need to switch the transition button to a simple narrow to make it better
  // responsive
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating width");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);

  // js to change the transition button text to a simple narrow when width of screen reaches 950

  useEffect(()=>{
    if(width < 950){
      transitionButton = document.getElementById("transition-button");
      transitionButton.className = "narrow";
      transitionButton.innerText = "<";
    }
    else{
      transitionButton = document.getElementById("transition-button");
      transitionButton.className = "transition-button";
      transitionButton.innerText = "Learn more about me";
    }
  },[width])

  //transition animation in the button  

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
        gsap.to('description',{
          duration: 2,
          opacity: 0,
          backgroundColor : 'black'
        });
        gsap.to('.Home',{
          duration: 2,
          xPercent: 100,
          opacity: 0,
          ease: 'power2.in',
          onComplete: ()=>{history('/about')}
        });
      }
    )
    // <--->
  }
  return (
    <>
    <Navbar/>
    <div className='Home'>
      <div className='pdp-wrapper'>
        <img className='img-pdp' src={pdp} alt='pdp'></img>
      </div>
      <div className='description'>
        <p>Hello, I'm</p>
        <h1>Youssef Benomrane</h1>
        <h3>Frontend Developer</h3>
        <h4>Tech Stack : React <ReactLogo style={{marginRight:"5px", marginLeft:"5px"}}/>| SpringBoot <SpringBoot style={{marginRight:"5px", marginLeft:"5px"}}/></h4>
        <div className='buttons'>
          <a href=''><button class="button-c" role="button">Contact Me</button></a>
          <a href='https://linkedin.com/in/youssef-benomrane-b2a35127a' target='_blank'><button class="button-l" role="button">LinkedIn</button></a>
        </div>
        <div className='transition-description'>
          <button id='transition-button' className='transition-button'onClick={()=>transitionHandler()}></button>
        </div>
      </div>
    </div>
    </>
  )
}
