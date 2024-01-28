import React, { useEffect } from 'react';
import gsap from 'gsap';
import './welcome.css'; // Import the CSS file
import 'particles.js/particles';
import { useNavigate } from 'react-router-dom';
const particlesJS = window.particlesJS;

const WelcomeAnimation = (props) => {
  console.log("welcome");
  const history = useNavigate();
  useEffect(() => {
    // Initialize particles.js
    particlesJS("particle-container", {
      particles: {
        number: {
          value: 80,
        },
        size: {
          value: 3,
        },
        "color": {
          "value" : "#000",
        },
        "line_linked": {
          "enable": false,
        }
      },
    });

    // GSAP animation for particles initial positions
    gsap.set("#particle-container", { opacity: 0 });
    gsap.to(".particle", { duration: 1, x: "random(-100, 100)", y: "random(-100, 100)"});

    // GSAP text animation
    const tl = gsap.timeline();
    tl.to("#text-container", { duration: 2, opacity: 1, scale: 1.5 })
      .to("#particle-container", { duration: 2, opacity: 1, scale: 1.5}, '-=1') // Overlap the particle animation with text animation
      .to(["#text-container","#particle-container"], { duration : 3, opacity: 0, scale: 0.5,onComplete: ()=>{history('/home')}});
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <div id="particle-container">
      </div>
      <div id="text-container">
        <h1 id="welcome-text">WELCOME</h1>
      </div>
    </div>
  );
};

export default WelcomeAnimation;

