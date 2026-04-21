
import React from 'react';
import { Header, Footer } from './components/Layout';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, ACHIEVEMENTS } from './constants';
import AIChat from './components/AIChat';
import { motion } from 'motion/react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {PERSONAL_INFO.title}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light italic">
              "{PERSONAL_INFO.headline}"
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1">
                Contact Me
              </a>
              <div className="flex gap-4">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all hover:-translate-y-1 flex items-center gap-2" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all hover:-translate-y-1 flex items-center gap-2" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 relative z-10">
                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                Professional Summary
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap relative z-10">
                {PERSONAL_INFO.summary}
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/pavan/800/800" 
                alt="Professional portrait" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Stats Decorations */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="text-3xl font-bold text-indigo-600">5+ Years</div>
              <div className="text-slate-500 text-sm">Industry Experience</div>
            </div>
            <div className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block text-right">
              <div className="text-3xl font-bold text-emerald-600">₹170 Cr+</div>
              <div className="text-slate-500 text-sm">Business Impact</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-slate-600">My journey through high-impact roles in Data Science and Applied AI Engineering.</p>
          </div>
          <div className="space-y-12 max-w-5xl mx-auto">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full whitespace-nowrap block mb-1">
                        {exp.period}
                      </span>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{exp.duration}</p>
                    </div>
                  </div>
                  
                  {exp.details && (
                    <ul className="space-y-3 mb-6">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex gap-3 text-slate-600 leading-relaxed">
                          <span className="text-indigo-600 shrink-0 mt-1.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {exp.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Projects</h2>
            <p className="text-slate-600">Selected work showcasing my expertise in ML, Deep Learning, and GenAI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{project.description}</p>
                {project.details && (
                  <div className="flex flex-wrap gap-2">
                    {project.details.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white text-indigo-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-100 italic">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-slate-600">Technical toolkit and domains of expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SKILLS.map((group, idx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 rounded-xl text-slate-700 text-sm font-medium border border-slate-100 hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="absolute -right-20 top-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center mx-auto inline-flex items-center gap-3 justify-center w-full">
              <span className="w-12 h-0.5 bg-indigo-600 hidden md:block"></span>
              Key Achievements
              <span className="w-12 h-0.5 bg-indigo-600 hidden md:block"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 items-start p-8 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-100"
              >
                <div className="bg-white/20 p-3 rounded-2xl shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                </div>
                <p className="text-lg font-semibold leading-relaxed">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Educational Background</h2>
            <p className="text-indigo-200">Strong academic foundation in computer science and advanced ML.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 flex flex-col h-full relative group"
              >
                <div className="absolute top-6 right-8 text-white/10 font-bold text-5xl group-hover:text-indigo-400 group-hover:opacity-30 transition-all">0{idx+1}</div>
                <div className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-4">{edu.period}</div>
                <h3 className="text-2xl font-bold mb-2 pr-12">{edu.institution}</h3>
                <p className="text-indigo-100 leading-relaxed text-lg italic mb-6">{edu.degree}</p>
                {edu.cgpa && (
                  <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl w-fit">
                    <span className="text-xs uppercase tracking-tighter text-indigo-300 font-bold">CGPA</span>
                    <span className="text-xl font-bold">{edu.cgpa}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Let's work together to solve complex data challenges.</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
              I am always seeking new challenges that allow me to apply my Applied AI expertise and drive tangible business impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-600/30">
                Send me an Email
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/10">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
