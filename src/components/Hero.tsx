'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const VIDEO_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
  'https://v3b.fal.media/files/b/0a93e5aa/Eicud9cmZ1nTtXvq77iD9_output.mp4';

// Warm golden yoga background — used while video is collapsed
const BG_IMAGE =
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=90&fit=crop';

function HeroContent() {
  return (
    <div
      className='max-w-[1100px] mx-auto'
      style={{ color: 'var(--cream)' }}
    >
      {/* Divider */}
      <div
        className='w-20 h-px mb-8 sm:mb-12'
        style={{ background: 'linear-gradient(90deg, var(--sage), transparent)' }}
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start'>
        {/* Left */}
        <div>
          <p
            className='mb-4'
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
            }}
          >
            Prana Studio · Bremen
          </p>
          <h2
            className='mb-6'
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: 'var(--cream)',
            }}
          >
            Willkommen in deiner{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>
              neuen Mitte
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.85,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: 440,
            }}
          >
            Yoga ist mehr als Bewegung – es ist eine Praxis für Körper, Geist und
            Seele. Im Prana Studio Bremen begleiten wir dich auf diesem Weg,
            ganz gleich wo du gerade stehst.
          </p>
        </div>

        {/* Right */}
        <div className='flex flex-col gap-5'>
          {/* Quick stats */}
          <div
            className='grid grid-cols-3 gap-px rounded-[var(--radius-lg)] overflow-hidden'
            style={{ border: '1px solid rgba(138,158,126,0.15)' }}
          >
            {[
              { n: '500+', l: 'Mitglieder' },
              { n: '12', l: 'Trainer' },
              { n: '8', l: 'Kurstypen' },
            ].map((s) => (
              <div
                key={s.l}
                className='flex flex-col items-center justify-center py-4 sm:py-6'
                style={{ background: 'rgba(36,41,36,0.6)' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 5vw, 36px)',
                    fontWeight: 300,
                    color: 'var(--cream)',
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--sage)',
                    marginTop: 6,
                  }}
                >
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <a
              href='#kontakt'
              className='sm:flex-1 text-center font-medium transition-all duration-300 rounded-[var(--radius-md)]'
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                background: 'var(--sage)',
                color: 'var(--forest)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--gold)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = 'var(--sage)')
              }
            >
              Gratis Probestunde
            </a>
            <a
              href='#kurse'
              className='sm:flex-1 text-center font-medium transition-all duration-300 rounded-[var(--radius-md)]'
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                border: '1px solid rgba(138,158,126,0.3)',
                color: 'var(--sage)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--sage)';
                (e.currentTarget as HTMLElement).style.background =
                  'rgba(138,158,126,0.08)';
                (e.currentTarget as HTMLElement).style.color = 'var(--cream)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(138,158,126,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'var(--sage)';
              }}
            >
              Kurse entdecken
            </a>
          </div>

          {/* Trust badges */}
          <div className='flex gap-6 flex-wrap'>
            {[
              '✦ Zertifizierte Trainer',
              '✦ Alle Levels willkommen',
              '✦ Seit 2019 in Bremen',
            ].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'rgba(245,240,232,0.35)',
                  letterSpacing: '0.05em',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div
      id='hero'
      style={{ background: 'var(--forest)' }}
    >
      <ScrollExpandMedia
        mediaType='video'
        mediaSrc={VIDEO_URL}
        bgImageSrc={BG_IMAGE}
        bgVideoSrc={VIDEO_URL}
        title='Prana Studio'
        date='Bremen · Deutschland'
        scrollToExpand='Nach unten scrollen'
        textBlend={false}
      >
        <HeroContent />
      </ScrollExpandMedia>
    </div>
  );
}
