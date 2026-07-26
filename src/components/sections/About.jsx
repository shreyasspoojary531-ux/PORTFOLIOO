import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ABOUT } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';
import LineReveal from '../animations/LineReveal';

function ScrollHighlightedParagraph({ text }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  if (shouldReduceMotion) {
    return <p className="text-black/80 font-light text-lg sm:text-xl leading-relaxed">{text}</p>;
  }

  return (
    <p ref={containerRef} className="font-light text-lg sm:text-xl leading-relaxed flex flex-wrap gap-x-[0.25em]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
        const color = useTransform(scrollYProgress, [start, end], ['rgba(0,0,0,0.25)', 'rgba(0,0,0,1)']);

        return (
          <motion.span key={i} style={{ opacity, color }} className="inline-block transition-colors">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <Section id="about" className="bg-white text-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Eyebrow Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-4">
                01 / Philosophy & Mindset
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-6">
                Architectural thinking applied to product craft.
              </h2>
              <div className="w-12 h-[1px] bg-black/20" />
            </FadeIn>
          </div>

          {/* Right Column — Pull Quote & Scroll Storytelling */}
          <div className="lg:col-span-8 space-y-16">
            {/* Editorial Pull Quote */}
            <FadeIn delay={0.1}>
              <blockquote className="font-editorial-italic text-3xl sm:text-4xl lg:text-5xl text-black leading-snug border-l-2 border-black pl-6 sm:pl-8 py-2 hover:pl-10 transition-all duration-300">
                "{ABOUT.headline}"
              </blockquote>
            </FadeIn>

            <LineReveal delay={0.2} />

            {/* Paragraphs with Scroll Illumination */}
            <div className="space-y-12 max-w-2xl">
              {ABOUT.paragraphs.map((paragraph, index) => (
                <ScrollHighlightedParagraph key={index} text={paragraph} />
              ))}
            </div>

            {/* Core Principles Cards */}
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-black/10">
              <FadeIn delay={0.3}>
                <div className="p-6 border border-black/10 hover:border-black transition-colors duration-300 space-y-3 group">
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-black/40 block group-hover:text-black">
                    01. Reduction
                  </span>
                  <p className="text-sm text-black/70 font-light leading-relaxed">
                    Eliminate the unnecessary so the essential may speak clearly.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="p-6 border border-black/10 hover:border-black transition-colors duration-300 space-y-3 group">
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-black/40 block group-hover:text-black">
                    02. Cohesion
                  </span>
                  <p className="text-sm text-black/70 font-light leading-relaxed">
                    Treat visual design and backend logic as a single continuous system.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="p-6 border border-black/10 hover:border-black transition-colors duration-300 space-y-3 group">
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-black/40 block group-hover:text-black">
                    03. Precision
                  </span>
                  <p className="text-sm text-black/70 font-light leading-relaxed">
                    Rigor in frame rates, layout mathematics, and code clarity.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
