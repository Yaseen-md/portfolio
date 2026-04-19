import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';
import SocialLink from '@/components/SocialLink';
import { containerVariants } from '@/lib/animations';

const Hero = () => {
  const { name: fullName, title: professionalTitle, bio, github: githubLink, linkedin: linkedinLink, instagram: InstagramLink } = portfolioData.personalInfo;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full filter blur-[120px]"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full filter blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 py-24 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-accent font-semibold mb-4 tracking-wider uppercase text-sm"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {fullName}
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-primary/90"
              variants={itemVariants}
            >
              {professionalTitle}
            </motion.h2>

            <motion.p
              className="text-foreground/70 mb-8 max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              {bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-accent/50 font-semibold transition-all duration-300"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
            >
              <SocialLink
                href={githubLink}
                icon={<Github size={20} />}
                label="GitHub Profile"
              />
              <SocialLink
                href={linkedinLink}
                icon={<Linkedin size={20} />}
                label="LinkedIn Profile"
              />
              <SocialLink
                href={InstagramLink}
                icon={<Instagram size={20} />}
                label="Instagram Profile"
              />
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(184, 169, 154, 0.3)",
                    "0 0 80px rgba(184, 169, 154, 0.2)",
                    "0 0 40px rgba(184, 169, 154, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full filter blur-3xl"
              />

              {/* Profile image */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(184, 169, 154, 0.6)"
                }}
              >
                <img
                  alt="Profile photo of Mohammed Yaseen"
                  className="w-full h-full object-cover"
                  src="/image.JPG"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.p
            className="text-sm text-foreground/50 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;