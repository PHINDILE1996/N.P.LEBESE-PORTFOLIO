import React from 'react';
import { SKILL_CATEGORIES, TOOLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-[var(--background-light)] relative overflow-hidden" data-name="skills">
      <div className="absolute inset-0 tech-bg-pattern opacity-50"></div>
      <div className="absolute inset-0 particles-bg opacity-10"></div>
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] inline-block relative">
              Skills & Expertise
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[var(--primary-color)] rounded-full"></span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4">
              Technical expertise and professional competencies I've developed
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div key={catIndex} className="card-glow p-6 fade-in" style={{ animationDelay: `${catIndex * 0.2}s` }}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 glow-effect flex-shrink-0`}>
                  <i className={`icofont-${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
                      <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                           style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8 fade-in" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Tools & Technologies</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TOOLS.map((tool, index) => (
            <div key={index} className="text-center p-4 card-glow fade-in hover:scale-105 transition-transform" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg border flex items-center justify-center">
                <i className={`icofont-${tool.icon} text-3xl text-[var(--primary-color)]`}></i>
              </div>
              <span className="text-sm font-medium text-[var(--text-primary)]">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;