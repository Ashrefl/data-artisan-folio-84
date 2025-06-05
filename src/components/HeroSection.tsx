
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Étudiant en data & IA, passionné par l'automatisation, l'analyse de données et les projets à impact.";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Limem Achraf
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
            Marketing Data Analyst
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="block">Data &</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intelligence
            </span>
            <span className="block">Artificielle</span>
          </h2>
        </div>

        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed min-h-[3rem]">
            {animatedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
          >
            Découvrir mes projets
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
          >
            Me contacter
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
