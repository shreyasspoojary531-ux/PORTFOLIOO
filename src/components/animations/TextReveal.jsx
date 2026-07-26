import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ease } from '../../lib/animations';

export default function TextReveal({ children, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const text = typeof children === 'string' ? children : '';
  const words = text ? text.split(' ') : [];

  if (shouldReduceMotion || words.length === 0) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={`inline-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease,
              delay: delay + i * 0.035,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
