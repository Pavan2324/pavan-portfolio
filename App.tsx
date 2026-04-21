
import React from 'react';
import { Header, Footer } from './components/Layout';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, ACHIEVEMENTS } from './constants';
import AIChat from './components/AIChat';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Award, 
  Terminal, 
  Cpu, 
  Database, 
  BookOpen, 
  Briefcase, 
  Mail, 
  Users, 
  Code2,
  MapPin,
  TrendingUp,
  Brain
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="pt-40 pb-24 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-2xl text-xs font-black uppercase tracking-widest mb-8 border border-indigo-100/50 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              Impact Focused AI Engineer
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Pavan <br />
              <span className="text-indigo-600">Tiwari.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 font-bold tracking-tight italic max-w-xl leading-relaxed">
              "{PERSONAL_INFO.headline}"
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-12">
              <a href="#projects" className="px-10 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-bold text-lg shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1 flex items-center gap-3">
                View Impact Portfolio <ChevronRight className="w-5 h-5" />
              </a>
              <div className="flex gap-3">
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-5 bg-white text-slate-900 border border-slate-200 rounded-[1.5rem] hover:bg-slate-50 transition-all hover:scale-105 shadow-sm">
                  <Users className="w-6 h-6" />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" className="p-5 bg-white text-slate-900 border border-slate-200 rounded-[1.5rem] hover:bg-slate-50 transition-all hover:scale-105 shadow-sm">
                  <Code2 className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-10 bg-white rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 relative z-10 uppercase tracking-widest text-slate-400 text-sm">
                <span className="w-12 h-1.5 bg-indigo-600 rounded-full"></span>
                Executive Summary
              </h2>
              <p className="text-slate-600 leading-relaxed font-semibold text-lg relative z-10 italic">
                {PERSONAL_INFO.summary}
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative w-full max-w-2xl lg:max-w-none"
          >
            <div className="relative z-10 w-full aspect-square rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(79,70,229,0.2)] border-[12px] border-white ring-1 ring-slate-100">
              <img 
                src="https://picsum.photos/seed/pavan-professional/1200/1200" 
                alt="Professional portrait" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 transform hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Stats Components - Indigo Style */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block group hover:bg-slate-900 hover:text-white transition-colors duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-600 text-white rounded-2xl group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-4xl font-black tracking-tighter">₹170 Cr</div>
                  <div className="text-slate-500 group-hover:text-slate-400 text-xs font-bold uppercase tracking-widest">Business Optimization</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-10 -right-10 z-20 bg-indigo-600 text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-4xl font-black tracking-tighter">Applied AI</div>
                  <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Domain Expertise</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Professional Footprint</h2>
            <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-500 font-bold tracking-tight">Systematic delivery of machine learning solutions across varied industrial landscapes.</p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group pr-8 md:pr-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="w-full md:w-[45%] text-left md:text-right">
                    <div className="text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-2">{exp.period}</div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2 truncate group-hover:text-indigo-600 transition-colors uppercase tracking-widest">{exp.company}</h3>
                    <div className="flex items-center md:justify-end gap-2 text-slate-400 font-bold text-sm">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-16 h-16 rounded-3xl bg-white border-2 border-indigo-100 items-center justify-center font-black text-indigo-600 shadow-xl group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all z-10 shrink-0">
                    {idx + 1}
                  </div>
                  
                  <div className="w-full md:w-[45%]">
                    <div className="bg-white p-10 rounded-[3rem] shadow-[0_15px_40px_-50px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                       <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-widest">{exp.role}</h4>
                       <ul className="space-y-4">
                         {exp.details?.map((detail, j) => (
                           <li key={j} className="flex items-start gap-4 text-slate-500">
                             <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                             <p className="text-sm font-bold leading-relaxed">{detail}</p>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Core Competencies</h2>
            <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-500 font-bold tracking-tight">The technical bedrock of my professional engineering work.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {SKILLS.map((group) => (
              <motion.div 
                key={group.category} 
                whileHover={{ y: -10 }}
                className="p-12 bg-slate-50/50 rounded-[4rem] border border-slate-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
                <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-[0.2em] text-sm text-slate-400">
                  <div className="w-12 h-2 bg-indigo-600 rounded-full"></div>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-6 py-3.5 bg-white rounded-2xl text-slate-700 text-sm font-black shadow-sm border border-slate-100 hover:bg-indigo-600 hover:text-white transition-all cursor-default uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Tactical Solutions</h2>
            <div className="w-24 h-2 bg-indigo-500 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
            <p className="text-xl text-slate-400 font-bold tracking-tight">Bespoke technical artifacts engineered for corporate efficiency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PROJECTS.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ scale: 1.05 }}
                className="p-10 bg-white/5 backdrop-blur-xl rounded-[3.5rem] border border-white/10 flex flex-col group relative overflow-hidden"
              >
                <div className="mb-10 p-5 bg-white/10 rounded-3xl w-fit group-hover:bg-indigo-500 transition-colors">
                  <Terminal className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight leading-tight group-hover:text-indigo-400 transition-colors uppercase">{proj.title}</h3>
                <p className="text-slate-400 text-lg font-medium mb-10 flex-1 leading-relaxed italic">
                  "{proj.description}"
                </p>
                
                <div className="flex flex-wrap gap-2 pt-8 border-t border-white/10">
                  {proj.details?.map((detail, j) => (
                    <span key={j} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-white/10 text-slate-300">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Academic Architecture</h2>
            <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-500 font-bold tracking-tight">Theoretical grounding for deep technical mastery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {EDUCATION.map((edu) => (
              <motion.div 
                key={edu.id} 
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-indigo-600 text-xs font-black tracking-[0.2em] uppercase">{edu.period}</div>
                    {edu.cgpa && <div className="text-slate-400 text-[10px] font-bold uppercase mt-1">CGPA: {edu.cgpa}</div>}
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 text-slate-900 tracking-tighter leading-tight uppercase underline decoration-indigo-200 decoration-4 underline-offset-8">{edu.institution}</h3>
                <p className="text-slate-500 font-bold text-lg italic leading-relaxed pt-4">
                  {edu.degree}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="py-24 px-6 bg-indigo-600 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-white">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]">
                  Engineered for <br />
                  <span className="text-indigo-200">Excellence.</span>
               </h2>
               <div className="space-y-6">
                 {ACHIEVEMENTS.map((ach) => (
                   <div key={ach.id} className="flex gap-4 items-start group">
                     <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/40 transition-colors">
                        <Award className="w-6 h-6 text-white" />
                     </div>
                     <p className="text-lg font-bold text-white/90 leading-relaxed italic">{ach.title}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="flex-shrink-0">
               <div className="w-64 h-64 border-[24px] border-white/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                  <div className="w-32 h-32 border-[12px] border-white/10 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto rounded-[5rem] overflow-hidden relative group">
           <div className="absolute inset-0 bg-slate-900 p-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100" />
           <div className="relative z-10 p-20 md:p-32 flex flex-col items-center">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                Let's Build <br /> 
                <span className="text-indigo-500 underline decoration-indigo-500/50 decoration-wavy">The Next Reality.</span>
              </h2>
              <p className="text-slate-400 mb-14 text-xl font-bold tracking-tight max-w-2xl mx-auto italic leading-relaxed">
                "Available for strategic Applied AI roles, cross-functional ML orchestration, and data-driven strategy development."
              </p>
              <motion.a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-white text-slate-900 rounded-[2rem] font-black text-2xl shadow-2xl hover:bg-slate-50 transition-all flex items-center gap-4"
              >
                Connect Now <Mail className="w-7 h-7" />
              </motion.a>
           </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
