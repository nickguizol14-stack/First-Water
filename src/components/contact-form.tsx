"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Check, ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  const input =
    "w-full border border-white/15 bg-tar-900 px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-hivis-500 transition";
  const label = "mono text-[11px] uppercase tracking-[0.26em] text-white/55";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-white/10 bg-tar-900 p-12 text-center"
        >
          <div className="mx-auto h-12 w-12 bg-hivis-500 text-tar-950 flex items-center justify-center">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="font-display font-black uppercase text-3xl mt-6 text-white tracking-tight">Quote request in.</h3>
          <p className="mt-3 text-white/60">
            A superintendent will reach out within one business day to schedule your site walk.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 block">
              <span className={label}>Name *</span>
              <input required className={input} placeholder="Jane Doe" />
            </label>
            <label className="space-y-2 block">
              <span className={label}>Company</span>
              <input className={input} placeholder="Company, LLC" />
            </label>
            <label className="space-y-2 block">
              <span className={label}>Email *</span>
              <input required type="email" className={input} placeholder="jane@company.com" />
            </label>
            <label className="space-y-2 block">
              <span className={label}>Phone</span>
              <input type="tel" className={input} placeholder="(000) 000-0000" />
            </label>
            <label className="space-y-2 block">
              <span className={label}>Project type *</span>
              <select required className={input}>
                <option value="">Select…</option>
                <option>New construction</option>
                <option>Mill & overlay</option>
                <option>Full-depth reclamation</option>
                <option>Maintenance / seal / stripe</option>
                <option>Other</option>
              </select>
            </label>
            <label className="space-y-2 block">
              <span className={label}>Approx. size</span>
              <input className={input} placeholder="e.g. 12 acres, 3 miles" />
            </label>
            <label className="space-y-2 block">
              <span className={label}>Location *</span>
              <input required className={input} placeholder="City, State" />
            </label>
            <label className="space-y-2 block">
              <span className={label}>Target timeline</span>
              <input className={input} placeholder="e.g. Q3 2026" />
            </label>
          </div>

          <label className="space-y-2 block">
            <span className={label}>Scope notes</span>
            <textarea
              rows={5}
              className={`${input} resize-none`}
              placeholder="Tell us what you need paved, repaired, or maintained."
            />
          </label>

          <label className="flex items-center gap-3 border border-dashed border-white/20 bg-tar-900 px-4 py-5 cursor-pointer hover:border-hivis-500 transition">
            <Upload className="h-5 w-5 text-hivis-500" />
            <span className="text-sm text-white/60">Upload site photos or plans (optional)</span>
            <input type="file" multiple className="hidden" />
          </label>

          <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-50">
            {loading ? "Sending…" : (
              <>
                Send request <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </button>
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-white/45 text-center">
            We respond within one business day. Urgent? Call (214) 555-0123.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
