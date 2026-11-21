import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

const Navbar = ({ activeSection, isHome, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { name, resumeUrl } = portfolioData.personal;
  const navLinks = portfolioData.navigation;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(`/${href}`);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate('/');
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-colors duration-base ease-standard',
        isScrolled || mobileOpen
          ? 'bg-base/95 border-b border-subtle backdrop-blur-sm'
          : 'bg-base/80 border-b border-transparent'
      )}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between gap-4">
        <a
          href="/"
          onClick={handleLogoClick}
          className="text-sm sm:text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink hover:text-accent transition-colors duration-fast"
        >
          {name}
        </a>

        {/* Desktop & Tablet Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.section;
            return (
              <a
                key={link.section}
                href={`/${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'text-sm transition-colors duration-fast',
                  isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink'
                )}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href={resumeUrl}
            download="Mohammed_Yaseen_Resume.pdf"
            className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-md border border-subtle bg-surface text-xs font-medium text-ink hover:border-strong hover:bg-elevated transition-colors duration-fast"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          className="md:hidden inline-flex items-center justify-center h-11 w-11 -mr-2 rounded-md text-secondary hover:text-ink hover:bg-elevated transition-colors duration-fast"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-subtle bg-base px-5 py-4"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.section;
              return (
                <a
                  key={link.section}
                  href={`/${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'flex items-center min-h-[44px] px-3 rounded-md text-sm transition-colors duration-fast',
                    isActive
                      ? 'bg-surface text-ink font-medium'
                      : 'text-secondary hover:bg-surface/60 hover:text-ink'
                  )}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-subtle">
              <a
                href={resumeUrl}
                download="Mohammed_Yaseen_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 min-h-[44px] w-full rounded-md border border-strong bg-surface text-sm font-medium text-ink hover:bg-elevated transition-colors duration-fast"
              >
                <ArrowDownToLine className="w-4 h-4 text-accent" aria-hidden="true" />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
