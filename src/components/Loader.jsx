
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center"
        >
          <div className="mb-8">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.circle 
                cx="25" 
                cy="25" 
                r="20" 
                stroke="url(#gradient)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4776E6" />
                  <stop offset="1" stopColor="#8E54E9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold gradient-text mb-2">Portfolio</h1>
            <p className="text-foreground/70">Loading amazing content...</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
