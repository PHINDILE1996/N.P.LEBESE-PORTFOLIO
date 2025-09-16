import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden" data-name="projects">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 opacity-50"></div>
      <div className="absolute inset-0 aurora-bg opacity-30"></div>
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] inline-block relative">
              Featured Projects
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[var(--primary-color)] rounded-full"></span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4">
              Showcasing my work in AI, accessibility, and technology innovation
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="card-glow overflow-hidden fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative h-48 overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`w-16 h-16 rounded-full ${project.color} flex items-center justify-center glow-effect`}>
                    <i className={`icofont-${project.icon} text-3xl text-white`}></i>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] pr-2">{project.title}</h3>
                  <span className="text-xs font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full flex-shrink-0">{project.status}</span>
                </div>
                
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs text-[var(--text-secondary)]">
                        <i className="icofont-check text-green-500 text-sm mr-2"></i>{feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.accessibility && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <i className="icofont-shield text-green-600 text-lg mr-2"></i>
                      <span className="text-xs font-semibold text-green-800">Accessibility Compliant</span>
                    </div>
                    <p className="text-xs text-green-700 mb-2">{project.accessibility.wcag}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] text-xs rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${project.title}`} className="btn-primary w-full text-sm">
                  <i className="icofont-external-link text-lg mr-2"></i>View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-[var(--text-secondary)] mb-4">Interested in collaborating or learning more about my work?</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
