// ─────────────────────────────────────────────
// siteConfig.ts — Global site settings
// ─────────────────────────────────────────────

export const siteConfig = {
  owner: {
    name: 'Brent Lichtenberg',
    tagline: 'QA Lead · Test Automation · AI-Forward Engineer',
    bio: "I'm a QA leader with 10+ years of experience contributing to quality programs at companies like Amazon, Apple, and Microsoft — and building one from the ground up at ISRD Systems. I take pride in knowing how to do things the manual way — and I genuinely enjoy it sometimes — but I have found AI makes me 10x more productive, and I lean into that without apology. These days I'm also building iOS apps, shipping automation tooling, and still making sure every release is bug-free.",
    avatarUrl: 'TODO: /images/your-photo.jpg',  // Replace with your photo in Phase 3
    email: 'brentlichtenberg@gmail.com',
    linkedin: 'https://www.linkedin.com/in/brentlichtenberg/',
    github: 'https://github.com/Brentlichtenberg',
  },
  sections: [
    { id: 'hero',       enabled: true  },
    { id: 'skills',     enabled: true  },
    { id: 'timeline',   enabled: true  },
    { id: 'projects',   enabled: true  },
    { id: 'references', enabled: true  },
    { id: 'gallery',    enabled: false },
    { id: 'music',      enabled: false },
  ],
} as const;

export type SectionId = typeof siteConfig.sections[number]['id'];
