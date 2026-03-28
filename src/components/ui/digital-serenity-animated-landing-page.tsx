'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_IN_OUT } from '@/lib/motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface DigitalSerenityProps {
  onDone?: () => void;
}

const DigitalSerenity = ({ onDone }: DigitalSerenityProps) => {
  const [mouseGradient, setMouseGradient] = useState({ left: '0px', top: '0px', opacity: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [visible, setVisible] = useState(true);
  const floatingRef = useRef<Element[]>([]);

  // Auto-dismiss after 1800ms
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  // Word animations — start earlier
  useEffect(() => {
    const run = () => {
      document.querySelectorAll<HTMLElement>('.ds-word').forEach(el => {
        const delay = parseInt(el.dataset.delay ?? '0');
        setTimeout(() => {
          el.style.animation = 'ds-appear 0.7s ease-out forwards';
        }, delay);
      });
    };
    const t = setTimeout(run, 100);
    return () => clearTimeout(t);
  }, []);

  // Mouse gradient
  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setMouseGradient({ left: `${e.clientX}px`, top: `${e.clientY}px`, opacity: 1 });
    const onLeave = () => setMouseGradient(p => ({ ...p, opacity: 0 }));
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Ripple on click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const r: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(p => [...p, r]);
      setTimeout(() => setRipples(p => p.filter(x => x.id !== r.id)), 900);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Floating dots on scroll
  useEffect(() => {
    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      triggered = true;
      floatingRef.current.forEach((el, i) => {
        setTimeout(() => {
          const h = el as HTMLElement;
          h.style.animationPlayState = 'running';
          h.style.opacity = '';
        }, i * 100);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    floatingRef.current = Array.from(document.querySelectorAll('.ds-float'));
  }, []);

  const css = `
    .ds-word {
      display: inline-block;
      opacity: 0;
      margin: 0 0.12em;
      transition: color 0.3s ease, transform 0.3s ease;
      cursor: default;
    }
    .ds-word:hover {
      color: var(--gold);
      transform: translateY(-2px);
    }
    @keyframes ds-appear {
      0%   { opacity: 0; transform: translateY(28px) scale(0.82); filter: blur(8px); }
      55%  { opacity: 0.85; transform: translateY(8px) scale(0.97); filter: blur(1px); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }
    @keyframes ds-grid {
      0%   { stroke-dashoffset: 1000; opacity: 0; }
      50%  { opacity: 0.25; }
      100% { stroke-dashoffset: 0; opacity: 0.12; }
    }
    @keyframes ds-pulse {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50%       { opacity: 0.45; transform: scale(1.15); }
    }
    @keyframes ds-underline {
      to { width: 100%; }
    }
    @keyframes ds-float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.18; }
      25%  { transform: translateY(-12px) translateX(5px); opacity: 0.55; }
      50%  { transform: translateY(-6px) translateX(-4px); opacity: 0.35; }
      75%  { transform: translateY(-18px) translateX(8px); opacity: 0.7; }
    }
    .ds-grid-line {
      stroke: var(--sage);
      stroke-width: 0.5;
      opacity: 0;
      stroke-dasharray: 5 5;
      stroke-dashoffset: 1000;
      animation: ds-grid 2s ease-out forwards;
    }
    .ds-dot { fill: var(--sage); opacity: 0; animation: ds-pulse 3s ease-in-out infinite; }
    .ds-corner {
      position: absolute;
      width: 36px;
      height: 36px;
      border: 1px solid rgba(138,158,126,0.2);
      opacity: 0;
      animation: ds-appear 1s ease-out forwards;
    }
    .ds-deco::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--sage), transparent);
      animation: ds-underline 1.8s ease-out forwards;
      animation-delay: 1.4s;
    }
    .ds-float {
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--sage);
      border-radius: 50%;
      opacity: 0;
      animation: ds-float 4s ease-in-out infinite;
      animation-play-state: paused;
    }
    .ds-ripple {
      position: fixed;
      width: 4px;
      height: 4px;
      background: rgba(201,168,76,0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: ds-pulse 0.9s ease-out forwards;
      z-index: 9999;
    }
    #ds-mouse {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px;
      background-image: radial-gradient(circle, rgba(138,158,126,0.06), rgba(201,168,76,0.04), transparent 70%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
    }
  `;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: EASE_IN_OUT } }}
        >
          <style>{css}</style>

          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0a0f0a 0%, var(--forest) 50%, #0c110c 100%)',
            }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(138,158,126,0.07) 0%, transparent 70%)',
            }}
          />

          {/* SVG grid */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="ds-grid-pat" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(138,158,126,0.08)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ds-grid-pat)" />
            <line x1="0" y1="20%" x2="100%" y2="20%" className="ds-grid-line" style={{ animationDelay: '0.3s' }} />
            <line x1="0" y1="80%" x2="100%" y2="80%" className="ds-grid-line" style={{ animationDelay: '0.6s' }} />
            <line x1="20%" y1="0" x2="20%" y2="100%" className="ds-grid-line" style={{ animationDelay: '0.9s' }} />
            <line x1="80%" y1="0" x2="80%" y2="100%" className="ds-grid-line" style={{ animationDelay: '1.1s' }} />
            <circle cx="20%" cy="20%" r="2" className="ds-dot" style={{ animationDelay: '1.4s' }} />
            <circle cx="80%" cy="20%" r="2" className="ds-dot" style={{ animationDelay: '1.5s' }} />
            <circle cx="20%" cy="80%" r="2" className="ds-dot" style={{ animationDelay: '1.6s' }} />
            <circle cx="80%" cy="80%" r="2" className="ds-dot" style={{ animationDelay: '1.7s' }} />
            <circle cx="50%" cy="50%" r="1.5" className="ds-dot" style={{ animationDelay: '1.8s' }} />
          </svg>

          {/* Corners */}
          <div className="ds-corner top-6 left-6" style={{ animationDelay: '1.2s' }}>
            <div className="absolute top-0 left-0 w-2 h-2 rounded-full" style={{ background: 'var(--sage)', opacity: 0.35 }} />
          </div>
          <div className="ds-corner top-6 right-6" style={{ animationDelay: '1.3s' }}>
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full" style={{ background: 'var(--sage)', opacity: 0.35 }} />
          </div>
          <div className="ds-corner bottom-6 left-6" style={{ animationDelay: '1.4s' }}>
            <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full" style={{ background: 'var(--sage)', opacity: 0.35 }} />
          </div>
          <div className="ds-corner bottom-6 right-6" style={{ animationDelay: '1.5s' }}>
            <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full" style={{ background: 'var(--sage)', opacity: 0.35 }} />
          </div>

          {/* Floating dots */}
          {[
            { top: '25%', left: '15%', delay: '0.4s' },
            { top: '60%', left: '82%', delay: '0.8s' },
            { top: '40%', left: '8%', delay: '1.2s' },
            { top: '72%', left: '88%', delay: '1.6s' },
          ].map((f, i) => (
            <div key={i} className="ds-float" style={{ top: f.top, left: f.left, animationDelay: f.delay }} />
          ))}

          {/* Main content */}
          <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-6 py-10 sm:px-12 sm:py-14">

            {/* Top label */}
            <div className="text-center">
              <p
                className="font-mono font-light uppercase"
                style={{ color: 'var(--sage)', letterSpacing: '0.3em', fontSize: 11 }}
              >
                <span className="ds-word" data-delay="0">Stille</span>
                <span className="ds-word" data-delay="220">spricht.</span>
              </p>
              <div
                className="mt-3 w-14 h-px mx-auto"
                style={{ background: 'linear-gradient(90deg, transparent, var(--sage), transparent)', opacity: 0.3 }}
              />
            </div>

            {/* Center heading */}
            <div className="text-center max-w-4xl mx-auto relative">
              <h1
                className="ds-deco relative font-light leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(36px, 7vw, 80px)',
                  color: 'var(--cream)',
                  letterSpacing: '-0.02em',
                }}
              >
                <div className="mb-3">
                  <span className="ds-word" data-delay="400">Finde</span>
                  <span className="ds-word" data-delay="560">deine</span>
                  <span className="ds-word" data-delay="720" style={{ color: 'var(--sage)', fontStyle: 'italic' }}>
                    Mitte,
                  </span>
                </div>
                <div
                  className="font-extralight"
                  style={{
                    fontSize: 'clamp(20px, 3.5vw, 40px)',
                    color: 'rgba(245,240,232,0.5)',
                    letterSpacing: '0.02em',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span className="ds-word" data-delay="950">wo</span>
                  <span className="ds-word" data-delay="1050">Frieden</span>
                  <span className="ds-word" data-delay="1150">wohnt</span>
                  <span className="ds-word" data-delay="1250">und</span>
                  <span className="ds-word" data-delay="1350">Klarheit</span>
                  <span className="ds-word" data-delay="1450">erwacht.</span>
                </div>
              </h1>

              {/* Side dashes */}
              <div
                className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-px opacity-0"
                style={{
                  background: 'var(--sage)',
                  animation: 'ds-appear 1s ease-out forwards',
                  animationDelay: '1.5s',
                }}
              />
              <div
                className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-px opacity-0"
                style={{
                  background: 'var(--sage)',
                  animation: 'ds-appear 1s ease-out forwards',
                  animationDelay: '1.6s',
                }}
              />
            </div>

            {/* Bottom label + branding */}
            <div className="text-center flex flex-col items-center gap-4">
              <div
                className="w-14 h-px mx-auto"
                style={{ background: 'linear-gradient(90deg, transparent, var(--sage), transparent)', opacity: 0.3 }}
              />
              <p
                className="font-mono font-light uppercase"
                style={{ color: 'rgba(245,240,232,0.4)', letterSpacing: '0.25em', fontSize: 10 }}
              >
                <span className="ds-word" data-delay="600">Beobachte,</span>
                <span className="ds-word" data-delay="750">akzeptiere,</span>
                <span className="ds-word" data-delay="880">lass</span>
                <span className="ds-word" data-delay="980">los.</span>
              </p>

              {/* Prana branding */}
              <div
                className="opacity-0 flex flex-col items-center gap-1"
                style={{ animation: 'ds-appear 1s ease-out forwards', animationDelay: '1.1s' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 5vw, 44px)',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    color: 'var(--cream)',
                    textTransform: 'uppercase',
                  }}
                >
                  Prana
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    color: 'var(--sage)',
                  }}
                >
                  studio · bremen
                </span>
              </div>

              {/* Progress bar */}
              <motion.div
                className="h-px rounded-full"
                style={{ background: 'var(--gold)', width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1.6, ease: [0.4, 0, 0.6, 1] }}
              />
            </div>
          </div>

          {/* Mouse gradient */}
          <div
            id="ds-mouse"
            className="w-72 h-72 blur-3xl"
            style={{ left: mouseGradient.left, top: mouseGradient.top, opacity: mouseGradient.opacity }}
          />

          {/* Ripples */}
          {ripples.map(r => (
            <div key={r.id} className="ds-ripple" style={{ left: r.x, top: r.y }} />
          ))}

          {/* Bottom progress line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ background: 'var(--gold)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.7, ease: [0.4, 0, 0.6, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DigitalSerenity;
