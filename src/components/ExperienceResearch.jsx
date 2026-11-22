import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Reveal, SectionDivider } from '@/components/motion';
import { portfolioData } from '@/data/portfolioData';

const ExperienceResearch = () => {
  const { experienceAndResearch } = portfolioData;

  return (
    <section id="experience" className="relative">
      <SectionDivider />
      <div className="py-16 md:py-24 max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          index="03"
          label="Experience & Research"
          title="Work, Internships, Publication & Education"
          description="Chronological record of hands-on testing, cloud internship exposure, published research, technical recruiting, and academic training."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-subtle space-y-0 divide-y divide-subtle/70">
          {experienceAndResearch.map((entry, idx) => (
            <Reveal
              key={`${entry.title}-${idx}`}
              delay={Math.min(idx * 55, 220)}
            >
              <div className="group relative py-6 sm:py-7 first:pt-2 last:pb-2 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8">
                {/* Timeline Node */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] sm:-left-[37px] top-8 first:top-4 w-2.5 h-2.5 rounded-full border border-accent/55 bg-accent/15 transition-colors duration-fast group-hover:border-accent group-hover:bg-accent/40"
                />

                {/* Left Metadata Column */}
                <div className="md:col-span-4 lg:col-span-3 flex flex-row md:flex-col flex-wrap items-center md:items-start gap-2 md:gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-0.5 rounded-sm border border-subtle bg-surface text-accent transition-colors duration-fast group-hover:border-strong">
                    {entry.category}
                  </span>
                  <span className="font-mono text-xs text-muted">{entry.period}</span>
                </div>

                {/* Right Content Column */}
                <div className="md:col-span-8 lg:col-span-9">
                  <h3 className="text-base sm:text-lg font-semibold text-ink leading-snug">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{entry.organization}</p>

                  <ul className="mt-3.5 space-y-2 max-w-[66ch]">
                    {entry.highlights.map((item, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-sm sm:text-[0.9375rem] text-secondary leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-strong mt-2 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceResearch;
