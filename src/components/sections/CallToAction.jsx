import React from 'react';
import { Button } from '../ui/Button';
import { Sparkles, ArrowLeft } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-100/70 border-t border-slate-200/80" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-xs text-slate-900 border border-slate-200">
          <Sparkles className="w-5 h-5 text-emerald-600" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          جاهز لإنهاء مهامك اليوم بصفاء وهدوء؟
        </h2>

        <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
          انضم لآلاف المستخدمين الذين تخلوا عن التشتيت وبدأوا العمل بوعي وتركيز. لا يلزم بطاقة بنكية.
        </p>

        <div className="pt-2">
          <Button variant="primary" size="lg" className="rounded-xl shadow-md">
            <span>ابدأ تجربة ZenFocus المجانية</span>
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
