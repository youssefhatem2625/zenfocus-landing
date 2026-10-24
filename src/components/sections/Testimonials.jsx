import React from 'react';
import { testimonialsList } from '../../data/content';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">
            آراء وتجارب حقيقية
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            ماذا يقول من استعادوا تركيزهم؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsList.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-8">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  «{item.content}»
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
