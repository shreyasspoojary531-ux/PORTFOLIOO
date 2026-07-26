import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { transitionDefaults } from '../../lib/animations';

export default function Section({ children, className = '', id, animate = true }) {
  const shouldReduceMotion = useReducedMotion();

  if (!animate || shouldReduceMotion) {
    return (
      <section id={id} className={`py-16 sm:py-24 md:py-32 lg:py-48 ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-24 md:py-32 lg:py-48 ${className}`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
}
