
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden"
             data-name="hero" data-file="components/Hero.js">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 particles-bg opacity-10"></div>
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                Hi, I am{' '}
                <span className="text-[var(--primary-color)] pulse-glow inline-block">Norah Phindile Lebese</span>
              </h1>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed max-w-3xl">
                I am a dedicated and versatile professional with a Diploma in Information Technology, 
                an NQF Level 5 qualification in Project Management, and an NQF Level 4 in Business Administration. 
                My foundation combines strong technical knowledge, organizational skills, and business acumen.
              </p>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed max-w-3xl">
                Most recently, I completed a 2-month AI Bootcamp, where I explored cutting-edge technologies 
                and earned certifications from leading institutions:
              </p>
            </div>

            <div className="fade-in mb-6" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 max-w-3xl shadow-md">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="icofont-graduate-alt text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Macquarie University</h4>
                      <p className="text-[var(--text-secondary)] text-sm">Negotiation Skills – focusing on communication, leadership, and conflict resolution.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="icofont-cloud-upload text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Microsoft</h4>
                      <p className="text-[var(--text-secondary)] text-sm">Artificial Intelligence on Azure – covering cloud platforms, machine learning algorithms, and compliance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="icofont-code text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">IBM</h4>
                      <p className="text-[var(--text-secondary)] text-sm">Python for Data Science, AI & Development – strengthening programming and data analytics skills.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-3xl">
                I am passionate about applying AI, project management, and IT expertise to solve real-world problems and drive digital transformation.
              </p>
            </div>
            
            <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" 
                 style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <i className="icofont-briefcase-1 text-lg mr-2 inline-block"></i>
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium 
                         transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white glow-effect"
              >
                <i className="icofont-email text-lg mr-2 inline-block"></i>
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="slide-in-right">
              <div className="relative">
                <div className="w-[400px] h-[400px] rounded-3xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] p-1 glow-effect">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white">
                    <img 
                      src="https://app.trickle.so/storage/public/images/usr_1523792d18000001/eed82644-8037-4677-baf4-44d2fe11b583.jpeg"
                      alt="Norah Phindile Lebese"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-[var(--accent-color)] text-white px-3 py-1.5 rounded-full text-sm font-medium glow-effect pulse-glow shadow-lg">
                  AI Expert
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium glow-effect pulse-glow shadow-lg" style={{ animationDelay: '1s' }}>
                  Data Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
