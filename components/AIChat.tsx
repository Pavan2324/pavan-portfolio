
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Sparkles, Loader2, Download, Mail, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type View = 'chat' | 'contact';

const FORMSPREE_URL = 'https://formspree.io/f/xzdobqbo';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('chat');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Pavan's AI assistant. Ask me anything about his work in GenAI, Agentic AI, or his ₹170 Cr impact at AM/NS India!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Contact form state
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setMessages(prev => [...prev, { role: 'ai', text: data.text || "I was unable to process that. Please try again or reach out to Pavan directly!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting right now. Pavan is available via email for direct inquiries!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async () => {
    if (!contact.name || !contact.email || !contact.message) return;
    setContactStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      });
      if (res.ok) {
        setContactStatus('sent');
        setContact({ name: '', email: '', message: '' });
        setTimeout(() => setContactStatus('idle'), 4000);
      } else {
        setContactStatus('idle');
      }
    } catch {
      setContactStatus('idle');
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[60]">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.3)] w-80 sm:w-[400px] flex flex-col border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                {view === 'contact' && (
                  <button onClick={() => { setView('chat'); setContactStatus('idle'); }} className="hover:bg-white/10 p-1.5 rounded-xl transition-colors">
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                )}
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  {view === 'chat' ? <Sparkles className="w-5 h-5 text-white" /> : <Mail className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">{view === 'chat' ? 'Ask Pavan AI' : 'Contact Pavan'}</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-100">
                      {view === 'chat' ? 'Live Knowledge Base' : 'Send a Message'}
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Quick Action Buttons — always visible in chat view */}
            {view === 'chat' && (
              <div className="flex gap-2 px-4 pt-4 pb-0">
                <button
                  onClick={() => setView('contact')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-indigo-100"
                >
                  <Mail className="w-4 h-4" /> Contact Me
                </button>
                <a
                  href="/Pavan_Tiwari_Resume.pdf"
                  download="Pavan_Tiwari_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all"
                >
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </div>
            )}

            {/* Chat View */}
            {view === 'chat' && (
              <>
                <div ref={scrollRef} className="h-[380px] overflow-y-auto p-5 space-y-4 bg-slate-50/50 scroll-smooth mt-3">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] rounded-[1.25rem] px-5 py-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 rounded-tr-none'
                          : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none font-medium'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white text-slate-400 border border-slate-100 rounded-[1.25rem] rounded-tl-none px-5 py-3 text-sm flex items-center gap-2 font-medium shadow-sm">
                        <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                        <span>Processing profile data...</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about Pavan's AI work..."
                      className="flex-1 bg-slate-100/80 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all border-none placeholder:text-slate-400"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="bg-indigo-600 text-white p-3.5 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg disabled:opacity-50 hover:scale-105 active:scale-95"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-slate-400 mt-3 font-bold uppercase tracking-widest">Driven by Google Gemini</p>
                </div>
              </>
            )}

            {/* Contact View */}
            {view === 'contact' && (
              <div className="p-6 bg-white flex-1">
                {contactStatus === 'sent' ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <CheckCircle className="w-16 h-16 text-indigo-600" />
                    <p className="text-xl font-black text-slate-900 uppercase tracking-widest">Message Sent!</p>
                    <p className="text-slate-500 font-medium text-center text-sm">Pavan will get back to you at your email soon.</p>
                    <button onClick={() => { setView('chat'); setContactStatus('idle'); }} className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all">
                      Back to Chat
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => setContact(p => ({ ...p, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Email</label>
                      <input
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact(p => ({ ...p, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Message</label>
                      <textarea
                        value={contact.message}
                        onChange={(e) => setContact(p => ({ ...p, message: e.target.value }))}
                        placeholder="I'd like to discuss an opportunity..."
                        rows={4}
                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-300 resize-none"
                      />
                    </div>
                    <button
                      onClick={handleContactSubmit}
                      disabled={!contact.name || !contact.email || !contact.message || contactStatus === 'sending'}
                      className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {contactStatus === 'sending' ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-indigo-600 text-white p-5 rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(79,70,229,0.5)] hover:bg-indigo-700 hover:scale-110 transition-all flex items-center gap-3 group"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="font-bold text-sm tracking-tight pr-1">Ask My AI Assistant</span>
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChat;
