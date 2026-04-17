"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Reveal } from "./reveal";

const logos = ["TxDOT", "Costco", "DFW", "Home Depot", "Port Houston", "City of Frisco"];

export function Testimonials() {
  return (
    <>
      <div className="grid md:grid-cols-3 border border-white/10 mb-16">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.08}>
            <motion.blockquote
              whileHover={{ y: -2 }}
              className="p-8 md:p-10 h-full flex flex-col border-r border-b border-white/10 -mr-px -mb-px"
            >
              <div className="mono text-[11px] tracking-[0.24em] text-hivis-500">— 0{i + 1}</div>
              <p className="font-display font-bold uppercase text-xl md:text-2xl mt-5 text-white leading-[1.15] flex-1">
                “{t.quote}”
              </p>
              <footer className="mt-8 pt-5 border-t border-white/10">
                <div className="text-sm text-white font-medium">{t.author}</div>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-white/45 mt-1.5">
                  {t.role}
                </div>
              </footer>
            </motion.blockquote>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="border-y border-white/10 py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-5 opacity-65">
            {logos.map((l) => (
              <div
                key={l}
                className="font-display font-extrabold uppercase text-xl md:text-2xl tracking-[0.14em] text-white/70"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
