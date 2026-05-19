export interface SkillItem {
  name: string;
  level?: 'Expert' | 'Proficient' | 'Familiar';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  summary: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'qa',
    title: 'QA & Testing',
    icon: '🔍',
    color: 'blue',
    summary: 'Primary expertise — 10+ years building quality programs for web and mobile products from the ground up.',
    skills: [
      { name: 'Test Planning & Strategy',          level: 'Expert' },
      { name: 'Selenium WebDriver (Node.js)',       level: 'Expert' },
      { name: 'API Testing — Postman',             level: 'Expert' },
      { name: 'Release Management & UAT',          level: 'Expert' },
      { name: 'Regression & Root Cause Analysis',  level: 'Expert' },
      { name: 'Performance Testing',               level: 'Proficient' },
      { name: 'Security Testing — OWASP ZAP',      level: 'Proficient' },
      { name: 'SOC Compliance & Pen Testing',      level: 'Proficient' },
      { name: 'CI/CD Pipeline Integration',        level: 'Proficient' },
      { name: 'Defect Tracking — Jira',            level: 'Expert' },
      { name: 'Agile / Scrum / Waterfall',         level: 'Expert' },
      { name: 'AI / Automated Testing',            level: 'Proficient' },
    ],
  },
  {
    id: 'ai-tech',
    title: 'AI & Technology',
    icon: '🤖',
    color: 'violet',
    summary: 'AI-forward practitioner — using AI tooling to multiply productivity across every discipline.',
    skills: [
      { name: 'AI-Assisted Development & QA',  level: 'Expert' },
      { name: 'LLM Evaluation & Validation',   level: 'Proficient' },
      { name: 'NLU/NLM Behavior Testing',      level: 'Proficient' },
      { name: 'ML Data Collection & Annotation', level: 'Proficient' },
      { name: 'iOS App Development (Swift)',    level: 'Familiar' },
      { name: 'Python (Scripting & UI Testing)', level: 'Familiar' },
      { name: 'AWS S3 / Cloud Workflows',       level: 'Familiar' },
    ],
  },
  {
    id: 'product-management',
    title: 'Product Management',
    icon: '📋',
    color: 'amber',
    summary: 'Product ownership, requirements definition, and cross-functional delivery — details coming soon.',
    skills: [
      { name: 'TODO: Fill in Product Management skills' },
    ],
  },
];

export interface Interest {
  label: string;
  icon: string;
}

export const interests: Interest[] = [
  { label: 'AI & Emerging Tech',     icon: '🤖' },
  { label: 'iOS App Development',    icon: '📱' },
  { label: 'Photography',            icon: '📷' },
  { label: 'Music',                  icon: '🎵' },
  { label: 'Robotics & Raspberry Pi', icon: '🔧' },
  { label: 'History',                icon: '📜' },
  { label: 'Literature',             icon: '📚' },
];
