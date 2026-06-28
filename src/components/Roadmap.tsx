import { useState } from 'react';
import { ROADMAP_DATA } from '../data';
import { GraduationCap, Code, Cpu, Settings, Briefcase, Globe, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoadmapProps {
  theme: 'dark' | 'light';
}

export default function Roadmap({ theme }: RoadmapProps) {
  const [selectedStageId, setSelectedStageId] = useState('stage-4'); // Default to current: Engineering Technologist

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-purple-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-slate-400" />;
    }
  };

  const selectedStage = ROADMAP_DATA.find((stage) => stage.id === selectedStageId) || ROADMAP_DATA[3];
  const isDark = theme === 'dark';

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-slate-950/5 dark:bg-transparent">
      {/* Dynamic glow in background */}
      <div className="absolute inset-y-0 right-0 w-[400px] bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            EVOLUTION ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Learning & Career Timeline
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Click on the milestones along the futuristic timeline path to deconstruct individual phases of our learning and technology development.
          </p>
        </div>

        {/* Master Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline Milestones Picker (Lefthand Column on Desktop) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center">
              <span>Interactive Nodes</span>
              <span className="ml-2 w-16 h-[1px] bg-slate-200 dark:bg-slate-800" />
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-6 py-2">
              {ROADMAP_DATA.map((stage) => {
                const isSelected = stage.id === selectedStageId;
                const isCurrent = stage.id === 'stage-4';

                return (
                  <button
                    key={stage.id}
                    id={`roadmap-node-${stage.id}`}
                    onClick={() => setSelectedStageId(stage.id)}
                    className="w-full text-left relative focus:outline-hidden group cursor-pointer"
                  >
                    {/* Active Node bullet indicator */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isSelected
                          ? 'bg-purple-600 border-purple-500 scale-125 ring-4 ring-purple-500/15'
                          : isCurrent
                          ? 'bg-amber-500 border-amber-400 animate-pulse'
                          : 'bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-800'
                      }`}
                    >
                      {isSelected && <div className="w-1 h-1 bg-white rounded-full" />}
                    </div>

                    <div
                      className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                        isSelected
                          ? isDark
                            ? 'bg-white/5 border-purple-500/40 shadow-lg shadow-purple-500/5 backdrop-blur-xl'
                            : 'bg-white border-purple-600/30 shadow-md shadow-slate-200/50'
                          : isDark
                          ? 'bg-white/5 border-white/10 hover:bg-white/10'
                          : 'bg-transparent border-slate-200/60 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-2.5 rounded-lg border transition-all duration-300 ${
                            isSelected
                              ? 'bg-purple-500/10 border-purple-500/30'
                              : 'bg-slate-100 dark:bg-slate-900 border-transparent'
                          }`}
                        >
                          {getStageIcon(stage.icon)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-mono tracking-widest uppercase text-purple-600 dark:text-purple-400 font-semibold">
                              {stage.period}
                            </span>
                            {isCurrent && (
                              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-amber-500/15 text-amber-600 uppercase tracking-widest font-bold">
                                Current Stage
                              </span>
                            )}
                          </div>
                          <h4 className="text-base font-bold text-slate-800 dark:text-white mt-0.5">
                            {stage.title}
                          </h4>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform ${
                          isSelected ? 'text-purple-500 rotate-90 lg:rotate-0' : ''
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Stage Details (Righthand Column Display) */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center">
              <span>Terminal Manifest</span>
              <span className="ml-2 w-16 h-[1px] bg-slate-200 dark:bg-slate-800" />
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xl relative overflow-hidden ${
                  isDark
                    ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/40'
                    : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
                }`}
              >
                {/* HUD Camera corners */}
                <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-500/40" />
                <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t-2 border-r-2 border-purple-500/40" />
                <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-500/40" />
                <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-500/40" />

                {/* Date & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-purple-600 dark:text-purple-400 bg-purple-500/10">
                    {selectedStage.period}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    ID: {selectedStage.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white font-display">
                  {selectedStage.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest mt-1.5 font-mono">
                  {selectedStage.subtitle}
                </h4>

                <div className="my-6 h-[1px] bg-slate-200 dark:bg-slate-800" />

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedStage.description}
                </p>

                {/* Sub achievements details */}
                <div className="space-y-3">
                  <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    Key Outcomes & Milestones
                  </h5>
                  <ul className="space-y-2.5">
                    {selectedStage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0 animate-pulse" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
