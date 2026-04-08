import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    setIsSubmitting(true);

    try {
      // Configuration for EmailJS (Populated via .env)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Real Integration (Requires @emailjs/browser package)
        // For now, we simulate the call success but leave the hooks ready
        // await emailjs.send(serviceId, templateId, formData, publicKey);
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Simulation for development without ENV keys
        console.log("Form data collected:", formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-secondary/10 backdrop-blur-xl rounded-3xl p-8 glass-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-white">Send Me a Message</h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-widest">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/20 transition-all focus:bg-white/10"
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-widest">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/20 transition-all focus:bg-white/10"
              placeholder="e.g. jane@example.com"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-widest">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/20 transition-all focus:bg-white/10"
            placeholder="e.g. Project Inquiry"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-widest">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/20 transition-all focus:bg-white/10 resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <Button
          type="submit"
          className="bg-white text-black hover:bg-white/90 font-bold py-6 rounded-2xl w-full disabled:opacity-70 transition-all shadow-xl shadow-white/5"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;