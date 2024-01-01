import React from 'react'
export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <ul className='main-nav'>
          <li>Youssef Benomrane</li>
          <li className='right-nav'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
