import React from 'react'
import './App.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {

  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [oppositeColor, setOppositeColor] = useState('white')
  const pathname = location.pathname;

  useEffect(() => {
    // Check if the pathname of the location is '/'
    // You can replace this condition with your specific route conditions
    if (pathname === '/about') {
      setBackgroundColor('white');
      setOppositeColor('black');
    } else {
      setBackgroundColor('black');
      setOppositeColor('white');
    }
  }, [pathname]);

  // the dropdown menu on mobile devices with its animation

  function dropDown() {
    var x = document.getElementById("my-nav");
    console.log(x);
    if (x.className === "right-nav") {
      x.className += " responsive";
      const tl1 = gsap.timeline();
      tl1.from("#dropdown",{xPercent: 10, duration: 0.25});
      tl1.to("#dropdown",{backgroundColor: backgroundColor, color: oppositeColor, opacity: 0.8, duration: 0.5});
    } else {
      x.className = "right-nav";
      const tl1 = gsap.timeline();
      tl1.to("#dropdown", {backgroundColor: oppositeColor, color: backgroundColor, duration: 0.4, opacity: 1});
    }
  }
  // <-->
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className='navbar' style={{color: backgroundColor}}>
        <ul className='main-nav'>
          <li className='logo'><Link to="/home" style={{textDecoration: 'none',color: 'inherit'}}>Youssef Benomrane</Link></li>
          <li className='right-nav' id='my-nav'>
            <ul id='dropdown' className='dropdown'>
              <li className='dropdown-item'><Link to="/home" style={{textDecoration: 'none',color: 'inherit'}}>Home</Link></li>
              <li className='dropdown-item'><Link to="/about" style={{textDecoration: 'none',color: 'inherit', animation:"rotate 2s infinite"}} >About</Link></li>
              <li className='dropdown-item'><Link to="/projects" style={{textDecoration: 'none',color: 'inherit'}}>Projects</Link></li>
              <li className='dropdown-item'><a href="mailto:youssefbenomrane45@gmail.com?Subject=dev" style={{textDecoration: 'none',color: 'inherit'}}>Contact</a></li>
              <li  id="icon" className="icon" onClick={()=>dropDown()}>
                  <i class="fa fa-bars"></i></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
