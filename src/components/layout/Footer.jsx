import React from 'react';
import { footerContent } from '../../data/content';
import { Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 text-slate-500 text-sm" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-bold text-slate-900">{footerContent.brand}</span>
          <span className="text-slate-400">|</span>
          <span className="text-xs text-slate-500">{footerContent.tagline}</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-slate-500">
          <span>{footerContent.copyright}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline mx-1" />
        </div>
      </div>
    </footer>
  );
};
