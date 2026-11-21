import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import { portfolioData } from '@/data/portfolioData';

const CurrentlyExploring = () => {
  const { note, tracks } = portfolioData.currentlyExploring;

  return (
    <section id="exploring" className="py-16 md:py-24 border-t border-subtle/80">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          index="05"
          label="Currently Exploring"
          title="Active Learning Tracks"
          description={note}
        />

        <Reveal delay={60}>
          <div className="rounded-xl border border-subtle bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-subtle">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                In Progress · Self-Directed Practice
              </span>
              <span className="font-mono text-[11px] text-muted">
                Not represented as paid production experience
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {tracks.map((track, idx) => (
                <Reveal key={track.title} delay={90 + idx * 70} className="space-y-2">
                  <p className="font-mono text-xs text-muted">0{idx + 1}</p>
                  <h3 className="text-base font-semibold text-ink leading-snug">
                    {track.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">{track.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CurrentlyExploring;
