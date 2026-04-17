"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Reveal } from "./reveal";

const logos = ["TxDOT", "Costco", "DFW", "Home Depot", "Port Houston", "City of Frisco"];

export function Testimonials() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.08}>
            <motion.blockquote
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-asphalt-800 p-7 h-full flex flex-col"
            >
              <div className="text-ember-500 text-4xl font-display leading-none">“</div>
              <p className="text-lg mt-2 text-white/90 flex-1">{t.quote}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="font-semibold">{t.author}</div>
                <div className="text-xs text-white/60 mt-0.5">{t.role}</div>
              </div>
            </motion.blockquote>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 opacity-70">
          {logos.map((l) => (
            <div
              key={l}
              className="font-display text-2xl tracking-widest text-white/60"
            >
              {l.toUpperCase()}
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );
}
