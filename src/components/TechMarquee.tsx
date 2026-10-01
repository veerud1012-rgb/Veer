import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function TechMarquee() {
  const items = [...PORTFOLIO_DATA.techMarquee, ...PORTFOLIO_DATA.techMarquee];

  return (
    <div
      aria-label="Technologies Marquee"
      className="relative py-6 bg-[#0D1017] border-y border-white/10 overflow-hidden select-none"
    >
      {/* Left and Right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#08090D] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#08090D] to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-10">
        {items.map((tech, index) => (
          <div key={`${tech}-${index}`} className="flex items-center gap-10 shrink-0">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-300 hover:text-[#A3E635] transition-colors whitespace-nowrap">
              {tech}
            </span>
            <span aria-hidden="true" className="text-[#8B5CF6] font-mono text-sm">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
