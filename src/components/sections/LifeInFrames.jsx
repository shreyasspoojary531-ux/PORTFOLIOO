import React from 'react';
import { LIFE_FRAMES } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';

export default function LifeInFrames() {
  return (
    <Section id="frames" className="bg-white text-black border-t border-black/10">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-3">
              05 / Visual Narrative
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Life in Frames
            </h2>
          </div>
          <p className="text-xs font-mono-tech uppercase tracking-widest text-black/40">
            [ Bento Masonry Gallery ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {LIFE_FRAMES.map((item, idx) => {
            const isLarge = item.size === 'large';
            const isMedium = item.size === 'medium';

            let gridSpanClass = 'col-span-1 row-span-1';
            if (isLarge) gridSpanClass = 'md:col-span-2 md:row-span-2';
            else if (isMedium) gridSpanClass = 'md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2';

            return (
              <FadeIn key={item.id} delay={idx * 0.06} className={gridSpanClass}>
                <div className="relative w-full h-full overflow-hidden border border-black/10 group cursor-pointer bg-black/5 flex flex-col justify-between p-6 transition-all duration-500 hover:border-black/60">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${(item.id * 30) % 100}% ${(item.id * 45) % 100}%, rgba(0,0,0,0.12) 1px, transparent 1px)`,
                      backgroundSize: `${16 + (item.id % 3) * 8}px ${16 + (item.id % 3) * 8}px`,
                    }}
                  >
                    <div className={`w-full h-full transition-all duration-500 group-hover:grayscale ${item.id % 2 === 0 ? 'bg-black/[0.03]' : 'bg-black/[0.06]'}`} />
                  </div>

                  <div className="relative z-10 font-mono-tech text-[10px] uppercase tracking-widest text-black/40">
                    FRAME // 0{item.id}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                  <div className="relative z-20 mt-auto pt-4 transform transition-all duration-500 ease-out">
                    <h3 className="font-display text-2xl sm:text-3xl text-black mb-1 group-hover:underline underline-offset-4 decoration-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-black/75 font-light leading-relaxed max-w-md opacity-80 group-hover:opacity-100 transition-opacity">
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
