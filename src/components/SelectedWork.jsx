import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { Reveal, StaggerGroup, SectionDivider } from '@/components/motion';
import { portfolioData } from '@/data/portfolioData';

const SelectedWork = ({ onNavigate }) => {
  const { featuredProjects, otherProjects } = portfolioData;
  const leadProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1);

  return (
    <section id="work" className="relative">
      <SectionDivider />
      <div className="py-16 md:py-24 max-w-content mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          index="01"
          label="Selected Work"
          title="Projects & Research Systems"
          description="Focused technical builds and published work across retrieval-augmented generation, graph-backed search, and deep learning. Open any entry for architecture, testing, and limitations."
        />

        {/* Lead Project — Full-Width Asymmetric Split on Desktop */}
        {leadProject && (
          <Reveal delay={40} className="mb-6">
            <ProjectCard project={leadProject} lead onNavigate={onNavigate} />
          </Reveal>
        )}

        {/* Remaining Featured Projects — Staggered Grid */}
        <StaggerGroup
          baseDelay={50}
          stagger={75}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          itemClassName="h-full"
        >
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onNavigate={onNavigate}
            />
          ))}
        </StaggerGroup>

        {/* Compact Additional Repository Reference */}
        {otherProjects.length > 0 && (
          <Reveal delay={120} className="mt-10 pt-6 border-t border-subtle/70">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-4">
              Additional Exploration on GitHub
            </p>
            <div className="space-y-3">
              {otherProjects.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2"
                >
                  <div>
                    <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                    <p className="text-sm text-muted">{item.summary}</p>
                  </div>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xs font-mono text-secondary hover:text-accent transition-colors duration-fast shrink-0"
                  >
                    Repository
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default SelectedWork;
