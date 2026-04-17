"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const stats = [
  { k: "4,200+", v: "Lane-miles paved" },
  { k: "1.9M", v: "Tons laid in 2025" },
  { k: "0.68", v: "EMR, 3-yr average" },
  { k: "38", v: "Years on the road" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden grain">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center animate-slow-pan"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1617886322207-6f504e7472e4?q=80&w=2400&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-asphalt-950/85 via-asphalt-950/60 to-asphalt-950" />
      <div className="container-x pt-40 pb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="eyebrow mb-5">Heavy-civil paving · DOT · FAA · Commercial</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
            We pave the miles
            <br /> that move the country.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 text-pretty">
            4,200+ lane-miles of highway, 11,000 ft of live runway, and 410 acres of commercial
            yard — paved to spec, delivered on schedule, built to outlast the warranty.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="btn-ghost">
              <PlayCircle className="h-4 w-4" /> View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-asphalt-950/60 backdrop-blur-sm">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
            >
              <div className="font-display text-3xl md:text-4xl text-white">{s.k}</div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/55 mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
