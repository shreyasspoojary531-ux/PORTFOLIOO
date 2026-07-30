import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ease } from '../../lib/animations';
import { EXPERTISE_NODES } from '../../lib/constants';
import Container from '../layout/Container';
import ShinyText from '../ui/ShinyText';
import OptionWheel from '../ui/OptionWheel';

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const satelliteNodes = EXPERTISE_NODES.filter((n) => !n.isCenter);
  const items = satelliteNodes.map((n) => n.label);

  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const wheelRef = useRef(null);
  const activeIndexRef = useRef(0);

  const activeNode = satelliteNodes[activeIndex] || satelliteNodes[0];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (!triggerRef.current || !pinRef.current) return;
    // Only create GSAP ScrollTrigger pin on desktop screens (>= 1024px)
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        pin: pinRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        snap: {
          snapTo: (value) => Math.round(value * (satelliteNodes.length - 1)) / (satelliteNodes.length - 1),
          duration: { min: 0.1, max: 0.3 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const targetVal = progress * (satelliteNodes.length - 1);
          wheelRef.current?.setTarget(targetVal, false);

          const nearestIdx = Math.min(
            Math.max(Math.round(targetVal), 0),
            satelliteNodes.length - 1
          );

          if (nearestIdx !== activeIndexRef.current) {
            activeIndexRef.current = nearestIdx;
            setActiveIndex(nearestIdx);
          }
        },
      });
    }, triggerRef);

    // Refresh ScrollTrigger after layout and Lenis settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [satelliteNodes.length]);

  return (
    <section id="expertise" ref={triggerRef} className="relative lg:min-h-[300vh] min-h-0 bg-white text-black border-t border-black/10">
      <div ref={pinRef} className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between py-6 lg:py-14 overflow-hidden">
        <Container className="h-full flex flex-col justify-between max-w-[1500px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-5 border-b border-black/10 gap-4 shrink-0">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-2">
                04 / Systems & Architecture
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <ShinyText
                  text="Mastered Systems & Core Stack"
                  speed={2}
                  delay={3}
                  color="#000000"
                  shineColor="#9a9a9a"
                  spread={55}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </h2>
            </div>
            <p className="text-xs font-mono-tech uppercase tracking-widest text-black/40">
              [ Scroll page to advance system blueprint wheel ]
            </p>
          </div>

          {/* Desktop Interactive Scrollytelling View */}
          <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-4 min-h-0">
            {/* Left side: OptionWheel animation container with Instrument Serif & larger text size */}
            <div className="col-span-5 lg:col-span-5 h-[520px] relative flex items-center justify-center overflow-hidden">
              <OptionWheel
                ref={wheelRef}
                items={items}
                defaultSelected={0}
                textColor="#888888"
                activeColor="#000000"
                side="left"
                fontSize={3.0}
                spacing={1.6}
                curve={1.5}
                tilt={6}
                blur={1.5}
                fade={0.25}
                smoothing={180}
                inset={20}
                loop={false}
                draggable
                onChange={(idx) => {
                  if (idx !== activeIndexRef.current) {
                    activeIndexRef.current = idx;
                    setActiveIndex(idx);
                  }
                }}
              />
            </div>

            {/* Right side: Expanded Discipline Spec Detail Panel with Enhanced Character Spacing */}
            <div className="col-span-7 lg:col-span-7 h-full flex flex-col justify-center border-l border-black/10 pl-8 lg:pl-12 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease }}
                  className="space-y-8 max-w-4xl"
                >
                  <div className="border-b border-black/10 pb-5">
                    <span className="font-mono-tech text-xs sm:text-sm uppercase tracking-[0.25em] text-black/40 block mb-2 font-medium">
                      Discipline Spec // 0{activeIndex + 1}
                    </span>
                    <h3 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-black font-normal">
                      {activeNode.label}
                    </h3>
                  </div>

                  <p className="text-lg sm:text-xl lg:text-2xl text-black/85 font-light leading-relaxed">
                    {activeNode.description}
                  </p>

                  <div className="space-y-6 pt-2">
                    <span className="font-mono-tech text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-black/50 block">
                      Core Stack & Methodologies
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                      {activeNode.technologies.map((tech) => (
                        <div key={tech.name} className="border-l-3 border-black pl-4 py-1.5 space-y-1.5">
                          <h4 className="font-mono-tech text-lg sm:text-xl font-bold text-black tracking-wider">
                            {tech.name}
                          </h4>
                          <p className="font-mono-tech text-sm sm:text-base text-black/80 font-normal leading-relaxed tracking-wide">
                            {tech.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Accordion View (AI & Agents open by default, normal page scroll without inner scrollbars) */}
          <div className="lg:hidden space-y-4 py-6 w-full">
            {satelliteNodes.map((node, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={node.id} className="border border-black/15 overflow-hidden transition-colors bg-white">
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between font-display text-2xl sm:text-3xl cursor-pointer"
                  >
                    <span>{node.label}</span>
                    <span className="font-mono-tech text-sm text-black/50">{isOpen ? '—' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="px-5 pb-6 pt-2 border-t border-black/10 space-y-6"
                      >
                        <p className="text-base text-black/80 font-light leading-relaxed">{node.description}</p>
                        <div className="space-y-4">
                          <span className="font-mono-tech text-xs uppercase tracking-widest text-black/50 block font-semibold">
                            Stack Specifications
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {node.technologies.map((tech) => (
                              <div key={tech.name} className="border-l-3 border-black pl-3.5 py-1 space-y-1">
                                <div className="font-mono-tech text-lg font-bold text-black tracking-wider">{tech.name}</div>
                                <div className="font-mono-tech text-sm text-black/80 font-normal tracking-wide">{tech.detail}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
