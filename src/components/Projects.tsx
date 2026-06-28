import { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { Search, Github, ExternalLink, Cpu, Code, Palette, Sparkles, Filter, X, ArrowUpRight, CircleDot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export default function Projects({ theme }: ProjectsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Applications' | 'Designs' | 'Experiments'>('All');
  const [filterTech, setFilterTech] = useState<'All' | 'Python' | 'AI' | 'Engineering' | 'React'>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Completed' | 'In Progress' | 'Concept' | 'Beta'>('All');
  const [sortBy, setSortBy] = useState<'title-asc' | 'title-desc' | 'complexity'>('title-asc');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Array<'All' | 'Applications' | 'Designs' | 'Experiments'> = [
    'All', 'Applications', 'Designs', 'Experiments'
  ];

  // Dynamic filtering and sorting logic
  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    // 1. Search term match
    const matchesSearch =
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    // 2. Mapped category tab match
    let matchesCategory = true;
    if (activeTab === 'Applications') {
      matchesCategory = proj.category === 'Software' || proj.category === 'Future';
    } else if (activeTab === 'Designs') {
      matchesCategory = proj.category === 'Design';
    } else if (activeTab === 'Experiments') {
      matchesCategory = proj.category === 'Electronics' || proj.category === 'Robotics';
    }

    // 3. Tech Stack filter match
    let matchesTech = true;
    if (filterTech === 'Python') {
      matchesTech = proj.techStack.some((tech) => tech.toLowerCase().includes('python'));
    } else if (filterTech === 'AI') {
      matchesTech = proj.techStack.some((tech) => tech.toLowerCase().includes('gemini') || tech.toLowerCase().includes('ai')) || proj.category === 'Future';
    } else if (filterTech === 'Engineering') {
      matchesTech =
        proj.category === 'Electronics' ||
        proj.category === 'Robotics' ||
        proj.techStack.some((tech) =>
          ['circuit design', 'arduino', 'embedded systems', 'c++', 'actuators', 'sensors', 'protocols'].some((term) =>
            tech.toLowerCase().includes(term)
          )
        );
    } else if (filterTech === 'React') {
      matchesTech = proj.techStack.some((tech) => tech.toLowerCase().includes('react'));
    }

    // 4. Status filter match
    const matchesStatus = filterStatus === 'All' || proj.status === filterStatus;

    return matchesSearch && matchesCategory && matchesTech && matchesStatus;
  }).sort((a, b) => {
    if (sortBy === 'title-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'title-desc') {
      return b.title.localeCompare(a.title);
    } else if (sortBy === 'complexity') {
      return b.techStack.length - a.techStack.length;
    }
    return 0;
  });

  const getStatusBadgeStyles = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25';
      case 'In Progress':
        return 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25';
      case 'Beta':
        return 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/25';
      case 'Concept':
        return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25';
      default:
        return 'bg-slate-500/15 text-slate-500 border-slate-500/25';
    }
  };

  // Helper to draw clean vector artwork based on category
  const renderProjectArtwork = (proj: Project) => {
    switch (proj.category) {
      case 'Software':
        return (
          <div className="w-full h-full bg-linear-to-br from-purple-900/20 to-[#050505] flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="z-10 p-4 border border-purple-500/30 rounded-xl bg-purple-950/20 backdrop-blur-xs flex items-center space-x-3">
              <Code className="w-8 h-8 text-purple-400" />
              <div className="text-left">
                <span className="block font-mono text-xs text-purple-400">SRC_COMPILATION</span>
                <span className="block text-[10px] text-slate-400 font-mono">STATUS: SYSTEM_LIVE</span>
              </div>
            </div>
          </div>
        );
      case 'Design':
        return (
          <div className="w-full h-full bg-linear-to-br from-pink-900/10 to-[#050505] flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="z-10 p-4 border border-pink-500/30 rounded-xl bg-pink-950/20 backdrop-blur-xs flex items-center space-x-3">
              <Palette className="w-8 h-8 text-pink-400" />
              <div className="text-left">
                <span className="block font-mono text-xs text-pink-400">VEC_IDENTITY</span>
                <span className="block text-[10px] text-slate-400 font-mono">HOLANREWAJU_TALENTED</span>
              </div>
            </div>
          </div>
        );
      case 'Electronics':
        return (
          <div className="w-full h-full bg-linear-to-br from-blue-900/20 to-[#050505] flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="z-10 p-4 border border-blue-500/30 rounded-xl bg-blue-950/20 backdrop-blur-xs flex items-center space-x-3">
              <Cpu className="w-8 h-8 text-blue-400 animate-pulse" />
              <div className="text-left">
                <span className="block font-mono text-xs text-blue-400">EMB_HARDWARE</span>
                <span className="block text-[10px] text-slate-400 font-mono">PIN_OUTS: ANALOG_GPIO</span>
              </div>
            </div>
          </div>
        );
      case 'Robotics':
        return (
          <div className="w-full h-full bg-linear-to-br from-cyan-900/20 to-[#050505] flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="z-10 p-4 border border-cyan-500/30 rounded-xl bg-cyan-950/20 backdrop-blur-xs flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <div className="text-left">
                <span className="block font-mono text-xs text-cyan-400">ROB_AUTONOMOUS</span>
                <span className="block text-[10px] text-slate-400 font-mono">ALGO: PATHFINDING_SENSE</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-linear-to-br from-indigo-900/20 to-[#050505] flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="z-10 p-4 border border-indigo-500/30 rounded-xl bg-indigo-950/20 backdrop-blur-xs flex items-center space-x-3">
              <CircleDot className="w-8 h-8 text-indigo-400" />
              <div className="text-left">
                <span className="block font-mono text-xs text-indigo-400">COGNITIVE_NODE</span>
                <span className="block text-[10px] text-slate-400 font-mono">INTEGRATION_STAGE</span>
              </div>
            </div>
          </div>
        );
    }
  };

  const isDark = theme === 'dark';

  const resetFilters = () => {
    setSearchTerm('');
    setActiveTab('All');
    setFilterTech('All');
    setFilterStatus('All');
    setSortBy('title-asc');
  };

  const hasActiveFilters = searchTerm !== '' || activeTab !== 'All' || filterTech !== 'All' || filterStatus !== 'All' || sortBy !== 'title-asc';

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            ACTIVE PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Featured Projects & Products
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters and Search Bar Container */}
        <div className="space-y-4 mb-12">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Box & Advanced Filters Toggle */}
            <div className="flex items-center gap-3 w-full md:max-w-lg">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="project-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects or technologies..."
                  className={`w-full pl-10 pr-4 py-3 text-xs sm:text-sm font-sans rounded-xl border focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-slate-100 placeholder-slate-500'
                      : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Advanced toggle Button */}
              <button
                id="advanced-filters-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-3 rounded-xl border text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center space-x-2 shrink-0 ${
                  showFilters || hasActiveFilters
                    ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-sm'
                    : isDark
                    ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                )}
              </button>
            </div>

            {/* Mapped Categorization Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 justify-center md:justify-end">
              {categories.map((tab) => (
                <button
                  key={tab}
                  id={`project-tab-${tab.toLowerCase()}`}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    activeTab === tab
                      ? 'text-white bg-linear-to-r from-purple-600 to-blue-500 shadow-md'
                      : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100'
                  }`}
                >
                  {tab === 'All' ? 'All Systems' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Sliding Dynamic Filters Console */}
          <AnimatePresence>
            {(showFilters || hasActiveFilters) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`overflow-hidden border rounded-2xl p-5 ${
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-slate-50 border-slate-200 shadow-inner'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  
                  {/* Tech Stack filter */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Tech Stack Filter
                    </label>
                    <select
                      id="select-filter-tech"
                      value={filterTech}
                      onChange={(e) => setFilterTech(e.target.value as any)}
                      className={`w-full px-3 py-2 rounded-xl border text-xs font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/25 transition-all ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <option value="All">All Tech Stacks</option>
                      <option value="Python">Python Development</option>
                      <option value="AI">AI & Large Language Models</option>
                      <option value="Engineering">Physical Engineering & Robotics</option>
                      <option value="React">React Frontend Framework</option>
                    </select>
                  </div>

                  {/* Status filter */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Project Status
                    </label>
                    <select
                      id="select-filter-status"
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value as any)}
                      className={`w-full px-3 py-2 rounded-xl border text-xs font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/25 transition-all ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <option value="All">All Statuses</option>
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Concept">Concept</option>
                      <option value="Beta">Beta</option>
                    </select>
                  </div>

                  {/* Sorting Order */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Sort Project Cards
                    </label>
                    <select
                      id="select-sort-by"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className={`w-full px-3 py-2 rounded-xl border text-xs font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/25 transition-all ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <option value="title-asc">Alphabetical (A - Z)</option>
                      <option value="title-desc">Reverse Alphabetical (Z - A)</option>
                      <option value="complexity">Technical Complexity (High to Low)</option>
                    </select>
                  </div>

                </div>

                {/* Reset button bar */}
                {hasActiveFilters && (
                  <div className="mt-4 pt-3.5 border-t border-slate-200/20 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">
                      Query parameters processed: {filteredProjects.length} results
                    </span>
                    <button
                      id="reset-filters-btn"
                      onClick={resetFilters}
                      className="px-3 py-1.5 rounded-lg border border-red-500/30 hover:border-red-500 text-red-400 text-[10px] font-bold tracking-wider uppercase hover:bg-red-500/5 transition-all flex items-center space-x-1.5 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                      <span>Reset Filters</span>
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed rounded-3xl border-slate-300 dark:border-slate-800 bg-slate-950/20 max-w-xl mx-auto">
            <Filter className="w-10 h-10 text-slate-500 mx-auto mb-4 animate-pulse" />
            <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">No Projects Found</h4>
            <p className="text-xs text-slate-500 mt-2">
              We couldn't find any blueprint records matching your filter parameters. Adjust or reset to restore system view.
            </p>
            <button
              id="empty-state-reset-btn"
              onClick={resetFilters}
              className="mt-5 px-4 py-2 text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-lg cursor-pointer"
            >
              Restore Standard View
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-white/5 border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 hover:border-purple-500/30'
                  : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div>
                {/* Visual artwork header */}
                <div className="h-48 w-full border-b border-slate-200/10 dark:border-slate-900 overflow-hidden relative">
                  {renderProjectArtwork(proj)}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-widest uppercase border ${getStatusBadgeStyles(proj.status)}`}>
                      {proj.status}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold mb-2">
                    <span>{proj.category}</span>
                    <span>•</span>
                    <span>ALPHA_SYS_0{proj.id.split('-')[1]}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-purple-500 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Card Actions & Tech Pills */}
              <div className="p-6 pt-0">
                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[9px] font-mono tracking-wide bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Open detail trigger */}
                <button
                  id={`project-detail-btn-${proj.id}`}
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-bold tracking-wide border border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500/10 hover:border-purple-500 active:scale-98 transition-all duration-200 flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Deconstruct Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blueprint Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className={`w-full max-w-2xl border rounded-3xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col ${
                  isDark
                    ? 'bg-[#050505] border-white/10 text-white backdrop-blur-2xl'
                    : 'bg-white border-slate-200 text-slate-950 shadow-2xl'
                }`}
              >
                {/* Header HUD Banner */}
                <div className="p-6 border-b border-slate-200/40 dark:border-slate-900 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping shrink-0" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      SYSTEMBLUEPRINT_ANALYSIS // {selectedProject.id.toUpperCase()}
                    </span>
                  </div>
                  <button
                    id="project-modal-close-btn"
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-transparent hover:border-slate-700/30 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal scrollable Content */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  {/* Title & category */}
                  <div>
                    <span className={`px-2.5 py-0.5 rounded-md text-[9px] font-mono tracking-widest uppercase border ${getStatusBadgeStyles(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-white mt-3 font-display">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>

                  {/* Architecture spec */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                      Technologies & Protocols Used
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Blueprint specifications table */}
                  <div className="border border-slate-200/40 dark:border-slate-900 rounded-2xl overflow-hidden font-mono text-[10px] sm:text-xs">
                    <div className="grid grid-cols-2 border-b border-slate-200/40 dark:border-slate-900 p-3 bg-slate-50 dark:bg-slate-950/40">
                      <span className="text-slate-400 uppercase">Parameter</span>
                      <span className="text-slate-400 uppercase">Value</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-200/40 dark:border-slate-900 p-3">
                      <span className="text-slate-400">Platform ID</span>
                      <span className="text-slate-800 dark:text-slate-200">alpha-sys-{selectedProject.id}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-200/40 dark:border-slate-900 p-3">
                      <span className="text-slate-400">Scope Type</span>
                      <span className="text-slate-800 dark:text-slate-200">{selectedProject.category} Implementation</span>
                    </div>
                    <div className="grid grid-cols-2 p-3">
                      <span className="text-slate-400">Author</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">Ahmed Abdulsalam (HOLANREWAJU TALENTED)</span>
                    </div>
                  </div>
                </div>

                {/* Footer with action buttons */}
                <div className="p-6 border-t border-slate-200/40 dark:border-slate-900 bg-slate-50 dark:bg-slate-950/60 flex flex-col sm:flex-row items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      id="modal-github-btn"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                      <span>Explore Repository</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      id="modal-demo-btn"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Live Console</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
