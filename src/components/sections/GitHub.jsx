import React from 'react';
import { GITHUB } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';

export default function GitHub() {
  return (
    <Section id="github" className="bg-white/80 text-black border-t border-black/10">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-black/10 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-3">
              03 / Open Source Repositories
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              GitHub Repositories & Activity
            </h2>
          </div>
          <a
            href={`https://github.com/${GITHUB.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-tech text-xs uppercase tracking-widest text-black border border-black/20 px-4 py-2.5 hover:bg-black hover:text-white transition-colors flex items-center gap-2"
          >
            View More Projects ↗
          </a>
        </div>

        {/* GitHub Profile Banner Card */}
        <div className="mb-12 p-6 sm:p-8 border border-black/15 bg-white flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 shadow-xs">
          <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-black/20 shadow-md">
            <img
              src="/assets/github_avatar.png"
              alt="SHREYAS GitHub Avatar"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="112"
              height="112"
            />
          </div>
          <div className="space-y-3 text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-black font-semibold">SHREYAS</h3>
                <p className="font-mono-tech text-xs text-black/50">shreyasspoojary531-ux</p>
              </div>
              <a
                href={`https://github.com/${GITHUB.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-xs uppercase tracking-widest text-black border border-black/20 px-4 py-2 hover:bg-black hover:text-white transition-colors self-center sm:self-auto"
              >
                View Profile ↗
              </a>
            </div>
            <p className="font-editorial-italic text-sm sm:text-base text-black/80">
              "AS LONG AS I'M ALIVE , THERE ARE INFINITE CHANCES"
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 font-mono-tech text-[10px] sm:text-xs uppercase tracking-wider text-black/50 flex-wrap pt-1">
              <span>📍 Mangalore</span>
              <span>•</span>
              <span>🏢 Aquavern Technologies</span>
              <span>•</span>
              <span>⚡ 154+ Contributions</span>
            </div>
          </div>
        </div>

        {/* Featured Source Repositories (Displayed exclusively on Desktop/Laptop screens) */}
        <div className="hidden md:block">
          <h3 className="font-mono-tech text-xs uppercase tracking-widest text-black/50 mb-8">
            Featured Source Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GITHUB.pinnedRepos.map((repo, idx) => (
              <FadeIn key={repo.name} delay={idx * 0.1}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black/10 p-8 flex flex-col justify-between h-full md:hover:border-black md:hover:shadow-lg transition-all duration-300 group block bg-white"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono-tech text-lg font-medium md:group-hover:underline">
                        {repo.name}
                      </h4>
                      <span className="text-xs text-black/40 font-mono-tech md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-transform">
                        ↗
                      </span>
                    </div>
                    <p className="text-sm text-black/70 font-light leading-relaxed">
                      {repo.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono-tech text-black/50">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-black block" />
                      {repo.language}
                    </span>
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider text-black/40">
                      View Code ↗
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
