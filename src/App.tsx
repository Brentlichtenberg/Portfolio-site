import { siteConfig } from './data/siteConfig';
import { StickyHeader } from './components/sections/StickyHeader';
import { HeroBanner } from './components/sections/HeroBanner';
import { SkillsShowcase } from './components/sections/SkillsShowcase';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { ProjectsShowcase } from './components/sections/ProjectsShowcase';
import { LinkedInReferences } from './components/sections/LinkedInReferences';

// Map section IDs to components.
// Reorder sections in src/data/siteConfig.ts.
// Disable with enabled: false in siteConfig.sections.
const SECTION_COMPONENTS: Record<string, React.FC> = {
  hero:       HeroBanner,
  skills:     SkillsShowcase,
  timeline:   ExperienceTimeline,
  projects:   ProjectsShowcase,
  references: LinkedInReferences,
};

function App() {
  const enabled = siteConfig.sections.filter((s) => s.enabled);

  return (
    <div className="min-h-screen bg-slate-950">
      <StickyHeader />
      <main>
        {enabled.map(({ id }) => {
          const Section = SECTION_COMPONENTS[id];
          return Section ? <Section key={id} /> : null;
        })}
      </main>
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50">
        &copy; {new Date().getFullYear()}{' '}
        {siteConfig.owner.name.replace('TODO: Your Name', 'Your Name')}{' '}
        &middot; Built with ProSite
      </footer>
    </div>
  );
}

export default App;
