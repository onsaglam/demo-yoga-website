"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Beautiful fallback yoga image
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=90&fit=crop";

const CACHE_KEY = "prana_fal_yoga_image";

export default function FalImageBreak() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    // Try localStorage cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        setImageUrl(cached);
        setGenerated(true);
        return;
      }
    } catch {/* ignore */}

    // Generate via fal.ai
    setLoading(true);
    fetch("/api/generate-image", { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.imageUrl) {
          setImageUrl(data.imageUrl);
          setGenerated(true);
          try { localStorage.setItem(CACHE_KEY, data.imageUrl); } catch {/* ignore */}
        } else {
          setImageUrl(FALLBACK_IMAGE);
        }
      })
      .catch(() => setImageUrl(FALLBACK_IMAGE))
      .finally(() => setLoading(false));
  }, []);

  const displayUrl = imageUrl || FALLBACK_IMAGE;

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "85vh", minHeight: 520 }}
      aria-label="Yoga Philosophie"
    >
      {/* Image with overlay */}
      <div className="absolute inset-0">
        {loading ? (
          /* Loading skeleton */
          <div className="w-full h-full animate-pulse" style={{ background: "linear-gradient(135deg, #1a1f1a 0%, #242924 50%, #1a1f1a 100%)" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 border border-[var(--gold)] rounded-full border-t-transparent mx-auto mb-4"
                />
                <p className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.3em] uppercase text-[var(--sage)]">
                  KI generiert Bild…
                </p>
                <p className="font-[family-name:var(--font-body)] text-[10px] text-[var(--muted)] mt-2">
                  fal.ai · Flux Schnell
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Image
            src={displayUrl}
            alt="Yoga Praxis – atmosphärisches Bild"
            fill
            className="object-cover"
            unoptimized
          />
        )}
      </div>

      {!loading && (
        <>
          {/* Gradient overlay — stronger on mobile */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,14,10,0.6) 0%, rgba(10,14,10,0.75) 50%, rgba(10,14,10,0.9) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(to right, rgba(10,14,10,0.85) 0%, rgba(10,14,10,0.4) 55%, rgba(10,14,10,0.1) 100%)",
            }}
          />

          {/* Content — centered on mobile, left on desktop */}
          <div className="relative z-10 h-full flex items-end sm:items-center px-4 sm:px-8 lg:px-20 pb-10 sm:pb-0">
            <div className="max-w-[580px] w-full">
              {generated && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                  <span className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]">
                    KI-Bild · fal.ai Flux
                  </span>
                </motion.div>
              )}

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-[family-name:var(--font-display)] font-light text-[var(--cream)] leading-[1.1] mb-6"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                Stärke aus der
                <br />
                <em className="italic" style={{ color: "var(--gold)" }}>inneren Stille</em>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="font-[family-name:var(--font-body)] text-[15px] font-light leading-[1.85] mb-8"
                style={{ color: "rgba(245,240,232,0.65)" }}
              >
                Im Prana Studio verbinden wir jahrtausendealte Weisheit mit moderner
                Praxis. Jede Stunde ist eine Einladung, tiefer in dich selbst zu
                schauen – und stärker herauszukommen.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="#kontakt"
                className="inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-[11px] tracking-[0.18em] uppercase font-semibold py-3.5 px-8 rounded-[var(--radius-md)] transition-all duration-300"
                style={{ background: "var(--gold)", color: "var(--forest)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--cream)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(201,168,76,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Gratis Probestunde
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
