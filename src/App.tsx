/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollReveal } from './components/ScrollReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { TechMarquee } from './components/TechMarquee';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { FiveDayTimeline } from './components/FiveDayTimeline';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { GameShowcase } from './components/GameShowcase';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceType, setSelectedServiceType] = useState<string>('Website');
  const [autoFocusGame, setAutoFocusGame] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'skills', 'process', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleLaunchGameDemo = () => {
    setAutoFocusGame(true);
    const el = document.getElementById('game-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F8FAFC] relative selection:bg-[#A3E635] selection:text-[#08090D]">
      <CustomCursor />
      <ScrollProgress />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />

        <ScrollReveal variant="scale-up">
          <Stats />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <About />
        </ScrollReveal>

        <ScrollReveal variant="slide-left">
          <Services onSelectService={(type) => setSelectedServiceType(type)} />
        </ScrollReveal>

        <ScrollReveal variant="scale-up">
          <Projects onLaunchGameDemo={handleLaunchGameDemo} />
        </ScrollReveal>

        <TechMarquee />

        <ScrollReveal variant="fade-up">
          <Skills />
        </ScrollReveal>

        <ScrollReveal variant="slide-right">
          <Process />
        </ScrollReveal>

        <ScrollReveal variant="scale-up">
          <FiveDayTimeline />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <WhyWorkWithMe />
        </ScrollReveal>

        <ScrollReveal variant="rotate-up">
          <GameShowcase autoFocusGame={autoFocusGame} />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal variant="scale-up">
          <ContactCTA selectedProjectType={selectedServiceType} />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
