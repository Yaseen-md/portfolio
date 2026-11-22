import React from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { MOTION_CONFIG } from '@/lib/motion';

export const StaggerGroup = ({
  children,
  baseDelay = 0,
  stagger = MOTION_CONFIG.stagger.base,
  className = '',
  itemClassName = '',
}) => {
  const items = React.Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, idx) => (
        <Reveal
          key={child?.key ?? idx}
          delay={baseDelay + idx * stagger}
          className={itemClassName}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
};
