import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const fullName = "Mohammed Yaseen"; 
  const callToAction = "Let’s collaborate & build something amazing!";

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-border/20 relative bg-secondary/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-semibold gradient-text mb-2">{callToAction}</h3>
          <p className="text-foreground/70">
            Available for internships and exciting projects in marine data science and AI/ML.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
           <button 
            onClick={scrollToContact}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors font-medium"
          >
            Get in Touch
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-foreground/60"
        >
          <p className="mb-1">
            © {currentYear} {fullName}. All rights reserved.
          </p>
          <p className="flex items-center justify-center">
            Crafted with <Heart className="h-4 w-4 text-red-500 mx-1" /> and a passion for code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;