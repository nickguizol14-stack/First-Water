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
      <div className="flex flex-wrap gap-1.5 mb-12">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.24em] transition ${
              active === f.id
                ? "bg-ink-950 text-cream-50"
                : "bg-transparent text-ink-500 hover:text-ink-950 border border-ink-200"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projects/${p.slug}`} className="group block">
                <ScrollImage
                  src={p.hero}
                  alt={p.name}
                  aspect="aspect-[4/5]"
                  rounded="rounded-2xl"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  parallax={6}
                  overlay
                />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-ember-500">
                      {p.sectorLabel} · {p.location}
                    </div>
                    <div className="serif text-2xl md:text-[26px] leading-tight mt-2 text-ink-950 text-balance">
                      {p.name}
                    </div>
                    <div className="mt-3 text-[12px] text-ink-500">
                      {p.tonnage} · {p.timeline}
                    </div>
                  </div>
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-full border border-ink-950/20 flex items-center justify-center transition group-hover:bg-ink-950 group-hover:text-cream-50">
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
