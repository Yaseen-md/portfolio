import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, onViewDetails }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageSrcMap = {
    "instagram-fashion-trends": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "smart-parking-system": "https://images.unsplash.com/photo-1577401239177-f978a4c78031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "aws-portfolio-deployment": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  };

  const placeholderImage = "https://images.unsplash.com/photo-1648134859182-98df6e93ef58";


  return (
    <motion.div
      variants={itemVariants}
      className="project-card bg-secondary/20 backdrop-blur-sm rounded-lg overflow-hidden gradient-border"
      whileHover={{ y: -5 }}
      onClick={onViewDetails}
    >
      <div className="relative h-48 overflow-hidden">
        {project.image === "instagram-fashion-trends" && <img  alt={`${project.title} mockup - analysis graphs and model predictions`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1569312218039-5154f5afb6e9" />}
        {project.image === "smart-parking-system" && <img  alt={`${project.title} mockup - parking slots with status indicators`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1688462490850-124095a540a4" />}
        {project.image === "aws-portfolio-deployment" && <img  alt={`${project.title} screenshot - homepage with animations`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe" />}
        {project.image !== "instagram-fashion-trends" && project.image !== "smart-parking-system" && project.image !== "aws-portfolio-deployment" && <img src={placeholderImage} alt={`${project.title} project screenshot`} className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary hover:text-primary/80 p-0"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            {project.githubLink && project.githubLink !== "#" && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.liveLink && project.liveLink !== "#" && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Live demo of ${project.title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;