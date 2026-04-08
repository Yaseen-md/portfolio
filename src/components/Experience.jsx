import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Experience = () => {
  const experiences = portfolioData.experience.map(exp => ({
    ...exp,
    icon: exp.type === 'internship' ? <Briefcase className="h-5 w-5 text-primary" /> :
      exp.type === 'workshop' ? <Zap className="h-5 w-5 text-primary" /> :
        <BookOpen className="h-5 w-5 text-primary" />
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-30 left-5 w-60 h-60 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold section-heading inline-block">Experience & Learnings</h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Key roles, workshops, and research contributions that have shaped my journey.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-start gap-6 bg-secondary/10 p-6 rounded-2xl glass-border group hover:bg-secondary/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary/30 flex items-center justify-center glass-border transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {exp.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                {exp.subtitle && <p className="text-md font-medium text-white/80 mt-1">{exp.subtitle}</p>}
                <p className="text-sm text-white/50 mb-4 font-medium uppercase tracking-wider">{exp.duration}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;