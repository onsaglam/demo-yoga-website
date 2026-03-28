"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  stagger = 0.12,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
