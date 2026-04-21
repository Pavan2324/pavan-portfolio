
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Users, MapPin, ArrowUpRight } from 'lucide-react';

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
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-200">PT</div>
          <span className="hidden sm:inline tracking-tighter">Pavan Tiwari</span>
        </a>
        <ul className="flex gap-6 md:gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest"
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
    <footer className="bg-slate-900 text-white py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black">PT</div>
            <h3 className="text-2xl font-bold tracking-tighter">Pavan Tiwari</h3>
          </div>
          <p className="text-slate-400 max-w-sm mb-10 leading-relaxed font-medium">
            Applied AI Engineer specialized in creating predictive models that drive business innovation and measurable impact.
          </p>
          <div className="flex gap-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all hover:-translate-y-1">
               <Mail className="w-5 h-5 text-white" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all hover:-translate-y-1">
              <Users className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        <div id="contact" className="flex flex-col md:items-end">
          <h3 className="text-xl font-bold mb-6 text-indigo-400 uppercase tracking-widest text-sm">Strategic Connect</h3>
          <div className="space-y-4 text-left md:text-right">
            <div className="flex items-center md:justify-end gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-indigo-400 font-bold text-lg md:text-2xl transition-colors block border-b-2 border-indigo-600 pb-1">
              {PERSONAL_INFO.email}
            </a>
            <p className="text-slate-500 text-sm font-medium pt-4">Available for tactical AI roles & collaborative research.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800/50 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Pavan Tiwari. Built with Precision.</p>
        <div className="flex gap-8">
           <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-white transition-colors">GitHub Artifacts</a>
           <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-white transition-colors">Digital Identity</a>
        </div>
      </div>
    </footer>
  );
};
