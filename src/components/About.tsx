import { FOUNDER_INFO } from '../data';
import { Shield, Target, Eye, Sparkles, Brain, Cpu, Code, Palette, BookOpen, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const isDark = theme === 'dark';

  const interests = [
    { name: 'Artificial Intelligence', icon: Brain, color: 'text-purple-500 bg-purple-500/5 dark:bg-purple-500/10' },
    { name: 'Engineering Design', icon: Cpu, color: 'text-blue-500 bg-blue-500/5 dark:bg-blue-500/10' },
    { name: 'Electronics Prototyping', icon: Lightbulb, color: 'text-yellow-500 bg-yellow-500/5 dark:bg-yellow-500/10' },
    { name: 'Robotics & Automation', icon: Sparkles, color: 'text-cyan-500 bg-cyan-500/5 dark:bg-cyan-500/10' },
    { name: 'Software Development', icon: Code, color: 'text-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10' },
    { name: 'Graphic Design & Branding', icon: Palette, color: 'text-rose-500 bg-rose-500/5 dark:bg-rose-500/10' },
    { name: 'Innovation Strategy', icon: Target, color: 'text-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10' },
    { name: 'STEM Education', icon: BookOpen, color: 'text-amber-500 bg-amber-500/5 dark:bg-amber-500/10' },
    { name: 'Social Impact Tech', icon: Shield, color: 'text-teal-500 bg-teal-500/5 dark:bg-teal-500/10' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            OUR BRAND PROFILE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            About Alpha Technologies
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Brand Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              Engineering Africa's Tech Future
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded by <strong>Ahmed Abdulsalam</strong>, Alpha Technologies is an emerging technology startup and creative sandbox based in Nigeria. Our driving thesis is simple: to create highly innovative, localized, yet globally scalable solutions that enhance human capabilities.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We operate at the convergence of pure computer science, electrical engineering, industrial automation, and highly creative brand development (marketed under Ahmed's creator mark, <strong>HOLANREWAJU TALENTED</strong>). By focusing on educational STEM tools and sustainable embedded technologies, we are fostering a digital-first, self-reliant developer ecosystem right in West Africa.
            </p>
          </div>

          {/* Mission & Vision Bento Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div
              className={`border p-6 rounded-2xl flex flex-col justify-between ${
                isDark
                  ? 'bg-white/5 border-white/10 backdrop-blur-xl shadow-xl shadow-black/20 hover:border-purple-500/30'
                  : 'bg-white border-slate-200/80 shadow-md shadow-slate-100 hover:border-purple-600/20'
              } transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Target className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
                    Our Mission
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {FOUNDER_INFO.mission}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border p-6 rounded-2xl flex flex-col justify-between ${
                isDark
                  ? 'bg-white/5 border-white/10 backdrop-blur-xl shadow-xl shadow-black/20 hover:border-blue-500/30'
                  : 'bg-white border-slate-200/80 shadow-md shadow-slate-100 hover:border-blue-600/20'
              } transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
                    Our Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {FOUNDER_INFO.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domains of Interest */}
        <div className="mb-24">
          <h3 className="text-center text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-8">
            Core Fields of Specialization & Focus
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {interests.map((interest, idx) => {
              const Icon = interest.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.02] ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/25'
                      : 'bg-slate-50 border-slate-200/60 hover:bg-slate-100/50 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${interest.color}`}>
                    <Icon className="w-4 h-4 sm:w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {interest.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Core Values Grid */}
        <div>
          <h3 className="text-center text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-8 font-display">
            Our Guiding Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FOUNDER_INFO.coreValues.map((value, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30 shadow-lg shadow-black/10'
                    : 'bg-white border-slate-200/80 shadow-xs hover:border-purple-600/20'
                }`}
              >
                <div>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-600 mb-4" />
                  <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
                    {value.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
