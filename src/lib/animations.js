// Framer Motion animation variants for consistent animations across the site

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const hoverScale = {
  scale: 1,
  transition: { type: "spring", stiffness: 300 }
};

export const hoverScaleVariant = {
  hidden: { scale: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const hoverLift = {
  hidden: { y: 0 },
  whileHover: { 
    y: -8,
    boxShadow: "0 20px 40px rgba(184, 169, 154, 0.3)"
  },
  transition: { type: "spring", stiffness: 300 }
};

export const buttonHover = {
  scale: 1,
  whileHover: { 
    scale: 1.05,
    boxShadow: "0 0 30px rgba(184, 169, 154, 0.5), 0 0 60px rgba(184, 169, 154, 0.2)"
  },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  whileHover: {
    y: -5,
    transition: { type: "spring", stiffness: 300 }
  }
};

export const textRevealVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: custom * 0.05
    }
  })
};

export const slideInVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(184, 169, 154, 0.3)",
      "0 0 40px rgba(184, 169, 154, 0.6)",
      "0 0 20px rgba(184, 169, 154, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

export const whileInViewVariants = {
  once: true,
  amount: 0.3
};

export const pageTransition = {
  transition: { 
    staggerChildren: 0.1,
    delayChildren: 0.2
  }
};
