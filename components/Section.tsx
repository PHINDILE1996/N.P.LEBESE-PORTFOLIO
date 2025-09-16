
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-max">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] inline-block relative fade-in">
                {title}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[var(--primary-color)] rounded-full"></span>
            </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
