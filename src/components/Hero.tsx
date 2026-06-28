import { useState, useEffect } from 'react';
import { ArrowDown, ChevronRight, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export default function Hero({ theme }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    'Artificial Intelligence',
    'Robotics & Automation',
    'Creative Graphic Design',
    'Embedded Systems Engineering',
    'Modern Software Architecture',
  ];

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const wordDelay = 2200;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), wordDelay);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative ambient radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-purple-600/10 blur-[80px] sm:blur-[120px] absolute -top-10 sm:-top-40 right-10 sm:right-20 animate-pulse duration-[8000ms]" />
        <div className="w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/10 blur-[80px] sm:blur-[120px] absolute -bottom-20 left-10 sm:left-20 animate-pulse duration-[10000ms]" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        {/* Futuristic Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 dark:bg-purple-950/10 mb-8 backdrop-blur-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-300">
            ENGINEERING TOMORROW • NIGERIA
          </span>
        </motion.div>

        {/* Brand/Logo Large Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black font-sans tracking-tighter uppercase select-none leading-none">
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-slate-100 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-500 block">
              ALPHA
            </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-violet-500 to-blue-500 block -mt-1 sm:-mt-3">
              TECHNOLOGIES
            </span>
          </h1>
        </motion.div>

        {/* Tagline / Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto text-slate-800 dark:text-slate-100"
        >
          Engineering Tomorrow.{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-400">
            Building Today.
          </span>
        </motion.h2>

        {/* Typing Specialization text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-8 sm:h-10 flex items-center justify-center mb-8"
        >
          <span className="text-sm sm:text-lg font-mono text-slate-500 dark:text-slate-400">
            Specializing in{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold border-r-2 border-purple-500 pr-1 animate-pulse">
              {typedText}
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Creating the future through innovation, engineering, programming, artificial intelligence, and creative technology. Under the leadership of Ahmed Abdulsalam.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button
            id="hero-explore-btn"
            onClick={() => handleScrollTo('about')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider text-white bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 hover:shadow-xl hover:shadow-purple-500/10 active:scale-98 transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>EXPLORE SYSTEM</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-journey-btn"
            onClick={() => handleScrollTo('roadmap')}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider border transition-all duration-200 active:scale-98 flex items-center justify-center space-x-2 cursor-pointer ${
              isDark
                ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80 hover:border-slate-700'
                : 'bg-white/80 border-slate-200 text-slate-700 hover:text-purple-700 hover:bg-slate-100/80'
            }`}
          >
            <span>MY JOURNEY</span>
          </button>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto border rounded-2xl p-4 sm:p-6 backdrop-blur-xl transition-all ${
            isDark ? 'bg-white/5 border-white/10 shadow-lg shadow-black/20 hover:border-purple-500/30' : 'bg-slate-100/40 border-slate-200'
          }`}
        >
          <div className="text-center">
            <span className="block text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-400">
              100%
            </span>
            <span className="block text-[9px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-mono mt-1">
              African Built
            </span>
          </div>
          <div className="text-center border-x border-slate-200/10 dark:border-slate-800/60 px-2">
            <span className="block text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              STEM
            </span>
            <span className="block text-[9px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-mono mt-1">
              Impact Drive
            </span>
          </div>
          <div className="text-center">
            <span className="block text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
              24/7
            </span>
            <span className="block text-[9px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-mono mt-1">
              Innovation
            </span>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => handleScrollTo('about')}
        >
          <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono mb-2">
            SCROLL DOWN
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-purple-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
