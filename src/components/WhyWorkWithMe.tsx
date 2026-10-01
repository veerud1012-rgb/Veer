import React from 'react';
import { Zap, Sparkles, Smartphone, Gamepad2, MessageSquare, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HandDrawnSquiggle } from './FloatingDecorations';

export function WhyWorkWithMe() {
  const getIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#A3E635]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#06B6D4]" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-[#A3E635]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Target className="w-5 h-5 text-[#06B6D4]" />;
    }
  };

  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs text-[#A3E635] tracking-wider">
              06 · THE ADVANTAGE
            </span>
            <HandDrawnSquiggle className="w-16 h-4 text-[#A3E635]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WHY UDAYVEER?
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg">
            What sets my web and game development work apart.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.whyWorkWithMe.map((item) => (
            <div
              key={item.number}
              className="group rounded-2xl bg-[#0D1017] border border-white/10 hover:border-[#A3E635]/50 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(item.iconKey)}
                </div>
                <span className="font-mono text-sm font-bold text-slate-400 tabular-nums">
                  {item.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white group-hover:text-[#A3E635] transition-colors">
                {item.number}. {item.title}
              </h3>

              <p className="mt-2.5 text-slate-400 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
