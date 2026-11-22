import React from 'react';
import { Reveal, FadeIn } from '@/components/motion';

const SectionHeader = ({ index, label, title, description }) => {
  return (
    <div className="mb-10 md:mb-12 max-w-2xl">
      <FadeIn delay={0}>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-3">
          <span className="text-accent mr-2">{index}</span>
          {label}
        </p>
      </FadeIn>

      <Reveal delay={55}>
        <h2 className="text-2xl sm:text-[1.875rem] font-semibold tracking-[-0.02em] leading-[1.25] text-ink">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={110}>
          <p className="mt-3 text-[0.9375rem] sm:text-base text-secondary leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeader;
