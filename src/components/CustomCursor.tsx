import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoothing
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Check if device supports fine pointers/hover (desktop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
       return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 4); // half of width
      mouseY.set(e.clientY - 4);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'INPUT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot tracking exactly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C9A84C] pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
        }}
      />

      {/* Lagging Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#C9A84C] pointer-events-none z-[10000] -ml-3 -mt-3"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(201, 168, 76, 0.1)' : 'rgba(201, 168, 76, 0)',
          borderColor: isHovered ? '#E8D5A3' : '#C9A84C',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  );
}
