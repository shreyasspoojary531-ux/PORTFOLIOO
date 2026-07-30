import React from 'react';
import { motion } from 'motion/react';
import CircularGallery from '../ui/circular-gallery';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';
import ShinyText from '../ui/ShinyText';

const honorItems = [
  {
    image: '/assets/cert_anthropic_ai_fluency.jpg',
    text: 'AI Fluency: Framework & Foundations — Anthropic',
  },
  {
    image: '/assets/cert_msft_ai_concepts.jpg',
    text: 'Introduction to AI Concepts — Microsoft Learn',
  },
  {
    image: '/assets/cert_msft_ml_concepts.jpg',
    text: 'Introduction to Machine Learning Concepts — Microsoft Learn',
  },
  {
    image: '/assets/cert_msft_ai_basics.jpg',
    text: 'Explore AI Basics — Microsoft Learn',
  },
  {
    image: '/assets/cert_msft_generative_ai.jpg',
    text: 'Explore Generative AI — Microsoft Learn',
  },
];

export default function RollOfHonor() {
  return (
    <Section id="honor" className="bg-white/80 text-black border-t border-black/10">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-black/10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-3">
              04 / Roll of Honor & Certifications
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              <ShinyText text="Hall of Distinction" speed={2} delay={3} color="#000000" shineColor="#9a9a9a" spread={55} direction="left" yoyo={false} pauseOnHover={false} disabled={false} />
            </h2>
          </div>
          <p className="text-xs font-mono-tech uppercase tracking-widest text-black/40">
            <span className="hidden md:inline">[ Drag horizontally or use scroll wheel ]</span>
            <span className="md:hidden">[ Auto-scrolling showcase ]</span>
          </p>
        </div>
      </Container>

      {/* Desktop View: 3D WebGL Circular Gallery Canvas (Aspect Ratio 3:4, No Text Below) */}
      <FadeIn className="hidden md:block w-full h-[65vh] min-h-[500px] max-h-[750px] relative overflow-hidden bg-black/[0.01]">
        <CircularGallery
          items={honorItems}
          bend={2.5}
          textColor="#000000"
          borderRadius={0.04}
          font="bold 22px Space Grotesk"
        />
      </FadeIn>

      {/* Mobile View: Continuous Infinite Horizontal Auto-Scroll Marquee (4:3 Cards, No Text Below) */}
      <div className="md:hidden w-full overflow-hidden py-4 border-t border-b border-black/10 bg-black/[0.02]">
        <motion.div
          className="flex gap-4 w-max px-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...honorItems, ...honorItems].map((item, idx) => (
            <div
              key={`${item.image}-${idx}`}
              className="shrink-0 w-[240px] sm:w-[280px] aspect-[4/3] relative rounded-lg overflow-hidden border border-black/15 shadow-sm bg-black/5"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-contain p-1 bg-white"
                loading="lazy"
                decoding="async"
                width="280"
                height="210"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
