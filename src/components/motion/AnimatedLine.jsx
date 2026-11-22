import React from 'react';
import { useInViewOnce } from '@/lib/motion';
import { useMotion } from '@/components/motion/MotionProvider';
import { cn } from '@/lib/utils';

export const AnimatedLine = ({
  d,
  x1,
  y1,
  x2,
  y2,
  stroke = '#343E4D',
  strokeWidth = '1.25',
  delay = 0,
  dashed = false,
  className = '',
}) => {
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : undefined;

  if (d) {
    return (
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? '4 3' : undefined}
        pathLength={dashed ? undefined : '1'}
        className={cn(dashed ? 'diagram-dashed' : 'diagram-connector', className)}
        style={delayStyle}
      />
    );
  }

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      pathLength="1"
      className={cn('diagram-connector', className)}
      style={delayStyle}
    />
  );
};

export const SectionDivider = ({ className = '' }) => {
  const [ref, isVisible] = useInViewOnce({ threshold: 0.01 });
  const { reducedMotion } = useMotion();
  const shown = reducedMotion || isVisible;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'h-px w-full bg-subtle/80 origin-left transition-transform duration-[450ms] ease-standard',
        shown ? 'scale-x-100' : 'scale-x-0',
        className
      )}
    />
  );
};
