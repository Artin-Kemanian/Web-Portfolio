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
      <Navbar />
      <Routes>
        <Route path="/Web-Portfolio" element={
          <>
            <App />
            <AboutMe /> {/* AboutMe aparece solo en la ruta "/" */}
          </>
        } />
        <Route path="/Web-Portfolio/abilities" element={<Abilities />} />
        <Route path="/Web-Portfolio/projects" element={<Projects />} />
        <Route path="/Web-Portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
