import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon, label }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative p-3 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-lg text-foreground/70 backdrop-blur-md border border-primary/20 hover:border-accent/50 transition-all duration-300 group"
      aria-label={label}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 30px rgba(184, 169, 154, 0.4), 0 0 60px rgba(184, 169, 154, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
      
      {/* Icon with color transition */}
      <span className="relative flex items-center justify-center group-hover:text-accent transition-colors duration-300">
        {icon}
      </span>
      
      {/* Hover accent glow */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none"></div>
    </motion.a>
  );
};

export default SocialLink;