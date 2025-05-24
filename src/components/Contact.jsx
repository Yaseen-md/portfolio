import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ContactInfoItem from '@/components/ContactInfoItem';
import SocialLink from '@/components/SocialLink';

const Contact = () => {
  const email = "mmohammedyaseen87@gmail.com";
  const phone = "+91 7075015786"; 
  const location = "Hyderabad, India"; 
  const githubLink = "https://github.com/Yaseen-md";
  const linkedinLink = "https://www.linkedin.com/in/mohammed-yaseen-843638223/";
  const InstagramLink = "https://instagram.com/_.yaseen22";

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: email,
      link: `mailto:${email}`
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: phone,
      link: `tel:${phone.replace(/\s/g, '')}`
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: location,
      link: null
    }
  ];

  const socialLinks = [
    { href: githubLink, icon: <Github size={24}/>, label: "GitHub" },
    { href: linkedinLink, icon: <Linkedin size={24}/>, label: "LinkedIn" },
    { href: InstagramLink, icon: <Instagram size={24}/>, label: "Instagram" }
  ];

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

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold section-heading inline-block">Get In Touch</h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Feel free to reach out for project inquiries, collaborations, or just to say hello. I'm always open to discussing new ideas and opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 gradient-border mb-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={index} icon={info.icon} title={info.title} value={info.value} link={info.link} />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 gradient-border"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <SocialLink key={index} href={social.href} icon={social.icon} label={social.label} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;