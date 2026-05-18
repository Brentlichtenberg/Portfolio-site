// ─────────────────────────────────────────────
// projects.ts — Portfolio projects
// Populated in Phase 3 with real screenshots,
// videos, and project details.
// ─────────────────────────────────────────────

export type MediaType = 'image' | 'video';

export interface ProjectMedia {
  type: MediaType;
  url: string;     // Path (e.g. /videos/my-app.mp4) or YouTube/Vimeo URL
  poster?: string; // For video: path to thumbnail image
  alt?: string;    // For images: alt text
}

export interface Project {
  id: string;
  title: string;
  category: 'app' | 'qa' | 'photography' | 'creative';
  tagline: string;   // Short one-liner shown on card
  description: string; // Full description shown in modal
  media: ProjectMedia[];
  tags: string[];
  links: {
    label: string;
    url: string;
  }[];
  featured?: boolean; // Featured projects show slightly larger
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'TODO: App or Project Name',
    category: 'app',
    tagline: 'TODO: One-line description shown on the card.',
    description:
      'TODO: Full project description shown in the modal. Include what it does, ' +
      'what problem it solves, technologies used, and your role. Filled in Phase 3.',
    media: [
      {
        type: 'image',
        url: '/images/project-1-placeholder.jpg',
        alt: 'TODO: App Name screenshot',
      },
    ],
    tags: ['TODO: Swift', 'TODO: iOS', 'TODO: Tag'],
    links: [
      { label: 'App Store', url: 'https://TODO' },
      { label: 'GitHub', url: 'https://TODO' },
    ],
    featured: true,
  },
  {
    id: 'project-2',
    title: 'TODO: Another Project',
    category: 'qa',
    tagline: 'TODO: One-line description.',
    description: 'TODO: Project description. Filled in Phase 3.',
    media: [
      {
        type: 'video',
        url: 'https://TODO-youtube-or-vimeo-url',
        poster: '/images/project-2-thumb.jpg',
      },
    ],
    tags: ['TODO: Selenium', 'TODO: QA'],
    links: [{ label: 'View', url: 'https://TODO' }],
  },
  {
    id: 'project-3',
    title: 'TODO: Photography Project',
    category: 'photography',
    tagline: 'TODO: One-line description.',
    description: 'TODO: Project description. Filled in Phase 3.',
    media: [
      {
        type: 'image',
        url: '/images/project-3-placeholder.jpg',
        alt: 'TODO: Photography project',
      },
    ],
    tags: ['TODO: Photography', 'TODO: Lightroom'],
    links: [],
  },
];
