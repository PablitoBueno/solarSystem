import React from 'react';

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      style={{ 
        backgroundImage: `url('images/home.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay escuro para melhor contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text">EXPLORE OUR COSMIC NEIGHBORHOOD</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Journey through our solar system and discover the wonders of space exploration. Learn about planets, missions, and the pioneers who expanded our cosmic horizons.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#solar-system" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition duration-300 transform hover:scale-105">
            Begin Exploration
          </a>
          <a href="#exploration" className="px-8 py-3 border border-indigo-500 text-indigo-300 hover:text-white hover:bg-indigo-900 hover:bg-opacity-30 font-medium rounded-full transition duration-300 transform hover:scale-105">
            Space Missions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;