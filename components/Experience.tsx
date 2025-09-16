import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden" data-name="experience">
      <div className="absolute inset-0 aurora-bg opacity-50"></div>
      <div className="absolute inset-0 floating-orbs opacity-30"></div>
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] inline-block relative">
              Professional Experience
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[var(--primary-color)] rounded-full"></span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4">
              My career journey from customer service to AI and data science
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--primary-color)] opacity-30 hidden lg:block"></div>
          
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className={`relative mb-12 fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`flex items-center flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="card-glow p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center mr-4 glow-effect flex-shrink-0`}>
                        <i className={`icofont-${exp.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">{exp.title}</h3>
                        <p className="text-[var(--primary-color)] font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-4 font-medium">{exp.period}</p>
                    <ul className="space-y-2 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-[var(--text-secondary)] flex items-start">
                          <i className="icofont-check text-green-500 text-base mr-2 mt-1 flex-shrink-0"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary-color)] rounded-full border-4 border-white glow-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
