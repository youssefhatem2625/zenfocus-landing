import React from 'react';
import { featuresList } from '../../data/content';
import { Card } from '../ui/Card';
import {
  Timer,
  CheckCircle2,
  Moon,
  ShieldCheck,
  Sparkles,
  BarChart3,
} from 'lucide-react';

const iconMap = {
  Timer,
  CheckCircle2,
  Moon,
  ShieldCheck,
  Sparkles,
  BarChart3,
};

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white border-y border-slate-200/70" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">
            مميزات مصممة للراحة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            كل ما تحتاجه للتركيز، ولا شيء غير ذلك
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            تخلصنا من كل الإشعارات والأزرار الزائدة لنمنحك تجربة استخدام نقية وهادئة.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <Card key={index} className="flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-5 border border-slate-200/60">
                    <IconComponent className="w-5 h-5 text-slate-800" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
