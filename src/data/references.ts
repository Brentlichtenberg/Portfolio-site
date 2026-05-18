// ─────────────────────────────────────────────
// references.ts — LinkedIn recommendations
// Populated in Phase 2 — paste your recommendations
// from LinkedIn here (copy text from the Recommendations
// section of your LinkedIn profile).
// ─────────────────────────────────────────────

export interface Reference {
  id: string;
  name: string;       // Recommender's full name
  title: string;      // Their title at time of recommendation
  company: string;
  relationship: string; // e.g. "Managed Brent directly"
  date: string;       // e.g. "March 2024"
  text: string;       // Full recommendation text
  avatarUrl?: string; // Optional — LinkedIn profile photo or leave empty
  linkedinUrl?: string;
}

export const references: Reference[] = [
  {
    id: 'ref-1',
    name: 'TODO: Recommender Name',
    title: 'TODO: Their Title',
    company: 'TODO: Their Company',
    relationship: 'TODO: e.g. "Managed Brent directly at ACME Corp"',
    date: 'TODO: Month Year',
    text:
      'TODO: Paste the full recommendation text from LinkedIn here. ' +
      'Long recommendations will have a "Read more / Show less" toggle automatically. ' +
      'Fill in Phase 2.',
  },
  {
    id: 'ref-2',
    name: 'TODO: Recommender Name',
    title: 'TODO: Their Title',
    company: 'TODO: Their Company',
    relationship: 'TODO: Their relationship to you',
    date: 'TODO: Month Year',
    text: 'TODO: Recommendation text. Filled in Phase 2.',
  },
  {
    id: 'ref-3',
    name: 'TODO: Recommender Name',
    title: 'TODO: Their Title',
    company: 'TODO: Their Company',
    relationship: 'TODO: Their relationship to you',
    date: 'TODO: Month Year',
    text: 'TODO: Recommendation text. Filled in Phase 2.',
  },
];
