import React from 'react';

const Glossary = () => {
  const terms = [
    {
      term: "Asteroid",
      definition: "A small rocky body orbiting the Sun, mostly found in the asteroid belt between Mars and Jupiter. Larger than meteoroids but smaller than planets."
    },
    {
      term: "Black Hole",
      definition: "A region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation like light—can escape from it."
    },
    {
      term: "Comet",
      definition: "An icy small Solar System body that, when passing close to the Sun, heats up and begins to outgas, displaying a visible atmosphere or coma, and sometimes also a tail."
    },
    {
      term: "Exoplanet",
      definition: "A planet that orbits a star outside our solar system. Thousands have been discovered in recent years, some in the habitable zone of their stars."
    },
    {
      term: "Galaxy",
      definition: "A gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. Our solar system is in the Milky Way galaxy."
    },
    {
      term: "Light-year",
      definition: "The distance that light travels in one year, about 9.46 trillion kilometers (5.88 trillion miles). Used to measure vast distances in space."
    },
    {
      term: "Nebula",
      definition: "A giant cloud of dust and gas in space. Some nebulae come from the gas and dust thrown out by the explosion of a dying star, while others are regions where new stars are beginning to form."
    },
    {
      term: "Orbit",
      definition: "The gravitationally curved trajectory of an object, such as the path of a planet around a star or a natural satellite around a planet."
    },
    {
      term: "Supernova",
      definition: "A powerful and luminous stellar explosion that occurs during the last evolutionary stages of a massive star or when a white dwarf is triggered into runaway nuclear fusion."
    }
  ];

  return (
    <section id="glossary" className="py-20 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">ASTRONOMY GLOSSARY</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Key terms and concepts to help you understand the language of space science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((item, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 border border-indigo-900">
              <h3 className="text-xl font-bold text-white mb-3">{item.term}</h3>
              <p className="text-gray-300">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glossary;