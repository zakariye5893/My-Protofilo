import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import SkillsPage from './Pages/SkillsPage';
import ProjectPage from './Pages/ProjectPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Home/> 
       <AboutPage/>
       <SkillsPage/>
       <ProjectPage/>
       <ContactPage/>
    
  </React.StrictMode>,
)



