
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations en data science, intelligence artificielle et automatisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${project.id * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl">
            Voir plus de projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
