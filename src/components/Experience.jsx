import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AWS Web Services Intern – NSIC",
      duration: "2 months (2024)",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      highlights: [
        "Built and deployed cloud-based solutions using AWS EC2, Lambda, and S3.",
        "Gained hands-on experience in infrastructure setup and monitoring.",
      ],
    },
    {
      title: "IoT Outreach Workshop – Technex’23",
      duration: "Workshop & Hands-on Training",
      icon: <Zap className="h-5 w-5 text-primary" />,
      highlights: [
        "Built mini-projects using microcontrollers.",
        "Learned IoT protocols and real-time data communication techniques.",
      ],
    },
    {
      title: "Research Publication",
      subtitle: "“Deep Learning-Driven Fashion Trend Extraction and Analysis from Instagram”",
      duration: "Conference: 3rd International Conference on Futuristic Technology 2025 (SciTePress)",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      highlights: [
        "Role: Co-author; built ML model for trend classification.",
      ],
    },
  ];

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
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center gradient-border">
                {exp.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                {exp.subtitle && <p className="text-md font-medium text-foreground/80 mt-1">{exp.subtitle}</p>}
                <p className="text-sm text-foreground/60 mb-3">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
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