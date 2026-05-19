import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, interests, type SkillCategory } from '../../data/skills';

const COLOR_MAP: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
  blue:    { bg: 'bg-blue-950/40',   border: 'border-blue-800/40',   badge: 'bg-blue-900/50 text-blue-300 border-blue-700/40',   dot: 'bg-blue-500' },
  violet:  { bg: 'bg-violet-950/40', border: 'border-violet-800/40', badge: 'bg-violet-900/50 text-violet-300 border-violet-700/40', dot: 'bg-violet-500' },
  amber:   { bg: 'bg-amber-950/30',  border: 'border-amber-800/40',  badge: 'bg-amber-900/50 text-amber-300 border-amber-700/40',  dot: 'bg-amber-500' },
  emerald: { bg: 'bg-emerald-950/30',border: 'border-emerald-800/40',badge: 'bg-emerald-900/50 text-emerald-300 border-emerald-700/40', dot: 'bg-emerald-500' },
};

const LEVEL_COLOR: Record<string, string> = {
  Expert:     'text-blue-400',
  Proficient: 'text-emerald-400',
  Familiar:   'text-slate-400',
};

function CategoryCard({ category }: { category: SkillCategory }) {
  const [expanded, setExpanded] = useState(false);
  const colors = COLOR_MAP[category.color] ?? COLOR_MAP['blue'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl border p-5 transition-colors ${colors.bg} ${colors.border} hover:border-opacity-70`}
    >
      <button
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label={category.title}>{category.icon}</span>
            <div>
              <h3 className="font-semibold text-white text-base">{category.title}</h3>
              <p className="text-slate-400 text-sm mt-0.5">{category.summary}</p>
            </div>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-500 text-lg shrink-0"
          >
            ▾
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="skills"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-3 border-t border-white/5">
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                      <span className="text-sm text-slate-300">{skill.name}</span>
                    </div>
                    {skill.level && (
                      <span className={`text-xs font-medium ${LEVEL_COLOR[skill.level] ?? 'text-slate-400'}`}>
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SkillsShowcase() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">What I do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Skills & Expertise</h2>
          <p className="text-slate-400 mt-3">Click a category to expand the full skill list.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-16 items-start">
          {skillCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-white mb-5">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 border border-slate-700/50 text-slate-300 rounded-full text-sm"
              >
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
