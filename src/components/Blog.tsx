import { useState, FormEvent, MouseEvent } from 'react';
import { Calendar, User, BookOpen, Plus, Tag, Trash2, ArrowRight, X, Sparkles, Send, Clock, Eye, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Insights' | 'Company Update' | 'Reflections' | 'Hardware';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  imageUrl: string;
  tags: string[];
}

interface BlogProps {
  theme: 'dark' | 'light';
}

const INITIAL_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Cybernetic Frontier: Integrating Edge AI on Low-Power Nodes',
    excerpt: 'Exploring how micro-scale neural networks are transforming local telemetry processing in agricultural automation.',
    content: `### The Transition to Intelligent Edge Nodes

For decades, the standard IoT architecture has relied on dumb sensor terminals transmitting raw telemetry streams to centralized cloud servers. However, in regions with intermittent network grids, like rural Africa, this model collapses under latency and connectivity failures.

At Alpha Technologies, we have been experimenting with running compiled TensorFlow Lite and custom C++ matrices directly on low-power 32-bit microcontrollers.

#### Key Advancements:
1. **Zero Cloud Dependence**: Telemetry is analyzed on-site with micro-millisecond response loops.
2. **Bandwidth Preservation**: Only critical anomalies are queued for uplink.
3. **Power Savings**: Deep sleep states can be managed intelligently by on-chip predictions.

Our latest models demonstrate that we can classify complex agricultural moisture, temperature, and atmospheric stress patterns on-chip with over 94.2% precision while consuming under 45mA.`,
    category: 'Insights',
    date: 'June 25, 2026',
    readTime: '5 min read',
    author: {
      name: 'Ahmed Abdulsalam',
      role: 'Founder, Alpha Technologies',
    },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['Artificial Intelligence', 'Embedded Systems', 'IoT']
  },
  {
    id: 'post-2',
    title: 'Building Alpha Technologies: Reimagining Africa\'s Hardware Future',
    excerpt: 'A deep reflection on why local hardware manufacturing and open-source STEM kits are vital for the continent\'s next decade.',
    content: `### Designing for Africa's Unique Constraints

Innovation is often limited by accessibility. In many African schools, science laboratories are purely theoretical spaces. Students write down circuit diagrams on chalkboards without ever touching a breadboard or holding a resistor.

We founded Alpha Technologies to change this equation.

#### The "Alpha Academics" Vision
Our mission is to construct self-healing microgrids and affordable robotics kits using local raw materials and clever packaging:
*   **Locally Sourced Housing**: Utilizing recycled plastics for rover chassis.
*   **Offline Education Hubs**: Interactive micro-SD cards loaded with rich visual curriculums that run without active internet.
*   **Low Barrier Entry**: Engineering microchips to be easily programmable with simple block coding.

The next generation of engineering technologists shouldn't just be software developers; we must build physical systems to secure our energy, agriculture, and educational pipelines.`,
    category: 'Reflections',
    date: 'May 18, 2026',
    readTime: '8 min read',
    author: {
      name: 'Ahmed Abdulsalam',
      role: 'Founder, Alpha Technologies',
    },
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    tags: ['STEM Education', 'Robotics', 'Hardware Innovation']
  },
  {
    id: 'post-3',
    title: 'Alpha OS Interface Concept: Launching Version 2.4-Beta',
    excerpt: 'A showcase of our newly deployed holographic UI style layer for remote microcontroller control panels.',
    content: `### Version 2.4: The Holographic Control Layer

Today, we are deploying a comprehensive update to our web interface control framework, codenamed Alpha OS. Built specifically to complement embedded hardware arrays, V2.4 provides real-time telemetry rendering using high-speed canvas simulations.

#### What's New in V2.4:
*   **Low-latency Socket Integration**: Telemetry fields refresh under 15ms.
*   **Adaptive Glassmorphic Skins**: Premium light-refracting panels that scale across desktop and mobile screens.
*   **Custom Dial Gauges**: Designed using vector mathematics rather than bulky image assets, cutting load speed to under 120ms.

We believe that professional software must look as incredible as it performs. The interface leverages Tailwind CSS, responsive grid engines, and robust error handlers to make remote control an aesthetic experience.`,
    category: 'Company Update',
    date: 'April 02, 2026',
    readTime: '3 min read',
    author: {
      name: 'Ahmed Abdulsalam',
      role: 'Founder, Alpha Technologies',
    },
    imageUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=1200',
    tags: ['UI/UX', 'Alpha OS', 'Vite']
  }
];

const PRESET_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600', name: 'Cybernetic Circuitry' },
  { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600', name: 'Robotic Automation' },
  { url: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=600', name: 'Futuristic Grid' },
  { url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600', name: 'Advanced AI/Mesh' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', name: 'Cosmic Node Net' },
];

export default function Blog({ theme }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('alpha-blog-posts');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_POSTS;
      }
    }
    return INITIAL_POSTS;
  });

  const [activeCategory, setActiveCategory] = useState<'All' | 'Insights' | 'Company Update' | 'Reflections' | 'Hardware'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showPublishForm, setShowPublishForm] = useState(false);

  // New Post Form State
  const [newTitle, setNewTitle] = useState('');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState<BlogPost['category']>('Insights');
  const [newTags, setNewTags] = useState('');
  const [selectedImgPreset, setSelectedImgPreset] = useState(PRESET_IMAGES[0].url);
  const [customImgUrl, setCustomImgUrl] = useState('');
  const [formError, setFormError] = useState('');

  const isDark = theme === 'dark';

  const savePosts = (updated: BlogPost[]) => {
    setPosts(updated);
    localStorage.setItem('alpha-blog-posts', JSON.stringify(updated));
  };

  const handlePublish = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!newTitle.trim() || !newExcerpt.trim() || !newContent.trim()) {
      setFormError('Please fulfill all required fields (Title, Excerpt, and Article Body).');
      return;
    }

    const tagsArray = newTags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title: newTitle,
      excerpt: newExcerpt,
      content: newContent,
      category: newCategory,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      readTime: `${Math.max(2, Math.ceil(newContent.split(/\s+/).length / 200))} min read`,
      author: {
        name: 'Ahmed Abdulsalam',
        role: 'Founder, Alpha Technologies',
      },
      imageUrl: customImgUrl.trim() || selectedImgPreset,
      tags: tagsArray.length > 0 ? tagsArray : ['Alpha Technologies', newCategory]
    };

    const updated = [newPost, ...posts];
    savePosts(updated);

    // Reset Form
    setNewTitle('');
    setNewExcerpt('');
    setNewContent('');
    setNewCategory('Insights');
    setNewTags('');
    setCustomImgUrl('');
    setSelectedImgPreset(PRESET_IMAGES[0].url);
    setShowPublishForm(false);
  };

  const handleDelete = (id: string, e: MouseEvent) => {
    e.stopPropagation(); // Avoid triggering details popup
    const updated = posts.filter(p => p.id !== id);
    savePosts(updated);
    if (selectedPost?.id === id) {
      setSelectedPost(null);
    }
  };

  // Filter criteria
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            NEWSROOM & KNOWLEDGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Alpha Insights & Innovations
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            An elegant chronicle exploring technological insights, company-wide releases, engineering breakthroughs, and Ahmed Abdulsalam's personal reflections on future innovations.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* Search, Filter Tabs & Publish Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              id="blog-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles, tags..."
              className={`w-full px-4 py-2.5 pl-10 text-xs sm:text-sm font-sans rounded-xl border focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                isDark
                  ? 'bg-white/5 border-white/10 text-slate-100 placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
              }`}
            />
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
              <Tag className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center">
            {(['All', 'Insights', 'Company Update', 'Reflections', 'Hardware'] as const).map((cat) => (
              <button
                key={cat}
                id={`blog-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'text-white bg-linear-to-r from-purple-600 to-blue-500 shadow-md'
                    : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Publish Trigger */}
          <button
            id="blog-publish-trigger-btn"
            onClick={() => setShowPublishForm(true)}
            className="px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-200 flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Publish Article</span>
          </button>
        </div>

        {/* Empty state fallback */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 border border-dashed rounded-3xl border-slate-800 bg-slate-950/20 max-w-xl mx-auto">
            <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-4" />
            <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">No Articles Found</h4>
            <p className="text-xs text-slate-500 mt-2">
              There are no publications matching the filter query. Be the first to publish a new custom insight!
            </p>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => setSelectedPost(post)}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-white/5 border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 hover:border-purple-500/30'
                  : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div>
                {/* Image Header with Hover Scale */}
                <div className="h-48 w-full overflow-hidden relative border-b border-slate-200/10 dark:border-slate-900/40">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-widest uppercase bg-purple-600 text-white border border-purple-500/30 shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Optional Delete for user created ones */}
                  {post.id.startsWith('post-17') || post.id.startsWith('post-18') || post.id.includes(Date.now().toString().slice(0, 4)) ? (
                    <button
                      id={`delete-post-${post.id}`}
                      aria-label="Delete Article"
                      onClick={(e) => handleDelete(post.id, e)}
                      className="absolute top-4 right-4 p-1.5 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all cursor-pointer z-20"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  ) : null}
                </div>

                {/* Article Info */}
                <div className="p-6">
                  {/* Metadata line */}
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-purple-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-purple-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white line-clamp-2 group-hover:text-purple-500 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="p-6 pt-0 border-t border-slate-200/10 dark:border-slate-800/20 mt-4 flex items-center justify-between">
                {/* Author Info */}
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-linear-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                    AA
                  </div>
                  <div className="text-[10px] text-left">
                    <span className="block font-semibold text-slate-800 dark:text-slate-200">{post.author.name}</span>
                    <span className="block text-[8px] font-mono text-slate-400">{post.author.role}</span>
                  </div>
                </div>

                {/* Arrow */}
                <span className="text-[10px] font-bold text-purple-500 group-hover:text-purple-400 flex items-center space-x-1 font-mono uppercase tracking-wide">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Publish Sliding Form Modal */}
        <AnimatePresence>
          {showPublishForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowPublishForm(false)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.35, type: 'spring', damping: 25 }}
                className={`w-full max-w-2xl border rounded-3xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col ${
                  isDark
                    ? 'bg-[#050505] border-white/10 text-white backdrop-blur-2xl'
                    : 'bg-white border-slate-200 text-slate-950 shadow-2xl'
                }`}
              >
                {/* HUD Panel Header */}
                <div className="p-6 border-b border-slate-200/10 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      PUBLISHING_TERMINAL // WRITE_NEW_ARTICLE
                    </span>
                  </div>
                  <button
                    id="blog-publish-close-btn"
                    onClick={() => setShowPublishForm(false)}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-transparent hover:border-slate-700/30 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Form scrollable container */}
                <form onSubmit={handlePublish} className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1">
                  {formError && (
                    <div className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Title Field */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      id="input-post-title"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g., Quantum Computing: The Convergence of Physics and Logic"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                        isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                      required
                    />
                  </div>

                  {/* Excerpt Field */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Brief Excerpt (Abstract) *
                    </label>
                    <input
                      type="text"
                      id="input-post-excerpt"
                      value={newExcerpt}
                      onChange={(e) => setNewExcerpt(e.target.value)}
                      placeholder="Write a highly engaging one-sentence summary..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                        isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                      required
                    />
                  </div>

                  {/* Category & Tags Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        Category
                      </label>
                      <select
                        id="select-post-category"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value as BlogPost['category'])}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                          isDark ? 'bg-white/5 border-white/10 text-white [&>option]:bg-slate-950' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <option value="Insights">Insights</option>
                        <option value="Company Update">Company Update</option>
                        <option value="Reflections">Reflections</option>
                        <option value="Hardware">Hardware</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        id="input-post-tags"
                        value={newTags}
                        onChange={(e) => setNewTags(e.target.value)}
                        placeholder="e.g., AI, Robotics, Physics"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                          isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Featured Image Selection Panel */}
                  <div className="space-y-2.5 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Select Featured Image Preset
                    </label>
                    <div className="grid grid-cols-5 gap-2.5">
                      {PRESET_IMAGES.map((img) => (
                        <button
                          key={img.url}
                          type="button"
                          id={`preset-img-${img.name.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => {
                            setSelectedImgPreset(img.url);
                            setCustomImgUrl('');
                          }}
                          className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            selectedImgPreset === img.url && !customImgUrl
                              ? 'border-purple-500 scale-95 shadow-md shadow-purple-500/25'
                              : 'border-transparent hover:scale-95'
                          }`}
                        >
                          <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>

                    <div className="pt-1.5">
                      <span className="block text-[10px] font-mono text-slate-500 mb-1">Or input custom image URL:</span>
                      <input
                        type="url"
                        id="input-post-custom-image"
                        value={customImgUrl}
                        onChange={(e) => setCustomImgUrl(e.target.value)}
                        placeholder="https://images.unsplash.com/your-custom-image-link..."
                        className={`w-full px-4 py-2 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                          isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Body TextArea */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Article Body Content (Supports Markdown headers & lists) *
                    </label>
                    <textarea
                      id="textarea-post-content"
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="Deconstruct your technological research or personal reflection..."
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none ${
                        isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                      required
                    />
                  </div>

                  {/* Submission buttons */}
                  <div className="pt-4 border-t border-slate-200/10 dark:border-white/10 flex items-center justify-end space-x-3">
                    <button
                      type="button"
                      id="btn-cancel-post"
                      onClick={() => setShowPublishForm(false)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                        isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200'
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id="btn-submit-post"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:scale-102 active:scale-98 cursor-pointer transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit & Publish</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Article Details Overlay Reader */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.35, type: 'spring', damping: 25 }}
                className={`w-full max-w-3xl border rounded-3xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col ${
                  isDark
                    ? 'bg-[#050505] border-white/10 text-white backdrop-blur-2xl'
                    : 'bg-white border-slate-200 text-slate-950 shadow-2xl'
                }`}
              >
                {/* HUD Banner Header */}
                <div className="p-6 border-b border-slate-200/10 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      INSIGHT_CORE_READER // ID: {selectedPost.id.toUpperCase()}
                    </span>
                  </div>
                  <button
                    id="blog-detail-close-btn"
                    onClick={() => setSelectedPost(null)}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-transparent hover:border-slate-700/30 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Reader Body content scroll */}
                <div className="overflow-y-auto overflow-x-hidden flex-1">
                  {/* Hero Image */}
                  <div className="h-64 sm:h-80 w-full relative">
                    <img
                      src={selectedPost.imageUrl}
                      alt={selectedPost.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                    
                    {/* Category Overlay */}
                    <div className="absolute bottom-6 left-6 sm:left-8">
                      <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-purple-600 text-white border border-purple-500/20 shadow-md">
                        {selectedPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Title & Metadata */}
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight font-display text-left">
                        {selectedPost.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-b border-slate-200/10 dark:border-white/5 pb-4">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                          {selectedPost.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                          {selectedPost.readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <User className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                          {selectedPost.author.name}
                        </span>
                      </div>
                    </div>

                    {/* Formatted body paragraph content */}
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-left space-y-4 font-sans max-w-none">
                      {selectedPost.content.split('\n\n').map((paragraph, index) => {
                        const trimmed = paragraph.trim();
                        if (trimmed.startsWith('####')) {
                          return (
                            <h5 key={index} className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-400 pt-3">
                              {trimmed.replace(/####/g, '').trim()}
                            </h5>
                          );
                        }
                        if (trimmed.startsWith('###')) {
                          return (
                            <h4 key={index} className="text-lg sm:text-xl font-bold font-display text-slate-800 dark:text-white pt-4 border-b border-purple-500/10 pb-1">
                              {trimmed.replace(/###/g, '').trim()}
                            </h4>
                          );
                        }
                        if (trimmed.startsWith('*') || trimmed.startsWith('-') || trimmed.startsWith('1.')) {
                          const items = trimmed.split('\n').map(li => li.replace(/^[\s*\-1\.]+\s*/, '').trim());
                          return (
                            <ul key={index} className="list-disc list-inside pl-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                              {items.map((it, idx) => (
                                <li key={idx}>
                                  {it.includes('**') ? (
                                    <>
                                      <strong>{it.split('**')[1]}</strong>
                                      {it.split('**')[2]}
                                    </>
                                  ) : it}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={index}>{trimmed}</p>;
                      })}
                    </div>

                    {/* Tag list */}
                    <div className="pt-6 border-t border-slate-200/10 dark:border-white/5 space-y-2.5">
                      <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 text-left">
                        Indexing Codes
                      </h5>
                      <div className="flex flex-wrap gap-2 justify-start">
                        {selectedPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/25 text-purple-700 dark:text-purple-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reader Footer Panel info */}
                <div className="p-6 border-t border-slate-200/10 dark:border-white/10 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-9 h-9 rounded-full bg-linear-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
                      AA
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                        {selectedPost.author.name}
                      </span>
                      <span className="block text-[10px] font-mono text-slate-400">
                        {selectedPost.author.role}
                      </span>
                    </div>
                  </div>
                  <button
                    id="blog-reader-dismiss-btn"
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 cursor-pointer"
                  >
                    Close Document
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
