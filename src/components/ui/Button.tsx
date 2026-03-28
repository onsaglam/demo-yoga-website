"use client";

import { motion } from "framer-motion";
import { EASE_OUT_QUINT } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
  type?: "button" | "submit" | "reset";
  dark?: boolean;
}

const sizeClasses = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-8 py-3.5 text-[11px]",
  lg: "px-10 py-4 text-[12px]",
};

export function Button({
  variant,
  size = "md",
  children,
  onClick,
  href,
  className,
  disabled,
  dark = true,
  type = "button",
  ...rest
}: ButtonProps) {
  const variantClasses = {
    filled: dark
      ? "bg-[var(--gold)] text-[var(--forest)] hover:bg-[var(--cream)]"
      : "bg-[var(--forest)] text-[var(--cream)] hover:bg-[var(--sage)]",
    outline: dark
      ? "border border-[var(--cream-40)] text-[var(--cream)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
      : "border border-[var(--forest)] text-[var(--forest)] hover:border-[var(--sage)] hover:text-[var(--sage)]",
    ghost: dark
      ? "text-[var(--sage)] hover:text-[var(--cream)]"
      : "text-[var(--muted)] hover:text-[var(--forest)]",
  };

  const baseClass = cn(
    "inline-flex items-center justify-center gap-2",
    "font-[family-name:var(--font-body)] font-medium tracking-[0.1em] uppercase",
    "rounded-[var(--radius-md)] transition-colors duration-300",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: EASE_OUT_QUINT }}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: EASE_OUT_QUINT }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
