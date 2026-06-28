import { ACHIEVEMENTS_DATA } from '../data';
import { Cpu, BookOpen, Palette, Clock, Award, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

interface AchievementsProps {
  theme: 'dark' | 'light';
}

export default function Achievements({ theme }: AchievementsProps) {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-500" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-500" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-rose-500" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-500" />;
      case 'Award':
        return <Award className="w-6 h-6 text-emerald-500" />;
      default:
        return <Terminal className="w-6 h-6 text-slate-500" />;
    }
  };

  const isDark = theme === 'dark';

  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-slate-950/5 dark:bg-transparent">
      {/* Decorative linear glow */}
      <div className="absolute inset-x-0 h-[1px] bg-linear-to-r from-transparent via-purple-500/25 to-transparent top-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              id={`achievement-card-${ach.id}`}
              className={`p-6 rounded-2xl border text-center transition-all duration-300 hover:scale-105 group relative flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-950/40 border-slate-900 shadow-lg shadow-black/10'
                  : 'bg-white border-slate-200 shadow-sm shadow-slate-100'
              }`}
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-linear-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon wrapper */}
                <div className="mx-auto w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900/80 flex items-center justify-center mb-4 transition-transform group-hover:rotate-12 duration-200">
                  {getAchievementIcon(ach.icon)}
                </div>

                {/* Big number stat */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-violet-500 to-blue-500 font-display">
                  {ach.value}
                </h3>

                {/* Stat title label */}
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest font-mono mt-1">
                  {ach.label}
                </h4>
              </div>

              {/* Stat description details */}
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
