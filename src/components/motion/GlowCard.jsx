import React, { useRef, useState } from 'react';
import { useMotion } from '@/components/motion/MotionProvider';
import { cn } from '@/lib/utils';

export const GlowCard = ({
  children,
  as: Component = 'div',
  className = '',
  glowColor = 'rgba(165, 185, 255, 0.12)',
  ...props
}) => {
  const cardRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const { reducedMotion } = useMotion();

  const canGlow =
    !reducedMotion &&
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const handleMouseMove = (e) => {
    if (!canGlow || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPointer({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    if (!pointer.active) return;
    setPointer((prev) => ({ ...prev, active: false }));
  };

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {canGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-base ease-standard"
          style={{
            opacity: pointer.active ? 1 : 0,
            background: `radial-gradient(380px circle at ${pointer.x}px ${pointer.y}px, ${glowColor}, transparent 70%)`,
          }}
        />
      )}
      {children}
    </Component>
  );
};
