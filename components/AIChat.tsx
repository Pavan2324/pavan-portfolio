
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getGeminiResponse } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Pavan's AI assistant. Ask me anything about his impact at AM/NS India or his work in Generative AI!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      const aiResponse = await getGeminiResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting right now. Please check if the API key is configured or contact Pavan directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen ? (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.3)] w-80 sm:w-[400px] max-h-[calc(100vh-60px)] flex flex-col border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-6 text-white flex justify-between items-center bg-gradient-to-r from-indigo-600 to-blue-600 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Ask Pavan AI</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-100">Live Knowledge Base</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 min-h-[300px] overflow-y-auto p-6 space-y-4 bg-slate-50/50 scroll-smooth">
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
                    <span>Processing profile context...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-slate-100 shrink-0 mb-safe">
              <div className="relative flex items-center gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my AI impact..." 
                  className="flex-1 bg-slate-100/80 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all border-none placeholder:text-slate-400"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-indigo-600 text-white p-3.5 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-50 disabled:opacity-50 disabled:shadow-none hover:scale-105 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-4 font-bold uppercase tracking-widest">Driven by Google Gemini</p>
            </div>
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
