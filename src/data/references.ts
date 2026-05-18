export interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  date: string;
  text: string;
  avatarUrl?: string;
  linkedinUrl?: string;
}

export const references: Reference[] = [
  {
    id: 'ref-linkedin-1',
    name: 'LinkedIn Colleague',
    title: 'Product Data Analyst',
    company: 'Former Employer',
    relationship: 'Worked alongside Brent',
    date: 'Via LinkedIn',
    text: 'Brent is a pleasure to work with. His diligence, friendliness, and expertise in Product Quality Control and Quality Assurance have made him one of my most helpful colleagues. Brent is a valuable asset to any team and always gave me a hand during my role as Product Data Analyst. Not only was Brent an excellent Test Leader for his own team, he was always able to assist other teams as well. Specifically, I would often come to him with questions about our products and even data location to assist me during my own Analytics role. Even for questions not pertaining to Brent\'s role as Test Leader, he would always have the answers or help me find them. He is an extremely knowledgeable team leader and an example to other employees. For top-tier Quality Assurance and Quality Control, I wholeheartedly recommend Brent Lichtenberg.',
    linkedinUrl: 'https://www.linkedin.com/in/brentlichtenberg/',
  },
  {
    id: 'ref-2-placeholder',
    name: 'TODO: Add more recommendations',
    title: 'TODO: Paste from LinkedIn',
    company: 'TODO: Company',
    relationship: 'TODO: Relationship',
    date: 'TODO: Date',
    text: 'TODO: Copy your LinkedIn recommendations and paste them here. Go to your LinkedIn profile → Recommendations received → copy each one. More recommendations can be added at any time by editing src/data/references.ts.',
  },
  {
    id: 'ref-3-placeholder',
    name: 'TODO: Recommender Name',
    title: 'TODO: Their Title',
    company: 'TODO: Their Company',
    relationship: 'TODO: Their relationship to you',
    date: 'TODO: Month Year',
    text: 'TODO: Recommendation text.',
  },
];
