import React, { Suspense, lazy, useEffect, useState } from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import LoadingScreen from './components/sections/LoadingScreen';
import Navbar from './components/layout/Navbar';

// ── Critical above-the-fold sections: eager load ──────────────────────────
import Hero from './components/sections/Hero';
import About from './components/sections/About';

// ── Below-the-fold sections: lazy load (deferred until needed) ────────────
// Each creates its own JS chunk — fetched in parallel as user scrolls down.
const Projects    = lazy(() => import('./components/sections/Projects'));
const RollOfHonor = lazy(() => import('./components/sections/RollOfHonor'));
const Expertise   = lazy(() => import('./components/sections/Expertise'));
const GitHub      = lazy(() => import('./components/sections/GitHub'));
const LifeInFrames = lazy(() => import('./components/sections/LifeInFrames'));
const Contact     = lazy(() => import('./components/sections/Contact'));

// Minimal inline fallback — invisible placeholder, preserves scroll rhythm
function SectionFallback() {
  return <div aria-hidden="true" style={{ minHeight: '100px' }} />;
}

export default function App() {
  // Prefetch remaining lazy chunks after initial paint settles
  useEffect(() => {
    const prefetch = () => {
      import('./components/sections/Projects');
      import('./components/sections/RollOfHonor');
      import('./components/sections/Expertise');
      import('./components/sections/GitHub');
      import('./components/sections/LifeInFrames');
      import('./components/sections/Contact');
    };
    // Use requestIdleCallback to not block paint — fallback for Safari
    if ('requestIdleCallback' in window) {
      requestIdleCallback(prefetch, { timeout: 2000 });
    } else {
      setTimeout(prefetch, 2000);
    }
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-white/80 text-black min-h-screen selection:bg-black selection:text-white relative">
        {/* Repeating particle mesh background — lazy via native browser lazy loading */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/assets/bg-particle-mesh.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* 1.4s Cinematic Intro Reveal */}
        <LoadingScreen />

        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-[2]">
          {/* Critical path: Hero + About are eager-loaded */}
          <Hero />
          <About />

          {/* Below-fold: each section deferred independently */}
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <RollOfHonor />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Expertise />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <GitHub />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <LifeInFrames />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </SmoothScroll>
  );
}
