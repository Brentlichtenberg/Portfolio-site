// ─────────────────────────────────────────────
// siteConfig.ts — Global site settings
// Edit this file to update your name, tagline,
// avatar, and which sections are visible + their order.
// ─────────────────────────────────────────────

export const siteConfig = {
  owner: {
    name: 'TODO: Your Name',
    tagline: 'TODO: Your tagline — e.g. "QA Engineer · App Developer · Photographer"',
    bio: 'TODO: Short 2–3 sentence bio. Filled in Phase 2 from your resume/cover letter.',
    avatarUrl: '/images/avatar-placeholder.jpg', // Replace with your photo in Phase 3
    email: 'TODO: your@email.com',
    linkedin: 'https://www.linkedin.com/in/TODO', // Your LinkedIn profile URL
    github: 'https://github.com/TODO',            // Optional — remove if not needed
  },
  sections: [
    // Order here = render order. Set enabled: false to hide a section.
    { id: 'hero',       enabled: true  },
    { id: 'skills',     enabled: true  },
    { id: 'timeline',   enabled: true  },
    { id: 'projects',   enabled: true  },
    { id: 'references', enabled: true  },
    { id: 'gallery',    enabled: false }, // Enable in Phase 3 when photos are ready
    { id: 'music',      enabled: false }, // Enable in Phase 3 if desired
  ],
} as const;

export type SectionId = typeof siteConfig.sections[number]['id'];
