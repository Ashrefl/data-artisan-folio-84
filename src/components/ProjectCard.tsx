
import React, { useState } from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'NoCode': 'bg-green-100 text-green-800',
      'Automation': 'bg-blue-100 text-blue-800',
      'MistralAI': 'bg-purple-100 text-purple-800',
      'Make': 'bg-orange-100 text-orange-800',
      'BigQuery': 'bg-yellow-100 text-yellow-800',
      'SQL': 'bg-indigo-100 text-indigo-800',
      'Looker': 'bg-pink-100 text-pink-800',
      'Dashboard': 'bg-cyan-100 text-cyan-800',
      'RStudio': 'bg-red-100 text-red-800',
      'Statistiques': 'bg-emerald-100 text-emerald-800',
      'KMeans': 'bg-violet-100 text-violet-800',
      'Recherche': 'bg-amber-100 text-amber-800',
      'ESS': 'bg-lime-100 text-lime-800',
      'Économie': 'bg-teal-100 text-teal-800',
      'Python': 'bg-blue-100 text-blue-800',
      'WebScraping': 'bg-slate-100 text-slate-800',
      'BeautifulSoup': 'bg-rose-100 text-rose-800',
      'PowerBI': 'bg-orange-100 text-orange-800',
      'Ventes': 'bg-green-100 text-green-800',
      'DataViz': 'bg-purple-100 text-purple-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
        isHovered ? 'ring-2 ring-blue-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-48 object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {project.title}
        </h3>
        
        <div className="overflow-hidden transition-all duration-300">
          <p className={`text-gray-600 mb-4 leading-relaxed transition-all duration-300 ${
            isHovered ? '' : 'line-clamp-3'
          }`}>
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)} transition-colors duration-200`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
