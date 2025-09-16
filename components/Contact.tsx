import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden" data-name="contact">
      <div className="absolute inset-0 wave-pattern opacity-80"></div>
      <div className="absolute inset-0 floating-orbs opacity-30"></div>
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] inline-block relative">
              Get In Touch
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[var(--primary-color)] rounded-full"></span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4">
              Ready to collaborate or discuss opportunities? I'd love to hear from you!
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Let's Connect</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  I'm currently available for new opportunities and exciting projects in AI, 
                  data science, and technology innovation. Whether you're looking for collaboration, 
                  consultation, or just want to discuss the latest in artificial intelligence, I'm here to help.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Feel free to reach out through any of the channels listed, and I'll get back 
                  to you as soon as possible. Let's create something amazing together!
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-lg flex items-center justify-center mr-3">
                    <i className="icofont-star text-white text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Available for</h4>
                </div>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  {['Full-time opportunities', 'Project collaborations', 'Consulting work', 'Speaking engagements'].map(item => (
                    <li key={item} className="flex items-center">
                      <i className="icofont-check text-green-500 text-lg mr-2"></i>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="slide-in-right">
            <div className="space-y-6">
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className="card-glow p-6 fade-in hover:scale-105 transition-transform" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mr-4 glow-effect flex-shrink-0`}>
                      <i className={`icofont-${item.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors font-medium break-all">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[var(--text-secondary)]">{item.value}</span>
                      )}
                    </div>
                    {item.href && (
                      <i className="icofont-external-link text-[var(--text-secondary)] text-lg ml-2"></i>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
