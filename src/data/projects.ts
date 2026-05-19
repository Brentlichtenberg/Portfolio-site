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
      {
        type: 'image',
        url: 'https://image.thum.io/get/width/800/crop/600/https://staging.labs.lixil.com/',
        alt: 'LIXIL AS staging portal — the product Brent built the QA program for',
      },
    ],
    tags: ['QA Strategy', 'Selenium', 'Node.js', 'CI/CD', 'Security', 'SOC Compliance', 'Postman'],
    links: [{ label: 'View Staging Site', url: 'https://staging.labs.lixil.com/' }],
    featured: true,
  },
  {
    id: 'photography',
    title: 'Photography',
    category: 'photography',
    tagline: 'Documenting my life in Western Washington and travels beyond.',
    description: 'A collection of photography from the Pacific Northwest and beyond — landscapes, travel, and moments worth keeping.',
    media: [
      { type: 'image', url: '/images/photography/banner.jpg', alt: 'Photography — Western Washington' },
      { type: 'image', url: '/images/photography/carousel-1.jpg', alt: 'Photo 1' },
      { type: 'image', url: '/images/photography/carousel-2.jpg', alt: 'Photo 2' },
      { type: 'image', url: '/images/photography/carousel-3.jpg', alt: 'Photo 3' },
      { type: 'image', url: '/images/photography/carousel-4.jpg', alt: 'Photo 4' },
      { type: 'image', url: '/images/photography/carousel-5.jpg', alt: 'Photo 5' },
      { type: 'image', url: '/images/photography/carousel-6.jpg', alt: 'Photo 6' },
      { type: 'image', url: '/images/photography/carousel-7.jpg', alt: 'Photo 7' },
    ],
    tags: ['Photography', 'Travel'],
    links: [],
    featured: false,
  },
  {
    id: 'ios-app',
    title: 'FieldFocus',
    category: 'app',
    tagline: 'Quick reference guide for photographers in the field.',
    description: 'FieldFocus is an iOS app built for photographers who need fast, reliable reference tools while shooting — no internet required.',
    media: [
      {
        type: 'video',
        url: '/videos/fieldfocus-demo.mp4',
        poster: '/images/fieldfocus/poster.png',
        alt: 'FieldFocus app demo',
      },
    ],
    tags: ['Swift', 'SwiftUI', 'iOS', 'Photography'],
    links: [],
    featured: false,
  },
];
