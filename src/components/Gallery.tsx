import React, { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';
import { Image, Award, Users, Cpu, Maximize2, X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryProps {
  theme: 'dark' | 'light';
}

type GalleryCategory = 'All' | 'screenshot' | 'graphic' | 'award' | 'moment';

export default function Gallery({ theme }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories: Array<{ id: GalleryCategory; label: string }> = [
    { id: 'All', label: 'All Artifacts' },
    { id: 'screenshot', label: 'Screenshots' },
    { id: 'graphic', label: 'Graphic Designs' },
    { id: 'award', label: 'Awards' },
    { id: 'moment', label: 'Learning Moments' },
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxItem) return;
    const currentIndex = GALLERY_DATA.findIndex((i) => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_DATA.length;
    setLightboxItem(GALLERY_DATA[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxItem) return;
    const currentIndex = GALLERY_DATA.findIndex((i) => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
    setLightboxItem(GALLERY_DATA[prevIndex]);
  };

  // Render a beautiful stylized geometric blueprint background in lieu of boring gray
  const renderStylizedCardBackground = (item: GalleryItem) => {
    switch (item.id) {
      case 'gal-1': // Robotics Workshop Prototyping
        return (
          <div className="absolute inset-0 bg-linear-to-br from-purple-950 to-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
            <Cpu className="w-12 h-12 text-purple-400 mb-2 animate-pulse" />
            <span className="font-mono text-[10px] text-purple-400">ROB_LAB_TEST_4</span>
            <div className="mt-2 w-16 h-1 bg-purple-500 rounded-full" />
            <span className="block text-[8px] font-mono text-slate-500 mt-2">IR_SENSOR_CALIBRATION_STAGE</span>
          </div>
        );
      case 'gal-2': // Cyberpunk Brand Identity System
        return (
          <div className="absolute inset-0 bg-linear-to-br from-pink-950 to-purple-950 flex flex-col items-center justify-center p-6 text-center select-none">
            <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400 font-display">
              CYBERPUNK
            </span>
            <span className="font-mono text-[9px] text-pink-400 tracking-wider mt-1">HOLANREWAJU TALENTED</span>
            <div className="mt-4 flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-pink-500" />
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </div>
        );
      case 'gal-3': // Alpha OS Web Interface Concept
        return (
          <div className="absolute inset-0 bg-linear-to-br from-blue-950 to-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="w-full max-w-[140px] border border-blue-500/20 rounded-lg p-2.5 bg-slate-950/80 backdrop-blur-xs text-left font-mono">
              <div className="flex items-center justify-between border-b border-blue-500/10 pb-1.5 mb-1.5">
                <span className="text-[8px] text-blue-400">ALPHA_OS_WEB</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 rounded-full bg-blue-500" />
                  <div className="w-1 h-1 rounded-full bg-purple-500" />
                </div>
              </div>
              <div className="h-6 w-full bg-blue-500/10 rounded-sm mb-1" />
              <div className="h-2 w-10 bg-purple-500/20 rounded-xs" />
            </div>
          </div>
        );
      case 'gal-4': // First Place - Local STEM Hackathon
        return (
          <div className="absolute inset-0 bg-linear-to-br from-amber-950/80 to-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
            <Award className="w-12 h-12 text-amber-400 mb-2 animate-bounce" style={{ animationDuration: '3s' }} />
            <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-widest">
              STEM AWARD #1
            </span>
            <span className="block text-[8px] font-mono text-slate-500 mt-1">AUTONOMOUS DISASTER CONCEPT</span>
          </div>
        );
      case 'gal-5': // Smart Solar Battery Charger PCB
        return (
          <div className="absolute inset-0 bg-linear-to-br from-teal-950 to-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="w-24 h-24 border-2 border-dashed border-teal-500/20 rounded-full flex items-center justify-center relative animate-spin" style={{ animationDuration: '40s' }}>
              <div className="w-16 h-16 border border-teal-500/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-teal-500/10 rounded-full" />
              </div>
            </div>
            <span className="absolute font-mono text-[9px] text-teal-400">PCB_SOLAR_V1.0</span>
          </div>
        );
      case 'gal-6': // Nigeria STEM Education Drive
        return (
          <div className="absolute inset-0 bg-linear-to-br from-emerald-950/90 to-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
            <Users className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider">
              STEM EDUCATION OUTREACH
            </span>
            <span className="block text-[8px] font-mono text-slate-500 mt-1">NIGERIA COMMUNITY PROJECT</span>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
            <Image className="w-10 h-10 text-slate-500" />
          </div>
        );
    }
  };

  const isDark = theme === 'dark';

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-slate-950/5 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            MEDIA CHRONOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Laboratory Gallery
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-tab-${cat.id.toLowerCase()}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'text-white bg-linear-to-r from-purple-600 to-blue-500 shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                  : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setLightboxItem(item)}
                className={`group rounded-2xl overflow-hidden border cursor-pointer relative h-64 flex flex-col justify-end transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 ${
                  isDark ? 'border-slate-900/80 bg-slate-950' : 'border-slate-200 bg-white shadow-sm'
                }`}
              >
                {/* Visual Artwork background placeholder */}
                {renderStylizedCardBackground(item)}

                {/* Cover Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 text-left relative z-10">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-purple-400 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.description}
                  </p>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Lightbox modal */}
        <AnimatePresence>
          {lightboxItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxItem(null)}
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              />

              {/* Lightbox Body wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 text-white z-10 relative shadow-2xl shadow-black"
              >
                {/* Visual Stage */}
                <div className="h-72 sm:h-96 w-full bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-slate-900">
                  {renderStylizedCardBackground(lightboxItem)}

                  {/* Left/Right navigation controllers */}
                  <button
                    id="lightbox-prev-btn"
                    onClick={handlePrev}
                    className="absolute left-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-slate-300 hover:text-white hover:bg-black/60 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    id="lightbox-next-btn"
                    onClick={handleNext}
                    className="absolute right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-slate-300 hover:text-white hover:bg-black/60 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    id="lightbox-close-btn"
                    onClick={() => setLightboxItem(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-slate-300 hover:text-white hover:bg-black/60 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Details description block */}
                <div className="p-6 sm:p-8 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-purple-500/10 border border-purple-500/25 text-purple-400 uppercase tracking-widest">
                      {lightboxItem.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      ID: {lightboxItem.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {lightboxItem.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Alpha Lab Archives © 2026</span>
                    <button
                      id="lightbox-share-btn"
                      onClick={() => alert('Link copied to clipboard (Mock)')}
                      className="inline-flex items-center space-x-1 hover:text-white cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5 text-purple-500" />
                      <span>Copy Reference Link</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
