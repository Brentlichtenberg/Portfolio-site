// ─────────────────────────────────────────────
// timeline.ts — Work experience entries
// Populated in Phase 2 from your resume.
// ─────────────────────────────────────────────

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;   // e.g. "Jan 2020"
  endDate: string;     // "Present" or "Dec 2022"
  summary: string;     // 1-sentence shown collapsed
  description: string; // Full details shown when expanded
  tags: string[];      // e.g. ["QA", "Selenium", "iOS"]
  link?: string;       // Optional company URL
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'role-1',
    role: 'TODO: Job Title',
    company: 'TODO: Company Name',
    location: 'TODO: City, State',
    startDate: 'TODO: Month Year',
    endDate: 'Present',
    summary: 'TODO: One-sentence summary of this role.',
    description:
      'TODO: Full description of responsibilities, accomplishments, and tools used. ' +
      'This is shown when the entry is expanded. Fill in Phase 2.',
    tags: ['TODO: Tag1', 'TODO: Tag2'],
    link: 'https://TODO-company-url.com',
  },
  {
    id: 'role-2',
    role: 'TODO: Previous Job Title',
    company: 'TODO: Previous Company',
    location: 'TODO: City, State',
    startDate: 'TODO: Month Year',
    endDate: 'TODO: Month Year',
    summary: 'TODO: One-sentence summary of this role.',
    description: 'TODO: Full role description. Filled in Phase 2.',
    tags: ['TODO: Tag1'],
  },
  {
    id: 'role-3',
    role: 'TODO: Earlier Role',
    company: 'TODO: Company Name',
    location: 'TODO: City, State',
    startDate: 'TODO: Month Year',
    endDate: 'TODO: Month Year',
    summary: 'TODO: One-sentence summary.',
    description: 'TODO: Full role description. Filled in Phase 2.',
    tags: ['TODO: Tag1'],
  },
];
