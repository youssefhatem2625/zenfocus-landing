import React from 'react';
import { philosophyQuote } from '../../data/content';
import { Feather } from 'lucide-react';

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden" dir="rtl">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-800 text-emerald-400 border border-slate-700/80 shadow-inner">
          <Feather className="w-6 h-6" />
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-100 leading-snug tracking-tight font-serif italic">
          {philosophyQuote.quote}
        </blockquote>

        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
          — {philosophyQuote.author}
        </p>
      </div>
    </section>
  );
};
