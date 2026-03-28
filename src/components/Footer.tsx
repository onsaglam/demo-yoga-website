"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0c110c", borderTop: "1px solid rgba(138,158,126,0.1)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* Top: logo + nav columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-14 mb-16">

          {/* Brand */}
          <div>
            <a href="#" className="inline-flex flex-col mb-6">
              <span className="font-[family-name:var(--font-display)] text-[32px] font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--cream)" }}>
                Prana
              </span>
              <span className="font-[family-name:var(--font-body)] text-[10px] font-light tracking-[0.4em] uppercase -mt-0.5" style={{ color: "var(--sage)" }}>
                studio · bremen
              </span>
            </a>
            <p className="font-[family-name:var(--font-body)] text-[14px] font-light leading-[1.85] mb-8 max-w-[260px]" style={{ color: "rgba(245,240,232,0.4)" }}>
              Im Herzen Bremens – wo Atem, Bewegung und Stille zu einem werden.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { label: "Instagram", path: "M2 2h20v20H2z M2 2 C2 2,2 7,2 7 M17.5 6.5 h.01" },
              ].map(_ => (
                <div key="social" className="flex gap-3">
                  <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200" style={{ border: "1px solid rgba(138,158,126,0.2)", color: "var(--muted)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "var(--sage)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,158,126,0.2)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
                  </a>
                  <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200" style={{ border: "1px solid rgba(138,158,126,0.2)", color: "var(--muted)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "var(--sage)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,158,126,0.2)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--sage)" }}>Studio</h4>
            <nav className="flex flex-col gap-3">
              {[["Über uns","#ueber-uns"],["Kurse","#kurse"],["Trainer","#trainer"],["Stundenplan","#stundenplan"],["Preise","#preise"]].map(([l,h]) => (
                <a key={h} href={h} className="font-[family-name:var(--font-body)] text-[13px] font-light no-underline transition-colors duration-200" style={{ color: "rgba(245,240,232,0.45)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
                >{l}</a>
              ))}
            </nav>
          </div>

          {/* Kurse */}
          <div>
            <h4 className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--sage)" }}>Kurse</h4>
            <nav className="flex flex-col gap-3">
              {["Vinyasa Flow","Power Yoga","Yin Yoga","Ashtanga","Restorative","Meditation"].map(k => (
                <a key={k} href="#kurse" className="font-[family-name:var(--font-body)] text-[13px] font-light no-underline transition-colors duration-200" style={{ color: "rgba(245,240,232,0.45)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
                >{k}</a>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--sage)" }}>Kontakt</h4>
            <address className="not-italic flex flex-col gap-3">
              {["Ostertorsteinweg 42","28203 Bremen","","Mo–Fr  06:30 – 21:00","Sa–So  08:00 – 18:00","","+49 421 000 0000","info@pranastudio-bremen.de"].map((line, i) =>
                line === "" ? <span key={i} className="h-1" /> : (
                  <span key={i} className="font-[family-name:var(--font-body)] text-[13px] font-light" style={{ color: "rgba(245,240,232,0.45)" }}>{line}</span>
                )
              )}
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "rgba(138,158,126,0.1)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-body)] text-[11px] font-light" style={{ color: "rgba(245,240,232,0.25)" }}>
            © {year} Prana Studio Bremen GmbH · Alle Rechte vorbehalten
          </p>
          <div className="flex gap-6">
            {["Impressum","Datenschutz","AGB"].map(l => (
              <a key={l} href="#impressum" className="font-[family-name:var(--font-body)] text-[11px] font-light no-underline transition-colors duration-200" style={{ color: "rgba(245,240,232,0.25)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.25)")}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
