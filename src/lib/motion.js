import { useEffect, useRef, useState } from 'react';

export const MOTION_CONFIG = {
  durations: {
    fast: 160,
    base: 240,
    reveal: 400,
    diagram: 360,
    line: 420,
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
  },
  distances: {
    revealY: 10,
    slideX: 12,
    heroY: 8,
  },
  stagger: {
    tight: 55,
    base: 75,
    hero: 55,
  },
};

export function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useInViewOnce(options = {}) {
  const { threshold = 0.01, rootMargin = '0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (prefersReducedMotion()) return true;
    if (typeof IntersectionObserver === 'undefined') return true;
    return false;
  });

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    const checkInView = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkInView()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    const onScrollFallback = () => {
      if (checkInView()) {
        observer.disconnect();
        window.removeEventListener('scroll', onScrollFallback);
      }
    };

    window.addEventListener('scroll', onScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollFallback);
    };
  }, [isVisible, threshold, rootMargin]);

  return [ref, isVisible];
}

export function useIsInView(options = {}) {
  const { threshold = 0.01, rootMargin = '80px 0px' } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setInView(false);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

export function useDiagramVisibility() {
  const [onceRef, isVisible] = useInViewOnce({ threshold: 0.05 });
  const [liveRef, isCurrentlyInView] = useIsInView({ threshold: 0.01 });

  const ref = (node) => {
    onceRef.current = node;
    liveRef.current = node;
  };

  const isPaused = !prefersReducedMotion() && isVisible && !isCurrentlyInView;

  return { ref, isVisible, isPaused };
}
