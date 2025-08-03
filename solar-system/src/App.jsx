import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SolarSystem from './components/SolarSystem';
import Exploration from './components/Exploration';
import Glossary from './components/Glossary';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen star-bg">
      <NavBar />
      <main>
        <Home />
        <SolarSystem />
        <Exploration />
        <Glossary />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;