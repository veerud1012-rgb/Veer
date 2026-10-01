import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Gamepad2, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { HandDrawnStar, HandDrawnSquiggle } from './FloatingDecorations';

interface ProjectsProps {
  onLaunchGameDemo: () => void;
}

const CATEGORIES = ['All', 'Website', 'Web App', 'Game'] as const;

export function Projects({ onLaunchGameDemo }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [showAllNotice, setShowAllNotice] = useState(false);

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="projects" className="relative py-24 sm:py-28 bg-[#0B0E15]/70 border-y border-white/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Top Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <HandDrawnStar className="w-6 h-6 text-[#8B5CF6]" />
              <span className="font-mono text-xs text-[#A3E635] tracking-wider">
                03 · SELECTED WORK
              </span>
              <HandDrawnSquiggle className="w-16 h-4 text-[#A3E635]" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              FEATURED PROJECTS
            </h2>
            <p className="mt-2 text-slate-400 text-base sm:text-lg">
              Some things I’ve built — websites, web apps, and playable game prototypes.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional Buttons) */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#08090D] border border-white/10 rounded-xl self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#A3E635] text-[#08090D] shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            let spanClass = 'lg:col-span-6';
            if (selectedCategory === 'All') {
              if (index === 0) spanClass = 'lg:col-span-7';
              else if (index === 1) spanClass = 'lg:col-span-5';
              else if (index === 2) spanClass = 'lg:col-span-5';
              else if (index === 3) spanClass = 'lg:col-span-7';
            }
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={(proj) => setActiveProjectModal(proj)}
                onPlayGameDemo={onLaunchGameDemo}
                className={spanClass}
              />
            );
          })}
        </div>

        {/* Bottom Note & View All CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs font-mono text-slate-400">
            Note: Sample project entries are structured in <code className="text-slate-200">src/data/portfolioData.ts</code> for instant customization.
          </p>

          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setShowAllNotice((prev) => !prev);
            }}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all duration-150 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#A3E635] transition-transform duration-150 group-hover:translate-x-1" />
          </button>
        </div>

        {showAllNotice && (
          <div className="mt-4 p-4 rounded-xl bg-[#08090D] border border-[#A3E635]/30 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span>
              Showing all {PORTFOLIO_DATA.projects.length} curated portfolio entries. Want to see a custom prototype tailored to your idea?
            </span>
            <a
              href="#contact"
              className="text-[#A3E635] font-semibold hover:underline whitespace-nowrap"
            >
              Request a custom build →
            </a>
          </div>
        )}
      </div>

      {/* Fullscreen Project Detail Lightbox Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0D1017] border border-white/15 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                  <span className="text-[#A3E635]">{activeProjectModal.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProjectModal.year}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProjectModal.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close project details"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-[#08090D] border border-white/10 mb-6">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-slate-200 text-base leading-relaxed">
                  {activeProjectModal.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2.5">
                  Key Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProjectModal.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
                  {activeProjectModal.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < activeProjectModal.technologies.length - 1 && (
                        <span aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {activeProjectModal.liveDemoUrl.startsWith('http') && (
                    <a
                      href={activeProjectModal.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#A3E635] text-[#08090D] font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#b5f24c] btn-cyber-lime transition-colors whitespace-nowrap"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeProjectModal.isPlayableGame && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveProjectModal(null);
                        onLaunchGameDemo();
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#A3E635] text-[#08090D] font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#b5f24c] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Gamepad2 className="w-4 h-4" />
                      <span>Play Interactive Demo</span>
                    </button>
                  )}

                  <a
                    href="#contact"
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2.5 rounded-xl bg-[#8B5CF6] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#7C3AED] transition-colors whitespace-nowrap"
                  >
                    <span>Build Similar Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {activeProjectModal.githubUrl && (
                    <a
                      href={activeProjectModal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
                    >
                      <Code2 className="w-4 h-4 text-[#06B6D4]" />
                      <span>View GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
