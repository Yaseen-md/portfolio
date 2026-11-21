import React from 'react';
import Reveal from '@/components/Reveal';

const SectionHeader = ({ index, label, title, description }) => {
  return (
    <Reveal className="mb-10 md:mb-12 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-3">
        <span className="text-accent mr-2">{index}</span>
        {label}
      </p>
      <h2 className="text-2xl sm:text-[1.875rem] font-semibold tracking-[-0.02em] leading-[1.25] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[0.9375rem] sm:text-base text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeader;
