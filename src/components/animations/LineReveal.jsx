import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ease } from '../../lib/animations';

export default function LineReveal({ className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`h-[1px] bg-black/10 w-full ${className}`} />;
  }

  return (
    <motion.div
      className={`h-[1px] bg-black/10 origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease, delay }}
    />
  );
}
