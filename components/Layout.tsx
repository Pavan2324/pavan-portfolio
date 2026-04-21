
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">PT</div>
          <span className="hidden sm:inline">Pavan Tiwari</span>
        </a>
        <ul className="flex gap-6 md:gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Pavan Tiwari</h3>
          <p className="text-slate-400 max-w-sm mb-6">
            Data Scientist specialized in creating predictive models that drive business innovation and measurable impact.
          </p>
          <div className="flex gap-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors" title="Email">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
        <div id="contact" className="flex flex-col md:items-end">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="text-slate-400 mb-2">{PERSONAL_INFO.location}</p>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-400 mb-2 hover:text-indigo-400 transition-colors">
            {PERSONAL_INFO.phone}
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-indigo-400 hover:text-indigo-300 font-medium">
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Pavan Tiwari. All rights reserved.</p>
      </div>
    </footer>
  );
};
