import { FOUNDER_INFO } from '../data';
import { Mail, Github, Linkedin, Twitter, Instagram, MapPin, Award, UserCheck, Code } from 'lucide-react';
import { motion } from 'motion/react';

interface FounderProps {
  theme: 'dark' | 'light';
}

export default function Founder({ theme }: FounderProps) {
  const isDark = theme === 'dark';

  const socialLinks = [
    { name: 'Email', icon: Mail, url: 'mailto:omolayemi89@gmail.com', value: 'omolayemi89@gmail.com' },
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'X (Twitter)', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            THE LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Founder Profile
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Portrait Placeholder (Futuristic HUD Avatar) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-85 sm:h-85">
              {/* Spinning background hud circles */}
              <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-3 rounded-full border border-double border-blue-500/20 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 rounded-full bg-linear-to-br from-purple-600/10 to-blue-500/10 blur-xl" />

              {/* Main Avatar Card Container */}
              <div
                className={`absolute inset-4 rounded-3xl overflow-hidden border p-4 flex flex-col items-center justify-center text-center backdrop-blur-xl transition-all duration-300 group ${
                  isDark
                    ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/50 hover:border-purple-500/30'
                    : 'bg-white border-slate-200/80 shadow-xl shadow-slate-200/80 hover:border-purple-600/30'
                }`}
              >
                {/* Simulated Camera/HUD Overlay lines */}
                <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-purple-500/60" />
                <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-purple-500/60" />
                <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-purple-500/60" />
                <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-purple-500/60" />

                {/* Avatar Visual Content */}
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-purple-600 to-blue-500 p-1 mb-4 shadow-lg shadow-purple-500/30">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden relative">
                    <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-300 font-display">
                      AA
                    </span>
                    <div className="absolute bottom-0 inset-x-0 bg-purple-600/20 py-0.5 text-[8px] uppercase tracking-widest text-purple-200 font-mono">
                      FOUNDER
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest mt-1">
                  {FOUNDER_INFO.brandName}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3.5">
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-medium tracking-wider bg-purple-500/15 text-purple-700 dark:text-purple-300">
                    STEM LEADER
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-medium tracking-wider bg-blue-500/15 text-blue-700 dark:text-blue-300">
                    NIGERIA
                  </span>
                </div>

                {/* Details Footer */}
                <div className="absolute bottom-6 flex items-center space-x-1.5 text-slate-400 text-[10px] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-purple-500" />
                  <span>Nigeria, West Africa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase">
                THE MIND BEHIND ALPHA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-slate-900 dark:text-white">
                Ahmed Abdulsalam
              </h3>
              <p className="text-sm font-semibold tracking-wider text-slate-400 font-mono uppercase mt-1">
                Founder, Designer & Tech Craftsman
              </p>
            </div>

            <div className="h-[1px] bg-slate-200 dark:bg-slate-800/80 w-full" />

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {FOUNDER_INFO.biography}
            </p>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-1 bg-purple-500/10 rounded-md text-purple-500">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                    Problem Solver
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Committed to converting friction points into elegant systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 p-1 bg-blue-500/10 rounded-md text-blue-500">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                    Engineering Ambition
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Striving to develop products with broad social and economic benefit.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-slate-200 dark:bg-slate-800/80 w-full" />

            {/* Social Channels / Action Handles */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                Direct Channels & Coordinates
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      id={`founder-social-${social.name.toLowerCase()}`}
                      className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-200 hover:scale-[1.03] cursor-pointer ${
                        isDark
                          ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-purple-500" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
