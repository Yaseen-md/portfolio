import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const fullName = "Mohammed Yaseen"; 
  const professionalTitle = "Aspiring Data Scientist | AI/ML & Environmental Data Enthusiast";
  const bio = "I build exceptional and accessible digital experiences for the web. Passionate about creating beautiful, functional, and user-centered digital experiences.";
  const githubLink = "https://github.com/Yaseen-md";
  const linkedinLink = "https://www.linkedin.com/in/mohammed-yaseen-843638223/";
  const InstagramLink = "https://instagram.com/_.yaseen22";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="text-primary font-medium mb-4"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="gradient-text">{fullName}</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80"
              variants={itemVariants}
            >
              {professionalTitle}
            </motion.h2>
            <motion.p 
              className="text-foreground/70 mb-8 max-w-lg"
              variants={itemVariants}
            >
              {bio}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/80 text-white"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-foreground/70 hover:text-foreground"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={linkedinLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-foreground/70 hover:text-foreground"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={InstagramLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-foreground/70 hover:text-foreground"
                aria-label="Instagram Profile"
              >
                <Twitter size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img  alt="Profile photo of [Your Full Name]" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573483387033-3121eaa077d7" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="text-sm text-foreground/50 mb-2">Scroll Down</p>
          <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;