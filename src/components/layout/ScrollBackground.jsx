import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export default function ScrollBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Slow zoom scale from 1.0 to 1.35 as user scrolls down the page
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.35]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      <motion.img
        src="/assets/bg-particle-mesh.jpg"
        alt="Background Particle Mesh"
        className="w-full h-full object-cover opacity-50 select-none"
        style={shouldReduceMotion ? {} : { scale }}
      />
    </div>
  );
}
