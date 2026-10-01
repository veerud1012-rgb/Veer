import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Glowing Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#A3E635] via-[#06B6D4] to-[#8B5CF6] shadow-[0_0_12px_#A3E635] transition-transform duration-100 origin-left"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>

      {/* Floating Scroll Progress Ring & Back-To-Top Button */}
      <AnimatePresence>
        {progress > 12 && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 24, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.85 }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-2xl bg-[#0D1017]/90 backdrop-blur-xl border border-white/15 hover:border-[#A3E635] shadow-[0_10px_30px_rgba(0,0,0,0.65)] flex flex-col items-center justify-center cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-[#A3E635] transition-transform duration-200 group-hover:-translate-y-0.5" />
            <span className="font-mono text-[9px] font-bold text-slate-300 tabular-nums mt-0.5">
              {Math.round(progress)}%
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
