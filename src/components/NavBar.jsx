import React, { useState } from 'react';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black bg-opacity-80 backdrop-blur-md border-b border-indigo-900 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-white glow-text">COSMIC EXPLORER</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#home" className="text-indigo-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="#solar-system" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solar System</a>
                  <a href="#exploration" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Exploration</a>
                  <a href="#glossary" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Glossary</a>
                  <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-black bg-opacity-70 text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`${mobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-90 z-40 pt-20`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-white">Home</a>
          <a href="#solar-system" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Solar System</a>
          <a href="#exploration" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Exploration</a>
          <a href="#glossary" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Glossary</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">About</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;