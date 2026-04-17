"use client";

import Link from "next/link";
import { sectors } from "@/lib/data";
import { Reveal } from "./reveal";
import { ScrollImage } from "./scroll-image";
import { ArrowUpRight } from "lucide-react";

export function SectorCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {sectors.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.04}>
          <Link href={`/sectors/${s.slug}`} className="group block">
            <div className="relative">
              <ScrollImage
                src={s.image}
                alt={s.name}
                aspect="aspect-[5/6]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                parallax={6}
                overlay
              />
              <div className="absolute top-4 left-4 mono text-[11px] text-white/70 tabular-nums uppercase tracking-[0.22em]">
                — Sector 0{i + 1}
              </div>
            </div>
            <div className="mt-5 border-t border-white/10 pt-5 flex items-start justify-between gap-4">
              <div>
                <div className="font-display font-extrabold uppercase text-xl md:text-2xl text-white leading-tight">
                  {s.name}
                </div>
                <p className="mt-3 text-sm text-white/55 max-w-sm leading-relaxed">{s.summary}</p>
              </div>
              <div className="mt-1 h-9 w-9 shrink-0 border border-white/20 flex items-center justify-center transition group-hover:bg-hivis-500 group-hover:border-hivis-500 group-hover:text-tar-950">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
