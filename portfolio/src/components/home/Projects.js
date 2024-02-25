import React from 'react'
import todoApp from './assets/todo.png'
import Navbar from './Navbar'
import './Projects.css'
function Projects() {
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
                        <h3 className='project-card-title'>JWT auth todoApp</h3>
                        <p className='project-card-description'>A full stack todoApp using jwt token as authentication,</p>
                        <div className='tools'>
                            <div className='tool'>React</div>
                            <div className='tool'>SpringBoot</div>
                            <div className='tool'>JWT</div>
                        </div>
                        <div className='card-buttons'>
                            <a href='#' target='_blank' rel='noopener noreferrer'><button className="card-button" role="button">Github</button></a>
                            <a href='#' target='_blank' rel='noopener noreferrer'><button className="card-button" role="button">Live Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-card-img'>
                        <img src={todoApp} alt='campingTent'></img>
                    </div>
                    <div className='project-card-details'>
                        <h3 className='project-card-title'>Camping Tent</h3>
                        <p className='project-card-description'>A camping tent application built with React, Redux, and Redux-Saga.</p>
                        <div className='tools'>
                            <div className='tool'>React</div>
                            <div className='tool'>SpringBoot</div>
                            <div className='tool'>JWT</div>
                        </div>
                        <div className='card-buttons'>
                            <a href='#' target='_blank' rel='noopener noreferrer'><button className="card-button" role="button">Github</button></a>
                            <a href='#' target='_blank' rel='noopener noreferrer'><button className="card-button" role="button">Live Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-card-img'>
                        <img src={todoApp} alt='campingTent'></img>
                    </div>
                    <div className='project-card-details'>
                        <h3 className='project-card-title'>Camping Tent</h3>
                        <p className='project-card-description'>A camping tent application built with React, Redux, and Redux-Saga.</p>
                        <div className='tools'>
                            <div className='tool'>React</div>
                            <div className='tool'>SpringBoot</div>
                            <div className='tool'>JWT</div>
                        </div>
                        <div className='card-buttons'>
                            <a href='#' target='_blank' rel='noopener noreferrer'><button className="card-button" role="button">Github</button></a>
                            <a href='#' target='_blank' rel='noopener noreferrer'><button className="card-button" role="button">Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
