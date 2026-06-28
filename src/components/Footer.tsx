import { FOUNDER_INFO } from '../data';
import { ArrowUp, Cpu, Heart } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isDark = theme === 'dark';

  return (
    <footer
      id="main-footer"
      className={`border-t relative z-10 transition-colors duration-300 ${
        isDark ? 'bg-slate-950/80 border-slate-900/60' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <span className="block font-sans font-bold text-sm tracking-widest text-slate-800 dark:text-white font-display">
                ALPHA
              </span>
              <span className="block text-[8px] uppercase tracking-widest text-slate-400 font-mono -mt-1">
                TECHNOLOGIES
              </span>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
              "Engineering Tomorrow. Building Today."
            </p>
            <p className="text-[10px] text-slate-500 dark:text-slate-500 font-mono mt-1 text-center md:text-left">
              Founded by {FOUNDER_INFO.name} • {FOUNDER_INFO.brandName}
            </p>
          </div>

          {/* Scroll back to top */}
          <button
            id="back-to-top-btn"
            onClick={handleScrollToTop}
            className={`p-3 rounded-xl border flex items-center justify-center transition-all hover:scale-105 cursor-pointer ${
              isDark
                ? 'bg-slate-900 border-slate-800 text-purple-400 hover:text-purple-300 hover:border-purple-500/20'
                : 'bg-white border-slate-200 text-purple-600 hover:text-purple-800 hover:border-purple-600/20 shadow-xs'
            }`}
            aria-label="Scroll Back To Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="my-8 h-[1px] bg-slate-200 dark:bg-slate-900" />

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 dark:text-slate-500">
          <span>
            © {new Date().getFullYear()} Alpha Technologies. All rights reserved.
          </span>
          <span className="flex items-center space-x-1">
            <span>Designed & Built in Nigeria with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          </span>
        </div>
      </div>
    </footer>
  );
}
