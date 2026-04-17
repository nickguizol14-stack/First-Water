"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

// Rough continental-US equirectangular projection for stylized map display.
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
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.10),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.05),transparent_60%),#0f0f12]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d="M8,52 L12,36 L22,28 L36,22 L52,18 L66,22 L78,26 L86,32 L92,46 L92,60 L84,72 L70,78 L56,82 L42,82 L28,76 L16,66 Z"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.2"
        />
      </svg>
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
              <span className="absolute inset-0 rounded-full bg-ember-500/30 animate-ping" />
              <span className="relative block h-3 w-3 rounded-full bg-ember-500 ring-4 ring-ember-500/20" />
            </div>
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
              <div className="text-xs bg-asphalt-950/90 border border-white/10 rounded-md px-2 py-1">
                <span className="text-white">{p.name}</span>
                <span className="text-white/50 ml-2">{p.location}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
      <div className="absolute bottom-4 left-4 text-xs text-white/50">
        {projects.length}+ projects across the Southwest corridor
      </div>
    </div>
  );
}
