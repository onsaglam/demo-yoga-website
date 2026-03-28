"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/motion";

export default function About() {
  return (
    <section id="ueber-uns" aria-label="Über uns" className="py-[80px] lg:py-[120px] overflow-hidden" style={{ background: "linear-gradient(160deg, var(--cream) 0%, #ede8df 100%)" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: image composition */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative h-[280px] sm:h-[420px] lg:h-[600px]"
          >
            {/* Main large image */}
            <div className="absolute top-0 left-0 w-[75%] h-[100%] lg:h-[78%] overflow-hidden rounded-[var(--radius-lg)]" style={{ boxShadow: "0 32px 80px rgba(26,31,26,0.18)" }}>
              <Image
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=900&q=90&fit=crop&crop=center"
                alt="Prana Studio Bremen – heller Yogaraum mit Holzboden und natürlichem Licht"
                fill className="object-cover" unoptimized
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, transparent 60%, rgba(26,31,26,0.08))" }} />
            </div>

            {/* Secondary image — hidden on mobile */}
            <div className="hidden sm:block absolute bottom-0 right-0 w-[55%] h-[48%] overflow-hidden rounded-[var(--radius-lg)] rotate-[1.5deg]" style={{ boxShadow: "0 20px 60px rgba(26,31,26,0.22)" }}>
              <Image
                src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=90&fit=crop&crop=center"
                alt="Yoga Morgenpraxis bei Sonnenaufgang"
                fill className="object-cover" unoptimized
              />
            </div>

            {/* Floating quote card */}
            <div className="absolute bottom-3 sm:-bottom-4 right-2 sm:left-4 sm:right-auto z-10 rounded-[var(--radius-md)] px-4 py-3 sm:px-6 sm:py-5" style={{ background: "var(--forest)", boxShadow: "0 16px 48px rgba(0,0,0,0.35)", minWidth: 160 }}>
              <div className="font-[family-name:var(--font-display)] text-[32px] sm:text-[42px] font-light leading-none" style={{ color: "var(--gold)" }}>500+</div>
              <div className="font-[family-name:var(--font-body)] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mt-1" style={{ color: "var(--sage)" }}>Zufriedene Mitglieder</div>
            </div>

            {/* Decorative dot grid — hidden on mobile */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 opacity-25" aria-hidden="true">
              <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[0,1,2,3].map(row => [0,1,2,3].map(col => (
                  <circle key={`${row}-${col}`} cx={col*28+8} cy={row*28+8} r="2.5" fill="var(--sage)" />
                )))}
              </svg>
            </div>
          </motion.div>

          {/* Right: text */}
          <AnimatedSection stagger={0.1} delay={0.1}>
            <motion.span variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px" style={{ background: "var(--sage)" }} />
              <span className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] uppercase" style={{ color: "var(--sage)" }}>Unsere Geschichte</span>
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] font-light leading-[1.08] mb-8"
              style={{ fontSize: "clamp(40px,5vw,60px)", color: "var(--forest)", letterSpacing: "-0.01em" }}
            >
              Bremens neue
              <br />
              <em className="italic" style={{ color: "var(--sage)" }}>Stimme des Yoga</em>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-[family-name:var(--font-body)] text-[15px] font-light leading-[1.9] mb-5" style={{ color: "var(--muted)" }}>
              Seit 2019 ist Prana Studio mehr als nur ein Yoga-Studio – es ist eine Gemeinschaft, ein Zufluchtsort mitten im Herzen Bremens.
            </motion.p>
            <motion.p variants={fadeUp} className="font-[family-name:var(--font-body)] text-[15px] font-light leading-[1.9] mb-12" style={{ color: "var(--muted)" }}>
              Mit Kursen für alle Level begleiten wir dich auf deinem ganz persönlichen Weg zu mehr Stärke, Achtsamkeit und innerer Ruhe.
            </motion.p>

            {/* Feature list */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4 mb-12">
              {[
                "Zertifizierte Yogalehrerinnen & -lehrer (200h–500h RYT)",
                "Kleine Gruppen – maximal 12 Teilnehmer pro Kurs",
                "Eigene Matten, Blöcke & Hilfsmittel für alle",
              ].map(f => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-1.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "var(--sage-30)", border: "1px solid var(--sage)" }}>
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-[14px] font-light leading-[1.6]" style={{ color: "var(--muted)" }}>{f}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex gap-8 flex-wrap pt-8" style={{ borderTop: "1px solid rgba(26,31,26,0.12)" }}>
              {[
                { value: "12", label: "Trainer" },
                { value: "8", label: "Kurstypen" },
                { value: "5★", label: "Google Bewertung" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-display)] text-[40px] font-light leading-none" style={{ color: "var(--forest)" }}>{s.value}</div>
                  <div className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.22em] uppercase mt-1.5" style={{ color: "var(--muted)" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
