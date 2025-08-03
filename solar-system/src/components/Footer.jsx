import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 border-t border-indigo-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">COSMIC EXPLORER</span>
            <p className="text-gray-400 text-sm mt-1">Exploring our solar system and beyond</p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white">Home</a>
            <a href="#solar-system" className="text-gray-400 hover:text-white">Solar System</a>
            <a href="#exploration" className="text-gray-400 hover:text-white">Exploration</a>
            <a href="#glossary" className="text-gray-400 hover:text-white">Glossary</a>
            <a href="#about" className="text-gray-400 hover:text-white">About</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2023 Cosmic Explorer. All content based on publicly available scientific data.</p>
          <p className="mt-2">This is an educational project and not affiliated with any space agency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;