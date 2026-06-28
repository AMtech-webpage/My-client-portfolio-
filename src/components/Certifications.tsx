import { CERTIFICATIONS_DATA } from '../data';
import { Award, ShieldCheck, Calendar, Hash, ExternalLink, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface CertificationsProps {
  theme: 'dark' | 'light';
}

export default function Certifications({ theme }: CertificationsProps) {
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
            VERIFIED QUALIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 dark:text-white font-display">
            Certifications & Credentials
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            These credentials represent verified milestones in advanced computation, user interface architecture, graphic guidelines, and embedded IoT hardware designs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              id={`certification-card-${cert.id}`}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden transition-all duration-300 group ${
                isDark
                  ? 'bg-slate-950/40 border-slate-900 hover:border-purple-500/30 shadow-lg shadow-black/25'
                  : 'bg-white border-slate-200 shadow-md shadow-slate-100 hover:border-purple-600/30'
              }`}
            >
              {/* Certificate badge illustration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-bl-full blur-xl group-hover:scale-125 transition-transform duration-500" />

              <div className="flex items-start space-x-5 relative z-10">
                {/* Visual Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500/15 to-blue-500/15 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-purple-500" />
                </div>

                <div className="space-y-1.5 text-left">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white group-hover:text-purple-500 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 font-sans">
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
                    {/* Date */}
                    <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-purple-500" />
                      <span>Issued: {cert.date}</span>
                    </div>

                    {/* ID */}
                    {cert.credentialId && (
                      <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-500">
                        <Hash className="w-3.5 h-3.5 text-blue-500" />
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Verify Badge button */}
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  id={`verify-cert-link-${cert.id}`}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-center text-xs font-semibold tracking-wide border border-slate-200/40 dark:border-slate-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500/10 hover:border-purple-500 text-slate-700 dark:text-slate-300 transition-all duration-200 flex items-center justify-center space-x-1.5 shrink-0 relative z-10 cursor-pointer"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
