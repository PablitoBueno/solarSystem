import React from 'react';

const Exploration = () => {
  const missions = [
    {
      name: "Apollo 11",
      image: "Apollo11.jpeg",
      launch: "July 16, 1969",
      crew: "Armstrong, Aldrin, Collins",
      agency: "NASA",
      description: "First manned mission to land on the Moon. Neil Armstrong and Buzz Aldrin became the first humans to walk on the lunar surface while Michael Collins orbited above."
    },
    {
      name: "Voyager Program",
      image: "VoyagerProgram.jpeg",
      launch: "1977 (Voyager 1 & 2)",
      status: "Still operational",
      agency: "NASA",
      description: "Twin spacecraft that explored the outer planets and continue to send data from interstellar space. Voyager 1 is the most distant human-made object from Earth."
    },
    {
      name: "James Webb Telescope",
      image: "JamesWebb.jpeg",
      launch: "December 25, 2021",
      orbit: "L2 Lagrange point",
      agency: "NASA/ESA/CSA",
      description: "The most powerful space telescope ever built, designed to observe the most distant objects in the universe, peer through dust clouds, and study exoplanet atmospheres."
    },
    {
      name: "International Space Station",
      image: "InternationalSpaceStation.jpeg",
      launch: "1998 (first module)",
      orbit: "400 km altitude",
      partners: "5 space agencies",
      description: "A habitable artificial satellite in low Earth orbit that serves as a microgravity and space environment research laboratory where scientific research is conducted."
    },
    {
      name: "SpaceX",
      image: "SpaceX.jpeg",
      founded: "2002",
      ceo: "Elon Musk",
      achievement: "Reusable rockets",
      description: "Private aerospace manufacturer and space transportation company that developed the Falcon launch vehicles and Dragon spacecraft, pioneering reusable rocket technology."
    },
    {
      name: "Pioneering Astronauts",
      image: "PioneeringAstronauts.jpeg",
      gagarin: "First human in space (1961)",
      armstrong: "First Moon walk (1969)",
      tereshkova: "First woman in space (1963)",
      description: "The brave men and women who ventured into the unknown, pushing the boundaries of human exploration and expanding our understanding of space."
    }
  ];

  return (
    <section id="exploration" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">SPACE EXPLORATION</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Humanity's journey beyond Earth through robotic probes, telescopes, and human spaceflight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-70 rounded-xl overflow-hidden border border-indigo-900 transition duration-300 hover:border-indigo-500">
              {/* Área da imagem */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={`images/${mission.image}`} 
                  alt={mission.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{mission.name}</h3>
                
                <div className="text-sm text-gray-400 mb-4">
                  {mission.launch && (
                    <div className="flex justify-between mb-1">
                      <span>Launch:</span> 
                      <span className="text-white">{mission.launch}</span>
                    </div>
                  )}
                  {mission.founded && (
                    <div className="flex justify-between mb-1">
                      <span>Founded:</span> 
                      <span className="text-white">{mission.founded}</span>
                    </div>
                  )}
                  {mission.crew && (
                    <div className="flex justify-between mb-1">
                      <span>Crew:</span> 
                      <span className="text-white">{mission.crew}</span>
                    </div>
                  )}
                  {mission.status && (
                    <div className="flex justify-between mb-1">
                      <span>Status:</span> 
                      <span className="text-white">{mission.status}</span>
                    </div>
                  )}
                  {mission.orbit && (
                    <div className="flex justify-between mb-1">
                      <span>Orbit:</span> 
                      <span className="text-white">{mission.orbit}</span>
                    </div>
                  )}
                  {mission.partners && (
                    <div className="flex justify-between mb-1">
                      <span>Partners:</span> 
                      <span className="text-white">{mission.partners}</span>
                    </div>
                  )}
                  {mission.ceo && (
                    <div className="flex justify-between mb-1">
                      <span>CEO:</span> 
                      <span className="text-white">{mission.ceo}</span>
                    </div>
                  )}
                  {mission.achievement && (
                    <div className="flex justify-between mb-1">
                      <span>Achievement:</span> 
                      <span className="text-white">{mission.achievement}</span>
                    </div>
                  )}
                  {mission.gagarin && (
                    <div className="flex justify-between mb-1">
                      <span>Yuri Gagarin:</span> 
                      <span className="text-white">{mission.gagarin}</span>
                    </div>
                  )}
                  {mission.armstrong && (
                    <div className="flex justify-between mb-1">
                      <span>Neil Armstrong:</span> 
                      <span className="text-white">{mission.armstrong}</span>
                    </div>
                  )}
                  {mission.tereshkova && (
                    <div className="flex justify-between">
                      <span>Valentina Tereshkova:</span> 
                      <span className="text-white">{mission.tereshkova}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-300">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exploration;