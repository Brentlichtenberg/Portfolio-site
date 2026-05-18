import { useState } from 'react';
import { motion } from 'framer-motion';
import { references, type Reference } from '../../data/references';

const COLLAPSE_THRESHOLD = 280; // chars before "Read more" appears

function ReferenceCard({ ref: r }: { ref: Reference }) {
  const [expanded, setExpanded] = useState(false);
  const long = r.text.length > COLLAPSE_THRESHOLD;
  const displayText = long && !expanded ? r.text.slice(0, COLLAPSE_THRESHOLD) + '…' : r.text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col gap-4 hover:border-slate-700 transition-colors"
    >
      {/* Quote mark */}
      <span className="text-blue-500/40 text-5xl leading-none font-serif select-none">"</span>

      {/* Text */}
      <div>
        <p className="text-slate-300 text-sm leading-relaxed">{displayText}</p>
        {long && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus-visible:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Attribution */}
      <div className="mt-auto pt-3 border-t border-slate-800/70 flex items-center gap-3">
        {r.avatarUrl ? (
          <img
            src={r.avatarUrl}
            alt={r.name}
            className="w-10 h-10 rounded-full object-cover border border-slate-700"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 text-sm font-medium shrink-0">
            {r.name.replace('TODO: ', '?').split(' ').map(w => w[0]).join('').slice(0, 2)}
          </div>
        )}
        <div>
          {r.linkedinUrl ? (
            <a
              href={r.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white text-sm hover:text-blue-400 transition-colors"
            >
              {r.name}
            </a>
          ) : (
            <p className="font-medium text-white text-sm">{r.name}</p>
          )}
          <p className="text-xs text-slate-500">
            {r.title} · {r.company}
          </p>
          <p className="text-xs text-slate-600">{r.relationship} · {r.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function LinkedInReferences() {
  return (
    <section id="references" className="py-20 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">Social proof</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">What Colleagues Say</h2>
          <p className="text-slate-400 mt-3">Recommendations from LinkedIn.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {references.map((r) => (
            <ReferenceCard key={r.id} ref={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
