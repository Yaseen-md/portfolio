import React from 'react';
import { useInViewOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

const Reveal = ({
  children,
  as: Component = 'div',
  delay = 0,
  className = '',
  threshold = 0.12,
}) => {
  const [ref, isVisible] = useInViewOnce({ threshold });

  return (
    <Component
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'reveal-base',
        isVisible ? 'reveal-visible' : 'reveal-hidden',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Reveal;
