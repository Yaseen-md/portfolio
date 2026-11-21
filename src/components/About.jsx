import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { portfolioData } from '@/data/portfolioData';

const About = () => {
  const { pullLine, paragraphs } = portfolioData.about;

  return (
    <section id="about" className="py-16 md:py-24 border-t border-subtle/80">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader index="04" label="About" title="Connecting AI, Quality & Reliability" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <blockquote className="text-lg sm:text-xl font-medium tracking-[-0.015em] leading-[1.45] text-ink border-l-2 border-accent pl-5">
              {pullLine}
            </blockquote>
          </div>

          <div className="lg:col-span-7 space-y-5 max-w-[65ch]">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[0.9375rem] sm:text-base text-secondary leading-[1.72]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
