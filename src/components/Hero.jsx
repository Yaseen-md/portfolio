import React from 'react';
import { ArrowRight, ArrowDownToLine, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';

const Hero = ({ onNavigate }) => {
  const {
    name,
    roleLine,
    pillarsLine,
    headline,
    heroSummary,
    location,
    github,
    linkedin,
    resumeUrl,
    portrait,
  } = portfolioData.personal;

  return (
    <section id="home" className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-center hero-enter">
          {/* Primary Editorial Column */}
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent mb-4">
              {roleLine}
            </p>

            <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-semibold tracking-[-0.03em] leading-[1.1] text-ink max-w-2xl">
              {headline}
            </h1>

            <p className="mt-4 font-mono text-xs sm:text-[0.8125rem] text-muted tracking-[0.02em]">
              {pillarsLine}
            </p>

            <p className="mt-6 text-base sm:text-[1.0625rem] text-secondary leading-[1.68] max-w-[62ch]">
              {heroSummary}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="primary"
                onClick={() => onNavigate('/#work')}
                className="w-full sm:w-auto"
              >
                Explore selected work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>

              <Button variant="secondary" asChild className="w-full sm:w-auto">
                <a href={resumeUrl} download="Mohammed_Yaseen_Resume.pdf">
                  <ArrowDownToLine className="w-4 h-4 text-accent" aria-hidden="true" />
                  Download resume
                </a>
              </Button>
            </div>

            {/* Metadata & Professional Links */}
            <div className="mt-8 pt-6 border-t border-subtle flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-muted" aria-hidden="true" />
                {location}
              </span>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-secondary hover:text-accent transition-colors duration-fast"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-secondary hover:text-accent transition-colors duration-fast"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Restrained Portrait Column */}
          <div className="lg:col-span-4 lg:justify-self-end w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
            <figure className="rounded-xl border border-subtle bg-surface overflow-hidden">
              <div className="aspect-[4/5] w-full overflow-hidden bg-elevated">
                <img
                  src={portrait.src}
                  alt={portrait.alt}
                  width="640"
                  height="800"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <figcaption className="px-4 py-3 border-t border-subtle flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-ink">{name}</span>
                <span className="font-mono text-[11px] text-muted">B.Tech AI &amp; ML</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
