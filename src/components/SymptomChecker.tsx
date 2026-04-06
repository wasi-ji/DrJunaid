import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Send, Loader2, AlertCircle, MessageSquare } from 'lucide-react';
import Markdown from 'react-markdown';
import { getGeminiResponse, SYMPTOM_CHECKER_SYSTEM } from '../lib/gemini';
import { cn } from '../lib/utils';
import { DR_INFO } from '../constants';
import TypingIndicator from './TypingIndicator';

export default function SymptomChecker() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const loadingMessages = [
    "Analyzing symptoms...",
    "Consulting medical database...",
    "Reviewing Dr. Junaid's expertise...",
    "Generating assessment..."
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep(prev => (prev + 1) % loadingMessages.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg, SYMPTOM_CHECKER_SYSTEM);
    setMessages(prev => [...prev, { role: 'ai', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="symptom-checker" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-xl mb-6">
            <Stethoscope size={32} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">AI Orthopedic Symptom Checker</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Describe your joint or bone pain, and our AI assistant will provide a preliminary assessment based on Dr. Junaid's expertise.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-slate-900 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Stethoscope size={16} />
              </div>
              <span className="text-white font-bold">Orthopedic Assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Online</span>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50"
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">How can I help you today?</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  Try saying: "My knee hurts when I walk upstairs" or "I have a sharp pain in my lower back."
                </p>
              </div>
            )}

            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                    msg.role === 'user' 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-white text-slate-700 border border-slate-200 rounded-tl-none"
                  )}>
                    <div className="markdown-body">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-medium uppercase">
                    {msg.role === 'user' ? 'You' : 'AI Assistant'}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start max-w-[85%]"
              >
                <div className="bg-white text-slate-700 border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex flex-col gap-2 min-w-[120px]">
                  <TypingIndicator />
                  <div className="flex items-center gap-2 text-slate-400 text-xs italic">
                    <Loader2 size={12} className="animate-spin" />
                    {loadingMessages[loadingStep]}
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 font-medium uppercase">
                  AI Assistant
                </span>
              </motion.div>
            )}
          </div>


          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your symptoms..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={20} />
              </button>
            </form>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">
              <AlertCircle size={12} />
              <span>AI results are preliminary. For emergencies, visit AKUH or South City immediately.</span>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 text-center">
          <a 
            href={`https://wa.me/${DR_INFO.whatsapp}`}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all hover:scale-105"
          >
            <MessageSquare size={24} />
            Discuss Symptoms with Dr. Junaid on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
