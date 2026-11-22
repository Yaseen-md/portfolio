import React, { useEffect, useState } from 'react';
import { useMotion } from '@/components/motion/MotionProvider';

export const SectionProgress = () => {
  const [progress, setProgress] = useState(0);
  const { reducedMotion } = useMotion();

  useEffect(() => {
    const updateProgress = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      const next = Math.min(1, Math.max(0, window.scrollY / docHeight));
      setProgress(next);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none bg-transparent"
    >
      <div
        className="h-full w-full bg-accent/80 origin-left"
        style={{
          transform: `scaleX(${progress})`,
          transition: reducedMotion ? 'none' : 'transform 80ms linear',
        }}
      />
    </div>
  );
};
