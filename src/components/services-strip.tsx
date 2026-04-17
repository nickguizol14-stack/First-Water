"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";
import { ScrollImage } from "./scroll-image";
import { ArrowUpRight } from "lucide-react";

export function ServicesStrip() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-white/10">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={i * 0.05}>
          <Link
            href={`/services#${s.id}`}
            className="group relative block p-8 md:p-10 h-full border-r border-b border-white/10 -mr-px -mb-px transition hover:bg-white/[0.03]"
          >
            <div className="flex items-start justify-between">
              <div className="mono text-[11px] tracking-[0.24em] text-hivis-500 tabular-nums">
                0{i + 1} / {String(services.length).padStart(2, "0")}
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-hivis-500 group-hover:rotate-45" />
            </div>
            <div className="font-display font-extrabold uppercase text-2xl md:text-3xl mt-8 text-white leading-tight">
              {s.name}
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">{s.blurb}</p>
            <div className="mt-8 -mx-8 md:-mx-10 -mb-8 md:-mb-10">
              <ScrollImage
                src={s.image}
                alt={s.name}
                aspect="aspect-[16/10]"
                sizes="(min-width: 1024px) 33vw, 100vw"
                parallax={4}
                reveal="clip-up"
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
