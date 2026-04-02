import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Question, Score, MBTIType } from '../types';
import { QUESTIONS } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface QuizProps {
  onComplete: (score: Score) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, MBTIType>>({});

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleSelect = (type: MBTIType) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: type }));
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1 && answers[currentQuestion.id]) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const calculateResult = () => {
    const score: Score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    Object.values(answers).forEach(type => {
      score[type]++;
    });
    onComplete(score);
  };

  const isLastStep = currentStep === QUESTIONS.length - 1;
  const canFinish = Object.keys(answers).length === QUESTIONS.length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-medium text-zinc-500">
            Question {currentStep + 1} / {QUESTIONS.length}
          </span>
          <span className="text-sm font-bold text-zinc-900">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-zinc-900"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100"
        >
          <h2 className="text-2xl font-semibold text-zinc-900 mb-8 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(option.type)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 group relative overflow-hidden",
                  answers[currentQuestion.id] === option.type
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-100 hover:border-zinc-300 bg-white text-zinc-700"
                )}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-lg font-medium">{option.text}</span>
                  {answers[currentQuestion.id] === option.type && (
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-zinc-600 hover:bg-zinc-100 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        {isLastStep ? (
          <button
            onClick={calculateResult}
            disabled={!canFinish}
            className="px-8 py-3 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 disabled:opacity-30 transition-all shadow-lg shadow-zinc-200"
          >
            View Results
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-zinc-900 hover:bg-zinc-100 disabled:opacity-30 transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
