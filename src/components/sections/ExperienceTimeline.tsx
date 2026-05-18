import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineEntries, type TimelineEntry } from '../../data/timeline';

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-950 ring-2 ring-blue-500/30" />

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-white text-base">{entry.role}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-0.5">
              <span>
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {entry.company}
                  </a>
                ) : (
                  entry.company
                )}
              </span>
              <span className="text-slate-700">·</span>
              <span>{entry.location}</span>
            </div>
          </div>
          <span className="text-xs text-slate-500 sm:text-right shrink-0 bg-slate-800/60 px-2.5 py-1 rounded-full">
            {entry.startDate} – {entry.endDate}
          </span>
        </div>

        {/* Summary (always visible) */}
        <p className="text-sm text-slate-400 mb-3">{entry.summary}</p>

        {/* Tags */}
        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-blue-900/30 text-blue-300 border border-blue-800/40 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors focus:outline-none focus-visible:text-slate-300"
        >
          <span>{expanded ? 'Show less' : 'Show more'}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            ▾
          </motion.span>
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-slate-800/60 mt-2">
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Experience</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Click any entry to expand the full description.
          </p>
        </motion.div>

        <div className="ml-2">
          {timelineEntries.map((entry) => (
            <TimelineCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
