import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Sparkles, Loader2, Download, Mail, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type View = 'chat' | 'contact';
const FORMSPREE_URL = 'https://formspree.io/f/xzdobqbo';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('chat');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Pavan's AI assistant. Ask me anything about his GenAI, Agentic AI work, or his Rs.170 Cr impact at AM/NS India!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
      setMessages(prev => [...prev, { role: 'ai', text: data.text || "Please try again or reach out to Pavan directly!" }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting. Pavan is available via email for direct inquiries!" }]);
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
      } else setContactStatus('idle');
    } catch { setContactStatus('idle'); }
  };

  return (
    // ✅ FIXED: bottom-right, flex-col so widget grows UPWARD from the button
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            // ✅ Fixed height so nothing overflows — header+buttons+messages+input all fit
            className="bg-white rounded-[1.5rem] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.3)] w-[340px] sm:w-[380px] flex flex-col border border-slate-100 overflow-hidden"
            style={{ height: 'min(560px, calc(100vh - 100px))' }}
          >
            {/* ── Header ── */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                {view === 'contact' && (
                  <button onClick={() => { setView('chat'); setContactStatus('idle'); }} className="hover:bg-white/10 p-1.5 rounded-xl transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  {view === 'chat' ? <Sparkles className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="font-bold text-sm">{view === 'chat' ? 'Ask Pavan AI' : 'Contact Pavan'}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-indigo-100">
                      {view === 'chat' ? 'Live Knowledge Base' : 'Goes directly to Gmail'}
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-xl transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Action Buttons (chat view only) — shrink-0 keeps them always visible ── */}
            {view === 'chat' && (
              <div className="flex gap-2 px-3 py-2 bg-white border-b border-slate-100 shrink-0">
                <button
                  onClick={() => setView('contact')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-indigo-100"
                >
                  <Mail className="w-3.5 h-3.5" /> Contact Me
                </button>
                <a
                  href="/Pavan_Tiwari_Resume.pdf"
                  download="Pavan_Tiwari_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  <Download className="w-3.5 h-3.5" /> Download CV
                </a>
              </div>
            )}

            {/* ── Chat Messages ── */}
            {view === 'chat' && (
              <>
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50 min-h-0">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] rounded-[1rem] px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-none'
                          : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none font-medium'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-100 rounded-[1rem] rounded-tl-none px-4 py-2.5 text-sm flex items-center gap-2 text-slate-400 shadow-sm">
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-500" /> Processing...
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Input Bar — shrink-0 keeps it always visible ── */}
                <div className="p-3 bg-white border-t border-slate-100 shrink-0">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about Pavan's AI work..."
                      className="flex-1 bg-slate-100 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all border-none placeholder:text-slate-400"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[9px] text-center text-slate-400 mt-2 font-bold uppercase tracking-widest">Driven by Google Gemini</p>
                </div>
              </>
            )}

            {/* ── Contact View ── */}
            {view === 'contact' && (
              <div className="flex-1 overflow-y-auto p-4 min-h-0">
                {contactStatus === 'sent' ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4">
                    <CheckCircle className="w-14 h-14 text-indigo-600" />
                    <p className="text-lg font-black text-slate-900 uppercase tracking-widest">Message Sent!</p>
                    <p className="text-slate-500 text-sm text-center">Pavan will get back to you soon.</p>
                    <button onClick={() => { setView('chat'); setContactStatus('idle'); }}
                      className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all">
                      Back to Chat
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Your Name</label>
                      <input type="text" value={contact.name} onChange={(e) => setContact(p => ({ ...p, name: e.target.value }))} placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-300" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Your Email</label>
                      <input type="email" value={contact.email} onChange={(e) => setContact(p => ({ ...p, email: e.target.value }))} placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-300" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Message</label>
                      <textarea value={contact.message} onChange={(e) => setContact(p => ({ ...p, message: e.target.value }))} placeholder="I'd like to discuss an opportunity..." rows={3}
                        className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-300 resize-none" />
                    </div>
                    <button onClick={handleContactSubmit} disabled={!contact.name || !contact.email || !contact.message || contactStatus === 'sending'}
                      className="w-full py-3 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                      {contactStatus === 'sending' ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle Button — always at bottom-right ── */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="bg-indigo-600 text-white px-5 py-4 rounded-[1.5rem] shadow-[0_15px_40px_-10px_rgba(79,70,229,0.5)] hover:bg-indigo-700 hover:scale-105 transition-all flex items-center gap-3"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        <span className="font-bold text-sm tracking-tight">{isOpen ? 'Close' : 'Ask My AI Assistant'}</span>
      </button>
    </div>
  );
};

export default AIChat;
