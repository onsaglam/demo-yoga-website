"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp, EASE_OUT_QUINT } from "@/lib/motion";
import { yogaClasses } from "@/data/classes";

const LEVEL_ICONS: Record<string, string> = {
  "Alle Levels": "◆",
  "Einsteiger": "●",
  "Mittelstufe": "◆◆",
  "Fortgeschrittene": "◆◆◆",
};

export default function Classes() {
  return (
    <section
      id="kurse"
      aria-label="Kurse"
      className="py-[112px] overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--forest) 0%, #161b16 100%)" }}
    >
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-[80px]" stagger={0.1}>
          <motion.span
            variants={fadeUp}
            className="block mb-5 font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] text-[var(--sage)] uppercase"
          >
            Unser Angebot
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-[clamp(44px,6vw,76px)] font-light leading-[1.05] text-[var(--cream)]"
          >
            Für dich gibt es
            <br />
            <em className="italic" style={{ color: "var(--gold)" }}>den richtigen Kurs</em>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mt-8">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--sage-30)]" />
            <span className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] text-[var(--muted)] uppercase">
              6 Kursformate · alle Level
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--sage-30)]" />
          </motion.div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {yogaClasses.map((cls, i) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: EASE_OUT_QUINT }}
              whileHover="hover"
              className="relative h-[500px] overflow-hidden cursor-pointer group"
              style={{ borderRadius: "12px" }}
            >
              {/* Image */}
              <Image
                src={cls.imageUrl}
                alt={`${cls.name} Kurs in Prana Studio Bremen`}
                fill
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                unoptimized
              />

              {/* Base color grade for vibrancy */}
              <div
                className="absolute inset-0 mix-blend-color opacity-20 transition-opacity duration-500 group-hover:opacity-10"
                style={{
                  background: cls.accentColor === "sage"
                    ? "linear-gradient(135deg, #4a6741 0%, #2d5a27 100%)"
                    : "linear-gradient(135deg, #8a6428 0%, #b8860b 100%)"
                }}
              />

              {/* Default gradient overlay */}
              <motion.div
                variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                initial="rest"
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,14,10,0.92) 0%, rgba(10,14,10,0.4) 50%, rgba(10,14,10,0.08) 100%)"
                }}
              />

              {/* Hover overlay */}
              <motion.div
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                initial="rest"
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,14,10,0.97) 0%, rgba(10,14,10,0.75) 50%, rgba(10,14,10,0.3) 100%)"
                }}
              />

              {/* Accent glow at bottom on hover */}
              <motion.div
                variants={{ rest: { opacity: 0, scaleX: 0.6 }, hover: { opacity: 1, scaleX: 1 } }}
                initial="rest"
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background: cls.accentColor === "sage"
                    ? "linear-gradient(90deg, transparent, var(--sage), transparent)"
                    : "linear-gradient(90deg, transparent, var(--gold), transparent)"
                }}
              />

              {/* Hover info panel */}
              <motion.div
                variants={{ rest: { opacity: 0, y: 20 }, hover: { opacity: 1, y: 0 } }}
                initial="rest"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-end p-8"
              >
                <p
                  className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.35em] uppercase mb-3"
                  style={{ color: cls.accentColor === "sage" ? "var(--sage)" : "var(--gold)" }}
                >
                  {cls.type}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-[36px] font-light text-[var(--cream)] mb-4 leading-[1]">
                  {cls.name}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[13.5px] font-light leading-[1.7] mb-6" style={{ color: "rgba(245,240,232,0.72)" }}>
                  {cls.description}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="font-[family-name:var(--font-body)] text-[10px] px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase"
                    style={{
                      background: cls.accentColor === "sage" ? "rgba(138,158,126,0.15)" : "rgba(201,168,76,0.12)",
                      border: `1px solid ${cls.accentColor === "sage" ? "rgba(138,158,126,0.4)" : "rgba(201,168,76,0.35)"}`,
                      color: cls.accentColor === "sage" ? "var(--sage)" : "var(--gold)",
                    }}
                  >
                    {LEVEL_ICONS[cls.level]} {cls.level}
                  </span>
                  <span
                    className="font-[family-name:var(--font-body)] text-[10px] px-3.5 py-1.5 rounded-full tracking-[0.12em]"
                    style={{ background: "rgba(245,240,232,0.08)", color: "rgba(245,240,232,0.6)" }}
                  >
                    {cls.duration} Min
                  </span>
                  <a
                    href="#kontakt"
                    className="ml-auto font-[family-name:var(--font-body)] text-[10px] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full transition-all duration-200"
                    style={{ background: cls.accentColor === "sage" ? "var(--sage)" : "var(--gold)", color: "var(--forest)", fontWeight: 600 }}
                  >
                    Buchen
                  </a>
                </div>
              </motion.div>

              {/* Default label (visible by default, hides on hover) */}
              <motion.div
                variants={{ rest: { opacity: 1, y: 0 }, hover: { opacity: 0, y: 8 } }}
                initial="rest"
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 px-7 pb-8 pt-24 bg-gradient-to-t from-[rgba(10,14,10,0.95)] to-transparent"
              >
                <p
                  className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.35em] uppercase mb-2"
                  style={{ color: cls.accentColor === "sage" ? "var(--sage)" : "var(--gold)" }}
                >
                  {cls.type}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-[28px] font-light text-[var(--cream)] leading-tight">
                  {cls.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="#stundenplan"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
            style={{ color: "var(--sage)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sage)")}
          >
            Alle Kurszeiten im Stundenplan
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
