"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Comp = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: Comp === "span" ? "inline-block" : undefined }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
