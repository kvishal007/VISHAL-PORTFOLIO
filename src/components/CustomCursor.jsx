import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: position.x - 6,
          y: position.y - 6,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-accent-purple rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'rgba(155, 93, 229, 0.1)' : 'rgba(155, 93, 229, 0)',
        }}
      />
    </>
  );
};

export default CustomCursor;
