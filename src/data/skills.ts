// ─────────────────────────────────────────────
// skills.ts — Skills by category + interests
// Populated in Phase 2 from your resume.
// ─────────────────────────────────────────────

export interface SkillItem {
  name: string;
  level?: 'Expert' | 'Proficient' | 'Familiar'; // Optional proficiency label
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;  // emoji or icon name
  color: string; // Tailwind background class for the card accent
  summary: string; // Shown collapsed
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'qa',
    title: 'QA & Testing',
    icon: '🔍',
    color: 'blue',
    summary: 'Primary expertise — website and mobile app quality assurance.',
    skills: [
      { name: 'TODO: e.g. Selenium', level: 'Expert' },
      { name: 'TODO: e.g. Playwright', level: 'Proficient' },
      { name: 'TODO: e.g. LambdaTest', level: 'Expert' },
      { name: 'TODO: e.g. TestRail', level: 'Proficient' },
      { name: 'TODO: e.g. Jira', level: 'Expert' },
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    icon: '📱',
    color: 'violet',
    summary: 'iOS and cross-platform app development.',
    skills: [
      { name: 'TODO: e.g. Swift / SwiftUI', level: 'Proficient' },
      { name: 'TODO: e.g. React Native', level: 'Familiar' },
      { name: 'TODO: e.g. Xcode', level: 'Proficient' },
    ],
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: '📷',
    color: 'amber',
    summary: 'Capturing moments — TODO: your photography style.',
    skills: [
      { name: 'TODO: e.g. Lightroom', level: 'Proficient' },
      { name: 'TODO: e.g. Portrait Photography' },
      { name: 'TODO: e.g. Landscape Photography' },
    ],
  },
  {
    id: 'music',
    title: 'Music',
    icon: '🎵',
    color: 'emerald',
    summary: 'TODO: Short description of your musical background.',
    skills: [
      { name: 'TODO: e.g. Guitar', level: 'Proficient' },
      { name: 'TODO: e.g. Music Production' },
    ],
  },
];

export interface Interest {
  label: string;
  icon: string;
}

export const interests: Interest[] = [
  { label: 'TODO: Interest 1', icon: '🎯' },
  { label: 'TODO: Interest 2', icon: '🌄' },
  { label: 'TODO: Interest 3', icon: '🎸' },
  { label: 'TODO: Interest 4', icon: '📸' },
];
