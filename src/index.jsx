import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutMe from './components/AboutMe';
import Abilities from './components/Abilities';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div class="app-container">
        <Navbar />
        <div class="main">
          <Routes>
            <Route path="/Web-Portfolio" element={
              <>
                <App />
                <AboutMe />
              </>
            } />
            <Route path="/Web-Portfolio/abilities" element={
              <>
                <App />
                <Abilities />
              </>
            } />
            <Route path="/Web-Portfolio/projects" element={
              <>
                <App />
                <Projects />
              </>
            } />
            <Route path="/Web-Portfolio/contact" element={
              <>
                <App />
                <Contact />
              </>
            } />
          </Routes>          
        </div>
        <Footer class="footer" />
      </div>

    </Router>
  </React.StrictMode>
);

reportWebVitals();
