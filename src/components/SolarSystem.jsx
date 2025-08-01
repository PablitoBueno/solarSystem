import React from 'react';
import PlanetCard from './PlanetCard';

const SolarSystem = () => {
  const planets = [
    {
      name: "The Sun",
      gradient: "from-yellow-600 to-red-800",
      color: "yellow-400",
      diameter: "1.39M km",
      temp: "5,500°C",
      type: "G-type star",
      facts: [
        "Contains 99.86% of the solar system's mass",
        "Light takes 8 minutes to reach Earth",
        "About 4.6 billion years old"
      ]
    },
    {
      name: "Mercury",
      gradient: "from-gray-700 to-gray-900",
      color: "gray-500",
      diameter: "4,880 km",
      distance: "57.9M km",
      temp: "-173°C to 427°C",
      facts: [
        "Smallest planet in our solar system",
        "No moons or rings",
        "Year: 88 Earth days"
      ]
    },
    {
      name: "Venus",
      gradient: "from-yellow-700 to-orange-900",
      color: "yellow-400",
      diameter: "12,104 km",
      distance: "108.2M km",
      temp: "462°C",
      facts: [
        "Hottest planet in our solar system",
        "Rotates backwards (retrograde rotation)",
        "Day longer than its year"
      ]
    },
    {
      name: "Earth",
      gradient: "from-blue-700 to-blue-900",
      color: "blue-500",
      diameter: "12,742 km",
      distance: "149.6M km",
      temp: "-88°C to 58°C",
      facts: [
        "Only known planet with liquid water",
        "Home to millions of species",
        "One moon (Luna)"
      ]
    },
    {
      name: "Mars",
      gradient: "from-red-800 to-red-900",
      color: "red-500",
      diameter: "6,779 km",
      distance: "227.9M km",
      temp: "-153°C to 20°C",
      facts: [
        "Known as the Red Planet",
        "Two moons (Phobos & Deimos)",
        "Largest volcano in solar system (Olympus Mons)"
      ]
    },
    {
      name: "Jupiter",
      gradient: "from-orange-700 to-orange-900",
      color: "orange-400",
      diameter: "139,820 km",
      distance: "778.3M km",
      temp: "-108°C",
      facts: [
        "Largest planet in our solar system",
        "79 known moons",
        "Great Red Spot (giant storm)"
      ]
    },
    {
      name: "Saturn",
      gradient: "from-yellow-600 to-yellow-800",
      color: "yellow-300",
      diameter: "116,460 km",
      distance: "1.4B km",
      temp: "-139°C",
      facts: [
        "Famous for its ring system",
        "82 known moons",
        "Less dense than water"
      ]
    },
    {
      name: "Uranus",
      gradient: "from-teal-700 to-teal-900",
      color: "teal-400",
      diameter: "50,724 km",
      distance: "2.9B km",
      temp: "-197°C",
      facts: [
        "Rotates on its side (98° tilt)",
        "27 known moons",
        "Discovered in 1781"
      ]
    },
    {
      name: "Neptune",
      gradient: "from-blue-700 to-blue-900",
      color: "blue-400",
      diameter: "49,244 km",
      distance: "4.5B km",
      temp: "-201°C",
      facts: [
        "Windiest planet (2,100 km/h winds)",
        "14 known moons",
        "Discovered through math in 1846"
      ]
    }
  ];

  return (
    <section id="solar-system" className="py-20 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">OUR SOLAR SYSTEM</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our solar system consists of the Sun and everything bound to it by gravity - planets, moons, asteroids, comets and meteoroids.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarSystem;