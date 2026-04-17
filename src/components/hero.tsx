"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gallery } from "@/lib/data";

const stats = [
  { k: "4,200+", v: "Lane-miles paved" },
  { k: "1.9M", v: "Tons laid in 2025" },
  { k: "0.68", v: "EMR, 3-yr avg" },
  { k: "38", v: "Years on the road" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-[79px]">
      {/* Full bleed industrial background image with parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
          <Image
            src={gallery.heroMain}
            alt="First Water paving operation"
            fill
            priority
            sizes="100vw"
            className="object-cover img-industrial"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-tar-950 via-tar-950/80 to-tar-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-tar-950 via-transparent to-tar-950/40" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      <div className="container-x min-h-[92vh] flex flex-col justify-between pt-12 pb-10">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mono text-[11px] uppercase tracking-[0.26em] text-white/55"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-hivis-500 animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-hivis-500" />
          </span>
          <span>Live · I-35 Corridor · Waco TX</span>
          <span className="hidden md:inline mx-2 text-white/30">//</span>
          <span className="hidden md:inline">Southwest heavy-civil paving · Est. 1988</span>
        </motion.div>

        {/* Massive headline */}
        <div className="py-16 md:py-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-hivis-500" />
            <span className="eyebrow">Asphalt · Highways · Runways · Heavy Civil</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black uppercase leading-[0.86] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.8rem, 9.5vw, 9.5rem)" }}
          >
            We pave <br />
            <span className="inline-flex items-center gap-4 md:gap-6">
              the miles
            </span>{" "}
            <br />
            that <span className="text-hivis-500">move</span> the country.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 md:mt-12 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end"
          >
            <p className="max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
              4,200+ lane-miles of highway. 11,000 ft of live runway. 410 acres of commercial
              yard — paved to spec, delivered on schedule, built to outlast the warranty.
            </p>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="btn-ghost">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats rail */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.07 }}
                className="flex items-start gap-4"
              >
                <div className="mono text-[11px] text-hivis-500 mt-1.5 tabular-nums">
                  0{i + 1}
                </div>
                <div>
                  <div className="font-display font-black text-4xl md:text-5xl text-white tabular-nums tracking-tight">
                    {s.k}
                  </div>
                  <div className="mono text-[11px] uppercase tracking-[0.22em] text-white/50 mt-1.5">
                    {s.v}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
