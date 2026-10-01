import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hoveredType, setHoveredType] = useState<'none' | 'button' | 'link'>('none');
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || isReducedMotion) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });

      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest('button, [role="button"], input, select, textarea')) {
        setHoveredType('button');
      } else if (el.closest('a')) {
        setHoveredType('link');
      } else {
        setHoveredType('none');
      }
    };

    const onMouseDown = () => setPressed(true);
    const onMouseUp = () => setPressed(false);

    const animateRing = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      setRingPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  const ringScale = pressed
    ? 0.82
    : hoveredType === 'button'
    ? 1.55
    : hoveredType === 'link'
    ? 1.3
    : 1;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block overflow-hidden">
      {/* Primary small glowing dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#A3E635] shadow-[0_0_12px_#A3E635] transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x - 5}px, ${pos.y - 5}px, 0) scale(${
            hoveredType !== 'none' ? 0.6 : 1
          })`,
        }}
      />
      {/* Secondary larger transparent circle */}
      <div
        className={`fixed top-0 left-0 w-9 h-9 rounded-full border transition-colors duration-150 ${
          hoveredType === 'button'
            ? 'border-[#A3E635]/80 bg-[#A3E635]/10'
            : hoveredType === 'link'
            ? 'border-[#8B5CF6]/80 bg-[#8B5CF6]/10'
            : 'border-white/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${ringPos.x - 18}px, ${ringPos.y - 18}px, 0) scale(${ringScale})`,
        }}
      />
    </div>
  );
}
