import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ease } from '../../lib/animations';
import { SITE } from '../../lib/constants';

export default function LoadingScreen({ onComplete }) {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenIntro');
    }
    return true;
  });

  useEffect(() => {
    if (shouldReduceMotion || (typeof window !== 'undefined' && sessionStorage.getItem('hasSeenIntro'))) {
      setVisible(false);
      onComplete?.();
      return;
    }

    // Auto-dismiss after 1.4 seconds total for snappy cinematic feel
    const timer = setTimeout(() => {
      setVisible(false);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasSeenIntro', 'true');
      }
      onComplete?.();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete, shouldReduceMotion]);

  const nameLetters = SITE.name.split('');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-between p-8 sm:p-12 md:p-16 overflow-hidden select-none pointer-events-auto"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Top Info Bar */}
          <div className="flex justify-between items-center text-xs font-mono-tech text-white/50 uppercase tracking-widest">
            <span>{SITE.title}</span>
            <span>SYSTEM // INTRO</span>
          </div>

          {/* Center Stage: Character-by-Character Kinetic Reveal */}
          <div className="my-auto flex flex-col items-center justify-center">
            <div className="flex overflow-hidden">
              {nameLetters.map((char, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.span
                    className="font-display text-white text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] tracking-tight leading-none inline-block"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 0.6,
                      ease,
                      delay: index * 0.05,
                    }}
                  >
                    {char}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center text-xs font-mono-tech text-white/40 uppercase tracking-widest gap-2">
            <span>{SITE.role}</span>
            <span>PORTFOLIO 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
