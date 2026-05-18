import { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';

const NAV_LINKS = [
  { label: 'About',      href: '#hero'       },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#timeline'   },
  { label: 'Projects',   href: '#projects'   },
  { label: 'References', href: '#references' },
];

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo / name */}
        <a
          href="#hero"
          className="font-semibold text-lg text-white tracking-tight hover:text-blue-400 transition-colors"
        >
          {siteConfig.owner.name.replace('TODO: ', '')}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.owner.email}`}
            className="ml-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-full transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className={`block w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-slate-300 hover:text-white py-1 transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.owner.email}`}
            onClick={close}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-full text-center transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
