import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, Send, CheckCircle, Copy, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const coordinates = [
    { label: 'Email Address', value: 'omolayemi89@gmail.com', icon: Mail, copyable: true },
    { label: 'Mobile Contact', value: '+234 800 000 0000', icon: Phone, copyable: true },
    { label: 'Primary Location', value: 'Nigeria, West Africa', icon: MapPin, copyable: false },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'X (Twitter)', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  const handleCopy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please populate all required terminal fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate futuristic signal transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/5 dark:bg-transparent">
      {/* Decorative vertical divider line */}
      <div className="absolute inset-x-0 h-[1px] bg-linear-to-r from-transparent via-purple-500/25 to-transparent top-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            COMMUNICATION PORTAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Contact & Support
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Master Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Coordinates and Map Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white font-display">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you want to commission a brand design under HOLANREWAJU TALENTED, inquire about Alpha Technologies solutions, tutor STEM structures, or collaborate on robotics—the portal is open.
              </p>

              {/* Coordinates List */}
              <div className="space-y-4 pt-4">
                {coordinates.map((coord, idx) => {
                  const Icon = coord.icon;
                  const isCopied = copiedField === coord.label;

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border flex items-center justify-between ${
                        isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <span className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                            {coord.label}
                          </span>
                          <span className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5 select-all">
                            {coord.value}
                          </span>
                        </div>
                      </div>

                      {coord.copyable && (
                        <button
                          id={`copy-coord-btn-${idx}`}
                          onClick={() => handleCopy(coord.value, coord.label)}
                          className={`p-2 rounded-lg border transition-all ${
                            isCopied
                              ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-500'
                              : isDark
                              ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                          } cursor-pointer`}
                        >
                          {isCopied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social channels card */}
            <div
              className={`p-6 rounded-3xl border ${
                isDark ? 'bg-white/5 border-white/10 backdrop-blur-xl' : 'bg-slate-100/50 border-slate-200'
              }`}
            >
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4 text-left">
                Decentralized Broadcasts & Social Channels
              </h4>
              <div className="flex items-center space-x-3.5">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={idx}
                      href={social.url}
                      id={`contact-social-link-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
                      aria-label={`Visit Ahmed Abdulsalam on ${social.name}`}
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer ${
                        isDark
                          ? 'bg-white/5 border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white'
                          : 'bg-white border-slate-200 hover:border-purple-600 text-slate-600 hover:text-purple-700 shadow-xs'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Message Terminal Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border h-full flex flex-col justify-between relative overflow-hidden ${
                isDark
                  ? 'bg-white/5 border-white/10 backdrop-blur-xl shadow-xl shadow-black/45'
                  : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
              }`}
            >
              {/* HUD alignment guides */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-purple-500/20" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-purple-500/20" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-purple-500/20" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-purple-500/20" />

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div className="text-left">
                      <h3 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
                        Transmit Message
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1">
                        SECURE ENCRYPTED COMM_MODULE // PORTAL_ACTIVE
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start space-x-2.5 text-xs text-red-600 dark:text-red-400 text-left">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div className="text-left space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                        Full Name / Agency <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name-input"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Ahmed Abdulsalam"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="text-left space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                        Email Address <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="contact-email-input"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="omolayemi89@gmail.com"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Subject */}
                    <div className="text-left space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                        Subject Matter
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="contact-subject-input"
                        value={formData.subject}
                        onChange={handleFormChange}
                        placeholder="Inquiry / Graphic Design / STEM Project"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Message */}
                    <div className="text-left space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                        Message Content <span className="text-purple-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        id="contact-message-input"
                        rows={5}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Deconstruct your objectives clearly here..."
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white placeholder-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 active:scale-98 transition-all duration-200 flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>TRANSMITTING WAVE SIGNAL...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>TRANSMIT SIGNAL</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submit-success-hud"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-500 animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white font-display">
                        Quantum Signal Transmitted!
                      </h3>
                      <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                        SECURE TICKET ID: #ALT-{(Math.random() * 100000).toFixed(0)}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                      Thank you for contacting Alpha Technologies. Your request has bypassed encryption and successfully saved inside our active routing database. Ahmed Abdulsalam will review and connect shortly.
                    </p>

                    <div className="pt-4">
                      <button
                        id="transmission-reset-btn"
                        onClick={() => setSubmitSuccess(false)}
                        className={`px-5 py-2.5 rounded-xl border text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Transmit New Message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
