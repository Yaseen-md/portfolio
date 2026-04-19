import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { containerVariants, staggerItem } from '@/lib/animations';

const Experience = () => {
  const experiences = portfolioData.experience.map(exp => ({
    ...exp,
    icon: exp.type === 'internship' ? <Briefcase className="h-5 w-5 text-accent" /> :
      exp.type === 'workshop' ? <Zap className="h-5 w-5 text-accent" /> :
        <BookOpen className="h-5 w-5 text-accent" />
  }));

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent section-heading inline-block">
            Experience & Learnings
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Key roles, workshops, and research contributions that have shaped my journey.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5, x: 5 }}
              className="group relative"
            >
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-primary/8 via-secondary/8 to-background-50 backdrop-blur-xl border border-primary/20 hover:border-accent/50 p-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/0 to-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative flex flex-col md:flex-row items-start gap-6">
                  {/* Icon container */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 flex items-center justify-center shadow-md"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 10,
                      boxShadow: "0 0 30px rgba(184, 169, 154, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <motion.h3
                      className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {exp.title}
                    </motion.h3>

                    {exp.subtitle && (
                      <motion.p
                        className="text-md font-medium text-foreground/80 mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                      >
                        {exp.subtitle}
                      </motion.p>
                    )}

                    <motion.p
                      className="text-sm text-foreground/60 mb-4 font-medium uppercase tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {exp.duration}
                    </motion.p>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="text-foreground/70 text-sm flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.05 }}
                        >
                          <motion.span
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 mr-3 flex-shrink-0"
                            whileHover={{ scale: 1.3 }}
                          ></motion.span>
                          <span className="group-hover:text-foreground transition-colors duration-300">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;