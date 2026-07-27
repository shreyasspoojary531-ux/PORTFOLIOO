import React, { useState } from 'react';
import { CONTACT, SITE } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';
import LineReveal from '../animations/LineReveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Section id="contact" className="bg-white/80 text-black border-t border-black/10">
      <Container>
        <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-6">
          06 / Initiate Conversation
        </span>

        <div className="mb-10 sm:mb-16 max-w-4xl pb-4">
          <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.05]">
            {CONTACT.headline}
          </h2>
        </div>

        <FadeIn delay={0.2} className="mb-20">
          <div className="inline-block relative">
            <button
              onClick={handleCopyEmail}
              className="text-left font-mono-tech text-xl sm:text-4xl lg:text-5xl text-black md:hover:opacity-50 border-b-2 border-black pb-2 transition-opacity focus:outline-none cursor-pointer"
            >
              {CONTACT.email}
            </button>

            {copied && (
              <span className="absolute -top-10 left-0 bg-black text-white font-mono-tech text-xs uppercase tracking-widest px-3 py-1 animate-bounce">
                ✓ Copied to Clipboard
              </span>
            )}
          </div>
        </FadeIn>

        <div className="py-12 border-t border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-black/40">
            Network & Portfolio Links
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {CONTACT.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="font-mono-tech text-xs uppercase tracking-widest text-black/60 md:hover:text-black md:hover:underline underline-offset-4 transition-all"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <LineReveal className="my-8" />

        <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono-tech text-black/40 uppercase tracking-widest gap-4">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>Handcrafted with React, Tailwind v4 & Lenis</div>
        </div>
      </Container>
    </Section>
  );
}
