import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ease } from '../../lib/animations';
import { EXPERTISE_NODES } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';

export default function Expertise() {
  const [activeNodeId, setActiveNodeId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const centerNode = EXPERTISE_NODES.find((n) => n.isCenter);
  const satelliteNodes = EXPERTISE_NODES.filter((n) => !n.isCenter);
  const activeNode = EXPERTISE_NODES.find((n) => n.id === activeNodeId);

  return (
    <Section id="expertise" className="bg-white/80 text-black border-t border-black/10 overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-3">
              04 / Systems & Architecture
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Interactive System Blueprint
            </h2>
          </div>
          <p className="text-xs font-mono-tech uppercase tracking-widest text-black/40">
            [ Hover satellite nodes to inspect branch specifications ]
          </p>
        </div>

        {/* Desktop Interactive Canvas */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[640px] relative">
          <div className="col-span-8 relative aspect-[4/3] bg-black/[0.02] border border-black/10 p-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {satelliteNodes.map((node) => {
                const isHovered = activeNodeId === node.id;
                const isOtherHovered = activeNodeId && activeNodeId !== node.id;
                return (
                  <g key={`line-${node.id}`}>
                    <line
                      x1={centerNode.x} y1={centerNode.y} x2={node.x} y2={node.y}
                      stroke="#000000"
                      strokeWidth={isHovered ? '0.8' : '0.4'}
                      strokeOpacity={isHovered ? 1 : isOtherHovered ? 0.1 : 0.3}
                      className={isHovered ? '' : 'animate-dash'}
                      style={{ transition: 'all 0.4s ease' }}
                    />
                  </g>
                );
              })}

              <g className="cursor-pointer" onClick={() => setActiveNodeId(null)}>
                <circle cx={centerNode.x} cy={centerNode.y} r="3.5" fill="#000000" />
                <circle cx={centerNode.x} cy={centerNode.y} r="6" fill="none" stroke="#000000" strokeWidth="0.3" strokeOpacity="0.4" />
                <text x={centerNode.x} y={centerNode.y + 7.5} textAnchor="middle" className="font-mono-tech text-[3.2px] uppercase tracking-widest font-bold fill-black">
                  {centerNode.label}
                </text>
              </g>

              {satelliteNodes.map((node) => {
                const isHovered = activeNodeId === node.id;
                const isOtherHovered = activeNodeId && activeNodeId !== node.id;
                return (
                  <g key={`node-${node.id}`} className="cursor-pointer" onMouseEnter={() => setActiveNodeId(node.id)}>
                    {isHovered && (
                      <motion.circle cx={node.x} cy={node.y} r="5" fill="none" stroke="#000000" strokeWidth="0.5"
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.5, opacity: 0.6 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                    <circle
                      cx={node.x} cy={node.y}
                      r={isHovered ? '2.8' : '2'}
                      fill={isHovered ? '#000000' : '#ffffff'}
                      stroke="#000000" strokeWidth="0.5"
                      opacity={isOtherHovered ? 0.2 : 1}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    <text x={node.x} y={node.y > 50 ? node.y + 6 : node.y - 4} textAnchor="middle"
                      className={`font-mono-tech text-[2.8px] uppercase tracking-wider ${
                        isHovered ? 'font-bold fill-black text-[3.2px]' : isOtherHovered ? 'fill-black/20' : 'fill-black/70'
                      }`}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="col-span-4 h-full flex flex-col justify-center border-l border-black/10 pl-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div key={activeNode.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, ease }} className="space-y-6">
                  <div className="border-b border-black/10 pb-4">
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block mb-1">
                      Discipline Spec // 0{satelliteNodes.findIndex((n) => n.id === activeNode.id) + 1}
                    </span>
                    <h3 className="font-display text-4xl tracking-tight">{activeNode.label}</h3>
                  </div>
                  <p className="text-sm text-black/70 font-light leading-relaxed">{activeNode.description}</p>
                  <div className="space-y-4 pt-2">
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block">Core Stack & Methodologies</span>
                    <div className="space-y-3">
                      {activeNode.technologies.map((tech) => (
                        <div key={tech.name} className="border-l-2 border-black pl-3 py-0.5">
                          <h4 className="font-mono-tech text-xs font-semibold">{tech.name}</h4>
                          <p className="text-xs text-black/60 font-light">{tech.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-4 text-black/40 py-12">
                  <span className="font-mono-tech text-xs uppercase tracking-widest block">Blueprint Inspection Active</span>
                  <p className="font-editorial-italic text-xl text-black/60">
                    Hover any satellite node in the blueprint canvas to examine branch specifications, technology stacks, and architectural philosophy.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {satelliteNodes.map((node) => {
            const isOpen = activeNodeId === node.id;
            return (
              <div key={node.id} className="border border-black/15 overflow-hidden transition-colors">
                <button onClick={() => setActiveNodeId(isOpen ? null : node.id)}
                  className="w-full p-6 text-left flex items-center justify-between font-display text-2xl cursor-pointer">
                  <span>{node.label}</span>
                  <span className="font-mono-tech text-sm text-black/50">{isOpen ? '—' : '+'}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }}
                      className="px-6 pb-6 pt-2 border-t border-black/10 space-y-6">
                      <p className="text-sm text-black/70 font-light leading-relaxed">{node.description}</p>
                      <div className="space-y-3">
                        <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block">Stack Specifications</span>
                        {node.technologies.map((tech) => (
                          <div key={tech.name} className="border-l-2 border-black pl-3 py-1">
                            <div className="font-mono-tech text-xs font-semibold">{tech.name}</div>
                            <div className="text-xs text-black/60">{tech.detail}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
