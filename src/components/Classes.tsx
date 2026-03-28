"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CardContainer, CardItem } from "@/components/ui/ThreeDCard";
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
      className="py-[80px] lg:py-[112px] overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--forest) 0%, #161b16 100%)" }}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-[56px] lg:mb-[80px]" stagger={0.1}>
          <motion.span
            variants={fadeUp}
            className="block mb-5 font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] text-[var(--sage)] uppercase"
          >
            Unser Angebot
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-[clamp(34px,6vw,76px)] font-light leading-[1.05] text-[var(--cream)]"
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

        {/* 3D Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {yogaClasses.map((cls, i) => {
            const isSage = cls.accentColor === "sage";
            const accentColor = isSage ? "var(--sage)" : "var(--gold)";
            const accentRgba = isSage ? "rgba(138,158,126,0.5)" : "rgba(201,168,76,0.5)";
            const accentBg = isSage ? "rgba(138,158,126,0.15)" : "rgba(201,168,76,0.12)";
            const accentBorder = isSage ? "rgba(138,158,126,0.4)" : "rgba(201,168,76,0.35)";

            return (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: EASE_OUT_QUINT }}
              >
                <CardContainer
                  containerClassName="h-[400px] sm:h-[450px] lg:h-[500px] cursor-pointer group"
                  className="relative w-full h-full rounded-[14px]"
                >
                  {/* Image + gradient — clipped at card bounds */}
                  <div className="absolute inset-0 rounded-[14px] overflow-hidden">
                    <Image
                      src={cls.imageUrl}
                      alt={`${cls.name} Kurs in Prana Studio Bremen`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    {/* Base gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,12,8,0.97) 0%, rgba(8,12,8,0.6) 50%, rgba(8,12,8,0.1) 100%)",
                      }}
                    />
                    {/* Subtle color wash from accent */}
                    <div
                      className="absolute inset-0 opacity-15 mix-blend-color"
                      style={{
                        background: isSage
                          ? "linear-gradient(135deg, #4a6741, #2d5a27)"
                          : "linear-gradient(135deg, #8a6428, #b8860b)",
                      }}
                    />
                  </div>

                  {/* Default border */}
                  <div
                    className="absolute inset-0 rounded-[14px]"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(138,158,126,0.12)" }}
                  />

                  {/* Hover glow border */}
                  <div
                    className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      boxShadow: `inset 0 0 0 1px ${accentRgba}, 0 8px 40px rgba(0,0,0,0.4)`,
                    }}
                  />

                  {/* Content — floats above the background in 3D space */}
                  <CardItem
                    translateZ={50}
                    className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 pb-5 sm:pb-6 pt-24"
                  >
                    {/* Type label */}
                    <p
                      className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.35em] uppercase mb-2"
                      style={{ color: accentColor }}
                    >
                      {cls.type}
                    </p>

                    {/* Class name */}
                    <h3 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,30px)] font-light text-[var(--cream)] leading-tight mb-3">
                      {cls.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-[family-name:var(--font-body)] text-[13px] font-light leading-[1.65] mb-5 line-clamp-2"
                      style={{ color: "rgba(245,240,232,0.62)" }}
                    >
                      {cls.description}
                    </p>

                    {/* Badges + CTA */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="font-[family-name:var(--font-body)] text-[9px] px-3 py-1.5 rounded-full tracking-[0.12em] uppercase"
                        style={{
                          background: accentBg,
                          border: `1px solid ${accentBorder}`,
                          color: accentColor,
                        }}
                      >
                        {LEVEL_ICONS[cls.level]} {cls.level}
                      </span>
                      <span
                        className="font-[family-name:var(--font-body)] text-[9px] px-3 py-1.5 rounded-full tracking-[0.12em]"
                        style={{
                          background: "rgba(245,240,232,0.08)",
                          color: "rgba(245,240,232,0.55)",
                        }}
                      >
                        {cls.duration} Min
                      </span>
                      <a
                        href="#kontakt"
                        className="ml-auto font-[family-name:var(--font-body)] text-[9px] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full transition-all duration-200 no-underline font-semibold"
                        style={{
                          background: accentColor,
                          color: "var(--forest)",
                        }}
                      >
                        Buchen →
                      </a>
                    </div>
                  </CardItem>

                  {/* Accent line — highest Z layer */}
                  <CardItem
                    translateZ={70}
                    className="absolute bottom-0 left-5 right-5 h-[1.5px] rounded-full"
                    style={{
                      background: isSage
                        ? "linear-gradient(90deg, transparent, var(--sage), transparent)"
                        : "linear-gradient(90deg, transparent, var(--gold), transparent)",
                    }}
                  >
                    <span />
                  </CardItem>
                </CardContainer>
              </motion.div>
            );
          })}
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
