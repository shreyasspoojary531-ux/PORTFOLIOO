import React from 'react';
import { PROJECTS } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';
import LineReveal from '../animations/LineReveal';
import ShinyText from '../ui/ShinyText';

export default function Projects() {
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
              <ShinyText text="Featured Systems & Products" speed={2} delay={3} color="#000000" shineColor="#9a9a9a" spread={55} direction="left" yoyo={false} pauseOnHover={false} disabled={false} />
            </h2>
          </div>
          <p className="text-xs font-mono-tech uppercase tracking-widest text-black/40">
            [ Direct Source Code & Live Links ]
          </p>
        </div>

        {/* Projects Showcase with Alternating Editorial Layouts */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.id} className="group">
                <FadeIn>
                  {index === 0 ? (
                    /* Layout 1: Full-width Horizontal Showcase */
                    <div className="space-y-8">
                      <div className="relative overflow-hidden bg-black/[0.02] border border-black/10 aspect-[16/9] w-full md:group-hover:border-black transition-colors duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                        <div className="absolute top-6 left-6 font-mono-tech text-xs tracking-widest uppercase text-black/40">
                          PROJECT // {project.id} — {project.category}
                        </div>
                        <div className="absolute top-6 right-6 font-mono-tech text-xs tracking-widest uppercase text-black/40">
                          {project.year}
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                          <span className="font-editorial-italic text-4xl sm:text-6xl text-black">
                            {project.title}
                          </span>
                          <span className="font-mono-tech text-xs uppercase tracking-widest text-black/50">
                            {project.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
                        <div className="md:col-span-4 space-y-2">
                          <h3 className="font-display text-3xl sm:text-4xl tracking-tight leading-tight">
                            {project.title}
                          </h3>
                          <span className="font-mono-tech text-xs uppercase tracking-widest text-black/50 block">
                            {project.subtitle}
                          </span>
                        </div>
                        <div className="md:col-span-8 space-y-6">
                          <p className="text-black/70 font-light text-base leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 bg-black/5 text-black/70 border border-black/10">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons: View Live & View GitHub Repo */}
                          <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                              href={project.liveUrl !== '#' ? project.liveUrl : '#'}
                              target={project.liveUrl !== '#' ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                if (project.liveUrl === '#') {
                                  e.preventDefault();
                                  alert(`Live link for ${project.title} will be updated soon.`);
                                }
                              }}
                              className="font-mono-tech text-xs uppercase tracking-widest px-5 py-2.5 bg-black text-white hover:bg-black/80 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            >
                              <span>View Live</span>
                              <span>↗</span>
                            </a>

                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono-tech text-xs uppercase tracking-widest px-5 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                              <span>View GitHub Repo</span>
                              <span>↗</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : isEven ? (
                    /* Layout 2: Split 60/40 Visual Left */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-7">
                        <div className="relative overflow-hidden bg-black/[0.02] border border-black/10 aspect-[4/3] w-full md:group-hover:border-black transition-colors duration-500">
                          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                          <div className="absolute top-6 left-6 font-mono-tech text-xs tracking-widest uppercase text-black/40">
                            PROJECT // {project.id}
                          </div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                            <span className="font-editorial-italic text-3xl sm:text-5xl text-black">
                              {project.title}
                            </span>
                            <span className="font-mono-tech text-xs uppercase tracking-widest text-black/50">
                              {project.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 space-y-6 py-2">
                        <span className="text-xs uppercase tracking-widest font-mono-tech text-black/40 block">
                          {project.category} — {project.year}
                        </span>
                        <h3 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-black/70 font-light text-base leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 border border-black/15 text-black/70">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons: View Live & View GitHub Repo */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                          <a
                            href={project.liveUrl !== '#' ? project.liveUrl : '#'}
                            target={project.liveUrl !== '#' ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (project.liveUrl === '#') {
                                e.preventDefault();
                                alert(`Live link for ${project.title} will be updated soon.`);
                              }
                            }}
                            className="font-mono-tech text-xs uppercase tracking-widest px-5 py-2.5 bg-black text-white hover:bg-black/80 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                          >
                            <span>View Live</span>
                            <span>↗</span>
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono-tech text-xs uppercase tracking-widest px-5 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
                          >
                            <span>View GitHub Repo</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Layout 3: Reverse Split 40/60 Details Left */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 py-2">
                        <span className="text-xs uppercase tracking-widest font-mono-tech text-black/40 block">
                          {project.category} — {project.year}
                        </span>
                        <h3 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-black/70 font-light text-base leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 border border-black/15 text-black/70">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons: View Live & View GitHub Repo */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                          <a
                            href={project.liveUrl !== '#' ? project.liveUrl : '#'}
                            target={project.liveUrl !== '#' ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (project.liveUrl === '#') {
                                e.preventDefault();
                                alert(`Live link for ${project.title} will be updated soon.`);
                              }
                            }}
                            className="font-mono-tech text-xs uppercase tracking-widest px-5 py-2.5 bg-black text-white hover:bg-black/80 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                          >
                            <span>View Live</span>
                            <span>↗</span>
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono-tech text-xs uppercase tracking-widest px-5 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
                          >
                            <span>View GitHub Repo</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </div>

                      <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative overflow-hidden bg-black/[0.02] border border-black/10 aspect-[16/9] w-full md:group-hover:border-black transition-colors duration-500">
                          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
                          <div className="absolute top-6 left-6 font-mono-tech text-xs tracking-widest uppercase text-black/40">
                            PROJECT // {project.id}
                          </div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                            <span className="font-editorial-italic text-3xl sm:text-5xl text-black">
                              {project.title}
                            </span>
                            <span className="font-mono-tech text-xs uppercase tracking-widest text-black/50">
                              {project.subtitle}
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

        {/* GitHub Callout CTA at the end of Projects */}
        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-col items-center justify-center text-center space-y-6">
            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-black/50 block">
              Open Source Architecture & Repositories
            </span>
            <h3 className="font-display text-3xl sm:text-5xl text-black tracking-tight max-w-2xl leading-tight">
              <ShinyText text="Explore More Repositories & Experimental Systems" speed={2} delay={3} color="#000000" shineColor="#9a9a9a" spread={55} direction="left" yoyo={false} pauseOnHover={false} disabled={false} />
            </h3>
            <a
              href="https://github.com/shreyasspoojary531-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-tech text-xs uppercase tracking-widest px-8 py-4 bg-black text-white md:hover:bg-black/80 transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-md"
            >
              <span>View More Projects on GitHub</span>
              <span className="text-base md:group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
