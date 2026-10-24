import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Check, Volume2, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const InteractiveWidget = () => {
  const [mode, setMode] = useState('focus'); // 'focus' | 'break'
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, text: 'إنهاء كتابة كود الواجهة الأمامية', done: true },
    { id: 2, text: 'مراجعة معايير الكود النظيف (Clean Code)', done: false },
    { id: 3, text: 'استراحة تأمل لمدة 5 دقائق', done: false },
  ]);

  // Handle countdown
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const switchMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(newMode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 md:p-8 relative overflow-hidden text-right" dir="rtl">
      {/* Subtle top decoration */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200"></div>

      {/* Widget Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            معاينة حية للمنصة
          </span>
        </div>

        {/* Ambient sound toggle */}
        <button
          onClick={() => setSoundActive(!soundActive)}
          className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors ${
            soundActive
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'text-slate-500 border-slate-200 hover:bg-slate-50'
          }`}
          title="محاكاة صوت الطبيعة في الخلفية"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>{soundActive ? 'مطر هادئ: مفعل' : 'صوت الطبيعة'}</span>
        </button>
      </div>

      {/* Mode Switcher */}
      <div className="flex justify-center my-6">
        <div className="inline-flex bg-slate-100 p-1 rounded-xl gap-1">
          <button
            onClick={() => switchMode('focus')}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === 'focus'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            جلسة تركيز (25د)
          </button>
          <button
            onClick={() => switchMode('break')}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === 'break'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            استراحة قصيرة (5د)
          </button>
        </div>
      </div>

      {/* Big Digital Timer */}
      <div className="text-center my-4">
        <div className="text-6xl md:text-7xl font-light tracking-tight text-slate-900 font-mono select-none">
          {formatTime(timeLeft)}
        </div>
        <p className="text-xs text-slate-400 mt-2">
          {isRunning ? 'جلسة التركيز جارية الآن بصفاء تام...' : 'اضغط للبدء واختبر الهدوء'}
        </p>
      </div>

      {/* Timer Controls */}
      <div className="flex items-center justify-center gap-3 my-6">
        <Button
          onClick={toggleTimer}
          variant="primary"
          size="lg"
          className="w-36 rounded-2xl shadow-md hover:shadow-lg"
        >
          {isRunning ? (
            <>
              <Pause className="w-4 h-4 ml-2" /> إيقاف مؤقت
            </>
          ) : (
            <>
              <Play className="w-4 h-4 ml-2 fill-current" /> بدء الجلسة
            </>
          )}
        </Button>
        <Button
          onClick={resetTimer}
          variant="secondary"
          size="lg"
          className="rounded-2xl"
          title="إعادة التعيين"
        >
          <RotateCcw className="w-4 h-4 text-slate-600" />
        </Button>
      </div>

      {/* Interactive Daily Tasks */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3 text-xs text-slate-500 font-medium">
          <span>مهام اليوم الأساسية (جرّب الضغط للإنجاز):</span>
          <span>{tasks.filter((t) => t.done).length} من {tasks.length} منجز</span>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`flex items-center justify-between p-3 rounded-xl border text-sm cursor-pointer transition-all ${
                task.done
                  ? 'bg-slate-50/60 border-slate-100 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                    task.done
                      ? 'bg-emerald-500 text-white'
                      : 'border border-slate-300 hover:border-slate-400'
                  }`}
                >
                  {task.done && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className={task.done ? 'line-through text-slate-400' : ''}>
                  {task.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
