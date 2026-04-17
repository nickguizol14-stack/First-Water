"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "./reveal";

export function ServicesStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={i * 0.05}>
          <Link
            href={`/services#${s.id}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-asphalt-800 block"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-asphalt-950/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="font-display text-2xl">{s.name}</div>
              <div className="text-white/70 text-sm mt-2">{s.blurb}</div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
