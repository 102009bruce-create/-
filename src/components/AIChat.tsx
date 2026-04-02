import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, X, Terminal, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIChatProps {
  userType?: string;
  onClose: () => void;
}

export default function AIChat({ userType, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: userType 
        ? `Hello! I am your exclusive MBTI AI consultant. I see your test result is **${userType}**. Would you like to dive deeper into this personality trait, or discuss the **PRD (Product Requirement Document)** for MBTI system development?`
        : "Hello! I am your exclusive MBTI AI consultant. Would you like to learn about MBTI, or discuss the **PRD (Product Requirement Document)** for MBTI system development?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPrdMode, setIsPrdMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: isPrdMode 
            ? "You are a senior Product Manager (PM) and System Architect. You are discussing the PRD (Product Requirement Document) of the MBTI system with the user. Please specify features, workflows, logic, data structures, and user experience. Use professional terminology and respond in a structured manner."
            : `You are an MBTI expert. The user's personality trait is ${userType || 'Unknown'}. Please provide in-depth analysis, advice, and career guidance based on MBTI theory. The tone should be professional, warm, and insightful.`,
        }
      });

      const response = await model;
      const text = response.text || "Sorry, I am temporarily unable to respond.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "An error occurred, please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200">
        {/* Header */}
        <div className="px-6 py-4 border-bottom border-zinc-100 flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900">AI Consultant</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-zinc-500 font-medium">Online</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPrdMode(!isPrdMode)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                isPrdMode 
                  ? "bg-zinc-900 text-white shadow-lg" 
                  : "bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50"
              )}
            >
              <Terminal className="w-4 h-4" />
              {isPrdMode ? "PRD Mode Enabled" : "Switch to PRD Mode"}
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-zinc-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 bg-white"
        >
          {messages.map((m, i) => (
            <div 
              key={i}
              className={cn(
                "flex gap-4 max-w-[85%]",
                m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                m.role === 'user' ? "bg-zinc-100" : "bg-zinc-900"
              )}>
                {m.role === 'user' ? <User className="w-5 h-5 text-zinc-600" /> : <Bot className="w-5 h-5 text-white" />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                m.role === 'user' 
                  ? "bg-zinc-100 text-zinc-800 rounded-tr-none" 
                  : "bg-zinc-50 text-zinc-800 rounded-tl-none border border-zinc-100"
              )}>
                <div className="markdown-body">
                  <Markdown>{m.text}</Markdown>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4 mr-auto">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 text-zinc-400 text-sm italic border border-zinc-100">
                AI is thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 bg-zinc-50 border-t border-zinc-100">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isPrdMode ? "Ask a question about the PRD..." : "Ask a question about personality..."}
              className="w-full pl-6 pr-14 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all shadow-sm"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 disabled:opacity-30 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-3 text-center text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
            Powered by Gemini 3.0 Flash
          </p>
        </div>
      </div>
    </motion.div>
  );
}
