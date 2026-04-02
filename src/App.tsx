import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, ArrowRight, Bot } from 'lucide-react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import AIChat from './components/AIChat';
import { Score } from './types';

export default function App() {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState<Score | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [discussType, setDiscussType] = useState<string | undefined>();

  const handleComplete = (finalScore: Score) => {
    setScore(finalScore);
  };

  const handleReset = () => {
    setScore(null);
    setStarted(false);
    setDiscussType(undefined);
  };

  const handleDiscuss = (type?: string) => {
    setDiscussType(type);
    setShowChat(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={handleReset}
          >
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-zinc-900 tracking-tight">MBTI Insight</span>
          </div>
          <button
            onClick={() => handleDiscuss()}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full text-sm font-bold transition-colors"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline">AI Consultant</span>
          </button>
        </div>
      </header>

      <main className="pt-24 pb-12">
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto px-6 pt-20 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-bold mb-8">
                <Sparkles className="w-4 h-4" />
                Discover Your True Self
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
                Understand your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
                  personality type.
                </span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                Take our professional MBTI assessment to uncover your psychological preferences, strengths, and potential career paths.
              </p>
              <button
                onClick={() => setStarted(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl shadow-zinc-200"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : !score ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Quiz onComplete={handleComplete} />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Result 
                score={score} 
                onReset={handleReset}
                onDiscuss={handleDiscuss}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showChat && (
          <AIChat 
            userType={discussType} 
            onClose={() => setShowChat(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
