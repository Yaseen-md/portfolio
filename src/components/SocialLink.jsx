import React from 'react';

const SocialLink = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-secondary/30 rounded-md text-foreground/70 hover:text-primary transition-colors social-icon"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialLink;