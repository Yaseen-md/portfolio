import React from 'react';
import { ArrowRight, Github, AlertCircle } from 'lucide-react';
import ProjectDiagram from '@/components/ProjectDiagram';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project, lead = false, onNavigate }) => {
  const detailPath = `/projects/${project.slug}`;

  const handleOpenDetail = (e) => {
    e.preventDefault();
    onNavigate(detailPath);
  };

  return (
    <article
      className={cn(
        'group rounded-xl border border-subtle bg-surface transition-colors duration-base ease-standard hover:border-strong hover:bg-elevated/50 overflow-hidden',
        lead ? 'grid grid-cols-1 lg:grid-cols-12' : 'flex flex-col h-full'
      )}
    >
      {/* Diagram / Visual Frame */}
      <div
        className={cn(
          'border-subtle bg-base overflow-hidden',
          lead
            ? 'lg:col-span-7 border-b lg:border-b-0 lg:border-r min-h-[220px] lg:min-h-[300px]'
            : 'border-b aspect-[16/10]'
        )}
      >
        <div className="w-full h-full transition-transform duration-base ease-standard group-hover:scale-[1.015]">
          <ProjectDiagram type={project.diagramType} compact={!lead} />
        </div>
      </div>

      {/* Content Column */}
      <div
        className={cn(
          'flex flex-col justify-between',
          lead ? 'lg:col-span-5 p-5 sm:p-6 lg:p-8' : 'p-5 sm:p-6 flex-1'
        )}
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted mb-2">
            {project.category}
          </p>

          <h3
            className={cn(
              'font-semibold tracking-[-0.015em] text-ink leading-snug',
              lead ? 'text-xl sm:text-2xl' : 'text-lg'
            )}
          >
            <a
              href={detailPath}
              onClick={handleOpenDetail}
              className="hover:text-accent transition-colors duration-fast"
            >
              {project.title}
            </a>
          </h3>

          <p className="mt-3 text-sm sm:text-[0.9375rem] text-secondary leading-relaxed">
            {project.summary}
          </p>

          {project.disclaimer && (
            <div className="mt-4 flex items-start gap-2 rounded-md border border-warning/30 bg-warning/10 px-3 py-2 text-xs text-warning leading-relaxed">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Tech Stack Tags */}
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 rounded-sm bg-elevated border border-subtle text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Explicit Non-Nested Card Footer Actions */}
        <div className="mt-6 pt-4 border-t border-subtle/80 flex items-center justify-between gap-4">
          <a
            href={detailPath}
            onClick={handleOpenDetail}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-fast min-h-[36px]"
          >
            Read case study
            <ArrowRight
              className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-ink transition-colors duration-fast min-h-[36px]"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
