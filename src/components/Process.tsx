import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HandDrawnSquiggle } from './FloatingDecorations';

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs text-[#A3E635] tracking-wider">
              05 · WORKFLOW
            </span>
            <HandDrawnSquiggle className="w-16 h-4 text-[#06B6D4]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            HOW I BUILD
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A clear, four-stage engineering process from initial sketch to final deployment.
          </p>
        </div>

        {/* 4-Step Connected Process Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Desktop horizontal connecting line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-[#A3E635]/60 via-[#8B5CF6]/60 to-[#06B6D4]/60 z-0"
          />

          {PORTFOLIO_DATA.processSteps.map((item) => {
            const accentColor =
              item.accent === 'lime'
                ? 'text-[#A3E635] border-[#A3E635]/50'
                : item.accent === 'purple'
                ? 'text-[#8B5CF6] border-[#8B5CF6]/50'
                : 'text-[#06B6D4] border-[#06B6D4]/50';

            return (
              <div
                key={item.step}
                className="relative z-10 rounded-2xl bg-[#0D1017] border border-white/10 hover:border-white/25 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Number Node */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-[#08090D] border ${accentColor} font-mono text-base font-bold flex items-center justify-center mb-6 tabular-nums shadow-md`}
                  >
                    {item.step}
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-white tracking-tight">
                    {item.step} — {item.title}
                  </h3>

                  <p className="mt-2.5 text-slate-200 font-medium text-sm sm:text-base leading-snug">
                    {item.description}
                  </p>

                  <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-500">
                  <span>STEP {item.step} / 04</span>
                  <span className="text-[#A3E635]">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
