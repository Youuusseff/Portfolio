import React from 'react'
export default function Navbar() {
  function dropDown() {
    var x = document.getElementById("my-nav");
    console.log(x);
    if (x.className === "right-nav") {
      x.className += " responsive";
    } else {
      x.className = "right-nav";
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
              <li className="icon" onClick={()=>dropDown()}>
                  <i class="fa fa-bars"></i></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
