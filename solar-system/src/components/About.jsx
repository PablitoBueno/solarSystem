import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">ABOUT COSMIC EXPLORER</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
        </div>

        <div className="bg-gray-900 bg-opacity-70 rounded-xl p-8 border border-indigo-900">
          <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-gray-300 mb-6">
            Cosmic Explorer is an educational project designed to inspire curiosity about our solar system and space exploration. Our goal is to make astronomy accessible and engaging for learners of all ages, with accurate, up-to-date information presented in an intuitive, visually compelling format.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-6">Data Sources</h3>
          <p className="text-gray-300 mb-6">
            All information on this site is sourced from publicly available data provided by space agencies and scientific organizations, including:
          </p>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>NASA (National Aeronautics and Space Administration)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>ESA (European Space Agency)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Public domain astronomical databases</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Peer-reviewed scientific publications</span>
            </li>
          </ul>
          
          <h3 className="text-2xl font-bold text-white mb-6">Project Information</h3>
          <p className="text-gray-300">
            This website was created as an educational resource by astronomy enthusiasts. While we strive for accuracy, astronomy is a rapidly evolving field, and new discoveries may update our understanding of the cosmos. We welcome feedback and suggestions for improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;