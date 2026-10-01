import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, Play, RotateCcw, Cpu, Box, Joystick, ArrowRight } from 'lucide-react';
import cyberGameImg from '../assets/images/project_3d_cyber_game_1790836025084.jpg';

interface GameShowcaseProps {
  autoFocusGame?: boolean;
}

export function GameShowcase({ autoFocusGame }: GameShowcaseProps) {
  const [activeMode, setActiveMode] = useState<'cinematic' | 'playable'>('cinematic');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (autoFocusGame) {
      setActiveMode('playable');
      setGameState('playing');
    }
  }, [autoFocusGame]);

  // Lightweight 60FPS interactive arcade game loop ("NEON DRIFT: CYBER CORE")
  useEffect(() => {
    if (activeMode !== 'playable' || gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const width = canvas.width;
    const height = canvas.height;

    let playerX = width / 2;
    const playerY = height - 42;
    const playerRadius = 12;
    let targetX = playerX;

    interface Orb {
      x: number;
      y: number;
      vy: number;
      r: number;
      type: 'energy' | 'hazard';
    }

    const orbs: Orb[] = [];
    let frame = 0;
    let currentScore = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width) * width;
      targetX = Math.max(20, Math.min(width - 20, relX));
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const relX = ((e.touches[0].clientX - rect.left) / rect.width) * width;
        targetX = Math.max(20, Math.min(width - 20, relX));
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        targetX = Math.max(20, targetX - 42);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        targetX = Math.min(width - 20, targetX + 42);
      }
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    const render = () => {
      frame++;
      ctx.fillStyle = '#08090D';
      ctx.fillRect(0, 0, width, height);

      // Perspective cyber grid lines
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.14)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      const gridOffset = (frame * 2.5) % 48;
      for (let y = gridOffset; y < height; y += 48) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Smooth player movement
      playerX += (targetX - playerX) * 0.2;

      // Spawn orbs
      if (frame % 24 === 0) {
        const isEnergy = Math.random() > 0.38;
        orbs.push({
          x: 24 + Math.random() * (width - 48),
          y: -16,
          vy: 2.8 + Math.random() * 2.4 + Math.min(3, currentScore * 0.04),
          r: isEnergy ? 9 : 11,
          type: isEnergy ? 'energy' : 'hazard',
        });
      }

      // Draw & update orbs
      for (let i = orbs.length - 1; i >= 0; i--) {
        const o = orbs[i];
        o.y += o.vy;

        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        if (o.type === 'energy') {
          ctx.fillStyle = '#A3E635';
          ctx.shadowColor = '#A3E635';
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = '#F43F5E';
          ctx.shadowColor = '#F43F5E';
          ctx.shadowBlur = 12;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Collision check
        const dx = o.x - playerX;
        const dy = o.y - playerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < o.r + playerRadius) {
          if (o.type === 'energy') {
            currentScore += 10;
            setScore(currentScore);
            orbs.splice(i, 1);
            continue;
          } else {
            setHighScore((prev) => Math.max(prev, currentScore));
            setGameState('gameover');
            return;
          }
        }

        if (o.y > height + 20) {
          orbs.splice(i, 1);
        }
      }

      // Draw Player Ship
      ctx.save();
      ctx.translate(playerX, playerY);
      ctx.fillStyle = '#06B6D4';
      ctx.shadowColor = '#06B6D4';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.lineTo(14, 12);
      ctx.lineTo(0, 6);
      ctx.lineTo(-14, 12);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeMode, gameState]);

  const startGame = () => {
    setScore(0);
    setActiveMode('playable');
    setGameState('playing');
  };

  return (
    <section
      id="game-showcase"
      className="relative py-24 sm:py-28 bg-[#06070B] border-y border-white/10 overflow-hidden"
    >
      {/* Subtle CRT scanlines overlay */}
      <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-25 z-0" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#8B5CF6]/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-[130px]" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06B6D4] mb-3">
              <Gamepad2 className="w-4 h-4 text-[#A3E635]" />
              <span>07 · INTERACTIVE WORLDS &amp; GAME ENGINEERING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              BUILDING WORLDS, NOT JUST{' '}
              <span className="text-[#8B5CF6]">WEBSITES.</span>
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              I love building interactive worlds where design, technology and gameplay come together.
            </p>
          </div>

          {/* Mode Toggle: 2D World Showcase vs Playable Arcade Sandbox */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0D1017] border border-white/15 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setActiveMode('cinematic')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeMode === 'cinematic'
                  ? 'bg-[#8B5CF6] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2D Game Showcase
            </button>
            <button
              type="button"
              onClick={startGame}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeMode === 'playable'
                  ? 'bg-[#A3E635] text-[#08090D]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Play 2D Mini-Game Demo</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 8 Columns: Viewport Frame */}
          <div className="lg:col-span-8 rounded-3xl bg-[#0D1017] border border-white/15 overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Controller-inspired HUD Top Bar */}
            <div className="px-5 py-3.5 bg-[#08090D] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#A3E635] font-bold">● HUD ACTIVE</span>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <span className="text-slate-300">
                  {activeMode === 'cinematic'
                    ? 'SCENE: AETHER_2D_STAGE'
                    : 'SANDBOX: NEON_DRIFT_2D_60FPS'}
                </span>
              </div>
              <div className="flex items-center gap-4 tabular-nums">
                {activeMode === 'playable' && (
                  <>
                    <span className="text-[#06B6D4]">SCORE: {score}</span>
                    <span className="text-[#A3E635]">BEST: {highScore}</span>
                  </>
                )}
                <span className="text-slate-400">60 FPS TARGET</span>
              </div>
            </div>

            {/* Viewport Screen */}
            <div className="relative aspect-video w-full bg-[#08090D] overflow-hidden flex items-center justify-center">
              {activeMode === 'cinematic' ? (
                <>
                  <img
                    src={cyberGameImg}
                    alt="2D Sci-Fi Game Showcase by Udayveer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-black/30" />

                  {/* Diegetic Game UI Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="bg-[#08090D]/85 backdrop-blur-md border border-white/15 rounded-2xl p-4 max-w-md">
                      <div className="font-mono text-xs text-[#A3E635] mb-1">
                        UNITY 2D · HTML5 CANVAS · 2D GAME DEV
                      </div>
                      <div className="font-display text-lg font-bold text-white">
                        Aether Protocol — 2D Action &amp; Arcade Prototype
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        Multi-layer parallax 2D backgrounds, responsive 2D movement physics, and fast-paced arcade gameplay systems.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={startGame}
                      className="px-5 py-3 rounded-xl bg-[#A3E635] hover:bg-[#b5f24c] text-[#08090D] font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-xl transition-transform duration-150 hover:scale-105 cursor-pointer whitespace-nowrap self-start sm:self-auto"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Launch Playable 2D Demo</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center bg-[#08090D]">
                  <canvas
                    ref={canvasRef}
                    width={640}
                    height={360}
                    className="w-full h-full object-contain cursor-crosshair"
                  />

                  {gameState === 'gameover' && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
                      <div className="font-mono text-xs text-rose-400 mb-1">SYSTEM COLLISION</div>
                      <h3 className="font-display text-3xl font-extrabold text-white">
                        RUN COMPLETE
                      </h3>
                      <p className="font-mono text-sm text-slate-300 mt-2 tabular-nums">
                        Final Score: <span className="text-[#A3E635] font-bold">{score}</span> · Best:{' '}
                        <span className="text-[#06B6D4] font-bold">{highScore}</span>
                      </p>
                      <div className="mt-5 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={startGame}
                          className="px-5 py-2.5 rounded-xl bg-[#A3E635] text-[#08090D] font-bold text-sm inline-flex items-center gap-2 hover:bg-[#b5f24c] transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Play Again</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveMode('cinematic')}
                          className="px-4 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/15 transition-colors cursor-pointer"
                        >
                          Back to Showcase
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Bottom instructions bar */}
                  <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Move mouse / touch / A-D keys to steer cyan ship</span>
                    <span className="text-[#A3E635]">Collect Lime Orbs · Dodge Red Hazards</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right 4 Columns: Gameplay Architecture Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-6 flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                2D Gameplay Systems &amp; Mechanics
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                Responsive 2D character controllers, state machines, 2D physics interactions, and core arcade loops built in Unity 2D and HTML5 Canvas.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-6 flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/15 text-[#06B6D4] flex items-center justify-center mb-4">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                2D Worlds &amp; Parallax Level Design
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                Atmospheric 2D level design, multi-layer parallax backgrounds, tilemaps, and crisp 2D visual effects.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-6 flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-[#A3E635]/15 text-[#A3E635] flex items-center justify-center mb-4">
                <Joystick className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Game UI &amp; Diegetic HUDs
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                Crisp in-game menus, animated HUD overlays, inventory interfaces, and tactile feedback systems.
              </p>
            </div>

            <a
              href="#contact"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white font-bold text-sm flex items-center justify-between hover:opacity-95 transition-opacity shadow-lg group"
            >
              <span>Explore My Games &amp; Collaborate</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
