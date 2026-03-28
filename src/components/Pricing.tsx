"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp, EASE_OUT_QUINT } from "@/lib/motion";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Probestunde",
    price: "€0",
    period: "",
    description: "Überzeuge dich selbst – ohne Risiko.",
    features: ["1 Kurs deiner Wahl", "Alle Kurstypen verfügbar", "Keine Verpflichtung", "Matte wird gestellt"],
    cta: "Jetzt buchen",
    highlight: false,
  },
  {
    name: "Monatlich",
    price: "€89",
    period: "/ Monat",
    description: "Unbegrenzte Kurse, maximale Flexibilität.",
    features: ["Unbegrenzte Kurse", "Handtuch inklusive", "App-Zugang & Buchung", "Monatlich kündbar"],
    cta: "Mitglied werden",
    highlight: true,
    badge: "Beliebt",
  },
  {
    name: "Jährlich",
    price: "€699",
    period: "/ Jahr",
    description: "Das beste Preis-Leistungs-Verhältnis.",
    features: ["Unbegrenzte Kurse", "Persönliche Beratung (2×)", "30% gespart", "Gästekarte (2×/Monat)"],
    cta: "Jetzt sparen",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="preise" aria-label="Preise" className="py-[80px] lg:py-[120px]" style={{ background: "var(--forest)" }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">

        <AnimatedSection className="text-center mb-[72px]" stagger={0.1}>
          <motion.span variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block w-8 h-px" style={{ background: "var(--sage)" }} />
            <span className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] uppercase" style={{ color: "var(--sage)" }}>Mitgliedschaft</span>
            <span className="inline-block w-8 h-px" style={{ background: "var(--sage)" }} />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-light leading-[1.1]"
            style={{ fontSize: "clamp(34px,6vw,72px)", color: "var(--cream)", letterSpacing: "-0.01em" }}
          >
            Transparent,{" "}
            <em className="italic" style={{ color: "var(--sage)" }}>fair & flexibel</em>
          </motion.h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE_OUT_QUINT }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col rounded-[var(--radius-lg)] overflow-hidden"
              style={{
                background: plan.highlight ? "var(--surface)" : "rgba(36,41,36,0.5)",
                border: plan.highlight ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(138,158,126,0.12)",
                boxShadow: plan.highlight ? "0 0 60px rgba(201,168,76,0.08)" : "none",
              }}
            >
              {/* Top accent line */}
              {plan.highlight && (
                <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
              )}

              {plan.badge && (
                <div
                  className="absolute top-5 right-5 font-[family-name:var(--font-body)] text-[9px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <p className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.25em] uppercase mb-6" style={{ color: "var(--sage)" }}>
                  {plan.name}
                </p>

                <div className="flex items-end gap-1 mb-2">
                  <span className="font-[family-name:var(--font-display)] font-light leading-none" style={{ fontSize: "clamp(40px,8vw,56px)", color: "var(--cream)" }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="font-[family-name:var(--font-body)] text-[14px] pb-2" style={{ color: "var(--muted)" }}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="font-[family-name:var(--font-body)] text-[13px] font-light leading-[1.6] mb-8" style={{ color: "rgba(245,240,232,0.55)" }}>
                  {plan.description}
                </p>

                <div className="flex flex-col gap-3.5 mb-8 flex-1" style={{ borderTop: "1px solid rgba(138,158,126,0.12)", paddingTop: 24 }}>
                  {plan.features.map(f => (
                    <div key={f} className="flex gap-3 items-center">
                      <Check size={13} style={{ color: plan.highlight ? "var(--gold)" : "var(--sage)", flexShrink: 0 }} />
                      <span className="font-[family-name:var(--font-body)] text-[13px] font-light" style={{ color: "rgba(245,240,232,0.7)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#kontakt"
                  className="block text-center font-[family-name:var(--font-body)] text-[11px] tracking-[0.15em] uppercase font-medium py-3.5 rounded-[var(--radius-md)] transition-all duration-300"
                  style={plan.highlight
                    ? { background: "var(--gold)", color: "var(--forest)" }
                    : { background: "transparent", border: "1px solid rgba(138,158,126,0.3)", color: "var(--sage)" }
                  }
                  onMouseEnter={e => {
                    if (plan.highlight) (e.currentTarget as HTMLElement).style.background = "var(--cream)";
                    else { (e.currentTarget as HTMLElement).style.borderColor = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "var(--cream)"; (e.currentTarget as HTMLElement).style.background = "rgba(138,158,126,0.08)"; }
                  }}
                  onMouseLeave={e => {
                    if (plan.highlight) (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                    else { (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,158,126,0.3)"; (e.currentTarget as HTMLElement).style.color = "var(--sage)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 mt-14 flex-wrap"
        >
          {["Keine versteckten Kosten", "Jederzeit kündbar", "Erste Stunde immer gratis"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="var(--sage)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="font-[family-name:var(--font-body)] text-[12px] font-light tracking-[0.05em]" style={{ color: "var(--muted)" }}>{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
