"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE_IN_OUT, EASE_OUT_QUINT } from "@/lib/motion";

export function LogoIntro() {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const canDismiss = useRef(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("prana-intro")) {
      setDone(true);
      return;
    }

    const dismiss = () => {
      setDone(true);
      sessionStorage.setItem("prana-intro", "1");
    };

    // After 5s the intro can be dismissed by mouse move
    const readTimer = setTimeout(() => { canDismiss.current = true; }, 5000);

    // Fallback: auto-dismiss at 9s if user never moves mouse
    const fallback = setTimeout(dismiss, 9000);

    const onMove = () => { if (canDismiss.current) dismiss(); };
    window.addEventListener("mousemove", onMove);

    return () => {
      clearTimeout(readTimer);
      clearTimeout(fallback);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.9, ease: EASE_IN_OUT } }}
          aria-hidden="true"
          style={{ background: "var(--forest)" }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(138,158,126,0.06) 0%, transparent 70%)" }} />

          {/* Logo */}
          <motion.div
            className="relative text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.h1
              className="font-[family-name:var(--font-display)] font-light uppercase"
              style={{ fontSize: "clamp(56px,12vw,96px)", color: "var(--cream)" }}
              initial={{ letterSpacing: "0.6em", opacity: 0 }}
              animate={{ letterSpacing: "0.15em", opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE_OUT_QUINT }}
            >
              Prana
            </motion.h1>
            <motion.p
              className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.5em] uppercase"
              style={{ color: "var(--sage)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE_OUT_QUINT }}
            >
              studio · bremen
            </motion.p>

            {/* Horizontal line animation */}
            <motion.div
              className="mx-auto mt-8"
              style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--sage), transparent)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT_QUINT }}
            />
          </motion.div>

          {/* Progress line at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ background: "var(--gold)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.0, ease: [0.4, 0, 0.6, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
