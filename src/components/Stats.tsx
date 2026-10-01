import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Stats() {
  return (
    <section
      aria-label="Service Highlights and Quick Facts"
      className="relative z-20 border-y border-white/10 bg-[#0D1017]/90 backdrop-blur-md"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.quickStats.map((stat, index) => {
            const accentColor =
              stat.accent === 'lime'
                ? 'text-[#A3E635]'
                : stat.accent === 'purple'
                ? 'text-[#8B5CF6]'
                : 'text-[#06B6D4]';

            return (
              <div
                key={stat.label}
                className={`flex flex-col justify-between ${
                  index !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''
                }`}
              >
                <div
                  className={`font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight tabular-nums ${accentColor}`}
                >
                  {stat.value}
                </div>
                <div className="mt-1.5">
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.context}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
