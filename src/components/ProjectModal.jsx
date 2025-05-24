import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X as CloseIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectModal = ({ project, onClose }) => {

  const imageSrcMap = {
    "instagram-fashion-trends": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70",
    "smart-parking-system": "https://images.unsplash.com/photo-1577401239177-f978a4c78031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70",
    "aws-portfolio-deployment": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70",
  };
  const placeholderImage = "https://images.unsplash.com/photo-1648134859182-98df6e93ef58?auto=format&fit=crop&w=800&q=70";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card w-full max-w-3xl rounded-lg overflow-hidden gradient-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              {project.image === "instagram-fashion-trends" && <img  alt={`${project.title} mockup - analysis graphs and model predictions`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1569312218039-5154f5afb6e9" />}
              {project.image === "smart-parking-system" && <img  alt={`${project.title} mockup - parking slots with status indicators`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1688462490850-124095a540a4" />}
              {project.image === "aws-portfolio-deployment" && <img  alt={`${project.title} screenshot - homepage with animations`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe" />}
              {project.image !== "instagram-fashion-trends" && project.image !== "smart-parking-system" && project.image !== "aws-portfolio-deployment" && <img src={placeholderImage} alt={`${project.title} project screenshot`} className="w-full h-full object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full text-foreground hover:bg-background/70"
                onClick={onClose}
                aria-label="Close project details"
              >
                <CloseIcon className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-foreground/80 mb-6 text-sm md:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.liveLink && project.liveLink !== "#" && (
                  <Button 
                    className="bg-primary hover:bg-primary/80 text-white"
                    asChild
                  >
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                
                {project.githubLink && project.githubLink !== "#" && (
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Code <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;