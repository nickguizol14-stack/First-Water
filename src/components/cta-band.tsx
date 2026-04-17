"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function CtaBand({
  title = "Got a lot, a runway, or a corridor to pave?",
  subtitle = "Scope, estimate, and schedule within a week. Let's walk the site.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink-950 text-cream-50">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-35 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1488404890693-cc066391d1e5?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
      <div className="container-x py-28 md:py-36 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="serif font-medium tracking-[-0.02em] text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] text-balance"
        >
          {title}
        </motion.h2>
        <p className="mt-6 text-lg md:text-xl text-cream-50/70 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-cream-50 hover:text-ink-950"
          >
            Request a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href="tel:+12145550123" className="btn-dark-ghost">
            Call (214) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
}
