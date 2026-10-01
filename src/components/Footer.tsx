import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Twitter, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="bg-[#06070A] border-t border-white/10 pt-14 pb-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-center">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-2">
            <a
              href="#home"
              className="font-display text-2xl font-extrabold tracking-tight text-white inline-block"
            >
              UDAYVEER<span className="text-[#A3E635]">.</span>
            </a>
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              Website Developer · Game Developer
            </div>
            <p className="font-hand text-xl text-slate-400 pt-1">
              &ldquo;Design. Develop. Create. Repeat.&rdquo;
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="md:col-span-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400"
          >
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href="https://x.com/Udayveer1012"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X (@Udayveer1012)"
              title="Twitter / X (@Udayveer1012)"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#A3E635] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/veerud1012-rgb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (@veerud1012-rgb)"
              title="GitHub (@veerud1012-rgb)"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#A3E635] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/3r46nyMDQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Server"
              title="Join Discord (discord.gg/3r46nyMDQ)"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#A3E635] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              aria-label="LinkedIn (Placeholder)"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#A3E635] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              aria-label="Instagram (Placeholder)"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#A3E635] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              aria-label="YouTube (Placeholder)"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#A3E635] transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {PORTFOLIO_DATA.personal.displayName}. All rights reserved.</p>
          <p className="text-slate-400">Built with creativity &amp; code.</p>
        </div>
      </div>
    </footer>
  );
}
