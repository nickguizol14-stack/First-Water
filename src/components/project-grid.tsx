"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { ScrollImage } from "./scroll-image";

const filters: { id: Project["sector"] | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "highway", label: "Highway" },
  { id: "airport", label: "Airport" },
  { id: "municipal", label: "Municipal" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
];

export function ProjectGrid() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.sector === active)),
    [active]
  );

  return (
    <>
      <div className="flex flex-wrap gap-0 mb-12 border border-white/10 w-fit">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`mono px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] transition border-r border-white/10 last:border-r-0 ${
              active === f.id
                ? "bg-hivis-500 text-tar-950"
                : "text-white/55 hover:text-white hover:bg-white/5"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative">
                  <ScrollImage
                    src={p.hero}
                    alt={p.name}
                    aspect="aspect-[4/5]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    parallax={5}
                    overlay
                  />
                  <div className="absolute top-4 left-4">
                    <div className="chip">
                      <span className="h-1.5 w-1.5 bg-hivis-500 mr-2" />
                      {p.sectorLabel}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 mono text-[11px] text-white/70 tabular-nums">
                    0{i + 1}
                  </div>
                </div>
                <div className="mt-5 border-t border-white/10 pt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="mono text-[11px] uppercase tracking-[0.22em] text-white/45 mb-2">
                      {p.location}
                    </div>
                    <div className="font-display font-extrabold uppercase text-xl md:text-2xl leading-tight text-white">
                      {p.name}
                    </div>
                    <div className="mono text-[11px] text-white/50 mt-3 flex gap-3 uppercase tracking-[0.18em]">
                      <span>{p.tonnage}</span>
                      <span className="text-white/20">·</span>
                      <span>{p.timeline}</span>
                    </div>
                  </div>
                  <div className="mt-1 h-9 w-9 shrink-0 border border-white/20 flex items-center justify-center transition group-hover:bg-hivis-500 group-hover:border-hivis-500 group-hover:text-tar-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
