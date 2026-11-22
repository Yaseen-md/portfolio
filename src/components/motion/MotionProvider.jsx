import React, { createContext, useContext, useEffect, useState } from 'react';
import { MOTION_CONFIG, prefersReducedMotion } from '@/lib/motion';

const MotionContext = createContext({
  reducedMotion: false,
  config: MOTION_CONFIG,
});

export const MotionProvider = ({ children }) => {
  const [reducedMotion, setReducedMotion] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReducedMotion(event.matches);

    setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <MotionContext.Provider value={{ reducedMotion, config: MOTION_CONFIG }}>
      {children}
    </MotionContext.Provider>
  );
};

export function useMotion() {
  return useContext(MotionContext);
}
