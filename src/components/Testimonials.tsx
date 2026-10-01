import React from 'react';
import { MessageSquareQuote, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Testimonials() {
  const hasTestimonials = PORTFOLIO_DATA.testimonials.length > 0;

  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {hasTestimonials ? (
          <div className="space-y-10">
            <div>
              <span className="font-mono text-xs text-[#A3E635] tracking-wider">
                08 · CLIENT FEEDBACK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
                WHAT PARTNERS SAY
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.testimonials.map((item) => (
                <blockquote
                  key={item.id}
                  className="rounded-2xl bg-[#0D1017] border border-white/10 p-7 space-y-4"
                >
                  <p className="text-slate-200 text-base leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="text-xs font-mono text-slate-400">
                    <strong className="text-white">{item.clientName}</strong> · {item.role} ·{' '}
                    {item.organization} ({item.projectType})
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-[#0D1017]/80 border border-white/10 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8B5CF6]">
                <MessageSquareQuote className="w-4 h-4" />
                <span>08 · TRANSPARENT PORTFOLIO</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                CLIENT FEEDBACK COMING SOON
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Taking on new web and game development projects now. Verified client reviews and project outcomes will be published here as launches complete.
              </p>
            </div>

            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#A3E635]/50 text-white text-sm font-semibold transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap shrink-0 group"
            >
              <span>Start a Project Together</span>
              <ArrowRight className="w-4 h-4 text-[#A3E635] transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
