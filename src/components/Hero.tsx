'use client';

const VIDEO_URL =
  'https://v3b.fal.media/files/b/0a942af5/lEu89bmGpoXjRI_fieRcV_output.mp4';

export default function Hero() {
  return (
    <div id='hero' style={{ position: 'relative', height: '100dvh', overflow: 'hidden', background: 'var(--forest)' }}>
      {/* Full-screen video background */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        disablePictureInPicture
        disableRemotePlayback
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        aria-hidden='true'
      />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,14,10,0.35) 0%, rgba(10,14,10,0.55) 60%, rgba(10,14,10,0.80) 100%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(32px,6vw,80px) clamp(20px,5vw,80px)', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 16 }}>
          Prana Studio · Bremen
        </p>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,7vw,88px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 24, maxWidth: 700 }}>
          Willkommen in deiner{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>neuen Mitte</em>
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: 'rgba(245,240,232,0.6)', maxWidth: 460, marginBottom: 36 }}>
          Yoga ist mehr als Bewegung – es ist eine Praxis für Körper, Geist und Seele. Im Prana Studio Bremen begleiten wir dich auf diesem Weg.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href='#kontakt'
            style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', background: 'var(--sage)', color: 'var(--forest)', textDecoration: 'none', borderRadius: 'var(--radius-md)', fontWeight: 500 }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--gold)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--sage)')}
          >
            Gratis Probestunde
          </a>
          <a
            href='#kurse'
            style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid rgba(138,158,126,0.4)', color: 'var(--sage)', textDecoration: 'none', borderRadius: 'var(--radius-md)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--sage)'; (e.currentTarget as HTMLElement).style.background = 'rgba(138,158,126,0.08)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(138,158,126,0.4)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            Kurse entdecken
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
          {['✦ Zertifizierte Trainer', '✦ Alle Levels willkommen', '✦ Seit 2019 in Bremen'].map((t) => (
            <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(245,240,232,0.3)', letterSpacing: '0.05em' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
