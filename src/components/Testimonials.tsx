import { TESTIMONIALS_DATA } from '../data';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialsProps {
  theme: 'dark' | 'light';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const isDark = theme === 'dark';

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/5 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            COMMUNITY WORDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Recommendations & Testimonials
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Reviews and testimonials from lecturers, collaborators, and corporate clients highlighting our diligence, learning speed, and design deliverables.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className={`p-8 rounded-3xl border relative flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 group ${
                isDark
                  ? 'bg-slate-950/40 border-slate-900 hover:border-purple-500/25 shadow-lg shadow-black/10'
                  : 'bg-white border-slate-200 shadow-md shadow-slate-100 hover:border-purple-600/25'
              }`}
            >
              {/* Decorative quote icon */}
              <div className="absolute top-6 right-8 text-purple-500/10 group-hover:text-purple-500/15 group-hover:scale-110 transition-all duration-300">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-5 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Text body */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic relative z-10">
                  "{test.text}"
                </p>
              </div>

              {/* Profile card footer */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-200/40 dark:border-slate-800/80">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white text-sm font-display shadow-md shadow-purple-500/10">
                  {test.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                    {test.name}
                  </h4>
                  <p className="text-[11px] font-mono tracking-wider uppercase text-purple-600 dark:text-purple-400 mt-0.5">
                    {test.role}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
