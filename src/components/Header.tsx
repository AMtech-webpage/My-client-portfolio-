import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Founder', id: 'founder' },
    { label: 'Skills', id: 'skills' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blog', id: 'blog' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Goals', id: 'goals' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/25'
            : 'bg-white/75 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <button
            id="header-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="text-left">
              <span className="block font-sans font-bold text-base sm:text-lg tracking-wider text-transparent bg-clip-text bg-linear-to-r from-white via-purple-200 to-blue-300 dark:from-white dark:via-purple-200 dark:to-blue-400 font-display">
                ALPHA
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 -mt-1 font-mono">
                TECHNOLOGIES
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium font-sans transition-all duration-200 relative cursor-pointer ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'text-white bg-slate-900/60'
                      : 'text-purple-700 bg-slate-100'
                    : theme === 'dark'
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900/30'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100/50'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-linear-to-r from-purple-500 to-blue-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-105 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-purple-400 hover:text-purple-300'
                  : 'bg-slate-100 border-slate-200 text-purple-600 hover:text-purple-800'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Action Button */}
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold tracking-wider font-sans text-white bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              GET IN TOUCH
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg border cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-purple-700'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`lg:hidden border-b overflow-hidden ${
              theme === 'dark'
                ? 'bg-slate-950/95 border-slate-900'
                : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? 'text-white bg-slate-900/80 border-l-2 border-purple-500'
                        : 'text-purple-700 bg-slate-100 border-l-2 border-purple-600'
                      : theme === 'dark'
                      ? 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                      : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-cta-btn"
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-lg text-center text-sm font-semibold tracking-wide text-white bg-linear-to-r from-purple-600 to-blue-500"
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
