import React, { useState } from 'react';
import { ArrowRight, Zap, CheckCircle2, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HandDrawnLightning } from './FloatingDecorations';

export function FiveDayTimeline() {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  const activeDay = PORTFOLIO_DATA.fiveDayTimeline[selectedDayIndex];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#111722] via-[#0D1017] to-[#130F24] border border-[#A3E635]/30 p-7 sm:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#A3E635]/10 blur-3xl" />

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A3E635] mb-3">
                <Zap className="w-4 h-4" />
                <span>SIGNATURE SERVICE PROMISE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                FROM IDEA TO LIVE WEBSITE IN{' '}
                <span className="text-[#A3E635]">5 DAYS.</span>
              </h2>
              <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
                Need a professional website quickly? My streamlined development process is designed for fast delivery without sacrificing quality.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-[#A3E635] hover:bg-[#b5f24c] text-[#08090D] font-bold text-sm sm:text-base btn-cyber-lime shadow-[0_0_25px_rgba(163,230,53,0.3)] inline-flex items-center gap-2 whitespace-nowrap group"
              >
                <span>Start My Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>

          {/* 5-Day Interactive Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PORTFOLIO_DATA.fiveDayTimeline.map((item, idx) => {
              const isSelected = idx === selectedDayIndex;
              return (
                <button
                  key={item.day}
                  type="button"
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`text-left rounded-2xl p-5 transition-all duration-150 border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#08090D] border-[#A3E635] shadow-[0_0_24px_rgba(163,230,53,0.18)] -translate-y-1'
                      : 'bg-[#08090D]/60 border-white/10 hover:border-white/25'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-bold tabular-nums ${
                          isSelected ? 'text-[#A3E635]' : 'text-slate-400'
                        }`}
                      >
                        {item.day}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? 'bg-[#A3E635]' : 'bg-white/20'
                        }`}
                      />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                    <span className="text-[#06B6D4] block">Output:</span>
                    {item.deliverable}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Callout + Scope Clarification */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-[#A3E635] shrink-0" />
              <span>
                <strong className="text-white">{activeDay.day} Milestone:</strong> {activeDay.title} —{' '}
                <span className="text-[#A3E635]">{activeDay.deliverable}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
              <span>
                *5-day delivery applies to standard website scopes with prompt client feedback.
              </span>
            </div>
          </div>

          <HandDrawnLightning className="hidden xl:block absolute bottom-8 right-10 w-8 h-10 text-[#A3E635]/40 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
