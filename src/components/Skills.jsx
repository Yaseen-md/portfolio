import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Brain, Cpu, Users, Cloud, Database, Wrench as Tool, GitBranch } from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Python", "HTML", "CSS", "JavaScript (basic)"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow (basics)", "React (learning)", "Tailwind CSS"]
    },
    {
      title: "Tools",
      icon: <Tool className="h-6 w-6 text-primary" />,
      skills: ["Git & GitHub", "Jupyter Notebook", "VS Code", "Figma (basic)"]
    },
    {
      title: "Cloud & Databases",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["AWS (EC2, S3, Lambda)", "MySQL (basic)", "Firebase (basic)"]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: ["Problem-solving", "Critical thinking", "Research & analytical mindset", "Self-motivated learner"]
    },
    {
        title: "Collaboration",
        icon: <Users className="h-6 w-6 text-primary" />,
        skills: ["Teamwork & collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold section-heading inline-block">My Skills</h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            A blend of technical proficiency and a passion for data-driven environmental solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 gradient-border hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-secondary/30 rounded-md">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center skill-item p-2 rounded-md"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;