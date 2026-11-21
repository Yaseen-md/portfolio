import { useEffect, useRef, useState } from 'react';

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
