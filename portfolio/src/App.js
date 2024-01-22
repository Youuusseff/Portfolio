import './components/home/App.css';
import Navbar from './components/home/Navbar';
import React, { useEffect } from 'react';
import Home from './components/home/Home';
import WelcomeAnimation from './components/home/welcome';
import { useState } from 'react';
import gsap from 'gsap';
import About from './components/home/About';

function App() {
  const [togglePage, changePage] = useState("welcome")
  useEffect(()=>{
    if (togglePage != "welcome"){
      gsap.set(".App", {opacity:0});
      const tl = gsap.timeline();
      tl.to(".App", {duration: 1, opacity: 1, scale: 1.06});
      tl.to(".App", {duration : 0.5, scale: 1});}
  },[togglePage]);
  function currentComponent(togglePage){
    if(togglePage == "welcome"){
      return (<WelcomeAnimation changePage = {changePage}/>);
    }
    else{
      if(togglePage == "about"){
        return(<About/>)
      }
      else{
        return (
          <div className="App">
            <Navbar/>
            <Home changePage = {changePage}/>
          </div>);}
    }
  }
  return (
    currentComponent(togglePage)
  );
}

export default App;
