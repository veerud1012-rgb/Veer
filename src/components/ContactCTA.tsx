import React, { useState } from 'react';
import { Copy, Check, Mail, ArrowRight, Linkedin, Instagram, Youtube } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { UdayveerPortrait } from './UdayveerPortrait';
import { ContactForm } from './ContactForm';
import { HandDrawnUnderline } from './FloatingDecorations';

interface ContactCTAProps {
  selectedProjectType?: string;
}

export function ContactCTA({ selectedProjectType }: ContactCTAProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const renderFallbackSocialIcon = (name: string) => {
    switch (name) {
      case 'LinkedIn':
        return <Linkedin className="w-8 h-8 text-[#06B6D4] drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" />;
      case 'Instagram':
        return <Instagram className="w-8 h-8 text-[#8B5CF6] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]" />;
      case 'YouTube':
        return <Youtube className="w-8 h-8 text-[#A3E635] drop-shadow-[0_0_10px_rgba(163,230,53,0.6)]" />;
      default:
        return null;
    }
  };

  const getGlowBorderClasses = (glowColor?: string) => {
    switch (glowColor) {
      case 'cyan':
        return 'border-[#06B6D4]/75 shadow-[0_0_18px_rgba(6,182,212,0.42),inset_0_0_12px_rgba(6,182,212,0.18)] hover:border-[#06B6D4] hover:shadow-[0_0_28px_rgba(6,182,212,0.75),inset_0_0_16px_rgba(6,182,212,0.3)]';
      case 'purple':
        return 'border-[#8B5CF6]/75 shadow-[0_0_18px_rgba(139,92,246,0.45),inset_0_0_12px_rgba(139,92,246,0.18)] hover:border-[#8B5CF6] hover:shadow-[0_0_28px_rgba(139,92,246,0.78),inset_0_0_16px_rgba(139,92,246,0.3)]';
      case 'lime':
      default:
        return 'border-[#A3E635]/75 shadow-[0_0_18px_rgba(163,230,53,0.42),inset_0_0_12px_rgba(163,230,53,0.18)] hover:border-[#A3E635] hover:shadow-[0_0_28px_rgba(163,230,53,0.75),inset_0_0_16px_rgba(163,230,53,0.3)]';
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0D1017]/60 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Top Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left 5 Columns: Direct Contact & 3x2 Glowing Social Logo Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="font-mono text-xs text-[#A3E635] tracking-wider mb-2">
                09 · GET IN TOUCH
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
                LET&apos;S BUILD SOMETHING AMAZING.
              </h2>
              <HandDrawnUnderline className="w-56 h-3 text-[#A3E635] mt-2" />
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Have a website idea, game concept or digital product in mind? Let’s turn it into something real.
              </p>
            </div>

            {/* Direct Email Box */}
            <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DIRECT EMAIL</span>
                <span className="text-[#A3E635]">● 24/7 RESPONSE</span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-white hover:text-[#A3E635] transition-colors inline-flex items-center gap-2 truncate"
                >
                  <Mail className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 inline-flex items-center gap-1.5 shrink-0 cursor-pointer transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#A3E635]" />
                      <span className="text-[#A3E635]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 6 Social Media Logo Buttons: 3 in Row 1, 3 in Row 2 with Glowing Outer Line */}
            <div className="space-y-3.5">
              <div className="font-mono text-xs text-slate-400">
                SOCIAL CHANNELS
              </div>

              <div className="grid grid-cols-3 gap-3.5 sm:gap-4">
                {PORTFOLIO_DATA.personal.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.placeholder ? undefined : '_blank'}
                    rel={social.placeholder ? undefined : 'noopener noreferrer'}
                    aria-label={social.name}
                    title={`${social.name} (${social.handle})`}
                    className={`group relative h-20 sm:h-24 rounded-2xl bg-[#0B0E15] border-2 flex items-center justify-center p-4 transition-all duration-200 hover:-translate-y-1 active:scale-95 ${getGlowBorderClasses(
                      social.glowColor
                    )}`}
                  >
                    {social.logoUrl ? (
                      <img
                        src={social.logoUrl}
                        alt={social.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg transition-transform duration-200 group-hover:scale-110"
                      />
                    ) : (
                      <div className="transition-transform duration-200 group-hover:scale-110">
                        {renderFallbackSocialIcon(social.name)}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Validated Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm initialProjectType={selectedProjectType} />
          </div>
        </div>

        {/* Final Call-To-Action Banner featuring Udayveer Portrait */}
        <div className="mt-20 relative rounded-3xl bg-gradient-to-r from-[#121723] via-[#0D1017] to-[#121723] border border-white/15 p-7 sm:p-10 overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-[#A3E635]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-[#8B5CF6]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <UdayveerPortrait variant="cta" />
              <div>
                <span className="font-mono text-xs text-[#A3E635] tracking-wider">
                  ● READY TO LAUNCH IN 5 DAYS
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  READY TO LAUNCH YOUR WEBSITE OR GAME IDEA?
                </h3>
                <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
                  Let’s create something fast, modern and unforgettable.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <a
                href="#contact-name"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-name')?.focus();
                }}
                className="px-6 py-3.5 rounded-xl bg-[#A3E635] hover:bg-[#b5f24c] text-[#08090D] font-bold text-sm sm:text-base btn-cyber-lime inline-flex items-center gap-2 whitespace-nowrap group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm sm:text-base btn-cyber-ghost inline-flex items-center gap-2 whitespace-nowrap group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-[#06B6D4] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
