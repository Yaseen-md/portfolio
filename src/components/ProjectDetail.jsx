import React from 'react';
import { ArrowLeft, ArrowRight, Github, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectDiagram from '@/components/ProjectDiagram';
import { Reveal, PageTransition } from '@/components/motion';
import { portfolioData } from '@/data/portfolioData';

const ProjectDetail = ({ slug, onNavigate }) => {
  const projects = portfolioData.featuredProjects;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = currentIndex >= 0 ? projects[currentIndex] : null;

  if (!project) {
    return (
      <PageTransition routeKey="not-found">
        <section className="py-24">
          <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-3">
                404 · Not Found
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-ink">
                Project case study not found
              </h1>
              <p className="mt-3 text-secondary">
                The requested project route does not match any published case study.
              </p>
              <div className="mt-6">
                <Button variant="secondary" onClick={() => onNavigate('/#work')}>
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  Back to selected work
                </Button>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    );
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];
  const { caseStudy } = project;

  return (
    <PageTransition routeKey={project.slug}>
      <article className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-10">
          {/* Back link & Header */}
          <div>
            <a
              href="/#work"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/#work');
              }}
              className="group inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-fast mb-8"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-fast group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Back to selected work
            </a>

            <header className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent mb-3">
                {project.category}
              </p>
              <h1 className="text-[1.875rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.15] text-ink">
                {project.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
                {project.summary}
              </p>

              {project.disclaimer && (
                <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-warning/35 bg-warning/10 px-4 py-3 text-sm text-warning leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{project.disclaimer}</span>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <Button variant="primary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" aria-hidden="true" />
                      View GitHub repository
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live demo
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                )}
              </div>
            </header>
          </div>

          {/* Architecture / Workflow Visual */}
          <figure
            className="mt-10 rounded-xl border border-subtle bg-surface overflow-hidden page-enter"
            style={{ animationDelay: '80ms' }}
          >
            <div className="min-h-[240px] sm:min-h-[300px]">
              <ProjectDiagram type={project.diagramType} />
            </div>
            <figcaption className="px-5 py-3 border-t border-subtle font-mono text-xs text-muted">
              {project.diagramCaption}
            </figcaption>
          </figure>

          {/* Two-Column Case Study Body */}
          <div
            className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 page-enter"
            style={{ animationDelay: '150ms' }}
          >
            {/* Metadata Rail */}
            <aside className="lg:col-span-4 lg:order-2">
              <div className="rounded-xl border border-subtle bg-surface p-6 space-y-5 lg:sticky lg:top-24">
                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mb-1.5">
                    Context
                  </h2>
                  <p className="text-sm text-ink">{project.context}</p>
                </div>

                <div className="pt-4 border-t border-subtle/80">
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mb-1.5">
                    My Contribution
                  </h2>
                  <p className="text-sm text-secondary leading-relaxed">{caseStudy.role}</p>
                </div>

                <div className="pt-4 border-t border-subtle/80">
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mb-2.5">
                    Technologies Used
                  </h2>
                  <ul className="flex flex-wrap gap-1.5">
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
              </div>
            </aside>

            {/* Main Engineering Narrative */}
            <div className="lg:col-span-8 lg:order-1 space-y-10 max-w-[66ch]">
              <Reveal as="section">
                <h2 className="text-lg sm:text-xl font-semibold text-ink mb-3">
                  Problem &amp; Context
                </h2>
                <p className="text-[0.9375rem] sm:text-base text-secondary leading-[1.7]">
                  {caseStudy.problem}
                </p>
              </Reveal>

              <Reveal as="section" delay={40}>
                <h2 className="text-lg sm:text-xl font-semibold text-ink mb-3">
                  What Was Built
                </h2>
                <p className="text-[0.9375rem] sm:text-base text-secondary leading-[1.7]">
                  {caseStudy.whatWasBuilt}
                </p>
              </Reveal>

              <Reveal as="section" delay={40}>
                <h2 className="text-lg sm:text-xl font-semibold text-ink mb-3">
                  System Workflow
                </h2>
                <ol className="space-y-3">
                  {caseStudy.workflow.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[0.9375rem] sm:text-base text-secondary leading-relaxed"
                    >
                      <span className="font-mono text-xs text-accent mt-1 shrink-0">
                        0{index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal as="section" delay={40}>
                <h2 className="text-lg sm:text-xl font-semibold text-ink mb-3">
                  Key Implementation Decisions
                </h2>
                <ul className="space-y-2.5">
                  {caseStudy.decisions.map((decision, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[0.9375rem] sm:text-base text-secondary leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal as="section" delay={40}>
                <h2 className="text-lg sm:text-xl font-semibold text-ink mb-3">
                  Testing &amp; Evaluation
                </h2>
                <p className="text-[0.9375rem] sm:text-base text-secondary leading-[1.7]">
                  {caseStudy.testingAndEvaluation}
                </p>
              </Reveal>

              <Reveal as="section" delay={40}>
                <h2 className="text-lg sm:text-xl font-semibold text-ink mb-3">
                  Limitations &amp; Next Steps
                </h2>
                <ul className="space-y-2.5">
                  {caseStudy.limitations.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[0.9375rem] sm:text-base text-secondary leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-muted mt-2.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Bottom Case Study Navigation */}
          <nav
            aria-label="Case study pagination"
            className="mt-16 pt-8 border-t border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <a
              href="/#work"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/#work');
              }}
              className="group inline-flex items-center gap-2 text-sm text-secondary hover:text-ink transition-colors duration-fast"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-fast group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              All selected work
            </a>

            {nextProject && nextProject.slug !== project.slug && (
              <a
                href={`/projects/${nextProject.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/projects/${nextProject.slug}`);
                }}
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-fast"
              >
                Next: {nextProject.title}
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </nav>
        </div>
      </article>
    </PageTransition>
  );
};

export default ProjectDetail;
