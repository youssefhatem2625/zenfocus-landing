import React from 'react';
import { heroContent } from '../../data/content';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { InteractiveWidget } from './InteractiveWidget';
import { ArrowLeft } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Text Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge>{heroContent.badge}</Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {heroContent.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {heroContent.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <span>{heroContent.primaryCta}</span>
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById('demo-widget')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {heroContent.secondaryCta}
            </Button>
          </div>

          {/* Micro Stats */}
          <div className="pt-8 grid grid-cols-3 gap-4 max-w-md mx-auto border-t border-slate-200/80">
            {heroContent.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg md:text-xl font-bold text-slate-900 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Interactive Widget Showcase */}
        <div id="demo-widget" className="mt-14 md:mt-18">
          <InteractiveWidget />
        </div>
      </div>
    </section>
  );
};
