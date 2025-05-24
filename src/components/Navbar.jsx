import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Education', href: '#education', section: 'education' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

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
      className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            Portfolio
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === link.section
                    ? 'text-primary active'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * (navLinks.length + 1) }}
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
                size="sm"
              >
                Let's Talk
              </Button>
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-foreground hover:text-primary"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md shadow-xl absolute w-full"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`block py-2 text-sm font-medium text-center rounded-md transition-colors ${
                    activeSection === link.section
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('#contact');
                }}
                className="bg-primary hover:bg-primary/80 text-primary-foreground w-full mt-2"
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