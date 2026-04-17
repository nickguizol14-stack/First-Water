"use client";

import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/data";
import { Reveal } from "./reveal";

export function SectorCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sectors.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.04}>
          <Link
            href={`/sectors/${s.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-white/10"
          >
            <div className="aspect-[5/6] relative">
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-asphalt-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-display text-2xl">{s.name}</div>
                <div className="text-white/70 text-sm mt-2 max-w-sm">{s.summary}</div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.24em] text-ember-500">
                  Explore sector →
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
