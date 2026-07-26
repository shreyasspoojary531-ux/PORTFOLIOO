import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';
import LineReveal from '../animations/LineReveal';
import { ease } from '../../lib/animations';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <Section id="projects" className="bg-white/80 text-black">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-24 pb-6 sm:pb-8 border-b border-black/10 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-3">
              02 / Selected Works
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Featured Systems & Products
            </h2>
          </div>
          <p className="text-xs font-mono-tech uppercase tracking-widest text-black/40">
            [ Click any project to open detailed architecture view ]
          </p>
        </div>

        {/* Projects Showcase with Alternating Layouts */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.id} className="group">
                <FadeIn>
                  {index === 0 ? (
                    /* Layout 1: Full-width Horizontal Showcase */
                    <div onClick={() => setSelectedProject(project)} className="space-y-8 cursor-pointer">
                      <div className="relative overflow-hidden bg-black/[0.02] border border-black/10 aspect-[16/9] w-full group-hover:border-black transition-colors duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                        <div className="absolute top-6 left-6 font-mono-tech text-xs tracking-widest uppercase text-black/30">
                          {project.id} // {project.category}
                        </div>
                        <div className="absolute bottom-6 right-6 font-mono-tech text-xs tracking-widest uppercase text-black/30">
                          {project.year}
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <span className="font-editorial-italic text-3xl sm:text-4xl text-black/40 group-hover:text-black transition-colors">
                            {project.title}
                          </span>
                          <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to Inspect Architecture ↗
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pt-2">
                        <div className="md:col-span-5 py-1">
                          <h3 className="font-display text-3xl sm:text-4xl tracking-tight leading-tight group-hover:underline underline-offset-4 decoration-1">
                            {project.title}
                          </h3>
                        </div>
                        <div className="md:col-span-5 text-black/60 font-light text-base">
                          {project.description}
                        </div>
                        <div className="md:col-span-2 flex flex-wrap gap-2 justify-start md:justify-end">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-1 bg-black/5 text-black/70 border border-black/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : isEven ? (
                    /* Layout 2: Split 60/40 Image Left */
                    <div onClick={() => setSelectedProject(project)} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center cursor-pointer">
                      <div className="lg:col-span-7">
                        <div className="relative overflow-hidden bg-black/[0.02] border border-black/10 aspect-[4/3] w-full group-hover:border-black transition-colors duration-500">
                          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                          <div className="absolute top-6 left-6 font-mono-tech text-xs tracking-widest uppercase text-black/30">{project.id}</div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <span className="font-editorial-italic text-3xl sm:text-4xl text-black/40 group-hover:text-black transition-colors">
                              {project.title} Interface
                            </span>
                            <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                              Inspect Blueprint ↗
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 space-y-6 py-2">
                        <span className="text-xs uppercase tracking-widest font-mono-tech text-black/40 block">
                          {project.category} — {project.year}
                        </span>
                        <h3 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight group-hover:underline underline-offset-4">
                          {project.title}
                        </h3>
                        <p className="text-black/60 font-light text-base leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 border border-black/15 text-black/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Layout 3: Reverse Split 40/60 Details Left */
                    <div onClick={() => setSelectedProject(project)} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center cursor-pointer">
                      <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 py-2">
                        <span className="text-xs uppercase tracking-widest font-mono-tech text-black/40 block">
                          {project.category} — {project.year}
                        </span>
                        <h3 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight group-hover:underline underline-offset-4">
                          {project.title}
                        </h3>
                        <p className="text-black/60 font-light text-base leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 border border-black/15 text-black/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative overflow-hidden bg-black/[0.02] border border-black/10 aspect-[16/9] w-full group-hover:border-black transition-colors duration-500">
                          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
                          <div className="absolute top-6 left-6 font-mono-tech text-xs tracking-widest uppercase text-black/30">{project.id}</div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <span className="font-editorial-italic text-3xl sm:text-4xl text-black/40 group-hover:text-black transition-colors">
                              {project.title} System Model
                            </span>
                            <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                              Inspect Blueprint ↗
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </FadeIn>
                <LineReveal className="mt-20" />
              </div>
            );
          })}
        </div>
      </Container>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative w-full max-w-4xl bg-white text-black p-8 sm:p-12 border border-black/10 z-10 overflow-y-auto max-h-[90vh] shadow-2xl space-y-8"
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ duration: 0.4, ease }}
            >
              <div className="flex justify-between items-start pb-6 border-b border-black/10">
                <div>
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block mb-1">
                    PROJECT // {selectedProject.id}
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-mono-tech text-xs uppercase tracking-widest px-4 py-2 border border-black/20 hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="aspect-[16/9] w-full bg-black/[0.02] border border-black/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <span className="font-editorial-italic text-3xl text-black/40">
                  {selectedProject.title} Architectural Prototype View
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block">Category & Scope</span>
                  <p className="font-mono-tech text-sm">{selectedProject.category}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block">Year of Delivery</span>
                  <p className="font-mono-tech text-sm">{selectedProject.year}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block">Stack & Tech</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono-tech px-2 py-0.5 border border-black/15">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/10">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40 block">Detailed System Overview</span>
                <p className="text-base text-black/70 font-light leading-relaxed">
                  {selectedProject.description} This system was engineered with an unyielding commitment to performance, zero layout shift, and intuitive architectural primitives. Every query path and user touchpoint underwent rigorous load testing and spatial refinement.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
