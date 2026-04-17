"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";
import { ScrollImage } from "./scroll-image";
import { ArrowUpRight } from "lucide-react";

export function ServicesStrip() {
  return (
    <div className="grid gap-px bg-ink-200 md:grid-cols-2 lg:grid-cols-3 border border-ink-200 rounded-2xl overflow-hidden">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={i * 0.05}>
          <Link
            href={`/services#${s.id}`}
            className="group relative block bg-cream-50 p-7 md:p-9 h-full transition hover:bg-white"
          >
            <div className="flex items-start justify-between">
              <div className="font-display text-xs uppercase tracking-[0.28em] text-ember-500">
                0{i + 1}
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-400 transition group-hover:text-ink-950 group-hover:rotate-45" />
            </div>
            <div className="serif text-2xl md:text-3xl mt-6 text-ink-950 leading-tight text-balance">
              {s.name}
            </div>
            <p className="mt-4 text-[15px] text-ink-600 leading-relaxed max-w-sm">{s.blurb}</p>
            <div className="mt-8 -mx-7 md:-mx-9 -mb-7 md:-mb-9">
              <ScrollImage
                src={s.image}
                alt={s.name}
                aspect="aspect-[16/10]"
                rounded="rounded-none"
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
