"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const filters: { id: Project["sector"] | "all"; label: string }[] = [
  { id: "all", label: "All Projects" },
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
      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] border transition ${
              active === f.id
                ? "bg-ember-500 border-ember-500 text-asphalt-950"
                : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-asphalt-800"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={p.hero}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-asphalt-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.24em] bg-black/50 backdrop-blur px-3 py-1 rounded-full">
                    {p.sectorLabel}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-white/60 text-xs uppercase tracking-[0.18em] mb-1">
                          {p.location}
                        </div>
                        <div className="font-display text-2xl leading-tight text-balance">
                          {p.name}
                        </div>
                      </div>
                      <div className="mt-1 h-9 w-9 shrink-0 rounded-full border border-white/20 flex items-center justify-center transition group-hover:bg-ember-500 group-hover:border-ember-500 group-hover:text-asphalt-950">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.serviceTypes.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] uppercase tracking-[0.2em] text-white/70 border border-white/15 px-2 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
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
