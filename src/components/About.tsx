import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { UdayveerPortrait } from './UdayveerPortrait';
import { HandDrawnSquiggle, HandDrawnUnderline } from './FloatingDecorations';

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Container */}
        <div className="rounded-3xl bg-[#0D1017] border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle corner accent */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#8B5CF6]/15 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Second Portrait Composition */}
            <div className="lg:col-span-5">
              <UdayveerPortrait variant="about" />
            </div>

            {/* Right Column: Story & Personality */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[#A3E635] tracking-wider">
                    01 · INTRODUCTION
                  </span>
                  <HandDrawnSquiggle className="w-16 h-4 text-[#8B5CF6]" />
                </div>
                <div className="inline-block">
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {PORTFOLIO_DATA.personal.aboutHeading}
                  </h2>
                  <HandDrawnUnderline className="w-full h-3 text-[#A3E635] mt-0.5" />
                </div>
                <p className="mt-3 font-display text-lg sm:text-xl font-bold text-[#06B6D4] tracking-tight">
                  {PORTFOLIO_DATA.personal.aboutSubheading}
                </p>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {PORTFOLIO_DATA.personal.aboutParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Expandable Extended Bio */}
              {expanded && (
                <div className="pt-2 pb-1 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-[#A3E635] pl-4 bg-white/[0.02] rounded-r-xl py-3">
                  {PORTFOLIO_DATA.personal.extendedAbout.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                  <div className="pt-1 font-mono text-xs text-slate-400">
                    Location: {PORTFOLIO_DATA.personal.location} · Age: {PORTFOLIO_DATA.personal.age} · Focus: Web &amp; Game Engineering
                  </div>
                </div>
              )}

              {/* More About Me Button + Let's Talk Link */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#8B5CF6]/50 text-white text-sm font-semibold btn-cyber-ghost inline-flex items-center gap-2 cursor-pointer whitespace-nowrap group"
                >
                  <span>{expanded ? 'Show Less' : 'More About Me'}</span>
                  {expanded ? (
                    <ChevronUp className="w-4 h-4 text-[#A3E635]" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-[#A3E635] transition-transform duration-150 group-hover:translate-x-1" />
                  )}
                </button>

                <a
                  href="#contact"
                  className="text-sm font-semibold text-slate-300 hover:text-[#A3E635] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 5 Personality Points */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 mb-3">
                  CORE DEVELOPER DNA
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {PORTFOLIO_DATA.personal.personalityTraits.map((trait) => {
                    const borderHover =
                      trait.accent === 'lime'
                        ? 'hover:border-[#A3E635]/60'
                        : trait.accent === 'purple'
                        ? 'hover:border-[#8B5CF6]/60'
                        : 'hover:border-[#06B6D4]/60';
                    const textAccent =
                      trait.accent === 'lime'
                        ? 'text-[#A3E635]'
                        : trait.accent === 'purple'
                        ? 'text-[#8B5CF6]'
                        : 'text-[#06B6D4]';

                    return (
                      <div
                        key={trait.label}
                        className={`p-3 rounded-xl bg-[#08090D]/80 border border-white/10 ${borderHover} transition-all duration-150 hover:-translate-y-0.5`}
                      >
                        <div className={`font-display text-xs font-extrabold uppercase tracking-wider ${textAccent}`}>
                          {trait.label}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {trait.detail}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
