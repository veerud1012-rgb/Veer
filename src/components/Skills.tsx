import React, { useState } from 'react';
import {
  Code2,
  Layers,
  Braces,
  Atom,
  Globe,
  Palette,
  Gamepad2,
  Cpu,
  Workflow,
  Box,
  MonitorPlay,
  Joystick,
  Layout,
  Compass,
  PenTool,
  Sparkles,
  Zap,
  GitBranch,
  Terminal,
  Code,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HandDrawnUnderline, HandDrawnSquiggle } from './FloatingDecorations';

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getSkillIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Braces':
        return <Braces className="w-5 h-5" />;
      case 'Atom':
        return <Atom className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5" />;
      case 'Box':
      case 'Cuboid':
        return <Box className="w-5 h-5" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-5 h-5" />;
      case 'Joystick':
        return <Joystick className="w-5 h-5" />;
      case 'Layout':
      case 'Frame':
        return <Layout className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const visibleCategories =
    activeTab === 'all'
      ? PORTFOLIO_DATA.skillCategories
      : PORTFOLIO_DATA.skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header & Interactive Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#A3E635] tracking-wider">
                04 · TECHNICAL STACK
              </span>
              <HandDrawnSquiggle className="w-16 h-4 text-[#8B5CF6]" />
            </div>
            <div className="inline-block">
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                MY TOOLKIT
              </h2>
              <HandDrawnUnderline className="w-full h-3.5 text-[#A3E635] mt-1" />
            </div>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Technologies I use to turn ideas into reality.
            </p>
          </div>

          {/* Interactive Category Selector */}
          <div
            role="tablist"
            aria-label="Filter toolkit categories"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0D1017] border border-white/10 rounded-xl self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#A3E635] text-[#08090D]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Stacks
            </button>
            {PORTFOLIO_DATA.skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeTab === cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-[#A3E635] text-[#08090D]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {visibleCategories.map((category) => {
            const accentText =
              category.accent === 'lime'
                ? 'text-[#A3E635]'
                : category.accent === 'purple'
                ? 'text-[#8B5CF6]'
                : category.accent === 'cyan'
                ? 'text-[#06B6D4]'
                : 'text-white';

            const hoverBorder =
              category.accent === 'lime'
                ? 'hover:border-[#A3E635]/60'
                : category.accent === 'purple'
                ? 'hover:border-[#8B5CF6]/60'
                : category.accent === 'cyan'
                ? 'hover:border-[#06B6D4]/60'
                : 'hover:border-white/40';

            return (
              <div key={category.id} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/10 pb-3">
                  <h3 className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-tight ${accentText}`}>
                    {category.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-400">{category.subtitle}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group rounded-2xl bg-[#0D1017] border border-white/10 ${hoverBorder} p-5 transition-all duration-150 hover:-translate-y-0.5 flex items-start gap-4`}
                    >
                      <div
                        className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center ${accentText} shrink-0 group-hover:scale-105 transition-transform duration-150`}
                      >
                        {getSkillIcon(skill.iconKey)}
                      </div>
                      <div>
                        <div className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#A3E635] transition-colors">
                          {skill.name}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-snug">
                          {skill.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
