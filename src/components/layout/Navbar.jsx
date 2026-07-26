import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ease } from '../../lib/animations';
import { SITE } from '../../lib/constants';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Life', href: '#frames' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Clock updating loop
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for background blur & active section tracker
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.replace('#', ''));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-black/10 shadow-sm'
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.3 }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 h-full flex items-center justify-between">
          {/* Logo & Availability Status */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-display text-xl sm:text-2xl tracking-tight text-black hover:opacity-60 transition-opacity"
            >
              {SITE.name}
            </a>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-black/5 border border-black/10 rounded-full text-[10px] font-mono-tech uppercase tracking-wider text-black/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Select Commissions</span>
            </div>
          </div>

          {/* Desktop Nav Links & Clock */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xs uppercase tracking-widest transition-colors py-2 relative group ${
                      isActive ? 'text-black font-semibold' : 'text-black/50 hover:text-black'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="pl-6 border-l border-black/10 text-[11px] font-mono-tech text-black/35">
              {currentTime}
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              className="w-6 h-[1.5px] bg-black block origin-center"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4.5 : 0 }}
              transition={{ duration: 0.3, ease }}
            />
            <motion.span
              className="w-6 h-[1.5px] bg-black block origin-center"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-[1.5px] bg-black block origin-center"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4.5 : 0 }}
              transition={{ duration: 0.3, ease }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white text-black z-40 flex flex-col justify-between p-10 md:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="pt-20 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display text-4xl sm:text-5xl text-black hover:italic transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 + 0.2, ease }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-black/10 flex justify-between items-center text-xs text-black/40 font-mono-tech tracking-widest uppercase">
              <span>{SITE.role}</span>
              <span>{currentTime}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
