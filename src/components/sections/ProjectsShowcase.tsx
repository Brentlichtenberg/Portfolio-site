import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { projects, type Project } from '../../data/projects';

const CATEGORY_LABELS: Record<Project['category'], string> = {
  app:          'App',
  qa:           'QA / Testing',
  photography:  'Photography',
  creative:     'Creative',
};

const CATEGORY_COLORS: Record<Project['category'], string> = {
  app:         'bg-blue-900/50 text-blue-300 border-blue-700/40',
  qa:          'bg-violet-900/50 text-violet-300 border-violet-700/40',
  photography: 'bg-amber-900/50 text-amber-300 border-amber-700/40',
  creative:    'bg-emerald-900/50 text-emerald-300 border-emerald-700/40',
};

function MediaCarousel({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const media = project.media.filter(m => !m.url.includes('TODO'));
  const current = media[index];

  if (!media.length) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-slate-600">
        <span className="text-5xl mb-3">🖼</span>
        <span className="text-sm">Media added in Phase 3</span>
      </div>
    );
  }

  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);
  const next = () => setIndex((i) => (i + 1) % media.length);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          {current.type === 'video' ? (
            <ReactPlayer
              src={current.url}
              width="100%"
              height="100%"
              controls
              playing={false}
              light={current.poster}
            />
          ) : (
            <img
              src={current.url}
              alt={current.alt ?? project.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {media.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white text-xl backdrop-blur-sm transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white text-xl backdrop-blur-sm transition-colors"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const firstMedia = project.media[0];
  const isVideo = firstMedia?.type === 'video';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="group bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative aspect-video bg-slate-800 overflow-hidden">
        {firstMedia && !firstMedia.url.includes('TODO') ? (
          isVideo ? (
            <div className="absolute inset-0">
              {firstMedia.poster && (
                <img src={firstMedia.poster} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="text-white text-lg ml-0.5">▶</span>
                </div>
              </div>
            </div>
          ) : (
            <img src={firstMedia.url} alt={firstMedia.alt ?? project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          )
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600">
            <span className="text-4xl mb-2">🖼</span>
            <span className="text-xs">Media added in Phase 3</span>
          </div>
        )}

        <span className={`absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[project.category]}`}>
          {CATEGORY_LABELS[project.category]}
        </span>
        {project.featured && (
          <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full bg-yellow-900/60 text-yellow-300 border border-yellow-700/40">
            Featured
          </span>
        )}

      </div>

      <div className="p-4">
        <h3 className="font-semibold text-white text-base mb-1">{project.title}</h3>
        <p className="text-sm text-slate-400 line-clamp-2 mb-3">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-0.5 text-slate-600">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="aspect-video bg-slate-800 rounded-t-2xl overflow-hidden">
          <MediaCarousel project={project} />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full border mb-2 ${CATEGORY_COLORS[project.category]}`}>
                {CATEGORY_LABELS[project.category]}
              </span>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-slate-400 mt-1">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              ✕
            </button>
          </div>

          <p className="text-slate-300 leading-relaxed mb-5 whitespace-pre-line">{project.description}</p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsShowcase() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Projects</h2>
          <p className="text-slate-400 mt-3">Click any project to see details, media, and links.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setActive(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
