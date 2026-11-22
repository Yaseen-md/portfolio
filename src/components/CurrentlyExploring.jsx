import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Reveal, GlowCard, StaggerGroup, SectionDivider } from '@/components/motion';
import { portfolioData } from '@/data/portfolioData';

const CurrentlyExploring = () => {
  const { note, tracks } = portfolioData.currentlyExploring;

  return (
    <section id="exploring" className="relative">
      <SectionDivider />
      <div className="py-16 md:py-24 max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          index="05"
          label="Currently Exploring"
          title="Active Learning Tracks"
          description={note}
        />

        <Reveal delay={40}>
          <GlowCard className="rounded-xl border border-subtle bg-surface p-6 sm:p-8 transition-colors duration-base ease-standard hover:border-strong">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-subtle">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                  In Progress · Self-Directed Practice
                </span>
                <span className="font-mono text-[11px] text-muted">
                  Not represented as paid production experience
                </span>
              </div>

              <StaggerGroup
                baseDelay={60}
                stagger={70}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {tracks.map((track, idx) => (
                  <div key={track.title} className="space-y-2">
                    <p className="font-mono text-xs text-muted">0{idx + 1}</p>
                    <h3 className="text-base font-semibold text-ink leading-snug">
                      {track.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">{track.detail}</p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
};

export default CurrentlyExploring;
