"use client";

import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { EASE_IN_OUT } from "@/lib/motion";

const links = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kurse", href: "#kurse" },
  { label: "Trainer", href: "#trainer" },
  { label: "Stundenplan", href: "#stundenplan" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
];

function LotusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 32 C20 32, 8 24, 8 14 C8 14, 14 18, 20 18 C26 18, 32 14, 32 14 C32 24, 20 32, 20 32Z" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 18 C20 18, 10 12, 10 6 C10 6, 15 10, 20 10 C25 10, 30 6, 30 6 C30 12, 20 18, 20 18Z" stroke="var(--sage)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="20" y1="10" x2="20" y2="32" stroke="var(--sage)" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(13,17,13,0.78)", "rgba(13,17,13,0.98)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 80], ["blur(8px)", "blur(20px)"]);
  const height = useTransform(scrollY, [0, 80], ["72px", "62px"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0.08, 0.22]);
  const bottomShadowOpacity = useTransform(scrollY, [0, 80], [0.4, 1]);
  const progressScaleX = scrollYProgress;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--gold)] focus:text-[var(--forest)] focus:rounded-[var(--radius-md)] focus:text-[11px] focus:font-medium focus:tracking-[0.1em] focus:uppercase"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: progressScaleX,
          transformOrigin: "left",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, var(--sage), var(--gold))",
          zIndex: 700,
        }}
      />

      <motion.nav
        aria-label="Hauptnavigation"
        style={{ background, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-[500]"
      >
        {/* Top gold accent line */}
        <motion.div
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 30%, rgba(201,168,76,0.6) 70%, transparent 100%)",
            opacity: bottomShadowOpacity,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
          }}
        />

        <motion.div
          style={{ height, borderBottom: `1px solid rgba(138,158,126,${borderOpacity})` }}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-14 flex items-center justify-between"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Prana Studio Bremen – Startseite">
            <LotusIcon />
            <div className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-[30px] font-semibold tracking-[0.18em] text-[var(--cream)] uppercase transition-colors duration-300 group-hover:text-[var(--gold)]">
                Prana
              </span>
              <span className="font-[family-name:var(--font-body)] text-[9px] font-light tracking-[0.45em] text-[var(--sage)] uppercase -mt-0.5">
                studio
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-[family-name:var(--font-body)] text-[11px] tracking-[0.18em] text-[var(--cream)] uppercase opacity-85 hover:opacity-100 transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <a
              href="#kontakt"
              className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 rounded-[var(--radius-md)]"
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, #e4b84a 100%)",
                color: "var(--forest)",
                fontWeight: 600,
                boxShadow: "0 2px 16px rgba(201,168,76,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(201,168,76,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(201,168,76,0.25)";
              }}
            >
              Gratis Probestunde
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--cream)] p-3 -mr-1 rounded-[var(--radius-sm)] transition-colors duration-200 hover:bg-white/5 active:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile menu overlay — z-[550] covers nav bar (z-500) fully */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: EASE_IN_OUT }}
            className="fixed inset-0 z-[550] flex flex-col"
            style={{ background: "rgba(10,14,10,0.99)", backdropFilter: "blur(16px)" }}
          >
            {/* Overlay header */}
            <div
              className="flex items-center justify-between px-5 shrink-0"
              style={{ height: "66px", borderBottom: "1px solid rgba(138,158,126,0.12)" }}
            >
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3"
                aria-label="Startseite"
              >
                <LotusIcon />
                <div className="flex flex-col leading-none">
                  <span className="font-[family-name:var(--font-display)] text-[26px] font-semibold tracking-[0.18em] text-[var(--cream)] uppercase">
                    Prana
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-[8px] font-light tracking-[0.45em] text-[var(--sage)] uppercase -mt-0.5">
                    studio
                  </span>
                </div>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--cream)] transition-colors duration-200 hover:bg-white/5"
                style={{ border: "1px solid rgba(138,158,126,0.2)" }}
                aria-label="Menü schließen"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 no-underline group"
                  style={{ borderBottom: "1px solid rgba(138,158,126,0.08)" }}
                >
                  <span className="font-[family-name:var(--font-display)] text-[28px] xs:text-[32px] sm:text-[38px] font-light text-[var(--cream)] tracking-[0.03em] group-hover:text-[var(--gold)] transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.25em] opacity-30" style={{ color: "var(--sage)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-6 pb-10 pt-4 shrink-0">
              <motion.a
                href="#kontakt"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 + 0.1, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-3 font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] uppercase py-4 rounded-[var(--radius-md)] no-underline font-semibold w-full"
                style={{ background: "var(--gold)", color: "var(--forest)" }}
              >
                Gratis Probestunde
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
