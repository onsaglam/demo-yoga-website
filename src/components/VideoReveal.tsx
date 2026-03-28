'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VIDEO_URL = 'https://v3b.fal.media/files/b/0a940290/KveozzmBFySlOqFqhQWCP_output.mp4';

export default function VideoReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Card expands from small to full screen
  const scale = useTransform(scrollYProgress, [0, 0.75], [0.52, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.72], [24, 0]);

  // Dark overlay fades as card opens
  const darkOverlay = useTransform(scrollYProgress, [0, 0.75], [0.82, 0.38]);

  // Content fades in mid-scroll
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.35, 0.65], [28, 0]);

  // Scroll hint fades out early
  const hintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Card border fades out as it expands
  const borderOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0]);

  return (
    <section
      ref={containerRef}
      style={{ height: '230vh', position: 'relative', background: 'var(--forest)' }}
      aria-label="Prana Studio Video"
    >
      {/* Sticky viewport frame */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--forest)',
        }}
      >
        {/* Expanding video card */}
        <motion.div
          style={{
            scale,
            borderRadius,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            outline: '1px solid rgba(138,158,126,0)',
          }}
        >
          {/* Decorative border ring (visible while card is small) */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius,
              border: '1px solid rgba(138,158,126,1)',
              opacity: borderOpacity,
              zIndex: 20,
              pointerEvents: 'none',
            }}
          />

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            aria-hidden="true"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>

          {/* Cinematic dark overlay */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10,14,10,1)',
              opacity: darkOverlay,
              zIndex: 5,
            }}
          />

          {/* Bottom vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(10,14,10,0.7) 0%, transparent 50%)',
              zIndex: 6,
              pointerEvents: 'none',
            }}
          />

          {/* Scroll hint — visible at start */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: hintOpacity,
              zIndex: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              pointerEvents: 'none',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.45)',
              }}
            >
              Scrollen um zu öffnen
            </p>
            {/* Animated scroll arrow */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
            >
              <div
                style={{
                  width: 1,
                  height: 32,
                  background: 'linear-gradient(to bottom, transparent, rgba(138,158,126,0.6))',
                }}
              />
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="rgba(138,158,126,0.6)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Content overlay — fades in as card opens */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 'clamp(40px, 8vh, 80px)',
              paddingLeft: 24,
              paddingRight: 24,
              zIndex: 10,
              opacity: contentOpacity,
              pointerEvents: 'none',
            }}
          >
            {/* Decorative line */}
            <motion.div
              style={{ y: contentY }}
            >
              <div
                style={{
                  width: 48,
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                  margin: '0 auto 20px',
                }}
              />

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.45em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  textAlign: 'center',
                  marginBottom: 14,
                }}
              >
                Prana Studio · Das Erlebnis
              </p>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 5vw, 62px)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: 'var(--cream)',
                  textAlign: 'center',
                  letterSpacing: '-0.01em',
                  marginBottom: 32,
                }}
              >
                Atem. Bewegung.{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>
                  Stille.
                </em>
              </h2>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                  href="#kurse"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '13px 32px',
                    border: '1px solid rgba(245,240,232,0.25)',
                    color: 'var(--cream)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(245,240,232,0.06)',
                    backdropFilter: 'blur(8px)',
                    pointerEvents: 'auto',
                    display: 'inline-block',
                  }}
                >
                  Kurse entdecken
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
