import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ease } from '../../lib/animations';
import { SITE } from '../../lib/constants';
import Container from '../layout/Container';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-36 pb-16 overflow-hidden select-none bg-white text-black">
      <Container className="flex-1 flex flex-col justify-center my-auto">
        <div className="w-full">
          {/* Eyebrow Status Badge */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3 overflow-visible py-1">
            <motion.div
              className="text-xs sm:text-sm uppercase tracking-[0.25em] text-black/50 font-mono-tech flex items-center gap-3"
              initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
              </span>
              <span>{SITE.role}</span>
            </motion.div>
          </div>

          {/* Oversized Editorial Name Headline */}
          <div className="overflow-hidden pb-4 sm:pb-6">
            <motion.h1
              className="font-display text-black text-[14vw] sm:text-[12vw] lg:text-[10.5vw] leading-[0.98] tracking-tight -ml-1 sm:-ml-2 block"
              initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.0, ease, delay: 0.2 }}
            >
              {SITE.name}
            </motion.h1>
          </div>

          {/* Tagline Statement */}
          <div className="mt-4 sm:mt-6 max-w-2xl overflow-hidden">
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-black/75 font-light leading-relaxed tracking-tight"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
            >
              {SITE.tagline}
            </motion.p>
          </div>
        </div>
      </Container>

      {/* Footer Metrics Strip */}
      <Container>
        <motion.div
          className="pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-black/40 font-mono-tech uppercase tracking-widest gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>54 Repositories</span>
            <span>·</span>
            <span>3.1k Contributions</span>
            <span>·</span>
            <span>100% Craft</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Scroll for Architecture</span>
            <span className="text-black font-bold">↓</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
