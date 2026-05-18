import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

// Phase 3: Replace the gradient background with a <video> element.
// See the hero-banner reference in the ProSite skill for the full video implementation.

export function HeroBanner() {
  const { owner } = siteConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient — replaced by video in Phase 3 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-violet-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)]" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-700 border-4 border-blue-500/50 flex items-center justify-center overflow-hidden">
            <span className="text-slate-400 text-xs text-center px-2">
              {owner.avatarUrl.includes('TODO') ? 'Photo\nPhase 3' : (
                <img src={owner.avatarUrl} alt={owner.name} className="w-full h-full object-cover" />
              )}
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          {owner.name.replace('TODO: ', '⬛ ')}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-blue-300 font-medium mb-6"
        >
          {owner.tagline.replace('TODO: ', '')}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
        >
          {owner.bio.replace('TODO: ', '')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            View My Work
          </a>
          <a
            href="#timeline"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-full border border-slate-700 hover:border-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            My Experience
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex justify-center gap-5"
        >
          {!owner.linkedin.includes('TODO') && (
            <a
              href={owner.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors text-sm"
            >
              LinkedIn ↗
            </a>
          )}
          {!owner.github.includes('TODO') && (
            <a
              href={owner.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
            >
              GitHub ↗
            </a>
          )}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
