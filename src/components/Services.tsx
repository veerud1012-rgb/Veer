import React from 'react';
import { Globe, Gamepad2, Layers, RefreshCw, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';
import { HandDrawnSquiggle } from './FloatingDecorations';

interface ServicesProps {
  onSelectService?: (projectType: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'website-dev':
        return <Globe className="w-6 h-6" />;
      case 'game-dev':
        return <Gamepad2 className="w-6 h-6" />;
      case 'website-redesign':
        return <RefreshCw className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  const handleServiceClick = (service: ServiceItem) => {
    const typeMap: Record<string, string> = {
      'website-dev': 'Website',
      'game-dev': 'Game',
      'website-redesign': 'Website',
    };
    if (onSelectService) {
      onSelectService(typeMap[service.id] || 'Website');
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#A3E635] tracking-wider">
                02 · CAPABILITIES
              </span>
              <HandDrawnSquiggle className="w-16 h-4 text-[#A3E635]" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              WHAT I DO
            </h2>
            <p className="mt-2 text-slate-400 text-base sm:text-lg">
              From websites to interactive worlds.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-mono text-slate-400">
            <span>Select a service to start your inquiry →</span>
          </div>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.services.map((service) => {
            const accentStyles =
              service.accentColor === 'lime'
                ? {
                    text: 'text-[#A3E635]',
                    borderHover: 'hover:border-[#A3E635]/60',
                    iconBg: 'bg-[#A3E635]/10 text-[#A3E635]',
                  }
                : service.accentColor === 'purple'
                ? {
                    text: 'text-[#8B5CF6]',
                    borderHover: 'hover:border-[#8B5CF6]/60',
                    iconBg: 'bg-[#8B5CF6]/10 text-[#8B5CF6]',
                  }
                : {
                    text: 'text-[#06B6D4]',
                    borderHover: 'hover:border-[#06B6D4]/60',
                    iconBg: 'bg-[#06B6D4]/10 text-[#06B6D4]',
                  };

            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(service);
                  }
                }}
                className={`group relative rounded-2xl bg-[#0D1017] border border-white/10 ${accentStyles.borderHover} p-7 sm:p-8 transition-all duration-200 hover:-translate-y-1 shadow-xl flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  {/* Top row: Icon & Editorial Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentStyles.iconBg}`}>
                      {getServiceIcon(service.id)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-slate-400 tabular-nums">
                        SERVICE {service.number}
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 ${accentStyles.text} transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                      />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#A3E635] transition-colors">
                    {service.number}. {service.title}
                  </h3>
                  <p className="mt-2.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-current ${accentStyles.text} shrink-0`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer metadata line */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className={accentStyles.text}>{service.deliveryNote}</span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    Request Service →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
