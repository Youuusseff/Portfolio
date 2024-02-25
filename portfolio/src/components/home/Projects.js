import React from 'react'
import todoApp from './assets/todo.png'
import Navbar from './Navbar'
import './Projects.css'
import spotify from'./assets/spotify.jpg'
import portfolio from './assets/hayaa.png'
import { Link } from 'react-router-dom'
import construction from './assets/construction.jpg'
import gsap from 'gsap'
import { useEffect } from 'react'
function Projects() {
    useEffect(()=>{
        document.documentElement.scrollTop = 0;
        gsap.set(".Projects", {opacity:0});
        const tl = gsap.timeline();
        tl.to(".Projects", {duration: 1, opacity: 1, scale: 1.05, ease: 'power1.in'});
        tl.to(".Projects", {duration : 1, scale: 1, y: 10});}
      ,[]);
  return (
    <div className='Projects'>
        <Navbar/>
        <div className='projects-wrapper'>
            <h1 className="project">Projects</h1>
            <div className='projects-container'>
                <div className='project-card'>
                    <div className='project-card-img'>
                        <img src={todoApp} alt='todoApp'></img>
                    </div>
                    <div className='project-card-details'>
                        <h3 className='project-card-title'>JWT auth TodoApp</h3>
                        <p className='project-card-description'>A full stack todoApp using jwt token as authentication,I havent deployed the app yet but here is the github</p>
                        <div className='tools'>
                            <div className='tool'>React</div>
                            <div className='tool'>SpringBoot</div>
                            <div className='tool'>JWT</div>
                        </div>
                        <div className='card-buttons'>
                            <a href='https://github.com/Youuusseff/Todoapp' target='_blank' rel='noopener noreferrer'><button className="card-button button-c" role="button">Github</button></a>
                            <a href='#/projects' rel='noopener noreferrer'><button className="card-button button-l" role="button">Live Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-card-img'>
                        <img src={portfolio} id='portfolio' alt='portfolio'></img>
                    </div>
                    <div className='project-card-details'>
                        <h3 className='project-card-title'>Portfolio</h3>
                        <p className='project-card-description'>This is the documentation of my portfolio.</p>
                        <div className='tools'>
                            <div className='tool'>React</div>
                            <div className='tool'>React Router</div>
                        </div>
                        <div className='card-buttons'>
                            <a href='https://github.com/Youuusseff/Portfolio' target='_blank' rel='noopener noreferrer'><button className="card-button button-c" role="button">Github</button></a>
                            <Link to="/home" style={{textDecoration: 'none',color: 'inherit'}}><button className="card-button button-l" role="button">Live Demo</button></Link>
                        </div>
                    </div>
                </div>
                <div className='project-card' id='spotofy-card'>
                    <div className='project-card-img' id='spotify'>
                        <img src={spotify} alt='spotify'></img>
                    </div>
                    <img className='construction' src={construction}></img>
                    <div className='project-card-details'>
                        <h3 className='project-card-title'>Spotify Clone</h3>
                        <p className='project-card-description'>A Spotify clone which im building right now that implements the spotify dev api.</p>
                        <div className='tools'>
                            <div className='tool'>React</div>
                            <div className='tool'>Spotify Api</div>
                        </div>
                        <div className='card-buttons '>
                            <a href='#/projects' rel='noopener noreferrer'><button className="card-button button-c" role="button">Github</button></a>
                            <a href='#/projects' rel='noopener noreferrer'><button className="card-button button-l" role="button">Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
