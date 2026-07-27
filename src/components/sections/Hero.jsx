import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ease } from '../../lib/animations';
import { SITE } from '../../lib/constants';
import Container from '../layout/Container';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-white/80 text-black overflow-hidden select-none">

      {/* ── MOBILE LAYOUT: content balanced vertically ── */}
      <div className="flex flex-col flex-1 justify-end pt-20 pb-16 px-5 space-y-6 md:hidden">
        {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-2.5 overflow-visible"
            initial={shouldReduceMotion ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/50 font-mono-tech">
              {SITE.role}
            </span>
          </motion.div>

          {/* Giant name */}
          <div className="overflow-hidden pb-2">
            <motion.h1
              className="font-display text-black text-[19vw] leading-[0.92] tracking-tight -ml-1 block"
              initial={shouldReduceMotion ? false : { y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.0, ease, delay: 0.18 }}
            >
              {SITE.name}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-base text-black/65 font-light leading-relaxed max-w-xs"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
          >
            {SITE.tagline}
          </motion.p>

          {/* Metrics strip */}
          <motion.div
            className="pt-5 border-t border-black/10 flex flex-col gap-3"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 flex-wrap font-mono-tech text-[10px] uppercase tracking-widest text-black/40">
              <span>3 Repositories</span>
              <span>·</span>
              <span>AI & Vibe Coding</span>
              <span>·</span>
              <span>100% Craft</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-widest text-black/40">
              <span>Scroll</span>
              <span className="text-black font-bold">↓</span>
            </div>
          </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT: original centered layout ── */}
      <div className="hidden md:flex flex-col flex-1 pt-36 pb-16">
        <Container className="flex-1 flex flex-col justify-center my-auto">
          <div className="w-full">
            {/* Eyebrow Status Badge */}
            <div className="mb-6 flex items-center gap-3 overflow-visible py-1">
              <motion.div
                className="text-sm uppercase tracking-[0.25em] text-black/50 font-mono-tech flex items-center gap-3"
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

            <div className="overflow-hidden pb-6">
              <motion.h1
                className="font-display text-black text-[12vw] lg:text-[10.5vw] leading-[0.98] tracking-tight -ml-2 block"
                initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.0, ease, delay: 0.2 }}
              >
                {SITE.name}
              </motion.h1>
            </div>

            <div className="mt-6 max-w-2xl overflow-hidden">
              <motion.p
                className="text-2xl lg:text-3xl text-black/75 font-light leading-relaxed tracking-tight"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.4 }}
              >
                {SITE.tagline}
              </motion.p>
            </div>
          </div>
        </Container>

        <Container>
          <motion.div
            className="pt-8 border-t border-black/10 flex flex-row justify-between items-center text-xs text-black/40 font-mono-tech uppercase tracking-widest gap-4"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-6 flex-wrap">
              <span>3 Public Repositories</span>
              <span>·</span>
              <span>AI & Vibe Coding</span>
              <span>·</span>
              <span>100% Craft</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Scroll for Architecture</span>
              <span className="text-black font-bold">↓</span>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
