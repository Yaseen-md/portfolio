import React from 'react';
import { useInViewOnce } from '@/lib/motion';
import { useMotion } from '@/components/motion/MotionProvider';
import { cn } from '@/lib/utils';

export const Reveal = ({
  children,
  as: Component = 'div',
  delay = 0,
  className = '',
  threshold = 0.01,
}) => {
  const [ref, isVisible] = useInViewOnce({ threshold });
  const { reducedMotion } = useMotion();

  const shown = reducedMotion || isVisible;

  return (
    <Component
      ref={ref}
      style={!reducedMotion && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'reveal-base',
        shown ? 'reveal-visible' : 'reveal-hidden',
        className
      )}
    >
      {children}
    </Component>
  );
};

export const FadeIn = ({
  children,
  as: Component = 'div',
  delay = 0,
  className = '',
  threshold = 0.01,
}) => {
  const [ref, isVisible] = useInViewOnce({ threshold });
  const { reducedMotion } = useMotion();

  const shown = reducedMotion || isVisible;

  return (
    <Component
      ref={ref}
      style={!reducedMotion && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'fade-base',
        shown ? 'fade-visible' : 'fade-hidden',
        className
      )}
    >
      {children}
    </Component>
  );
};

export const SlideReveal = ({
  children,
  as: Component = 'div',
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.01,
}) => {
  const [ref, isVisible] = useInViewOnce({ threshold });
  const { reducedMotion } = useMotion();

  const shown = reducedMotion || isVisible;
  const hiddenClass =
    direction === 'left'
      ? 'slide-hidden-left'
      : direction === 'right'
        ? 'slide-hidden-right'
        : 'reveal-hidden';

  return (
    <Component
      ref={ref}
      style={!reducedMotion && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'reveal-base',
        shown ? 'reveal-visible' : hiddenClass,
        className
      )}
    >
      {children}
    </Component>
  );
};
