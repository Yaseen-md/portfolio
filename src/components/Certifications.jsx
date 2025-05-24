import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckSquare } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Training",
      issuer: "Amazon Web Services",
      description: "Completed comprehensive training on AWS core services and cloud architecture.",
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      title: "IoT Workshop",
      issuer: "Technex'23",
      description: "Hands-on workshop focusing on IoT protocols and microcontroller programming.",
      icon: <CheckSquare className="h-5 w-5 text-primary" />
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
    <section id="certifications" className="py-20 relative">
       <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 left-5 w-60 h-60 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold section-heading inline-block">Certifications & Workshops</h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Recognitions and specialized training that enhance my skill set.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 gradient-border hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-secondary/30 rounded-md mr-4">
                  {cert.icon}
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-primary">{cert.title}</h3>
                    <p className="text-sm text-foreground/60 mb-2">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-foreground/70 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;