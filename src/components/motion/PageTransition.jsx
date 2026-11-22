import React from 'react';
import { useMotion } from '@/components/motion/MotionProvider';
import { cn } from '@/lib/utils';

export const PageTransition = ({ routeKey, children, className = '' }) => {
  const { reducedMotion } = useMotion();

  return (
    <div
      key={routeKey}
      className={cn(!reducedMotion && 'page-enter', className)}
    >
      {children}
    </div>
  );
};
