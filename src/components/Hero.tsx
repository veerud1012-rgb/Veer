import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { UdayveerPortrait } from './UdayveerPortrait';
import { HandDrawnUnderline, HandDrawnArrow } from './FloatingDecorations';

export function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [resumeToast, setResumeToast] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleDownloadResume = () => {
    const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Udayveer — Resume (Website & Game Developer)</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 24px; color: #0f172a; line-height: 1.6; }
  h1 { font-size: 32px; margin-bottom: 4px; letter-spacing: -0.02em; }
  h2 { font-size: 16px; text-transform: uppercase; letter-spacing: 0.08em; color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 28px; }
  .meta { color: #475569; font-size: 14px; margin-bottom: 20px; }
  .promise { background: #f8fafc; border-left: 4px solid #65a30d; padding: 12px 16px; font-weight: 600; margin: 16px 0; }
  ul { padding-left: 20px; }
  li { margin-bottom: 6px; }
</style>
</head>
<body>
  <h1>UDAYVEER</h1>
  <div class="meta">Website Developer &amp; Game Developer · Age 18 · India · ${PORTFOLIO_DATA.personal.email}</div>
  <div class="promise">Primary Service Promise: "${PORTFOLIO_DATA.personal.primaryPromise}"</div>
  <h2>Summary</h2>
  <p>${PORTFOLIO_DATA.personal.heroDescription} ${PORTFOLIO_DATA.personal.heroSubline}</p>
  <h2>Core Capabilities</h2>
  <ul>
    <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</li>
    <li><strong>2D Game Development:</strong> Unity 2D, HTML5 Canvas, 2D Level Design, Gameplay Systems</li>
    <li><strong>Tools &amp; Workflow:</strong> Git, GitHub, VS Code</li>
  </ul>
  <h2>Services Offered</h2>
  <ul>
    <li><strong>Website Development:</strong> Business websites, portfolios, landing pages, e-commerce websites, and web apps (5-day streamlined delivery).</li>
    <li><strong>2D Game Development:</strong> 2D games, browser games, mobile 2D games, and interactive prototypes.</li>
    <li><strong>Website Redesign:</strong> Complete visual &amp; code overhaul, mobile responsiveness, and performance optimization.</li>
  </ul>
</body>
</html>`;

    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Udayveer_Developer_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setResumeToast(true);
    setTimeout(() => setResumeToast(false), 3500);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
      className="relative min-h-screen pt-24 pb-14 sm:pt-32 sm:pb-24 flex items-center overflow-hidden bg-subtle-grid"
    >
      {/* Subtle background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-[#A3E635]/10 blur-[130px]"
        style={{
          transform: `translate3d(${mouseOffset.x * 18}px, ${mouseOffset.y * 18}px, 0)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 w-[440px] h-[440px] rounded-full bg-[#8B5CF6]/12 blur-[130px]"
        style={{
          transform: `translate3d(${-mouseOffset.x * 18}px, ${-mouseOffset.y * 18}px, 0)`,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* 
          12-column layout where Udayveer's portrait sits directly to the RIGHT of the upper content
          on BOTH mobile (col-span-7 left + col-span-5 right) and desktop (lg:col-span-7 left + lg:col-span-5 right).
        */}
        <div className="grid grid-cols-12 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:gap-x-10 lg:gap-y-6 items-center">
          {/* UPPER LEFT CONTENT (7 columns on both mobile and desktop) */}
          <div className="col-span-7 lg:col-span-7 lg:col-start-1 lg:row-start-1 space-y-3 sm:space-y-5">
            {/* Availability status & greeting */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs text-[#A3E635]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A3E635] animate-ping" />
                <span>● {PORTFOLIO_DATA.personal.availability}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">
                ·
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-slate-400 hidden sm:inline">
                India · Age {PORTFOLIO_DATA.personal.age}
              </span>
            </div>

            {/* Handwritten greeting + Name Display */}
            <div className="relative">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                <span className="font-hand text-2xl sm:text-4xl text-slate-200 -rotate-3 inline-block">
                  Hey, I am
                </span>
                <HandDrawnArrow className="w-5 h-5 sm:w-8 sm:h-8 text-[#A3E635] rotate-12" />
              </div>

              <div className="relative inline-block">
                <h1 className="font-display text-3xl sm:text-6xl xl:text-8xl font-extrabold tracking-tight text-white leading-[0.95]">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
                <HandDrawnUnderline className="w-4/5 h-2.5 sm:h-4 text-[#A3E635] mt-0.5 sm:mt-1" />
              </div>

              {/* Clean unboxed role metadata with typographic separator */}
              <div className="mt-2 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-3 text-xs sm:text-lg font-semibold text-slate-200">
                <span>Website Developer</span>
                <span aria-hidden="true" className="text-[#A3E635]">
                  ·
                </span>
                <span>Game Developer</span>
              </div>
            </div>

            {/* Expressive Headline Statement */}
            <div className="pt-0.5 sm:pt-1 max-w-2xl">
              <p className="font-display text-sm sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-100 leading-snug [text-wrap:balance]">
                I BUILD{' '}
                <span className="text-[#A3E635] underline decoration-[#A3E635]/40 decoration-wavy underline-offset-4">
                  WEBSITES
                </span>
                . I CREATE{' '}
                <span className="text-[#8B5CF6]">GAMES</span>. I TURN IDEAS INTO{' '}
                <span className="bg-gradient-to-r from-[#06B6D4] via-[#A3E635] to-[#8B5CF6] bg-clip-text text-transparent">
                  DIGITAL EXPERIENCES
                </span>
                .
              </p>
            </div>
          </div>

          {/* RIGHT SIDE PORTRAIT (5 columns on the right of the upper content in BOTH mobile & desktop) */}
          <div className="col-span-5 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 self-center">
            <UdayveerPortrait variant="hero" mouseOffset={mouseOffset} />
          </div>

          {/* LOWER LEFT CONTENT (Full-width below upper row on mobile; left 7 columns on desktop) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-2 space-y-5">
            {/* Mobile-only compact developer code card right below the side-by-side upper hero */}
            <div className="sm:hidden bg-[#0D1017]/95 border border-white/15 rounded-xl p-3 shadow-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                  <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
                </div>
                <span className="font-mono text-[10px] text-slate-400">udayveer.ts</span>
              </div>
              <pre className="font-mono text-[11px] leading-relaxed text-slate-200 overflow-x-auto">
                <code>
                  <span className="text-[#8B5CF6]">const</span> idea ={' '}
                  <span className="text-[#06B6D4]">creativity</span>;{' '}
                  <span className="text-[#8B5CF6]">const</span> result ={' '}
                  <span className="text-[#A3E635]">Udayveer</span>.build(idea);
                </code>
              </pre>
            </div>

            {/* Descriptions */}
            <div className="space-y-2 max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{PORTFOLIO_DATA.personal.heroDescription}</p>
              <p className="text-slate-400 text-xs sm:text-base font-medium">
                {PORTFOLIO_DATA.personal.heroSubline}
              </p>
            </div>

            {/* Primary 5-Day Fast Delivery Promise Line */}
            <div>
              <p className="font-mono text-xs sm:text-sm text-[#A3E635] font-medium">
                ⚡ {PORTFOLIO_DATA.personal.fastDeliveryBanner}
              </p>
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#A3E635] hover:bg-[#b5f24c] text-[#08090D] font-bold text-xs sm:text-base btn-cyber-lime shadow-[0_0_28px_rgba(163,230,53,0.35)] inline-flex items-center gap-2 cursor-pointer whitespace-nowrap group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-xs sm:text-base btn-cyber-purple shadow-[0_0_24px_rgba(139,92,246,0.3)] inline-flex items-center gap-2 cursor-pointer whitespace-nowrap group"
              >
                <span>Let&apos;s Build Something</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-medium text-xs sm:text-sm btn-cyber-ghost inline-flex items-center gap-2 cursor-pointer whitespace-nowrap group"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-[#06B6D4] transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
            </div>

            {resumeToast && (
              <p className="font-mono text-xs text-[#06B6D4]">
                Resume downloaded (Udayveer_Developer_Resume.html)
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
