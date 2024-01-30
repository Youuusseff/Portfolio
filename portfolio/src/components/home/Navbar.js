import React from 'react'
import './App.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Navbar() {

  // the dropdown menu on mobile devices with its animation

  function dropDown() {
    var x = document.getElementById("my-nav");
    console.log(x);
    if (x.className === "right-nav") {
      x.className += " responsive";
      const tl1 = gsap.timeline();
      tl1.from("#dropdown",{xPercent: 10});
      tl1.to("#dropdown",{backgroundColor: "black", color: "white", opacity: 0.8, duration: 1});
    } else {
      x.className = "right-nav";
      const tl1 = gsap.timeline();
      tl1.to("#dropdown", {backgroundColor: "white", color: "black", duration: 0.4, opacity: 1});
    }
  }
  // <-->
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className='navbar'>
        <ul className='main-nav'>
          <li className='logo'><Link to="home" style={{textDecoration: 'none',color: 'inherit'}}>Youssef Benomrane</Link></li>
          <li className='right-nav' id='my-nav'>
            <ul id='dropdown' className='dropdown'>
              <li className='dropdown-item'><Link to="home" style={{textDecoration: 'none',color: 'inherit'}}>Home</Link></li>
              <li className='dropdown-item'><Link to="about" style={{textDecoration: 'none',color: 'inherit', animation:"rotate 2s infinite"}} >About</Link></li>
              <li className='dropdown-item'>Projects</li>
              <li className='dropdown-item'>Contact</li>
              <li  id="icon" className="icon" onClick={()=>dropDown()}>
                  <i class="fa fa-bars"></i></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
