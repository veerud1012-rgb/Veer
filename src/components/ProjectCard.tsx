import React, { useState } from 'react';
import { ArrowUpRight, Gamepad2, Code2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
  onPlayGameDemo: () => void;
  className?: string;
}

export function ProjectCard({
  project,
  onSelectProject,
  onPlayGameDemo,
  className = '',
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      onClick={() => onSelectProject(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProject(project);
        }
      }}
      className={`group relative rounded-2xl bg-[#0D1017] border border-white/10 hover:border-[#A3E635]/60 overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-xl flex flex-col justify-between cursor-pointer ${className}`}
    >
      {/* Media Preview Area */}
      <div
        className={`relative w-full overflow-hidden bg-[#131824] ${
          project.featuredSpan === 'wide' ? 'aspect-[21/9] min-h-[220px]' : 'aspect-[16/10]'
        }`}
      >
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} showcase by Udayveer`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#141A29] via-[#0D1017] to-[#1E1433] flex flex-col items-center justify-center p-6 text-center">
            <Layers className="w-10 h-10 text-[#A3E635] mb-2" />
            <span className="font-display text-lg font-bold text-white">{project.title}</span>
            <span className="font-mono text-xs text-slate-400 mt-1">{project.category} Preview</span>
          </div>
        )}

        {/* Measured contrast scrim overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1017] via-[#0D1017]/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

        {/* Hover Quick Action Overlay */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {project.liveDemoUrl.startsWith('http') && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3.5 py-1.5 rounded-lg bg-[#A3E635] hover:bg-[#b5f24c] text-[#08090D] font-mono text-xs font-bold inline-flex items-center gap-1.5 shadow-lg transition-transform duration-150 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span>LIVE DEMO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.isPlayableGame && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPlayGameDemo();
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#A3E635] hover:bg-[#b5f24c] text-[#08090D] font-mono text-xs font-bold inline-flex items-center gap-1.5 shadow-lg transition-transform duration-150 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>PLAY DEMO →</span>
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean unboxed metadata with typographic separators (Zero-Pill Rule) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="text-[#A3E635] font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
            {project.isSamplePlaceholder && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">Editable Showcase Slot</span>
              </>
            )}
          </div>

          {/* Project Title */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#A3E635] transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#A3E635] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1" />
          </div>

          {/* Short Description */}
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom row: Unboxed technology list + Action Links */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
            {project.liveDemoUrl.startsWith('http') && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#A3E635] hover:underline inline-flex items-center gap-1 whitespace-nowrap"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <span className="text-white group-hover:text-[#A3E635] transition-colors inline-flex items-center gap-1 whitespace-nowrap">
              <span>View Project →</span>
            </span>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 whitespace-nowrap"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
