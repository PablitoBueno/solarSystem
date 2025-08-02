// PlanetCard.jsx
import React from 'react';

const PlanetCard = ({ planet }) => {
  return (
    <div className="bg-gray-900 bg-opacity-70 rounded-xl overflow-hidden border border-indigo-900 planet-card transition duration-300">
      <div className={`h-48 bg-gradient-to-b ${planet.gradient} flex items-center justify-center`}>
        {planet.image ? (
          <img
            src={planet.image}
            alt={planet.name}
            className="w-24 h-24 object-contain rounded-full shadow-md"
          />
        ) : (
          <div className={`w-24 h-24 rounded-full bg-${planet.color} ${planet.name === "The Sun" ? 'shadow-lg shadow-yellow-500/50' : ''} relative`}>
            {planet.name === "Saturn" && (
              <div className="absolute inset-0 rounded-full border-4 border-yellow-500 opacity-70"></div>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{planet.name}</h3>
        <div className="text-sm text-gray-400 mb-4">
          {planet.distance && (
            <div className="flex justify-between mb-1">
              <span>Distance from Sun:</span> 
              <span className="text-white">{planet.distance}</span>
            </div>
          )}
          <div className="flex justify-between mb-1">
            <span>Diameter:</span> 
            <span className="text-white">{planet.diameter}</span>
          </div>
          <div className="flex justify-between">
            <span>{planet.type ? "Type:" : "Surface Temp:"}</span> 
            <span className="text-white">{planet.temp || planet.type}</span>
          </div>
        </div>
        <ul className="text-sm text-gray-300 space-y-1">
          {planet.facts.map((fact, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-4 w-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanetCard;
