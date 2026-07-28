import React from 'react';
import { motion } from 'motion/react';
import CircularGallery from '../ui/circular-gallery';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';
import ShinyText from '../ui/ShinyText';

const honorItems = [
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    text: 'Full Stack React & Next.js Architecture',
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    text: 'Generative AI & Agentic Systems',
  },
  {
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop',
    text: 'Google Cloud & Linux Administration',
  },
  {
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
    text: 'Python & C Systems Fundamentals',
  },
  {
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    text: 'Vibe Coding & MCP Context Engineering',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    text: 'Real-time Telemetry & Live Spatial Systems',
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

      {/* Mobile View: Continuous Infinite Horizontal Auto-Scroll Marquee (3:4 Cards, No Text Below) */}
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
              className="shrink-0 w-[180px] sm:w-[220px] aspect-[3/4] relative rounded-lg overflow-hidden border border-black/15 shadow-sm bg-black/5"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover grayscale contrast-110"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
