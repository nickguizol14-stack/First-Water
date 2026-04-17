import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { certifications } from "@/lib/data";
import { ShieldCheck, BadgeCheck, HardHat, Leaf } from "lucide-react";

export const metadata = { title: "Safety & Certifications" };

const pillars = [
  { icon: HardHat, title: "Safety-first culture", copy: "EMR of 0.68 across the last three years. Daily toolbox talks. Every crew lead OSHA-30 certified." },
  { icon: BadgeCheck, title: "Prequalified & credentialed", copy: "DOT prequalified in 5 states. FAA P-401 paving certified. NAPA Diamond commendation." },
  { icon: ShieldCheck, title: "Quality control built in", copy: "In-house SHRP-qualified lab. Every mat sampled, every roller mapped." },
  { icon: Leaf, title: "Sustainability", copy: "RAP and RAS incorporation, warm-mix asphalt by default, and full-depth reclamation as a first option." },
];

export default function SafetyPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-16">
        <div className="container-x">
          <SectionHeading
            index="01"
            eyebrow="Safety · Quality · Compliance"
            title="Credentials that let us work the biggest lots in the country."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="bg-tar-900 p-8 h-full border-r border-b border-white/10 -mr-px -mb-px">
                <div className="h-11 w-11 bg-hivis-500 text-tar-950 flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 font-display font-extrabold uppercase text-lg md:text-xl text-white tracking-wide">{p.title}</div>
                <p className="mt-3 text-[15px] text-white/60 leading-relaxed">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x">
          <SectionHeading index="02" eyebrow="Certifications" title="Credentials on file." />
          <Reveal>
            <ul className="mt-14 grid gap-3 md:grid-cols-2">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 border border-white/10 bg-tar-950 p-5"
                >
                  <BadgeCheck className="h-5 w-5 text-hivis-500 shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
