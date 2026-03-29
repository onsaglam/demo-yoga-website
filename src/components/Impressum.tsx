"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_OUT_QUINT } from "@/lib/motion";

export default function Impressum() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="impressum"
      aria-label="Impressum"
      className="bg-[var(--forest)] border-t border-[var(--sage-15)]"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="impressum-content"
          className="flex items-center gap-2.5 font-[family-name:var(--font-body)] text-[11px] tracking-[0.25em] uppercase text-[var(--muted)] hover:text-[var(--sage)] transition-colors duration-200 bg-transparent border-0"
        >
          <span>Impressum & Rechtliches</span>
          <span
            className="inline-block transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              id="impressum-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_QUINT }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-10 pb-4">
                {/* Impressum */}
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-[400] text-[var(--cream)] mb-5">
                    Impressum
                  </h3>
                  <div className="font-[family-name:var(--font-body)] text-[13px] font-light leading-[1.9] text-[var(--cream-70)] space-y-1">
                    <p className="font-medium text-[var(--cream)]">Prana Studio Bremen GmbH</p>
                    <p>28203 Bremen</p>
                    <br />
                    <p className="font-medium text-[var(--cream)]">Geschäftsführerin:</p>
                    <p>Lena Schmidt</p>
                    <br />
                    <p className="font-medium text-[var(--cream)]">Handelsregister:</p>
                    <p>Amtsgericht Bremen · HRB 12345 HB</p>
                    <br />
                    <p className="font-medium text-[var(--cream)]">USt-IdNr.:</p>
                    <p>DE 123 456 789</p>
                    <br />
                    <p className="font-medium text-[var(--cream)]">Kontakt:</p>
                    <p>Tel: +49 421 000 0000</p>
                    <p>info@pranastudio-bremen.de</p>
                  </div>
                </div>

                {/* Datenschutz */}
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-[400] text-[var(--cream)] mb-5">
                    Datenschutz
                  </h3>
                  <div className="font-[family-name:var(--font-body)] text-[13px] font-light leading-[1.9] text-[var(--cream-70)]">
                    <p>Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).</p>
                    <br />
                    <p className="font-medium text-[var(--cream)]">Verantwortlich:</p>
                    <p>Lena Schmidt</p>
                    <p>Prana Studio Bremen GmbH</p>
                    <br />
                    <p>Kontaktaufnahmen per E-Mail werden nur zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.</p>
                    <br />
                    <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten.</p>
                  </div>
                </div>

                {/* Yogalehrerin */}
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-[400] text-[var(--cream)] mb-5">
                    Über die Leiterin
                  </h3>
                  <div className="font-[family-name:var(--font-body)] text-[13px] font-light leading-[1.9] text-[var(--cream-70)]">
                    <p className="font-medium text-[var(--cream)]">Lena Schmidt</p>
                    <p>Yogalehrerin & Gründerin</p>
                    <br />
                    <p className="font-medium text-[var(--cream)]">Ausbildungen:</p>
                    <p>200h RYT – Yoga Alliance (2013)</p>
                    <p>300h RYT – Ashtanga & Vinyasa (2016)</p>
                    <p>Yin Yoga Zertifikat (2018)</p>
                    <p>Kinderyoga Ausbildung (2020)</p>
                    <br />
                    <p className="font-medium text-[var(--cream)]">Mitgliedschaften:</p>
                    <p>Yoga Alliance International</p>
                    <p>Berufsverband der Yogalehrenden in Deutschland (BYD)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
