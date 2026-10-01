import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Sparkles, Mail, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', num: '01', label: 'Home', alwaysVisible: true },
  { id: 'about', num: '02', label: 'About', alwaysVisible: true },
  { id: 'services', num: '03', label: 'Services', alwaysVisible: true },
  { id: 'projects', num: '04', label: 'Projects', alwaysVisible: true },
  { id: 'skills', num: '05', label: 'Skills', alwaysVisible: true },
  { id: 'process', num: '06', label: 'Process', alwaysVisible: false },
  { id: 'contact', num: '07', label: 'Contact', alwaysVisible: false },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      e.preventDefault();
      setEasterEggVisible(true);
      setLogoClicks(0);
      setTimeout(() => setEasterEggVisible(false), 5500);
    }
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#08090D]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.55)]'
            : 'py-5 bg-[#08090D]/55 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-[#A3E635] transition-colors whitespace-nowrap shrink-0"
          >
            UDAYVEER<span className="text-[#A3E635]">.</span>
          </a>

          {/* Zone 2: Clean text navigation links with animated active underline */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`${
                    item.alwaysVisible ? 'flex' : 'hidden xl:flex'
                  } relative py-1 transition-colors whitespace-nowrap group ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#A3E635] via-[#06B6D4] to-[#8B5CF6] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Special 3-Lines Animated Menu Button on the Right */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs sm:text-sm font-semibold btn-cyber-purple whitespace-nowrap shrink-0 group"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* SPECIAL ANIMATED 3-LINES MENU BUTTON */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              onMouseEnter={() => setMenuHovered(true)}
              onMouseLeave={() => setMenuHovered(false)}
              whileTap={{ scale: 0.9 }}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className={`relative w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden transition-colors duration-300 ${
                menuOpen
                  ? 'bg-[#121723] border border-[#A3E635] shadow-[0_0_24px_rgba(163,230,53,0.4)]'
                  : 'bg-[#0D1017]/90 border border-white/15 hover:border-[#A3E635]/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.28)]'
              }`}
            >
              {/* Spinning orbital corner glow when hovered or open */}
              <motion.span
                aria-hidden="true"
                animate={{
                  rotate: menuOpen ? 180 : menuHovered ? 90 : 0,
                  opacity: menuOpen || menuHovered ? 1 : 0,
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-[#A3E635]/20 via-transparent to-[#8B5CF6]/25"
              />

              {/* 3 Morphing Cyber Lines Container */}
              <motion.div
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative z-10 w-5 h-4 flex flex-col justify-between items-end"
              >
                {/* Line 1: Top bar (Morphs to +45deg lime blade) */}
                <motion.span
                  animate={
                    menuOpen
                      ? { y: 7, rotate: 45, width: '20px', backgroundColor: '#A3E635' }
                      : menuHovered
                      ? { y: 0, rotate: 0, width: '16px', backgroundColor: '#A3E635' }
                      : { y: 0, rotate: 0, width: '20px', backgroundColor: '#F8FAFC' }
                  }
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  className="h-[2.2px] rounded-full block origin-center shadow-[0_0_8px_rgba(163,230,53,0.6)]"
                />

                {/* Line 2: Middle asymmetric bar with glowing cyber spark dot */}
                <div className="w-full flex items-center justify-between">
                  <motion.span
                    animate={
                      menuOpen
                        ? { scale: 0, opacity: 0, x: -8 }
                        : menuHovered
                        ? { scale: 1.35, opacity: 1, x: 0, backgroundColor: '#A3E635' }
                        : { scale: 1, opacity: 0.9, x: 0, backgroundColor: '#06B6D4' }
                    }
                    transition={{ duration: 0.22 }}
                    className="w-1.5 h-1.5 rounded-full block shadow-[0_0_6px_#06B6D4]"
                  />
                  <motion.span
                    animate={
                      menuOpen
                        ? { scaleX: 0, opacity: 0, x: 10 }
                        : menuHovered
                        ? { scaleX: 1, opacity: 1, width: '14px', backgroundColor: '#06B6D4' }
                        : { scaleX: 1, opacity: 1, width: '11px', backgroundColor: '#06B6D4' }
                    }
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="h-[2.2px] rounded-full block origin-right"
                  />
                </div>

                {/* Line 3: Bottom bar (Morphs to -45deg cyan/purple blade) */}
                <motion.span
                  animate={
                    menuOpen
                      ? { y: -7, rotate: -45, width: '20px', backgroundColor: '#06B6D4' }
                      : menuHovered
                      ? { y: 0, rotate: 0, width: '20px', backgroundColor: '#8B5CF6' }
                      : { y: 0, rotate: 0, width: '15px', backgroundColor: '#F8FAFC' }
                  }
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  className="h-[2.2px] rounded-full block origin-center shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Subtle Developer Easter Egg Notification (5 clicks on logo) */}
      {easterEggVisible && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0D1017] border border-[#A3E635]/50 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 animate-bounce">
          <Terminal className="w-4 h-4 text-[#A3E635] shrink-0" />
          <div className="font-mono text-xs">
            <p className="text-[#A3E635] font-semibold">01001001 01000100 · DEV MODE UNLOCKED</p>
            <p className="text-slate-300">Udayveer.ship(&apos;Website&apos;, &#123; days: 5 &#125;);</p>
          </div>
        </div>
      )}

      {/* SPECIAL ANIMATED RIGHT SLIDE-OVER COMMAND MENU */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-40">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />

            {/* Right Slide-Over Drawer Panel */}
            <motion.aside
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              aria-label="Quick Navigation Drawer"
              className="fixed top-16 sm:top-20 right-3 sm:right-6 bottom-4 w-[calc(100vw-24px)] max-w-sm bg-[#0D1017]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#A3E635]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>NAVIGATION HUB</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">5-DAY DELIVERY</span>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="mt-4 flex flex-col gap-1.5">
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{
                          delay: 0.04 * idx,
                          type: 'spring',
                          stiffness: 300,
                          damping: 24,
                        }}
                        onClick={() => scrollToSection(item.id)}
                        className={`group w-full text-left px-4 py-3 rounded-2xl font-display font-bold text-base sm:text-lg transition-all duration-150 flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-[#A3E635]/20 via-[#8B5CF6]/10 to-transparent border border-[#A3E635]/40 text-[#A3E635]'
                            : 'text-slate-200 hover:bg-white/5 hover:text-white border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-slate-500 group-hover:text-[#06B6D4] tabular-nums">
                            {item.num}
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-150">
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 transition-all duration-150 ${
                            isActive
                              ? 'text-[#A3E635] translate-x-0 opacity-100'
                              : 'text-slate-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#A3E635]'
                          }`}
                        />
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer: Direct Contact + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.3 }}
                className="pt-4 mt-4 border-t border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="hover:text-[#A3E635] transition-colors inline-flex items-center gap-1.5 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#A3E635]" />
                    <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                  </a>
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href="https://x.com/Udayveer1012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#06B6D4] transition-colors inline-flex items-center gap-1"
                    >
                      <Twitter className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span>@Udayveer1012</span>
                    </a>
                    <a
                      href="https://discord.gg/3r46nyMDQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8B5CF6] transition-colors"
                    >
                      Discord ↗
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#A3E635] text-[#08090D] font-bold text-sm flex items-center justify-center gap-2 btn-cyber-lime cursor-pointer group"
                >
                  <span>Start a Project Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
