import React from 'react';
import { portfolioData } from '@/data/portfolioData';

const Footer = ({ onNavigate }) => {
  const year = new Date().getFullYear();
  const { name, location } = portfolioData.personal;
  const navLinks = portfolioData.navigation;

  return (
    <footer className="border-t border-subtle py-8">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted">
        <p>
          © {year} {name} · {location}
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`/${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/${link.href}`);
              }}
              className="hover:text-ink transition-colors duration-fast"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
