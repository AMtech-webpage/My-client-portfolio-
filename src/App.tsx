import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Skills from './components/Skills';
import Roadmap from './components/Roadmap';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FutureGoals from './components/FutureGoals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { Cpu, Github, Linkedin, Twitter, Instagram, Mail, ChevronRight } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);

  // Preloader count-up effect
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [loading]);

  // Read theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('alpha-theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark'); // default dark mode
    }
  }, []);

  // Update DOM when theme changes
  useEffect(() => {
    localStorage.setItem('alpha-theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#050505'; // Sophisticated Dark Black
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc'; // slate 50
    }
  }, [theme]);

  // Track mouse position for the custom futuristic trailing cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setCursorHovered(true);
    const handleHoverEnd = () => setCursorHovered(false);

    window.addEventListener('mousemove', handleMouseMove);

    // Apply scaling on clickable items
    const clickables = document.querySelectorAll('button, a, input, textarea, select, [role="button"]');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [loading]); // refresh listeners after loading completes and DOM mounts

  const handleSetTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
  };

  // Preloader log texts
  const getPreloaderLog = (percent: number) => {
    if (percent < 25) return 'LOADING CORE FRAMEWORK MODULES...';
    if (percent < 50) return 'INITIALIZING FUTURISTIC GRID COMPILER...';
    if (percent < 75) return 'RESOLVING VECTOR LOGIC AND BRAND STACKS...';
    if (percent < 95) return 'MOUNTING NEURAL SENSORS AND TELEMETRY...';
    return 'COCKPIT READY. LAUNCHING MANIFEST!';
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${
        theme === 'dark' ? 'bg-[#050505] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sophisticated Dark background elements */}
      {theme === 'dark' && (
        <>
          <div
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px), radial-gradient(#8b5cf6 0.5px, transparent 0.5px)',
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px',
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        </>
      )}
      {/* 1. Loading Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="preloader-overlay"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white"
          >
            <div className="max-w-md w-full px-6 text-center space-y-6">
              {/* Rotating Logo icon */}
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600 to-blue-500 flex items-center justify-center mx-auto shadow-lg shadow-purple-500/20 animate-pulse">
                <Cpu className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* Counter progress */}
              <div className="space-y-1">
                <h1 className="text-sm font-mono tracking-widest text-slate-400 font-bold">
                  ALPHA TECHNOLOGIES
                </h1>
                <span className="text-3xl font-extrabold font-display text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-300">
                  {loadPercentage}%
                </span>
              </div>

              {/* Simulated Loading Bar */}
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden relative border border-slate-900">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-linear-to-r from-purple-500 to-blue-400"
                  animate={{ width: `${loadPercentage}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Status Log */}
              <p className="text-[10px] font-mono text-purple-400 uppercase tracking-wider animate-pulse h-4">
                {getPreloaderLog(loadPercentage)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Custom Glowing trailing cursor */}
      {!loading && (
        <div
          id="custom-hud-cursor"
          className="hidden md:block fixed pointer-events-none z-[9999]"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Inner solid dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-sm" />

          {/* Outer floating circle ring */}
          <div
            className={`rounded-full border border-purple-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              cursorHovered ? 'w-10 h-10 bg-purple-500/10 scale-125' : 'w-6 h-6 bg-transparent scale-100'
            }`}
          />
        </div>
      )}

      {/* 3. Sticky margins floating social sidebar rail */}
      {!loading && (
        <div
          id="floating-social-rail"
          className="hidden xl:flex flex-col items-center space-y-4 fixed bottom-8 left-6 z-40"
        >
          <div className="flex flex-col items-center space-y-3.5 bg-slate-900/50 dark:bg-slate-950/60 border border-slate-200/40 dark:border-slate-900 p-2.5 rounded-full backdrop-blur-md">
            <a
              href="#"
              id="sidebar-social-github"
              aria-label="GitHub Portal"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              id="sidebar-social-linkedin"
              aria-label="LinkedIn Portal"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              id="sidebar-social-twitter"
              aria-label="X (Twitter) Portal"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              id="sidebar-social-instagram"
              aria-label="Instagram Portal"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:omolayemi89@gmail.com"
              id="sidebar-social-mail"
              aria-label="Mail Direct"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="w-[1px] h-16 bg-slate-200 dark:bg-slate-800" />
        </div>
      )}

      {/* 4. Canvas-based dynamic glowing nodes background */}
      {!loading && <ParticlesBackground theme={theme} />}

      {/* 5. Header / Navigation */}
      {!loading && <Header theme={theme} setTheme={handleSetTheme} />}

      {/* 6. Page Content Sections */}
      {!loading && (
        <main className="relative z-10">
          <Hero theme={theme} />
          <About theme={theme} />
          <Founder theme={theme} />
          <Skills theme={theme} />
          <Roadmap theme={theme} />
          <Projects theme={theme} />
          <Blog theme={theme} />
          <Achievements theme={theme} />
          <Certifications theme={theme} />
          <Gallery theme={theme} />
          <Testimonials theme={theme} />
          <FutureGoals theme={theme} />
          <Contact theme={theme} />
          <Footer theme={theme} />
        </main>
      )}
    </div>
  );
}
