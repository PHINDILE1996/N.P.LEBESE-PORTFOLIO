import React from 'react';
import { ABOUT_STATS, CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  
  const certificationColorClasses = {
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', icon: 'bg-purple-500' },
    green: { bg: 'bg-green-100', text: 'text-green-700', icon: 'bg-green-500' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', icon: 'bg-orange-500' },
    red: { bg: 'bg-red-100', text: 'text-red-700', icon: 'bg-red-500' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-700', icon: 'bg-teal-500' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', icon: 'bg-indigo-500' },
  };

  return (
    <section id="about" className="section-padding bg-[var(--background-light)] relative overflow-hidden" data-name="about">
      <div className="absolute inset-0 wave-pattern opacity-50"></div>
      <div className="absolute inset-0 diamond-pattern opacity-10"></div>
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <div className="fade-in">
             <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] inline-block relative">
                About Me
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[var(--primary-color)] rounded-full"></span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4">
              Discover my journey in technology and passion for innovation
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="slide-in-left lg:col-span-3">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                Professional Summary
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Motivated and detail-oriented professional with experience in retail, marketing, and emerging 
                technologies such as AI, chatbot development, and data science. I bring a unique blend of 
                technical expertise and customer service excellence.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                My journey has taken me from customer-facing roles to the cutting edge of artificial intelligence, 
                where I've developed skills in machine learning, chatbot development, and data analytics. 
                I'm passionate about leveraging technology to create impactful solutions that make a difference.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-[var(--text-primary)]">Professional Certifications</h4>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 glow-effect">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 glow-effect">
                      <i className={`icofont-${CERTIFICATIONS.featured.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[var(--text-primary)]">{CERTIFICATIONS.featured.period}</h5>
                      <p className="text-blue-600 font-medium text-sm">{CERTIFICATIONS.featured.provider}</p>
                    </div>
                  </div>
                  <p className="text-[var(--primary-color)] font-bold mb-2">{CERTIFICATIONS.featured.title}</p>
                  <p className="text-[var(--text-secondary)] text-sm mb-3">{CERTIFICATIONS.featured.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {CERTIFICATIONS.featured.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {CERTIFICATIONS.grid.map((cert) => {
                     const colors = certificationColorClasses[cert.color as keyof typeof certificationColorClasses];
                     return (
                      <div key={cert.title} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 ${colors.icon} rounded-lg flex items-center justify-center mr-3`}>
                            <i className={`icofont-${cert.icon} text-white text-base`}></i>
                          </div>
                          <h6 className="font-semibold text-[var(--text-primary)] text-sm">{cert.title}</h6>
                        </div>
                        <p className="text-[var(--text-secondary)] text-xs mb-2">{cert.provider}</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map(skill => (
                             <span key={skill} className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs rounded`}>{skill}</span>
                          ))}
                        </div>
                      </div>
                     )
                  })}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h6 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">Additional Certifications</h6>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-[var(--text-secondary)]">
                    {CERTIFICATIONS.additional.map(cert => (
                      <div key={cert} className="flex items-center">
                        <i className="icofont-check text-green-500 text-sm mr-2"></i>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">Location</h4>
                  <p className="text-[var(--text-secondary)]">Vosloorus, South Africa</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">Availability</h4>
                  <p className="text-green-600 font-medium">Available for opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="mt-16 slide-in-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_STATS.map((stat, index) => (
              <div key={index} className="text-center p-6 card-glow bg-white" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-12 h-12 mx-auto mb-4 bg-[var(--primary-color)] rounded-lg flex items-center justify-center glow-effect`}>
                  <i className={`icofont-${stat.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">{stat.number}</div>
                <div className="text-[var(--text-secondary)] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;