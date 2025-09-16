import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Section from './components/Section';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        
        <Section id="repositories" title="GitHub Repositories" className="bg-[var(--background-light)] text-center">
            <p className="text-lg mb-8 max-w-2xl mx-auto">Explore my code and projects on GitHub to see my skills in action.</p>
            <a href="https://github.com/PHINDILE1996" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
                <i className="icofont-github text-xl mr-2"></i>
                Visit My GitHub Profile
            </a>
        </Section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;