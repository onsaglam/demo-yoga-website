"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp, EASE_OUT_QUINT } from "@/lib/motion";
import { instructors } from "@/data/instructors";

export default function Instructors() {
  return (
    <section id="trainer" aria-label="Trainer" className="py-[80px] lg:py-[120px]" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <AnimatedSection stagger={0.1}>
            <motion.span variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px" style={{ background: "var(--sage)" }} />
              <span className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] uppercase" style={{ color: "var(--sage)" }}>Dein Team</span>
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] font-light leading-[1.1]"
              style={{ fontSize: "clamp(44px,6vw,72px)", color: "var(--cream)", letterSpacing: "-0.01em" }}
            >
              Mit Leidenschaft
              <br />
              <em className="italic" style={{ color: "var(--sage)" }}>für dich</em>
            </motion.h2>
          </AnimatedSection>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-body)] text-[15px] font-light leading-[1.75] max-w-[320px]"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            Jeder unserer Trainer bringt jahrelange Erfahrung und echte Leidenschaft für Yoga mit.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {instructors.map((instructor, i) => (
            <motion.article
              key={instructor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_OUT_QUINT }}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] flex flex-col"
              style={{ background: "rgba(26,31,26,0.6)", border: "1px solid rgba(138,158,126,0.1)" }}
            >
              {/* Photo */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={instructor.imageUrl}
                  alt={`${instructor.name}, ${instructor.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(26,31,26,0.9) 100%)" }} />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-[24px] font-[400] leading-none" style={{ color: "var(--cream)" }}>
                    {instructor.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.1em] mt-1" style={{ color: "var(--sage)" }}>
                    {instructor.title}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {instructor.specialties.map(s => (
                    <span
                      key={s}
                      className="font-[family-name:var(--font-body)] text-[9px] px-2.5 py-1 rounded-full tracking-[0.1em] uppercase"
                      style={{ background: "rgba(138,158,126,0.12)", color: "var(--sage)", border: "1px solid rgba(138,158,126,0.2)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-[family-name:var(--font-body)] text-[13px] font-light leading-[1.65] flex-1" style={{ color: "rgba(245,240,232,0.55)" }}>
                  {instructor.bio}
                </p>
                <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid rgba(138,158,126,0.1)" }}>
                  <div className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                    {instructor.certifications[0]}
                  </div>
                  <a
                    href={instructor.instagram}
                    aria-label={`${instructor.name} auf Instagram`}
                    className="transition-colors duration-200"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
