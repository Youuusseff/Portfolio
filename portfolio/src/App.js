import './components/home/App.css';
import Navbar from './components/home/Navbar';
import React, { useEffect } from 'react';
import Home from './components/home/Home';
import WelcomeAnimation from './components/home/welcome';
import About from './components/home/About';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to the welcome animation if the user reloads on the home or about route
  useEffect(() => {
    navigate("/"); 
  }, []);
  
  return (
    <div className='.App'>
      <Routes>
        <Route path='/' element={<WelcomeAnimation/>}/>
        <Route path='/home' element={<Home location={location}/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
