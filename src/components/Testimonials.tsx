"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/motion";
import { testimonials, type Testimonial } from "@/data/testimonials";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="min-w-[300px] md:min-w-[320px] bg-[rgba(36,41,36,0.6)] border border-[var(--sage-15)] rounded-[var(--radius-md)] px-7 py-7 mr-4 flex-shrink-0">
      <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} von 5 Sternen`}>
        {Array.from({ length: t.stars }).map((_, i) => (
          <span key={i} className="text-[var(--gold)] text-[14px]" aria-hidden="true">★</span>
        ))}
      </div>
      <blockquote className="font-[family-name:var(--font-display)] text-[18px] font-light italic leading-[1.6] text-[var(--cream-70)] mb-5">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <div>
        <div className="font-[family-name:var(--font-body)] text-[13px] font-[400] text-[var(--cream)]">
          {t.author}
        </div>
        <div className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.2em] text-[var(--sage)] uppercase mt-1">
          {t.course}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-label="Kundenstimmen"
      className="bg-[var(--surface)] py-[120px] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-16">
        <AnimatedSection stagger={0.1}>
          <motion.span
            variants={fadeUp}
            className="block mb-5 font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] text-[var(--sage)] uppercase"
          >
            Stimmen unserer Community
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-[clamp(44px,6vw,72px)] font-light leading-[1.1] text-[var(--cream)]"
          >
            Was unsere
            <br />
            <em className="italic text-[var(--sage)]">Community sagt</em>
          </motion.h2>
        </AnimatedSection>
      </div>

      {/* Row 1 — left */}
      <div className="overflow-hidden mb-4">
        <div className="marquee-left flex w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="overflow-hidden">
        <div className="marquee-right flex w-max">
          {[...testimonials.slice(4), ...testimonials.slice(4), ...testimonials.slice(4)].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
