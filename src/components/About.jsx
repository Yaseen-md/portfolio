import React from 'react';
import { Cpu, ShieldCheck, Activity, Terminal } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import {
  Reveal,
  SlideReveal,
  GlowCard,
  SectionDivider,
} from '@/components/motion';
import { useDiagramVisibility } from '@/lib/motion';
import { portfolioData } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

const MobileFlowConnector = ({ height = 28, delay = 0 }) => (
  <div aria-hidden="true" className="md:hidden flex justify-center py-1">
    <svg width="24" height={height} viewBox={`0 0 24 ${height}`}>
      <line x1="12" y1="0" x2="12" y2={height} stroke="#242B35" strokeWidth="1.25" />
      <line
        x1="12"
        y1="0"
        x2="12"
        y2={height}
        stroke="#A5B9FF"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength="100"
        className="diagram-flow-pulse"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  </div>
);

const PHILOSOPHY_PILLARS = [
  {
    step: '01',
    key: 'AI',
    title: 'AI — Intelligence & Capability',
    detail: 'Applied ML, RAG pipelines, and domain-grounded inference.',
    icon: Cpu,
  },
  {
    step: '02',
    key: 'QUALITY',
    title: 'Quality — Testing & Validation',
    detail: 'Functional checks, API verification, security, and model evaluation.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    key: 'RELIABILITY',
    title: 'Reliability — Observability & Resilience',
    detail: 'Predictable behavior, cloud fundamentals, and edge-case readiness.',
    icon: Activity,
  },
];

const About = () => {
  const { pullLine, paragraphs } = portfolioData.about;
  const { ref: setDiagramRefs, isVisible, isPaused } = useDiagramVisibility();

  return (
    <section id="about" className="relative">
      <SectionDivider />
      <div className="py-16 md:py-24 max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          index="04"
          label="About"
          title="Connecting AI, Quality & Reliability"
        />

        {/* Preserved Quote + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <SlideReveal direction="left" delay={30} className="lg:col-span-5">
            <blockquote className="text-lg sm:text-xl font-medium tracking-[-0.015em] leading-[1.45] text-ink border-l-2 border-accent pl-5">
              {pullLine}
            </blockquote>
          </SlideReveal>

          <Reveal delay={80} className="lg:col-span-7 space-y-5 max-w-[65ch]">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[0.9375rem] sm:text-base text-secondary leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        {/* Signature Interconnected Engineering Philosophy System */}
        <div
          ref={setDiagramRefs}
          className={cn(
            'relative mt-12 md:mt-16 rounded-xl border border-subtle bg-surface/65 p-5 sm:p-7 lg:p-8 overflow-hidden',
            isVisible && 'diagram-active',
            isPaused && 'diagram-paused'
          )}
        >
          {/* Restrained top ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-44"
            style={{
              background:
                'radial-gradient(55% 70% at 50% 0%, rgba(165, 185, 255, 0.09), transparent 75%)',
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-subtle/80">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                Engineering Philosophy · System Flow
              </span>
              <span className="font-mono text-[11px] text-muted">
                3 Pillars -&gt; Production Readiness
              </span>
            </div>

            {/* Three Interconnected Pillars */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.key} delay={idx * 90} className="relative flex flex-col">
                    <GlowCard className="group flex-1 rounded-lg border border-subtle bg-base/90 p-5 transition-[border-color,background-color,transform] duration-base ease-standard hover:-translate-y-0.5 hover:border-accent/60 hover:bg-elevated/60">
                      <div className="relative z-10 flex items-start justify-between gap-3 mb-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-subtle bg-surface text-accent transition-colors duration-fast group-hover:border-accent/50 group-hover:bg-accent/10">
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <span className="font-mono text-[11px] text-muted tracking-[0.06em]">
                          {pillar.step} / {pillar.key}
                        </span>
                      </div>

                      <h3 className="relative z-10 text-[0.9375rem] sm:text-base font-semibold text-ink leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="relative z-10 mt-2 text-sm text-secondary leading-relaxed">
                        {pillar.detail}
                      </p>

                      {/* Bottom technical node indicator */}
                      <div className="relative z-10 mt-4 pt-3 border-t border-subtle/70 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                          Active Stage
                        </span>
                        <span
                          aria-hidden="true"
                          className="w-2 h-2 rounded-full border border-accent/60 bg-accent/25 transition-colors duration-fast group-hover:bg-accent"
                        />
                      </div>
                    </GlowCard>

                    {/* Mobile Vertical Flow Connector between pillars */}
                    {idx < PHILOSOPHY_PILLARS.length - 1 && (
                      <MobileFlowConnector height={28} delay={idx * 350} />
                    )}
                  </Reveal>
                );
              })}
            </div>

            {/* Desktop Converging Bus SVG (connects all 3 pillars horizontally & down to Outcome) */}
            <div aria-hidden="true" className="hidden md:block -my-1">
              <svg
                viewBox="0 0 900 92"
                className="w-full h-[76px] lg:h-[88px] overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="philosophy-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Horizontal interconnect between Pillar 1 -> 2 -> 3 */}
                <line x1="150" y1="8" x2="750" y2="8" stroke="#242B35" strokeWidth="1.25" />
                <line
                  x1="150"
                  y1="8"
                  x2="750"
                  y2="8"
                  stroke="#A5B9FF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength="100"
                  filter="url(#philosophy-glow)"
                  className="diagram-flow-pulse"
                  style={{ animationDelay: '0ms' }}
                />

                {/* Converging paths from Pillar 1, 2, 3 -> Central Bus -> Outcome */}
                <path
                  d="M 150 8 L 150 48 L 450 48 L 450 88"
                  fill="none"
                  stroke="#242B35"
                  strokeWidth="1.25"
                />
                <path
                  d="M 150 8 L 150 48 L 450 48 L 450 88"
                  fill="none"
                  stroke="#A5B9FF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength="100"
                  filter="url(#philosophy-glow)"
                  className="diagram-flow-pulse"
                  style={{ animationDelay: '250ms' }}
                />

                <line x1="450" y1="8" x2="450" y2="88" stroke="#242B35" strokeWidth="1.25" />
                <line
                  x1="450"
                  y1="8"
                  x2="450"
                  y2="88"
                  stroke="#A5B9FF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength="100"
                  filter="url(#philosophy-glow)"
                  className="diagram-flow-pulse"
                  style={{ animationDelay: '550ms' }}
                />

                <path
                  d="M 750 8 L 750 48 L 450 48 L 450 88"
                  fill="none"
                  stroke="#242B35"
                  strokeWidth="1.25"
                />
                <path
                  d="M 750 8 L 750 48 L 450 48 L 450 88"
                  fill="none"
                  stroke="#A5B9FF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength="100"
                  filter="url(#philosophy-glow)"
                  className="diagram-flow-pulse"
                  style={{ animationDelay: '850ms' }}
                />

                {/* Technical Junction Nodes */}
                {[150, 450, 750].map((cx) => (
                  <circle
                    key={cx}
                    cx={cx}
                    cy="8"
                    r="3.5"
                    fill="#12161C"
                    stroke="#A5B9FF"
                    strokeWidth="1.25"
                  />
                ))}
                <circle
                  cx="450"
                  cy="48"
                  r="4"
                  fill="#171D25"
                  stroke="#A5B9FF"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Mobile Connector into Outcome */}
            <MobileFlowConnector height={30} delay={700} />

            {/* Final Converged Outcome Node */}
            <Reveal delay={240}>
              <GlowCard className="mx-auto max-w-2xl rounded-lg border border-accent/45 bg-elevated/80 px-5 py-4 sm:px-6 sm:py-5 text-center transition-[border-color,background-color] duration-base ease-standard hover:border-accent">
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-accent/40 bg-accent/10 text-accent shrink-0">
                    <Terminal className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div className="sm:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent mb-0.5">
                      Outcome
                    </p>
                    <p className="text-sm sm:text-base font-semibold tracking-[-0.01em] text-ink">
                      Engineering Systems That Work in the Real World
                    </p>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
