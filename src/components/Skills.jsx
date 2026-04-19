// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGitAlt, FaLinux, FaCode } from 'react-icons/fa';
import {
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiPytorch, SiJupyter, SiR, SiPlotly
} from 'react-icons/si';
import { containerVariants, staggerItem } from '@/lib/animations';

const skills = [
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "Pandas", icon: <SiPandas size={40} /> },
  { name: "NumPy", icon: <SiNumpy size={40} /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn size={40} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={40} /> },
  { name: "PyTorch", icon: <SiPytorch size={40} /> },
  { name: "Jupyter", icon: <SiJupyter size={40} /> },
  { name: "R Language", icon: <SiR size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "VS Code", icon: <FaCode size={40} /> },
  { name: "Linux", icon: <FaLinux size={40} /> },
  { name: "Plotting", icon: <SiPlotly size={40} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            My Skills
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 backdrop-blur-xl border border-primary/20 hover:border-accent/50 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl"
                   style={{
                     boxShadow: "0 8px 32px rgba(184, 169, 154, 0.1)"
                   }}>
                
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"
                     style={{
                       boxShadow: "inset 0 0 20px rgba(184, 169, 154, 0.2)"
                     }}></div>

                {/* Icon container */}
                <motion.div
                  className="relative text-primary group-hover:text-accent transition-colors duration-300 transform"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill name */}
                <motion.p
                  className="mt-4 text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:text-accent transition-colors duration-300 text-center uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill.name}
                </motion.p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
