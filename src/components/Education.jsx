import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationDetails = {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Institute of Aeronautical Engineering, Hyderabad", 
    description: "Focused on leveraging AI and ML techniques to solve complex problems, with a keen interest in applying these skills to marine data science and environmental challenges."
  };

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
    <section id="education" className="py-20 relative bg-secondary/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold section-heading inline-block">Education</h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-secondary/20 backdrop-blur-sm rounded-lg p-8 gradient-border shadow-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <div className="p-3 bg-primary/20 rounded-full mr-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">{educationDetails.degree}</h3>
              <p className="text-lg text-foreground/80">{educationDetails.institution}</p>
            </div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-foreground/70">
            {educationDetails.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;