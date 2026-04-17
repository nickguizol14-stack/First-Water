"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Reveal } from "./reveal";

const logos = ["TxDOT", "Costco", "DFW", "Home Depot", "Port Houston", "City of Frisco"];

export function Testimonials() {
  return (
    <>
      <div className="grid gap-px bg-ink-200 md:grid-cols-3 border border-ink-200 rounded-2xl overflow-hidden mb-16">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.08}>
            <motion.blockquote
              whileHover={{ y: -2 }}
              className="bg-cream-50 p-9 h-full flex flex-col"
            >
              <div className="serif text-ember-500 text-6xl leading-none">“</div>
              <p className="serif text-xl md:text-[22px] mt-2 text-ink-950 leading-snug flex-1 text-balance">
                {t.quote}
              </p>
              <footer className="mt-7 pt-5 border-t border-ink-200">
                <div className="text-sm text-ink-950 font-medium">{t.author}</div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-ink-500 mt-1">
                  {t.role}
                </div>
              </footer>
            </motion.blockquote>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 opacity-60">
          {logos.map((l) => (
            <div key={l} className="serif text-2xl tracking-tight text-ink-500">
              {l}
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );
}
