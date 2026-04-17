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
            <ScrollImage
              src={s.image}
              alt={s.name}
              aspect="aspect-[5/6]"
              rounded="rounded-2xl"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              parallax={6}
              overlay
            />
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <div className="serif text-2xl md:text-[26px] text-ink-950 leading-tight text-balance">
                  {s.name}
                </div>
                <p className="mt-2 text-sm text-ink-600 max-w-sm leading-relaxed">{s.summary}</p>
              </div>
              <div className="mt-1 h-10 w-10 shrink-0 rounded-full border border-ink-950/20 flex items-center justify-center transition group-hover:bg-ink-950 group-hover:text-cream-50">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
