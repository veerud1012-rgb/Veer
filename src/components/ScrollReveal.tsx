import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'scale-up' | 'slide-left' | 'slide-right' | 'rotate-up';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.55,
  className = '',
}: ScrollRevealProps) {
  const getInitial = () => {
    switch (variant) {
      case 'scale-up':
        return { opacity: 0, scale: 0.92, y: 28 };
      case 'slide-left':
        return { opacity: 0, x: -42, y: 12 };
      case 'slide-right':
        return { opacity: 0, x: 42, y: 12 };
      case 'rotate-up':
        return { opacity: 0, y: 36, rotateX: 8, scale: 0.96 };
      case 'fade-up':
      default:
        return { opacity: 0, y: 36 };
    }
  };

  const getAnimate = () => {
    switch (variant) {
      case 'scale-up':
        return { opacity: 1, scale: 1, y: 0 };
      case 'slide-left':
      case 'slide-right':
        return { opacity: 1, x: 0, y: 0 };
      case 'rotate-up':
        return { opacity: 1, y: 0, rotateX: 0, scale: 1 };
      case 'fade-up':
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: false, amount: 0.14, margin: '0px 0px -40px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
