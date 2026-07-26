import React from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import LoadingScreen from './components/sections/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import GitHub from './components/sections/GitHub';
import Expertise from './components/sections/Expertise';
import LifeInFrames from './components/sections/LifeInFrames';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <SmoothScroll>
      <div className="bg-white/80 text-black min-h-screen selection:bg-black selection:text-white relative">
        {/* Repeating particle mesh background — 80% opacity, tiles as page grows */}
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
          <Hero />
          <About />
          <Projects />
          <GitHub />
          <Expertise />
          <LifeInFrames />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}
