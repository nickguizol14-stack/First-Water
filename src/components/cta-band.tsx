"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gallery } from "@/lib/data";

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
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-35 will-change-transform">
        <Image src={gallery.craft} alt="" fill sizes="100vw" className="object-cover img-industrial" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tar-950/70 via-tar-950/85 to-tar-950" />
      <div className="h-[3px] hivis-stripe" />
      <div className="container-x py-28 md:py-36">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-hivis-500" />
          <span className="eyebrow">Start your project</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance"
          style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)" }}
        >
          {title}
        </motion.h2>
        <p className="mt-6 text-lg text-white/65 max-w-2xl">{subtitle}</p>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href="tel:+12145550123" className="btn-ghost">
            Call (214) 555-0123
          </a>
        </div>
      </div>
      <div className="h-[3px] hivis-stripe" />
    </section>
  );
}
