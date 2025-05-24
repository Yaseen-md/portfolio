import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X as CloseIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const userProjects = [
    {
      id: 1,
      title: "Instagram Fashion Trend Analysis",
      description: "A deep learning project analyzing fashion trends using Instagram images and captions.",
      image: "instagram-fashion-trends",
      tags: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
      liveLink: "#", 
      githubLink: "https://github.com/yourname/fashion-trend-analysis" 
    },
    {
      id: 2,
      title: "Smart Parking System (IoT Project)",
      description: "A system using ultrasonic sensors and NodeMCU to detect parking slot availability.",
      image: "smart-parking-system",
      tags: ["Arduino IDE", "NodeMCU", "IoT Protocols (MQTT)", "C++"],
      liveLink: "#",
      githubLink: "https://github.com/yourname/smart-parking"
    },
    {
      id: 3,
      title: "AWS Cloud Portfolio Deployment",
      description: "Designed a personal portfolio and deployed it using AWS services like EC2 and S3.",
      image: "aws-portfolio-deployment",
      tags: ["HTML", "CSS", "JavaScript", "AWS EC2", "S3"],
      liveLink: "https://yourname.dev", 
      githubLink: "https://github.com/yourname/portfolio-aws"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold section-heading inline-block">My Projects</h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Showcasing a blend of AI/ML, IoT, and cloud deployment skills through practical applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {userProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewDetails={() => setActiveProject(project)}
            />
          ))}
        </motion.div>
      </div>
      
      <ProjectModal 
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

export default Projects;