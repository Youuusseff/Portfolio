import React from 'react'
import './App.css';
import gsap from 'gsap';

export default function Navbar() {
  function dropDown() {
    var x = document.getElementById("my-nav");
    console.log(x);
    if (x.className === "right-nav") {
      x.className += " responsive";
      const tl1 = gsap.timeline();
      tl1.from("#dropdown",{xPercent: 10});
      tl1.to("#dropdown",{backgroundColor: "black", color: "white", opacity: 0.8, duration: 1});
      tl1.to(".dropdown-item",{borderColor:"white", duration: 3});
    } else {
      x.className = "right-nav";
      const tl1 = gsap.timeline();
      tl1.to("#dropdown", {backgroundColor: "white", color: "black", duration: 2, opacity: 1});
    }
  }
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className='navbar'>
        <ul className='main-nav'>
          <li>Youssef Benomrane</li>
          <li className='right-nav' id='my-nav'>
            <ul id='dropdown' className='dropdown'>
              <li className='dropdown-item'>Home</li>
              <li className='dropdown-item'>About</li>
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
