
import React, { useState } from 'react';
import { NAVIGATION_ITEMS } from '../constants';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm" 
            data-name="header" data-file="components/Header.js">
      <div className="container-max">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 fade-in">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center glow-effect">
              <span className="text-white font-bold text-lg">NL</span>
            </div>
            <span className="font-semibold text-[var(--text-primary)] text-lg">Norah Lebese</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 fade-in hover:text-[var(--primary-color)] ${
                  activeSection === item.id 
                    ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' 
                    : 'text-[var(--text-secondary)]'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--text-primary)]"
          >
            <i className={`text-2xl ${isMenuOpen ? 'icofont-close' : 'icofont-navigation-menu'}`}></i>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-[var(--primary-color)] bg-blue-50' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
