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
    "w-full rounded-xl border border-ink-200 bg-white px-4 py-3.5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-ink-950 transition";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-ink-200 bg-white p-12 text-center"
        >
          <div className="mx-auto h-12 w-12 rounded-full bg-ink-950 text-cream-50 flex items-center justify-center">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="serif text-3xl mt-6 text-ink-950">Quote request in.</h3>
          <p className="mt-3 text-ink-600">
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
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Name *</span>
              <input required className={input} placeholder="Jane Doe" />
            </label>
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Company</span>
              <input className={input} placeholder="Company, LLC" />
            </label>
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Email *</span>
              <input required type="email" className={input} placeholder="jane@company.com" />
            </label>
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Phone</span>
              <input type="tel" className={input} placeholder="(000) 000-0000" />
            </label>
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Project type *</span>
              <select required className={input}>
                <option value="">Select…</option>
                <option>New construction</option>
                <option>Mill & overlay</option>
                <option>Full-depth reclamation</option>
                <option>Maintenance / seal / stripe</option>
                <option>Other</option>
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Approx. size</span>
              <input className={input} placeholder="e.g. 12 acres, 3 miles" />
            </label>
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Location *</span>
              <input required className={input} placeholder="City, State" />
            </label>
            <label className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Target timeline</span>
              <input className={input} placeholder="e.g. Q3 2026" />
            </label>
          </div>

          <label className="space-y-2 block">
            <span className="text-[11px] uppercase tracking-[0.26em] text-ink-500">Scope notes</span>
            <textarea
              rows={5}
              className={`${input} resize-none`}
              placeholder="Tell us what you need paved, repaired, or maintained."
            />
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-dashed border-ink-300 bg-cream-100 px-4 py-5 cursor-pointer hover:border-ink-950 transition">
            <Upload className="h-5 w-5 text-ember-500" />
            <span className="text-sm text-ink-600">Upload site photos or plans (optional)</span>
            <input type="file" multiple className="hidden" />
          </label>

          <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-50">
            {loading ? "Sending…" : (
              <>
                Send request <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </button>
          <p className="text-xs text-ink-500 text-center">
            We respond within one business day. Urgent? Call (214) 555-0123.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
