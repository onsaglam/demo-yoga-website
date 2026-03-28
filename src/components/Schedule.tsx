"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/motion";
import { scheduleData, DAYS, type DayKey } from "@/data/schedule";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<DayKey>("Mo");
  const entries = scheduleData[activeDay];

  return (
    // Light section — cream background
    <section
      id="stundenplan"
      aria-label="Stundenplan"
      className="bg-[var(--cream)] py-[96px]"
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-16" stagger={0.1}>
          <motion.span
            variants={fadeUp}
            className="block mb-5 font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] text-[var(--sage)] uppercase"
          >
            Wochenprogramm
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-[clamp(44px,6vw,72px)] font-light leading-[1.1] text-[var(--forest)]"
          >
            Dein{" "}
            <em className="italic text-[var(--sage)]">Stundenplan</em>
          </motion.h2>
        </AnimatedSection>

        {/* Day tabs */}
        <AnimatedSection className="flex gap-2 mb-10 overflow-x-auto pb-1" stagger={0.05}>
          {DAYS.map((day) => (
            <motion.button
              key={day}
              variants={fadeUp}
              onClick={() => setActiveDay(day)}
              className={`
                font-[family-name:var(--font-body)] text-[11px] font-medium tracking-[0.15em] uppercase
                px-6 py-3 border rounded-[var(--radius-md)] transition-all duration-250 whitespace-nowrap flex-shrink-0
                ${activeDay === day
                  ? "bg-[var(--sage)] border-[var(--sage)] text-[var(--forest)]"
                  : "bg-transparent border-[var(--forest)]/20 text-[var(--muted)] hover:border-[var(--sage)] hover:text-[var(--forest)]"
                }
              `}
              aria-pressed={activeDay === day}
            >
              {day}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Table */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-[var(--forest)]/10 rounded-[var(--radius-md)] overflow-hidden"
          role="table"
          aria-label={`Stundenplan für ${activeDay}`}
        >
          {/* Header row */}
          <div
            className="hidden md:grid grid-cols-[100px_1fr_160px_100px_100px_140px] gap-4 px-6 py-4 bg-[var(--forest)]/6"
            role="row"
          >
            {["Zeit", "Kurs", "Trainer", "Dauer", "Raum", ""].map((h) => (
              <span
                key={h}
                role="columnheader"
                className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase"
              >
                {h}
              </span>
            ))}
          </div>

          {entries.map((entry, i) => (
            <div
              key={i}
              role="row"
              className={`
                grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_160px_100px_100px_140px]
                gap-4 px-6 py-5 items-center
                border-t border-[var(--forest)]/8
                ${i % 2 === 0 ? "bg-[var(--forest)]/3" : ""}
                ${entry.full ? "opacity-50" : "hover:bg-[var(--sage)]/6 transition-colors duration-200"}
              `}
            >
              <span className="font-[family-name:var(--font-display)] text-[22px] font-light text-[var(--gold)]">
                {entry.time}
              </span>
              <span className="font-[family-name:var(--font-display)] text-[20px] font-[400] text-[var(--forest)]">
                {entry.course}
              </span>
              <span className="hidden md:block font-[family-name:var(--font-body)] text-[13px] text-[var(--muted)]">
                {entry.trainer}
              </span>
              <span className="hidden md:block font-[family-name:var(--font-body)] text-[12px] text-[var(--muted)]">
                {entry.duration}
              </span>
              <span className="hidden md:block font-[family-name:var(--font-body)] text-[12px] text-[var(--muted)]">
                {entry.room}
              </span>
              <div>
                {entry.full ? (
                  <span className="font-[family-name:var(--font-body)] text-[10px] px-3 py-1 border border-[var(--muted)]/30 text-[var(--muted)] rounded-full tracking-[0.1em] uppercase">
                    Ausgebucht
                  </span>
                ) : (
                  <a
                    href="#kontakt"
                    className="font-[family-name:var(--font-body)] text-[10px] px-4 py-1.5 border border-[var(--sage-30)] text-[var(--sage)] rounded-full tracking-[0.1em] uppercase hover:bg-[var(--sage)] hover:text-[var(--forest)] hover:border-[var(--sage)] transition-all duration-200"
                  >
                    Buchen
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
