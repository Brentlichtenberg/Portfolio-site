export type MediaType = 'image' | 'video';

export interface ProjectMedia {
  type: MediaType;
  url: string;
  poster?: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'app' | 'qa' | 'photography' | 'creative';
  tagline: string;
  description: string;
  media: ProjectMedia[];
  tags: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'alexa-prime-day',
    title: 'Alexa Prime Day 2017',
    category: 'qa',
    tagline: 'Led quality for Amazon\'s Alexa voice shopping during the biggest sales day of the year.',
    description: `Voice shopping via Alexa for Prime Day 2017 was the result of three teams working in concert. I served as project manager for my team, organizing and executing the test and verification process and selecting the most effective targeted keywords.

On an average week my team handled 15–20 products for testing and configuration. During the 4-week Prime Day prep period, that scaled to ~125 product promos per week — and thanks to the processes I'd established beforehand, the team exceeded all time goals by 85%.

This project remains a career highlight. It taught me how to build repeatable processes that hold up under pressure, and how to get the best out of a team when the stakes are high.`,
    media: [
      { type: 'image', url: '/images/project-alexa-placeholder.jpg', alt: 'Alexa Prime Day project' },
    ],
    tags: ['Amazon', 'Alexa', 'NLU/NLM', 'Voice AI', 'Test Management', 'Project Management'],
    links: [{ label: 'View on Amazon', url: 'https://www.amazon.com/Alexa/deals' }],
    featured: true,
  },
  {
    id: 'isrd-qa-program',
    title: 'ISRD QA Program Build',
    category: 'qa',
    tagline: 'Built a complete QA department from zero to support a billion-dollar client.',
    description: `Joined ISRD as the first QC team member on the project and built the entire quality program from scratch over 3 years.

Key achievements:
• Defined all test plans, quality gates, release criteria, and defect severity standards
• Built a Selenium + Node.js automation suite for build verification and regression
• Implemented API validation with Postman and CI/CD integration
• Designed the staging environment with emulated enterprise data flows (Lead Perfection, Lowe's, HDConnect, SAP)
• Led annual security/penetration testing with OWASP ZAP and TruffleHog — achieved SOC compliance
• Supported a generative LLM initiative projected to save 15 hours per feature request

The client generates over a billion dollars in sales annually. Quality wasn't optional.`,
    media: [
      { type: 'image', url: '/images/project-isrd-placeholder.jpg', alt: 'ISRD QA Program' },
    ],
    tags: ['QA Strategy', 'Selenium', 'Node.js', 'CI/CD', 'Security', 'SOC Compliance', 'Postman'],
    links: [],
    featured: true,
  },
  {
    id: 'apple-aiml',
    title: 'Apple AI/ML Visual Model',
    category: 'qa',
    tagline: 'Data collection and quality for Apple\'s visual recognition AI/ML model.',
    description: `Embedded with Apple's data science team to support visual AI/ML model training and validation.

Led a field team in rapid data collection — scouting locations, establishing scenario setups, and solving real-world field problems like device overheating that was causing unacceptable data loss.

The overheating fix: found a compatible 3P cooling device that eliminated ALL data loss. Simple solution, significant impact.

Also contributed to the data collection app by providing product feedback and ideas to the development team.`,
    media: [
      { type: 'image', url: '/images/project-apple-placeholder.jpg', alt: 'Apple AI/ML project' },
    ],
    tags: ['Apple', 'AI/ML', 'Data Collection', 'Annotation', 'AWS S3', 'Team Lead'],
    links: [],
  },
  {
    id: 'ios-app',
    title: 'TODO: My iOS App',
    category: 'app',
    tagline: 'TODO: Add your iOS app here in Phase 3.',
    description: 'TODO: Describe your iOS app — what it does, the problem it solves, and the tech stack. Add a video demo or screenshots in Phase 3.',
    media: [
      { type: 'image', url: '/images/project-app-placeholder.jpg', alt: 'iOS App' },
    ],
    tags: ['Swift', 'SwiftUI', 'iOS'],
    links: [],
    featured: false,
  },
];
