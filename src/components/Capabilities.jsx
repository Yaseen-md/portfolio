import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import { portfolioData } from '@/data/portfolioData';

const Capabilities = () => {
  const { capabilities } = portfolioData;

  return (
    <section id="capabilities" className="py-16 md:py-24 border-t border-subtle/80">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          index="02"
          label="Capabilities"
          title="Three Connected Areas"
          description="Demonstrated skills are separated from working knowledge so each capability reflects real project, internship, or academic scope — active learning tracks are listed separately below."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((group, idx) => (
            <Reveal key={group.id} delay={idx * 70} className="h-full">
              <div className="h-full rounded-xl border border-subtle bg-surface p-6 flex flex-col justify-between transition-colors duration-base ease-standard hover:border-strong">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">
                    {group.description}
                  </p>

                  {/* Demonstrated Skills */}
                  <div className="mt-6 pt-5 border-t border-subtle/80">
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted flex items-center gap-2 mb-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent-secondary"
                        aria-hidden="true"
                      />
                      Demonstrated
                    </p>
                    <ul className="space-y-2">
                      {group.demonstrated.map((skill) => (
                        <li key={skill} className="text-sm text-ink leading-snug">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Working Knowledge */}
                  <div className="mt-5 pt-4 border-t border-subtle/60">
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted flex items-center gap-2 mb-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      Working Knowledge
                    </p>
                    <ul className="space-y-2">
                      {group.workingKnowledge.map((skill) => (
                        <li key={skill} className="text-sm text-secondary leading-snug">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
