import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
  color?: string;
}

export default function AnimatedLogo({ className = "w-10 h-10", color = "currentColor" }: AnimatedLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <motion.path
          d="M 25 110 L 25 55 L 65 15 L 105 55 L 105 75 L 65 115 L 50 100 L 50 70"
          stroke={color}
          strokeWidth="20"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeLinecap="square"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
