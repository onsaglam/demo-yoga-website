"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const contactInfo: ContactInfo[] = [
  { icon: <MapPin size={18} aria-hidden="true" />, title: "Adresse", content: "28203 Bremen" },
  { icon: <Phone size={18} aria-hidden="true" />, title: "Telefon", content: "+49 421 000 0000" },
  { icon: <Mail size={18} aria-hidden="true" />, title: "E-Mail", content: "info@pranastudio-bremen.de" },
  { icon: <Clock size={18} aria-hidden="true" />, title: "Öffnungszeiten", content: "Mo–Fr: 06:30 – 21:00 Uhr\nSa–So: 08:00 – 18:00 Uhr" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    // Light section — cream background
    <section
      id="kontakt"
      aria-label="Kontakt"
      className="bg-[var(--cream)] py-[72px] lg:py-[96px]"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-[48px] lg:mb-[72px]" stagger={0.1}>
          <motion.span
            variants={fadeUp}
            className="block mb-5 font-[family-name:var(--font-body)] text-[11px] tracking-[0.35em] text-[var(--sage)] uppercase"
          >
            Komm zu uns
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-[clamp(34px,6vw,72px)] font-light leading-[1.1] text-[var(--forest)]"
          >
            Dein erster Schritt
            <br />
            <em className="italic text-[var(--sage)]">beginnt hier</em>
          </motion.h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          {/* Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {sent ? (
              <div className="text-center py-20">
                <div className="font-[family-name:var(--font-display)] text-[56px] mb-4">🌿</div>
                <h3 className="font-[family-name:var(--font-display)] text-[32px] font-light text-[var(--forest)] mb-3">
                  Danke, {form.name}!
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[15px] font-light text-[var(--muted)] leading-[1.65]">
                  Wir melden uns innerhalb von 24 Stunden bei dir. Wir freuen uns, dich bald auf der Matte zu sehen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Vor- & Nachname</label>
                    <input id="name" className="form-input" type="text" placeholder="Vor- & Nachname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">E-Mail-Adresse</label>
                    <input id="email" className="form-input" type="email" placeholder="E-Mail-Adresse" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Telefonnummer</label>
                  <input id="phone" className="form-input" type="tel" placeholder="Telefonnummer (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="course" className="sr-only">Kursauswahl</label>
                  <select
                    id="course"
                    className="form-input"
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    style={{ appearance: "none" }}
                  >
                    <option value="" disabled>Welcher Kurs interessiert dich?</option>
                    <option value="morgenfluss">Morgenfluss (Vinyasa)</option>
                    <option value="power">Power Yoga</option>
                    <option value="yin">Yin Yoga</option>
                    <option value="ashtanga">Ashtanga</option>
                    <option value="restorative">Restorative</option>
                    <option value="meditation">Abend-Meditation</option>
                    <option value="unsicher">Ich bin noch unsicher</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Nachricht</label>
                  <textarea
                    id="message"
                    className="form-input resize-y"
                    placeholder="Deine Nachricht (optional)"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <Button variant="filled" size="lg" type="submit" dark={false} className="mt-2 w-full justify-center bg-[var(--sage)] text-[var(--forest)] hover:bg-[var(--forest)] hover:text-[var(--cream)]">
                  Nachricht senden
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 items-start px-6 py-5 bg-[var(--forest)]/4 border border-[var(--forest)]/10 rounded-[var(--radius-md)]"
              >
                <div className="text-[var(--sage)] flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase mb-1.5">
                    {item.title}
                  </div>
                  <div className="font-[family-name:var(--font-body)] text-[14px] font-light text-[var(--forest)] leading-[1.65] whitespace-pre-line">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="h-[140px] bg-[var(--forest)]/5 border border-[var(--forest)]/10 rounded-[var(--radius-md)] flex items-center justify-center overflow-hidden relative">
              <div className="text-center">
                <MapPin className="text-[var(--sage)] w-6 h-6 mx-auto mb-2" aria-hidden="true" />
                <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--muted)] tracking-[0.1em]">
                  Ostertor · Bremen
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-4 sm:gap-5">
              {[
                { label: "@pranastudiobremen", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
                { label: "Prana Studio Bremen", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex gap-2.5 items-center text-[var(--muted)] text-[13px] hover:text-[var(--forest)] transition-colors duration-200 no-underline font-[family-name:var(--font-body)]"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
