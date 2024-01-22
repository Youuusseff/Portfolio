import React, { useEffect } from 'react';
import gsap from 'gsap';
import './welcome.css'; // Import the CSS file
import 'particles.js/particles';
const particlesJS = window.particlesJS;

const WelcomeAnimation = (props) => {
  console.log("welcome");
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
    gsap.to(".particle", { duration: 1, x: "random(-100, 100)", y: "random(-100, 100)", stagger: 0.05, onComplete: startParticleAnimation });

    // GSAP text animation
    const tl = gsap.timeline();
    tl.to("#text-container", { duration: 2, opacity: 1, scale: 1.5 })
      .to("#particle-container", { duration: 2, opacity: 1, scale: 1.5, onComplete: startParticleAnimation }, '-=1') // Overlap the particle animation with text animation
      .to(["#text-container","#particle-container"], { duration : 3, opacity: 0, scale: 0.5,onComplete: ()=>{props.changePage('home')}});
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const startParticleAnimation = () => {
    // GSAP animation for particles assembly
    gsap.to(".particle", { duration: 2, x: 0, y: 0 });
  };

  return (
    <div>
      <div id="particle-container">
        {/* Placeholder divs for particles */}
        {Array.from({ length: 80 }).map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
      <div id="text-container">
        <h1 id="welcome-text">WELCOME</h1>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
