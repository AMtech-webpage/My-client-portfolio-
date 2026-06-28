import { FUTURE_GOALS_DATA } from '../data';
import { GraduationCap, Brain, Cpu, Zap, Microchip, School, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

interface FutureGoalsProps {
  theme: 'dark' | 'light';
}

export default function FutureGoals({ theme }: FutureGoalsProps) {
  const getGoalIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Microchip':
        return <Microchip className="w-5 h-5 text-red-400" />;
      case 'School':
        return <School className="w-5 h-5 text-emerald-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-indigo-400" />;
    }
  };

  const isDark = theme === 'dark';

  return (
    <section id="goals" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            STRATEGIC HORIZONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Future Vision & Ambitions
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Our long-term technology roadmaps represent deep structural commitments to build, launch, and democratize tech innovations across Africa.
          </p>
        </div>

        {/* Goals Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_GOALS_DATA.map((goal, idx) => {
            const isLargeCell = idx === 0 || idx === 5; // create variation in grid

            return (
              <div
                key={goal.id}
                id={`future-goal-card-${goal.id}`}
                className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 group ${
                  isLargeCell ? 'md:col-span-2 lg:col-span-1' : ''
                } ${
                  isDark
                    ? 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Colored glowing blur */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-bl ${goal.color.split(' ')[0]} ${goal.color.split(' ')[1]} rounded-bl-full blur-xl opacity-20 group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon bubble */}
                    <div className={`p-3 rounded-2xl border bg-slate-100/50 dark:bg-slate-900/80 ${goal.color.split(' ')[2] || 'border-slate-800'}`}>
                      {getGoalIcon(goal.icon)}
                    </div>

                    {/* Timeline Tag */}
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest font-bold uppercase text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20">
                      {goal.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-purple-500 transition-colors">
                    {goal.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Footer simulation indicators */}
                <div className="mt-8 flex items-center justify-between text-[9px] font-mono text-slate-500 pt-4 border-t border-slate-200/40 dark:border-slate-900">
                  <span>STRATEGY_NODE_V0{idx + 1}</span>
                  <span className="text-purple-500 dark:text-purple-400 font-bold uppercase tracking-widest">ACTIVE_PLANNING</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
