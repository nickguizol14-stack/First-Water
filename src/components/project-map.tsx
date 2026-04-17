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
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-ink-200 bg-cream-100">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(11,12,14,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,12,14,0.04)_1px,transparent_1px)] [background-size:44px_44px]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d="M8,52 L12,36 L22,28 L36,22 L52,18 L66,22 L78,26 L86,32 L92,46 L92,60 L84,72 L70,78 L56,82 L42,82 L28,76 L16,66 Z"
          fill="rgba(11,12,14,0.03)"
          stroke="rgba(11,12,14,0.16)"
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
              <span className="relative block h-2.5 w-2.5 rounded-full bg-ember-500 ring-4 ring-ember-500/15" />
            </div>
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
              <div className="text-xs bg-ink-950 text-cream-50 rounded-md px-2.5 py-1.5">
                <span className="font-medium">{p.name}</span>
                <span className="text-cream-50/60 ml-2">{p.location}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
      <div className="absolute bottom-4 left-4 text-xs text-ink-500">
        {projects.length}+ projects across the Southwest corridor
      </div>
    </div>
  );
}
