import React from 'react';
import { ArrowRight, ArrowDownToLine, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMotion } from '@/components/motion';
import { portfolioData } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

const Hero = ({ onNavigate }) => {
  const { reducedMotion } = useMotion();
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

  const seq = (delayMs) =>
    reducedMotion
      ? {}
      : {
          className: 'hero-seq',
          style: { animationDelay: `${delayMs}ms` },
        };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* 1. Subtle Futuristic Atmosphere: Low-opacity technical grid + restrained ambient light */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 hero-tech-grid opacity-60',
          !reducedMotion && 'hero-seq'
        )}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 0%, rgba(165, 185, 255, 0.065), transparent 75%)',
        }}
      />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-center">
          {/* Primary Editorial Column */}
          <div className="lg:col-span-8">
            {/* 2. Identity Label */}
            <p
              {...seq(40)}
              className={cn(
                'font-mono text-xs uppercase tracking-[0.08em] text-accent mb-4',
                !reducedMotion && 'hero-seq'
              )}
            >
              {roleLine}
            </p>

            {/* 3. Main Headline */}
            <h1
              {...seq(95)}
              className={cn(
                'text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-semibold tracking-[-0.03em] leading-[1.1] text-ink max-w-2xl',
                !reducedMotion && 'hero-seq'
              )}
            >
              {headline}
            </h1>

            {/* 4. Pillars & Supporting Description */}
            <p
              {...seq(150)}
              className={cn(
                'mt-4 font-mono text-xs sm:text-[0.8125rem] text-muted tracking-[0.02em]',
                !reducedMotion && 'hero-seq'
              )}
            >
              {pillarsLine}
            </p>

            <p
              {...seq(195)}
              className={cn(
                'mt-6 text-base sm:text-[1.0625rem] text-secondary leading-[1.68] max-w-[62ch]',
                !reducedMotion && 'hero-seq'
              )}
            >
              {heroSummary}
            </p>

            {/* 5. CTA Buttons */}
            <div
              {...seq(250)}
              className={cn(
                'mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3',
                !reducedMotion && 'hero-seq'
              )}
            >
              <Button
                variant="primary"
                onClick={() => onNavigate('/#work')}
                className="w-full sm:w-auto group"
              >
                Explore selected work
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>

              <Button variant="secondary" asChild className="w-full sm:w-auto">
                <a href={resumeUrl} download="Mohammed_Yaseen_Resume.pdf">
                  <ArrowDownToLine className="w-4 h-4 text-accent" aria-hidden="true" />
                  Download resume
                </a>
              </Button>
            </div>

            {/* 6. Metadata & Professional Links */}
            <div
              {...seq(305)}
              className={cn(
                'mt-8 pt-6 border-t border-subtle flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted',
                !reducedMotion && 'hero-seq'
              )}
            >
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

          {/* 7. Restrained Portrait Column */}
          <div
            {...seq(140)}
            className={cn(
              'lg:col-span-4 lg:justify-self-end w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]',
              !reducedMotion && 'hero-seq'
            )}
          >
            <figure className="group rounded-xl border border-subtle bg-surface overflow-hidden transition-colors duration-base ease-standard hover:border-strong">
              <div className="aspect-[4/5] w-full overflow-hidden bg-elevated">
                <img
                  src={portrait.src}
                  alt={portrait.alt}
                  width="640"
                  height="800"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-[320ms] ease-standard group-hover:scale-[1.015]"
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
