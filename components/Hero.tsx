
import React from 'react';

// Add this declaration for TypeScript to recognize jspdf on the window object
declare global {
  interface Window {
    jspdf: any;
  }
}

const Hero: React.FC = () => {

  const handleDownloadCv = () => {
    const cvText = `
Norah Phindile Lebese

== CONTACT INFORMATION ==
Email: lebesephindile46@gmail.com
Phone: 0631337955 / 0649031568
Address: 12272 Leeba Street, Ext 14 Tongaat, Vosloorus
LinkedIn: linkedin.com/in/norah-phindile-lebese-4793b0379/

== PROFESSIONAL SUMMARY ==
Motivated and detail-oriented professional with experience in retail, marketing, and emerging technologies such as AI, chatbot development, and data science. Skilled in customer service, sales, project execution, and problem-solving. Passionate about leveraging technology to create impactful solutions.

== PROFESSIONAL EXPERIENCE ==

CAPACITI – Tech Career Accelerator | ADS Intern | 2025
- Completed intensive training in Data Science, AI, and related technologies.
- Developed projects applying machine learning, chatbot development, and data analytics.
- Collaborated with peers on portfolio-building and career development projects.
- Enhanced problem-solving and technical skills through capstone projects.

AGM Marketing | Marketing Assistant | Jan 2021 – Jul 2022
- Conducted telemarketing and direct marketing campaigns.
- Handled outbound sales calls, lead generation, and customer satisfaction surveys.
- Explained products, prices, and secured customer information.
- Maintained accurate customer contact records.

Checkers Hyper | Floor Assistant | Jan 2019 – Jul 2019
- Assisted customers with directions, product locations, and promotions.
- Supported sales through upselling and cross-selling techniques.
- Replenished inventory and maintained store presentation.
- Multi-tasked effectively, balancing responsibilities with customer satisfaction.

Woolworths | Till Operator | Nov 2015 – Apr 2018
- Delivered exceptional customer service ensuring positive shopping experiences.
- Maintained strong product knowledge to assist and recommend to customers.
- Processed transactions accurately and efficiently.
- Supported sales growth by meeting and exceeding targets.
- Contributed to store organization, merchandising, and team collaboration.

== EDUCATION & CERTIFICATIONS ==

Formal Education:
- Diploma in Information Technology (NQF6) – Richfield, 2024
- Project Management (NQF5) – ApexU, 2024
- Business Administration (NQF4) – Richfield, 2020

Professional Certifications:
- AI For Everyone
- Introduction to Artificial Intelligence (AI)
- Introduction to Generative AI
- AI Essentials
- Python for Data Science, AI & Development
- Building AI Powered Chatbots Without Programming
- Generative AI with Large Language Models
- Introduction to Responsible AI
- Trustworthy AI: Managing Bias, Ethics, and Accountability
- Artificial Intelligence on Microsoft Azure
- AI Foundations: Prompt Engineering with ChatGPT

== SKILLS ==

Technical Skills:
- AI & Machine Learning
- Generative AI
- Data Science
- Python
- Chatbot Development
- Voiceflow, Framer, Cohere

Business Skills:
- Customer Service
- Sales
- Telemarketing
- Lead Generation
- Project Management

Soft Skills:
- Problem-Solving
- Communication
- Teamwork
- Adaptability
- Decision-Making

== PORTFOLIO & PROJECTS ==
- LearnAI-WITH_PHINDI: AI educational chatbot for beginners
- Accessible Education Prototype (Framer): Designed for kids with disabilities
- API Documentation & Trade-Off Analysis: Technical writing and evaluation

== OTHER EXPERIENCE & PROJECTS ==
- Designed and developed AI educational chatbot prototypes using no-code tools (Voiceflow, Framer, Cohere)
- Created conversational flows for AI learning chatbots targeting beginners
- Designed accessible educational tools for kids with disabilities

---
Professional CV • Available for immediate employment opportunities
    `.trim();

    if (!window.jspdf) {
      alert("PDF generation library is still loading. Please try again in a moment.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const margin = 15;
    const usableWidth = doc.internal.pageSize.getWidth() - (margin * 2);
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = 20;

    const checkAndAddPage = () => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = 20; // Reset y for new page
      }
    };

    const lines = cvText.split('\n');

    lines.forEach(line => {
      let size = 10;
      let style = 'normal';
      let indent = 0;
      let lineHeight = 5;

      if (line.trim() === '') {
        y += lineHeight / 2; // Add a small space for empty lines
        return;
      }
      
      if (line.startsWith('Norah Phindile Lebese')) {
        size = 20;
        style = 'bold';
        lineHeight = 10;
      } else if (line.startsWith('== ')) {
        size = 14;
        style = 'bold';
        line = line.replace(/==/g, '').trim();
        lineHeight = 8;
        y += 5; // Space before header
      } else if (line.includes(' | ')) {
        size = 11;
        style = 'bold';
        lineHeight = 6;
      } else if (line.startsWith('- ')) {
        line = '•' + line.substring(1); // Replace hyphen with a bullet
        indent = 5;
        lineHeight = 6;
      } else if (line.startsWith('Professional CV')) {
        style = 'italic';
        size = 9;
        lineHeight = 5;
        y += 10;
      }

      doc.setFontSize(size);
      doc.setFont('helvetica', style);

      const splitLines = doc.splitTextToSize(line, usableWidth - indent);
      
      splitLines.forEach((splitLine: string) => {
        checkAndAddPage();
        doc.text(splitLine, margin + indent, y);
        y += lineHeight;
      });
    });

    doc.save('Norah_Phindile_Lebese_CV.pdf');
  };

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
                onClick={handleDownloadCv}
                className="px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium 
                         transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white glow-effect flex items-center justify-center"
              >
                <i className="icofont-download text-lg mr-2 inline-block"></i>
                Download CV
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium 
                         transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white glow-effect flex items-center justify-center"
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