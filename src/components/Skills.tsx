import { useState } from 'react';
import { SKILLS_DATA } from '../data';
import { Skill } from '../types';
import { Cpu, Terminal, Palette, Award, Sparkles, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SkillsProps {
  theme: 'dark' | 'light';
}

type SkillCategory = 'All' | 'Programming' | 'Engineering' | 'Creative' | 'Soft Skills';

export default function Skills({ theme }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');
  const [skillsList, setSkillsList] = useState<Skill[]>(SKILLS_DATA);
  const [editingMode, setEditingMode] = useState(false);

  const categories: SkillCategory[] = ['All', 'Programming', 'Engineering', 'Creative', 'Soft Skills'];

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  const updateSkillLevel = (name: string, newLevel: number) => {
    setSkillsList(prev =>
      prev.map(skill => (skill.name === name ? { ...skill, level: newLevel } : skill))
    );
  };

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case 'Programming':
        return <Terminal className="w-4 h-4" />;
      case 'Engineering':
        return <Cpu className="w-4 h-4" />;
      case 'Creative':
        return <Palette className="w-4 h-4" />;
      case 'Soft Skills':
        return <Award className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const isDark = theme === 'dark';

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            EXPERTISE INVENTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Competencies & Skills
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            A comprehensive spectrum of my technical proficiencies, engineering capabilities, creative methodologies, and soft leadership attributes.
          </p>
        </div>

        {/* Dashboard Tools bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 border rounded-2xl p-4 backdrop-blur-xl bg-slate-150/10 border-slate-200 dark:bg-white/5 dark:border-white/10">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center space-x-1.5 transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'text-white bg-linear-to-r from-purple-600 to-blue-500 shadow-md'
                    : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{cat === 'Creative' ? 'Creative Design' : cat}</span>
              </button>
            ))}
          </div>

          {/* Interactive Edit toggle */}
          <button
            id="skill-simulator-btn"
            onClick={() => setEditingMode(!editingMode)}
            className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              editingMode
                ? 'bg-purple-600/15 border-purple-500 text-purple-700 dark:text-purple-400 shadow-xs'
                : isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{editingMode ? 'Disable Interactive Slider' : 'Enable Interactive Slider'}</span>
          </button>
        </div>

        {/* Grid Display */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 shadow-sm shadow-slate-200/50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold">
                      {skill.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 dark:text-white mt-0.5">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-800 dark:text-purple-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden relative mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute top-0 bottom-0 left-0 bg-linear-to-r from-purple-600 via-purple-500 to-blue-500 rounded-full"
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {skill.description}
                </p>

                {/* Editing controller */}
                {editingMode && (
                  <div className="pt-3 border-t border-slate-200/40 dark:border-white/10 mt-3 flex items-center space-x-3">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Adjust:</span>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={skill.level}
                      onChange={(e) => updateSkillLevel(skill.name, parseInt(e.target.value))}
                      className="w-full accent-purple-600 cursor-pointer h-1 bg-slate-200 dark:bg-slate-800 rounded-lg"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
