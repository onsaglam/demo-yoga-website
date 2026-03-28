"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VIDEO_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
  "https://v3b.fal.media/files/b/0a93e5aa/Eicud9cmZ1nTtXvq77iD9_output.mp4";

export default function VideoBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: "72vh", minHeight: 480 }}
      aria-label="Yoga Atmosphäre"
    >
      {/* Parallax video */}
      <motion.div
        style={{ y, position: "absolute", inset: "-12% 0", height: "124%" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          aria-hidden="true"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </motion.div>

      {/* Multi-layer overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,14,10,0.35) 0%, rgba(10,14,10,0.55) 50%, rgba(10,14,10,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,14,10,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-px mb-10 mx-auto w-24"
            style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            Prana Studio · Das Erlebnis
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-[family-name:var(--font-display)] font-light italic leading-[1.25] text-[var(--cream)]"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            „Yoga ist nicht das, was du tust –<br />
            <em style={{ color: "var(--sage)" }}>es ist das, was du wirst."</em>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <a
              href="#kurse"
              className="font-[family-name:var(--font-body)] text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 rounded-[var(--radius-md)] transition-all duration-300 font-medium"
              style={{ background: "rgba(245,240,232,0.12)", color: "var(--cream)", border: "1px solid rgba(245,240,232,0.25)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--forest)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.12)";
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.25)";
              }}
            >
              Kurse entdecken
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="h-px mt-10 mx-auto w-24"
            style={{ background: "linear-gradient(90deg, transparent, var(--sage), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}
