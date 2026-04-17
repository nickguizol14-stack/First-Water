"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, PlayCircle } from "lucide-react";

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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative isolate">
      <div className="container-x pt-36 md:pt-44 pb-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px flex-1 bg-ink-200" />
          <span className="eyebrow">Est. 1988 · Southwest corridor</span>
          <span className="h-px flex-1 bg-ink-200" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="serif text-[13vw] sm:text-[12vw] md:text-[10vw] lg:text-[9.4vw] leading-[0.92] tracking-[-0.02em] text-balance text-ink-950 font-medium"
        >
          We pave the miles
          <br />
          <span className="italic text-ember-500">that move</span> the country.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-lg md:text-xl text-ink-700 leading-relaxed text-pretty">
            4,200+ lane-miles of highway. 11,000 ft of live runway. 410 acres of commercial yard —
            paved to spec, delivered on schedule, built to outlast the warranty.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Link href="/contact" className="btn-primary">
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="btn-ghost">
              <PlayCircle className="h-4 w-4" /> View Our Work
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="container-x pb-20 md:pb-28">
        <motion.div
          initial={{ clipPath: "inset(20% 10% 20% 10%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl"
        >
          <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
            <Image
              src="https://images.unsplash.com/photo-1617886322207-6f504e7472e4?q=80&w=2800&auto=format&fit=crop"
              alt="Paver laying fresh asphalt at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div style={{ opacity: fade }} className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          <div className="absolute left-6 top-6 md:left-8 md:top-8">
            <div className="chip bg-white/80 text-ink-950 border-transparent">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-500 mr-2" />
              Live project · I-35 Corridor, Waco TX
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hairline-t">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="serif text-4xl md:text-5xl tracking-tight text-ink-950">{s.k}</div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-ink-500 mt-2">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
