import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HandDrawnCrown, HandDrawnLightning, HandDrawnStar } from './FloatingDecorations';

interface UdayveerPortraitProps {
  variant: 'hero' | 'about' | 'cta';
  mouseOffset?: { x: number; y: number };
}

export function UdayveerPortrait({ variant, mouseOffset = { x: 0, y: 0 } }: UdayveerPortraitProps) {
  const [imgError, setImgError] = useState(false);
  const portraitSrc = PORTFOLIO_DATA.personal.portraitUrl;

  if (variant === 'about') {
    return (
      <div className="relative group mx-auto max-w-sm">
        {/* Decorative background offset frame */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#A3E635]/25 via-[#8B5CF6]/20 to-[#06B6D4]/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative rounded-2xl bg-[#0D1017] border border-white/10 overflow-hidden shadow-2xl">
          {/* Top bar studio accent */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#08090D]/80">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
              <span>UDAYVEER · INDIA</span>
            </div>
            <span className="text-xs font-mono text-[#A3E635]">WEB &amp; GAME DEV</span>
          </div>

          {/* Portrait Canvas Area */}
          <div className="relative aspect-square bg-gradient-to-b from-[#131824] via-[#0D1017] to-[#08090D] flex items-end justify-center overflow-hidden">
            {/* Rim glow behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#8B5CF6]/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-[#A3E635]/20 blur-2xl pointer-events-none" />

            {!imgError ? (
              <img
                src={portraitSrc}
                alt="Udayveer — Website and Game Developer"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="relative z-10 w-full h-full object-cover object-top drop-shadow-[0_0_25px_rgba(163,230,53,0.25)] transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="relative z-10 w-full h-full flex items-center justify-center p-6 text-center">
                <span className="font-display text-2xl font-bold text-white">UDAYVEER</span>
              </div>
            )}

            {/* Subtle bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08090D] to-transparent z-20 pointer-events-none" />

            {/* Hand-drawn scribble note overlay inspired by Reference Image 1 */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-none bg-[#08090D]/75 backdrop-blur-sm px-2.5 py-1 rounded-xl border border-white/10">
              <span className="font-hand text-base sm:text-xl text-[#A3E635] leading-none block -rotate-3">
                Same Person,
              </span>
              <span className="font-hand text-base sm:text-xl text-white leading-none block -rotate-1">
                Big Ideas ⚡
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-[#0D1017] border border-white/15 overflow-hidden shadow-xl shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#A3E635]/20 via-transparent to-[#8B5CF6]/25" />
        {!imgError ? (
          <img
            src={portraitSrc}
            alt="Udayveer"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="relative z-10 w-full h-full object-cover object-top"
          />
        ) : (
          <div className="relative z-10 w-full h-full flex items-center justify-center font-display font-bold text-white text-sm">
            UV
          </div>
        )}
      </div>
    );
  }

  // HERO VARIANT — Responsive for both Mobile (right of upper content) and Desktop
  const parallaxX = mouseOffset.x * 12;
  const parallaxY = mouseOffset.y * 12;

  return (
    <div className="relative w-full max-w-[460px] ml-auto select-none">
      {/* Ambient Multi-Color Rim Glows */}
      <div
        className="absolute -top-4 -left-4 w-32 h-32 sm:w-60 sm:h-60 rounded-full bg-[#A3E635]/20 blur-2xl sm:blur-3xl pointer-events-none animate-pulse-glow"
        style={{ transform: `translate3d(${-parallaxX * 0.6}px, ${-parallaxY * 0.6}px, 0)` }}
      />
      <div
        className="absolute top-8 -right-4 w-36 h-36 sm:w-64 sm:h-64 rounded-full bg-[#8B5CF6]/25 blur-2xl sm:blur-3xl pointer-events-none animate-pulse-glow"
        style={{ transform: `translate3d(${parallaxX * 0.8}px, ${parallaxY * 0.8}px, 0)` }}
      />
      <div className="absolute -bottom-6 left-1/3 w-32 h-32 sm:w-56 sm:h-56 rounded-full bg-[#06B6D4]/20 blur-2xl sm:blur-3xl pointer-events-none" />

      {/* Hand-drawn decorative accents around the portrait */}
      <div
        className="absolute -top-5 left-3 sm:-top-7 sm:left-8 z-20 pointer-events-none animate-float-slow"
        style={{ transform: `translate3d(${parallaxX * 0.5}px, ${parallaxY * 0.5}px, 0)` }}
      >
        <HandDrawnCrown className="w-7 h-7 sm:w-12 sm:h-12 text-[#FACC15] -rotate-12" />
      </div>

      <div
        className="absolute top-10 -right-2 sm:top-16 sm:-right-4 z-20 pointer-events-none animate-float-slow"
        style={{ transform: `translate3d(${-parallaxX * 0.7}px, ${parallaxY * 0.4}px, 0)` }}
      >
        <HandDrawnLightning className="w-6 h-8 sm:w-9 sm:h-11 text-[#A3E635] rotate-12" />
      </div>

      <div className="absolute bottom-24 -left-5 z-20 pointer-events-none hidden sm:block">
        <HandDrawnStar className="w-8 h-8 text-[#06B6D4] -rotate-12" />
      </div>

      {/* Speech Bubble Callout inspired by Reference Image 1 */}
      <div
        className="hidden sm:block absolute -top-4 right-4 z-30 bg-[#0D1017]/95 backdrop-blur-md border border-[#06B6D4]/40 rounded-2xl px-3.5 py-2 shadow-lg"
        style={{ transform: `translate3d(${parallaxX * 0.4}px, ${parallaxY * 0.4}px, 0)` }}
      >
        <p className="font-hand text-base lg:text-lg font-bold text-[#06B6D4] leading-tight">
          LET’S BUILD SOMETHING AWESOME!
        </p>
      </div>

      {/* Main Portrait Stage */}
      <div
        className="relative z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#111520]/90 via-[#0D1017]/95 to-[#08090D] border border-white/15 overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.75)] transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${parallaxX * 0.35}px, ${parallaxY * 0.35}px, 0)`,
        }}
      >
        {/* Subtle inner rim border */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none z-20" />

        {/* Top subtle developer bar (compact on mobile, full on desktop) */}
        <div className="relative z-30 flex items-center justify-between px-2.5 py-1.5 sm:px-4 sm:py-2.5 border-b border-white/10 bg-[#08090D]/80 backdrop-blur-sm">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-slate-300">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A3E635]" />
            <span className="truncate">UDAYVEER</span>
          </div>
          <span className="font-mono text-[9px] sm:text-[11px] text-[#06B6D4] hidden xs:inline">
            WEB · GAME DEV
          </span>
        </div>

        {/* Portrait Visual Container */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full flex items-end justify-center overflow-hidden bg-subtle-grid">
          {/* Rim lighting backdrop behind silhouette */}
          <div className="absolute inset-x-4 top-6 bottom-0 rounded-full bg-gradient-to-tr from-[#A3E635]/20 via-[#8B5CF6]/25 to-[#06B6D4]/25 blur-2xl pointer-events-none" />

          {/* Floating background developer labels on larger viewports */}
          <div className="hidden sm:block absolute top-4 left-4 z-20 font-mono text-[11px] text-slate-200/90 bg-[#08090D]/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
            <span>WEB · 2D GAME DEV</span>
          </div>
          <div className="hidden sm:block absolute top-12 right-4 z-20 font-mono text-[11px] text-[#A3E635] bg-[#08090D]/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#A3E635]/20">
            <span>BUILD · CREATE · SHIP</span>
          </div>

          {!imgError ? (
            <img
              src={portraitSrc}
              alt="Udayveer — Website & Game Developer"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="relative z-10 w-full h-full object-cover object-top drop-shadow-[0_-6px_28px_rgba(6,182,212,0.3)]"
            />
          ) : (
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4 text-center">
              <span className="font-display text-lg sm:text-2xl font-bold text-white">UDAYVEER</span>
            </div>
          )}

          {/* Subtle Neon Rim Glow Overlay */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#A3E635]/20 z-20" />

          {/* Bottom gradient contrast scrim */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-28 bg-gradient-to-t from-[#08090D] via-[#08090D]/60 to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      {/* Floating Developer Code Card near the portrait (Desktop overlay) */}
      <div
        className="hidden sm:block sm:absolute sm:-bottom-6 sm:-left-8 z-30 bg-[#0D1017]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 lg:p-4 shadow-2xl max-w-xs transition-transform duration-200"
        style={{
          transform: `translate3d(${-parallaxX * 0.5}px, ${-parallaxY * 0.5}px, 0)`,
        }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
          </div>
          <span className="font-mono text-[10px] text-slate-400">udayveer.ts</span>
        </div>
        <pre className="font-mono text-[11px] lg:text-xs leading-relaxed text-slate-200 overflow-x-auto">
          <code>
            <span className="text-[#8B5CF6]">const</span> idea ={' '}
            <span className="text-[#06B6D4]">creativity</span>;{'\n'}
            <span className="text-[#8B5CF6]">const</span> result ={' '}
            <span className="text-[#A3E635]">Udayveer</span>.build(idea);
          </code>
        </pre>
      </div>

      {/* Hand-drawn side note inspired by Reference Image 1 */}
      <div className="hidden xl:block absolute -right-10 bottom-10 z-30 pointer-events-none rotate-6">
        <p className="font-hand text-2xl text-slate-200 leading-tight">
          Ideas to Reality <span className="text-[#A3E635]">&lt;/&gt;</span>
        </p>
      </div>
    </div>
  );
}
