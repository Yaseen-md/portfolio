import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Capabilities from '@/components/Capabilities';
import ExperienceResearch from '@/components/ExperienceResearch';
import About from '@/components/About';
import CurrentlyExploring from '@/components/CurrentlyExploring';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import BackToTop from '@/components/BackToTop';
import { MotionProvider, PageTransition, SectionProgress } from '@/components/motion';
import { useRouter } from '@/lib/router';
import { portfolioData } from '@/data/portfolioData';

const SECTION_IDS = ['home', 'work', 'capabilities', 'experience', 'about', 'exploring', 'contact'];

const App = () => {
  const { isHome, projectSlug, navigate } = useRouter();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (projectSlug) {
      const match = portfolioData.featuredProjects.find((p) => p.slug === projectSlug);
      document.title = match
        ? `${match.title} — ${portfolioData.personal.name}`
        : `Not Found — ${portfolioData.personal.name}`;
    } else {
      document.title = `${portfolioData.personal.name} — ${portfolioData.personal.roleLine}`;
    }
  }, [projectSlug]);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const offset = 160;
      let current = 'home';

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col bg-base text-ink">
        <SectionProgress />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-base focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <Navbar activeSection={activeSection} isHome={isHome} onNavigate={navigate} />

        <main id="main-content" className="flex-1">
          {projectSlug ? (
            <ProjectDetail slug={projectSlug} onNavigate={navigate} />
          ) : !isHome ? (
            <ProjectDetail slug="" onNavigate={navigate} />
          ) : (
            <PageTransition routeKey="home">
              <Hero onNavigate={navigate} />
              <SelectedWork onNavigate={navigate} />
              <Capabilities />
              <ExperienceResearch />
              <About />
              <CurrentlyExploring />
              <Contact />
            </PageTransition>
          )}
        </main>

        <Footer onNavigate={navigate} />
        <BackToTop />
      </div>
    </MotionProvider>
  );
};

export default App;
