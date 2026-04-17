"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspect?: string;
  parallax?: number;
  reveal?: "clip-up" | "clip-down" | "fade" | "scale";
  overlay?: boolean;
  industrial?: boolean;
};

export function ScrollImage({
  src,
  alt,
  priority,
  sizes = "100vw",
  className = "",
  aspect = "aspect-[16/10]",
  parallax = 8,
  reveal = "clip-up",
  overlay = false,
  industrial = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced || parallax === 0 ? ["0%", "0%"] : [`-${parallax}%`, `${parallax}%`]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.04, 1.1]);

  const clipInitial =
    reveal === "clip-down"
      ? "inset(0% 0% 100% 0%)"
      : reveal === "clip-up"
      ? "inset(100% 0% 0% 0%)"
      : "inset(0% 0% 0% 0%)";

  const initial: Record<string, unknown> = { clipPath: clipInitial };
  if (reveal === "fade") {
    initial.opacity = 0;
    initial.clipPath = "inset(0% 0% 0% 0%)";
  } else if (reveal === "scale") {
    initial.opacity = 0;
    initial.scale = 1.12;
    initial.clipPath = "inset(0% 0% 0% 0%)";
  }

  return (
    <motion.div
      ref={ref}
      initial={initial as any}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden ${aspect} ${className}`}
    >
      <motion.div
        style={{ y: prefersReduced ? undefined : y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${industrial ? "img-industrial" : ""}`}
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-tar-950/85 via-tar-950/20 to-transparent" />
      )}
    </motion.div>
  );
}
