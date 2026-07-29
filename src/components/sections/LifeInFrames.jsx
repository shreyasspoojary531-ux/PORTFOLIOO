import React from 'react';
import { LIFE_FRAMES } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';
import ShinyText from '../ui/ShinyText';

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
              <ShinyText text="Life in Frames" speed={2} delay={3} color="#000000" shineColor="#9a9a9a" spread={55} direction="left" yoyo={false} pauseOnHover={false} disabled={false} />
            </h2>
          </div>
          <p className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-black/40">
            [ Bento Gallery ]
          </p>
        </div>
      </Container>

      {/* ── MOBILE: Horizontal scroll carousel ── */}
      <div className="md:hidden">
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pl-5 pr-5 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {LIFE_FRAMES.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[82vw] h-[65vw] relative overflow-hidden border border-black/15 group cursor-pointer bg-white flex flex-col justify-between p-5 transition-all duration-500"
              style={{ touchAction: 'pan-x' }}
            >
              {/* Background Image if present */}
              {item.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale contrast-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at ${(item.id * 30) % 100}% ${(item.id * 45) % 100}%, rgba(0,0,0,0.12) 1px, transparent 1px)`,
                    backgroundSize: `${16 + (item.id % 3) * 8}px ${16 + (item.id % 3) * 8}px`,
                  }}
                />
              )}

              {/* White gradient overlay from bottom */}
              <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />

              {/* Index */}
              <div className="relative z-10 font-mono-tech text-[10px] uppercase tracking-widest text-black/50">
                FRAME // 0{item.id}
              </div>

              {/* Text */}
              <div className="relative z-20 mt-auto">
                <h3 className="font-display text-xl text-black mb-1 leading-tight font-normal">
                  {item.title}
                </h3>
                <p className="text-[11px] text-black/75 font-light leading-snug">
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

      {/* ── DESKTOP: Authentic Bento Grid matching design reference ── */}
      <Container className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          {LIFE_FRAMES.map((item, idx) => {
            const isLarge = item.size === 'large';
            const isTall = item.size === 'tall';

            let gridSpanClass = 'col-span-1 row-span-1';
            if (isLarge) gridSpanClass = 'md:col-span-2 md:row-span-2';
            else if (isTall) gridSpanClass = 'md:col-span-1 md:row-span-2';

            return (
              <FadeIn key={item.id} delay={idx * 0.05} className={gridSpanClass}>
                <div className="relative w-full h-full overflow-hidden border border-black/15 group cursor-pointer bg-white flex flex-col justify-between p-6 transition-all duration-500 md:hover:border-black/70">
                  {/* Dot matrix pattern or background image */}
                  {item.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale contrast-110 transition-transform duration-700 ease-out md:group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-out md:group-hover:scale-105"
                      style={{
                        backgroundImage: `radial-gradient(circle at ${(item.id * 30) % 100}% ${(item.id * 45) % 100}%, rgba(0,0,0,0.12) 1px, transparent 1px)`,
                        backgroundSize: `${16 + (item.id % 3) * 8}px ${16 + (item.id % 3) * 8}px`,
                      }}
                    />
                  )}

                  {/* Editorial White Gradient Fade from Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white via-white/85 to-transparent opacity-95 md:group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                  {/* Frame Index Header */}
                  <div className="relative z-10 font-mono-tech text-[10px] uppercase tracking-widest text-black/50">
                    FRAME // 0{item.id}
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-20 mt-auto pt-4 transform transition-all duration-500 ease-out">
                    <h3 className="font-display text-2xl sm:text-3xl text-black mb-1.5 font-normal md:group-hover:underline underline-offset-4 decoration-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-black/75 font-light leading-relaxed max-w-md">
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
