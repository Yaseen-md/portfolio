import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cardVariants } from '@/lib/animations';

const ProjectCard = ({ project, onViewDetails }) => {
  const imageSrcMap = {
    "instagram-fashion-trends": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "smart-parking-system": "https://images.unsplash.com/photo-1577401239177-f978a4c78031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "aws-portfolio-deployment": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  };

  const placeholderImage = "https://images.unsplash.com/photo-1648134859182-98df6e93ef58";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="whileHover"
      viewport={{ once: true, amount: 0.3 }}
      className="group h-full"
      onClick={onViewDetails}
    >
      <div className="relative h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-background backdrop-blur-xl rounded-2xl overflow-hidden border border-primary/20 hover:border-accent/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
           style={{
             boxShadow: "0 8px 32px rgba(184, 169, 154, 0.1)"
           }}>
        
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/0 to-secondary/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

        <div className="relative h-48 overflow-hidden">
          {project.image === "instagram-fashion-trends" && <img alt={`${project.title} mockup - analysis graphs and model predictions`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1569312218039-5154f5afb6e9" />}
          {project.image === "smart-parking-system" && <img alt={`${project.title} mockup - parking slots with status indicators`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1688462490850-124095a540a4" />}
          {project.image === "aws-portfolio-deployment" && <img alt={`${project.title} screenshot - homepage with animations`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe" />}
          {project.image !== "instagram-fashion-trends" && project.image !== "smart-parking-system" && project.image !== "aws-portfolio-deployment" && <img src={placeholderImage} alt={`${project.title} project screenshot`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        </div>

        <div className="p-6 relative z-10">
          <motion.h3 
            className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-foreground/70 text-sm mb-4 line-clamp-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="text-xs bg-gradient-to-r from-primary/30 to-primary/10 text-primary/90 px-2 py-1 rounded-full border border-primary/20 hover:border-accent/50 transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(184, 169, 154, 0.4)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-accent hover:bg-primary/10 p-0 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails();
                }}
              >
                View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <div className="flex space-x-2">
              {project.githubLink && project.githubLink !== "#" && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/20 text-foreground/70 hover:text-accent hover:bg-accent/20 transition-all duration-300 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`GitHub repository for ${project.title}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              )}
              {project.liveLink && project.liveLink !== "#" && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/20 text-foreground/70 hover:text-accent hover:bg-accent/20 transition-all duration-300 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Live demo of ${project.title}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;