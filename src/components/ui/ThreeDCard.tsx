"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type MouseEnterCtx = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const MouseEnterContext = createContext<MouseEnterCtx | undefined>(undefined);

function useMouseEnter() {
  const ctx = useContext(MouseEnterContext);
  if (!ctx) throw new Error("CardItem must be used inside CardContainer");
  return ctx;
}

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left - r.width / 2) / r.width) * 14;
    const y = ((e.clientY - r.top - r.height / 2) / r.height) * 14;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  }

  function onLeave() {
    if (!ref.current) return;
    setEntered(false);
    ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  }

  return (
    <MouseEnterContext.Provider value={[entered, setEntered]}>
      <div className={containerClassName} style={{ perspective: "1000px" }}>
        <div
          ref={ref}
          className={className}
          onMouseEnter={() => setEntered(true)}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.15s ease-out",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardItem({
  children,
  className,
  translateZ = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = entered
      ? `translateZ(${translateZ}px)`
      : "translateZ(0px)";
  }, [entered, translateZ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
}
