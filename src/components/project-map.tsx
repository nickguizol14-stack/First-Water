"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

function project([lat, lng]: [number, number]) {
  const minLng = -125;
  const maxLng = -66;
  const minLat = 24;
  const maxLat = 50;
  const x = ((lng - minLng) / (maxLng - minLng)) * 100;
  const y = 100 - ((lat - minLat) / (maxLat - minLat)) * 100;
  return { x, y };
}

export function ProjectMap() {
  return (
    <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-tar-900">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d="M8,52 L12,36 L22,28 L36,22 L52,18 L66,22 L78,26 L86,32 L92,46 L92,60 L84,72 L70,78 L56,82 L42,82 L28,76 L16,66 Z"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(245,158,11,0.35)"
          strokeWidth="0.25"
          strokeDasharray="0.8 0.8"
        />
      </svg>
      <div className="absolute top-4 left-4 mono text-[11px] uppercase tracking-[0.22em] text-white/55 flex items-center gap-3">
        <span className="h-px w-8 bg-hivis-500" /> Southwest Footprint
      </div>
      {projects.map((p, i) => {
        const { x, y } = project(p.coords);
        return (
          <motion.div
            key={p.slug}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group absolute"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-hivis-500/30 animate-ping" />
              <span className="relative block h-2.5 w-2.5 rounded-full bg-hivis-500 ring-4 ring-hivis-500/15" />
            </div>
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
              <div className="mono text-[11px] bg-tar-950 border border-white/15 px-2.5 py-1.5 uppercase tracking-[0.18em]">
                <span className="text-white">{p.name}</span>
                <span className="text-white/45 ml-2">{p.location}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
      <div className="absolute bottom-4 left-4 mono text-[11px] uppercase tracking-[0.2em] text-white/50">
        {projects.length}+ active pins
      </div>
    </div>
  );
}
