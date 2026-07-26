import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { transitionDefaults } from '../../lib/animations';

export default function Section({ children, className = '', id, animate = true }) {
  const shouldReduceMotion = useReducedMotion();

  if (!animate || shouldReduceMotion) {
    return (
      <section id={id} className={`py-24 sm:py-32 md:py-40 lg:py-48 ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={`py-24 sm:py-32 md:py-40 lg:py-48 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={transitionDefaults}
    >
      {children}
    </motion.section>
  );
}
