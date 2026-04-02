import React from 'react';
import { motion } from 'motion/react';
import { Score, PersonalityResult } from '../types';
import { PERSONALITY_RESULTS } from '../constants';
import { Share2, RefreshCw, MessageSquare, Briefcase, Star, AlertTriangle } from 'lucide-react';

interface ResultProps {
  score: Score;
  onReset: () => void;
  onDiscuss: (type: string) => void;
}

export default function Result({ score, onReset, onDiscuss }: ResultProps) {
  const getResultType = () => {
    const e = score.E >= score.I ? 'E' : 'I';
    const s = score.S >= score.N ? 'S' : 'N';
    const t = score.T >= score.F ? 'T' : 'F';
    const j = score.J >= score.P ? 'J' : 'P';
    return `${e}${s}${t}${j}`;
  };

  const type = getResultType();
  const result: PersonalityResult = PERSONALITY_RESULTS[type];

  const dimensions = [
    { label: 'Energy Source', left: 'E Extraversion', right: 'I Introversion', leftVal: score.E, rightVal: score.I },
    { label: 'Perception', left: 'S Sensing', right: 'N Intuition', leftVal: score.S, rightVal: score.N },
    { label: 'Judgment', left: 'T Thinking', right: 'F Feeling', leftVal: score.T, rightVal: score.F },
    { label: 'Lifestyle', left: 'J Judging', right: 'P Perceiving', leftVal: score.J, rightVal: score.P },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-sm font-bold mb-4 uppercase tracking-wider">
          Your Test Result
        </span>
        <h1 className="text-7xl font-black text-zinc-900 mb-4 tracking-tight">
          {type}
        </h1>
        <h2 className="text-3xl font-bold text-zinc-700 mb-6 italic">
          {result.title}
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          {result.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Dimension Breakdown */}
        <div className="lg:col-span-2 space-y-8 bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
          <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-zinc-400" />
            Personality Dimension Analysis
          </h3>
          {dimensions.map((dim, idx) => {
            const total = dim.leftVal + dim.rightVal;
            const leftPercent = Math.round((dim.leftVal / total) * 100);
            const rightPercent = 100 - leftPercent;
            
            return (
              <div key={idx} className="space-y-3">
                <div className="flex justify-between text-sm font-bold uppercase tracking-wide text-zinc-400">
                  <span>{dim.left}</span>
                  <span>{dim.label}</span>
                  <span>{dim.right}</span>
                </div>
                <div className="h-4 w-full bg-zinc-100 rounded-full overflow-hidden flex">
                  <div 
                    className="h-full bg-zinc-900 transition-all duration-1000 border-r border-white/20"
                    style={{ width: `${leftPercent}%` }}
                  />
                  <div 
                    className="h-full bg-zinc-300 transition-all duration-1000"
                    style={{ width: `${rightPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-zinc-500">
                  <span>{leftPercent}%</span>
                  <span>{rightPercent}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <button 
            onClick={() => onDiscuss(type)}
            className="w-full flex items-center justify-between p-6 bg-zinc-900 text-white rounded-3xl hover:bg-zinc-800 transition-all group shadow-xl shadow-zinc-200"
          >
            <div className="text-left">
              <span className="block text-xs font-bold opacity-60 uppercase mb-1">Deep AI Analysis</span>
              <span className="text-lg font-bold">Discuss with AI</span>
            </div>
            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={onReset}
            className="w-full flex items-center justify-between p-6 bg-white border border-zinc-200 text-zinc-900 rounded-3xl hover:bg-zinc-50 transition-all group"
          >
            <div className="text-left">
              <span className="block text-xs font-bold text-zinc-400 uppercase mb-1">Start Over</span>
              <span className="text-lg font-bold">Retake Quiz</span>
            </div>
            <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
          </button>

          <button className="w-full flex items-center justify-between p-6 bg-white border border-zinc-200 text-zinc-900 rounded-3xl hover:bg-zinc-50 transition-all group">
            <div className="text-left">
              <span className="block text-xs font-bold text-zinc-400 uppercase mb-1">Share Result</span>
              <span className="text-lg font-bold">Share with Friends</span>
            </div>
            <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
          <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-500" />
            Core Strengths
          </h3>
          <ul className="space-y-4">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-600">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
          <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Potential Challenges
          </h3>
          <ul className="space-y-4">
            {result.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-600">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span className="font-medium">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
          <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-zinc-400" />
            Recommended Career Paths
          </h3>
          <div className="flex flex-wrap gap-3">
            {result.careers.map((c, i) => (
              <span key={i} className="px-5 py-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-700 font-bold shadow-sm hover:border-zinc-900 transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
