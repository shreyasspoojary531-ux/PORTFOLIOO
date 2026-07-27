import React from 'react';
import { LIFE_FRAMES } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';

export default function LifeInFrames() {
  return (
    <Section id="frames" className="bg-white/80 text-black border-t border-black/10">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-black/10 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-2 sm:mb-3">
              05 / Visual Narrative
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tight">
              Life in Frames
            </h2>
          </div>
          <p className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-black/40">
            [ Bento Gallery ]
          </p>
        </div>
      </Container>

      {/* ── MOBILE: Horizontal scroll carousel ── */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pl-5 pr-5 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {LIFE_FRAMES.map((item, idx) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[72vw] h-[52vw] relative overflow-hidden border border-black/10 group cursor-pointer bg-black/5 flex flex-col justify-between p-5 transition-all duration-500 active:scale-[0.97]"
              style={{ touchAction: 'pan-x' }}
            >
              {/* Dot pattern bg */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at ${(item.id * 30) % 100}% ${(item.id * 45) % 100}%, rgba(0,0,0,0.10) 1px, transparent 1px)`,
                  backgroundSize: `${16 + (item.id % 3) * 8}px ${16 + (item.id % 3) * 8}px`,
                }}
              />

              {/* Index */}
              <div className="relative z-10 font-mono-tech text-[9px] uppercase tracking-widest text-black/35">
                FRAME // 0{item.id}
              </div>

              {/* White gradient from bottom */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

              {/* Text */}
              <div className="relative z-20 mt-auto">
                <h3 className="font-display text-xl text-black mb-0.5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-black/60 font-light leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
          {/* trailing space */}
          <div className="shrink-0 w-1" />
        </div>

        {/* Scroll hint */}
        <div className="px-5 mt-1">
          <span className="font-mono-tech text-[9px] uppercase tracking-widest text-black/30">
            ← swipe to explore →
          </span>
        </div>
      </div>

      {/* ── DESKTOP: Original bento grid ── */}
      <Container className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {LIFE_FRAMES.map((item, idx) => {
            const isLarge = item.size === 'large';
            const isMedium = item.size === 'medium';

            let gridSpanClass = 'col-span-1 row-span-1';
            if (isLarge) gridSpanClass = 'md:col-span-2 md:row-span-2';
            else if (isMedium) gridSpanClass = 'md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2';

            return (
              <FadeIn key={item.id} delay={idx * 0.06} className={gridSpanClass}>
                <div className="relative w-full h-full overflow-hidden border border-black/10 group cursor-pointer bg-black/5 flex flex-col justify-between p-6 transition-all duration-500 md:hover:border-black/60">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out md:group-hover:scale-105"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${(item.id * 30) % 100}% ${(item.id * 45) % 100}%, rgba(0,0,0,0.12) 1px, transparent 1px)`,
                      backgroundSize: `${16 + (item.id % 3) * 8}px ${16 + (item.id % 3) * 8}px`,
                    }}
                  >
                    <div className={`w-full h-full transition-all duration-500 md:group-hover:grayscale ${item.id % 2 === 0 ? 'bg-black/[0.03]' : 'bg-black/[0.06]'}`} />
                  </div>

                  <div className="relative z-10 font-mono-tech text-[10px] uppercase tracking-widest text-black/40">
                    FRAME // 0{item.id}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90 md:group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                  <div className="relative z-20 mt-auto pt-4 transform transition-all duration-500 ease-out">
                    <h3 className="font-display text-2xl sm:text-3xl text-black mb-1 md:group-hover:underline underline-offset-4 decoration-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-black/75 font-light leading-relaxed max-w-md opacity-80 md:group-hover:opacity-100 transition-opacity">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
