import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const fullName = "Mohammed Yaseen"; 
  const email = "mmohammedyaseen87@email.com";
  const professionalTitle = "Aspiring Data Scientist | AI/ML & Environmental Data Enthusiast";
  const shortBio = "I’m an aspiring Marine Data Scientist with a background in AI/ML, currently pursuing a B.Tech in AIML. Passionate about bridging marine biology with data-driven solutions, I blend my technical skills with an environmental vision to solve real-world problems.";


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold section-heading inline-block">About Me</h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg"></div>
              <div className="relative rounded-lg overflow-hidden gradient-border">
                <img  alt="A marine environment or data visualization representing marine data science" className="w-full h-auto rounded-lg" src="/image.JPG" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4 gradient-text"
              variants={itemVariants}
            >
              {professionalTitle}
            </motion.h3>
            
            <motion.p 
              className="text-foreground/70 mb-4"
              variants={itemVariants}
            >
              {shortBio}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
              variants={itemVariants}
            >
              <div>
                <h4 className="font-medium text-primary mb-1">Name:</h4>
                <p className="text-foreground/70">{fullName}</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-1">Email:</h4>
                <p className="text-foreground/70">{email}</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-1">Location:</h4>
                <p className="text-foreground/70">Your City, Country</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-1">Availability:</h4>
                <p className="text-foreground/70">Available for internships & collaborations</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button className="bg-primary hover:bg-primary/80 text-white" asChild>
                <a href="/Mohammed_Yaseen_Resume.pdf" download="Mohammed_Yaseen_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;