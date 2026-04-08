import React, { useEffect, useRef, useState } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';

const Navbar = ({ activeSection }) => {
  const { name: fullName } = portfolioData.personalInfo;
  const logoName = fullName.split(' ')[0] || "Portfolio";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [hoverX, setHoverX] = useState(null);

  // Nav items from current project
  const navLinks = [
    { label: 'Home', href: '#home', section: 'home' },
    { label: 'About', href: '#about', section: 'about' },
    { label: 'Skills', href: '#skills', section: 'skills' },
    { label: 'Experience', href: '#experience', section: 'experience' },
    { label: 'Projects', href: '#projects', section: 'projects' },
    { label: 'Education', href: '#education', section: 'education' },
    { label: 'Contact', href: '#contact', section: 'contact' },
  ];

  // Sync activeIndex with activeSection from props
  const activeIndex = navLinks.findIndex(link => link.section === activeSection);
  const safeActiveIndex = activeIndex === -1 ? 0 : activeIndex;

  // Refs for the "light" positions so we can animate them imperatively
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      // Direct update for immediate feedback
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      // When mouse leaves, spring the spotlight back to the active item
      const activeItem = nav.querySelector(`[data-index="${safeActiveIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          }
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [safeActiveIndex]);

  // Handle the "Ambience" (Active Item) Movement
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${safeActiveIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [safeActiveIndex]);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[99] transition-all duration-300 px-6 py-4 flex justify-center",
        isScrolled ? "pt-4" : "pt-10"
      )}
    >
      <div className="container mx-auto flex items-center justify-between pointer-events-none">
        {/* Logo - Still clickable by overriding pointer-events */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold gradient-text cursor-pointer pointer-events-auto hidden lg:block"
          onClick={() => scrollToSection('#home')}
        >
          {logoName}
        </motion.div>

        {/* Central Spotlight Navbar */}
        <nav
          ref={navRef}
          className={cn(
            "spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow pointer-events-auto",
            "relative h-11 rounded-full transition-all duration-300 overflow-hidden hidden md:flex"
          )}
        >
          {/* Content */}
          <ul className="relative flex items-center h-full px-2 gap-0 z-[10]">
            {navLinks.map((item, idx) => (
              <li key={idx} className="relative h-full flex items-center justify-center">
                <a
                  href={item.href}
                  data-index={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                    // Active vs Inactive Text - Always light colors for dark background
                    safeActiveIndex === idx
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* LIGHTING LAYERS */}
          {/* 1. The Moving Spotlight (Follows Mouse) */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
            style={{
              opacity: hoverX !== null ? 1 : 0,
              background: `
                radial-gradient(
                  100px circle at var(--spotlight-x) 100%, 
                  var(--spotlight-color, rgba(255,255,255,0.1)) 0%, 
                  transparent 60%
                )
              `
            }}
          />

          {/* 2. The Active State Ambience (Stays on Active) */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
            style={{
              background: `
                    radial-gradient(
                      50px circle at var(--ambience-x) 100%, 
                      var(--ambience-color, white) 0%, 
                      transparent 100%
                    )
                  `
            }}
          />

          {/* 3. Bottom Border Track (Subtle) */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-0" />
        </nav>

        {/* Let's Talk Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="pointer-events-auto hidden lg:block"
        >
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-white text-black hover:bg-white/90 font-medium rounded-full"
            size="sm"
          >
            Let's Talk
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pointer-events-auto ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-white/80 rounded-full spotlight-nav-bg glass-border"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-6 right-6 md:hidden spotlight-nav-bg glass-border spotlight-nav-shadow rounded-2xl overflow-hidden p-2 z-[100]"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-xl transition-colors text-center",
                    activeSection === link.section
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-white text-black hover:bg-white/90 w-full rounded-xl mt-2 font-medium"
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;