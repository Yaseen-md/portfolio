
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    
    const handleLinkHover = () => setCursorVariant('hover');
    const handleLinkLeave = () => setCursorVariant('default');
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: 'rgba(71, 118, 230, 0.5)',
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: 'rgba(142, 84, 233, 0.5)',
      mixBlendMode: 'difference',
    },
    click: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      backgroundColor: 'rgba(142, 84, 233, 0.8)',
    },
  };

  const followerVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: 'rgba(142, 84, 233, 0.1)',
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  };

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor-follower"
        variants={followerVariants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Cursor;
