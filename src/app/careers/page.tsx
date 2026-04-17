import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { careersOpenings } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Careers" };

const perks = [
  "100% employer-paid medical for employee + family",
  "Profit share + performance bonus on every project",
  "Equipment training pathways: paver → foreman → super",
  "12 weeks paid parental leave",
  "401(k) with 6% match, fully vested day one",
  "Per diem + lodging for road-travel crews",
];

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=2400&auto=format&fit=crop"
            alt="Crew at work"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-asphalt-950/70" />
        </div>
        <div className="container-x pt-16">
          <div className="eyebrow mb-4">Careers</div>
          <h1 className="font-display text-5xl md:text-7xl text-balance max-w-4xl">
            Long careers on the road, not short ones on a job site.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Paver operators, foremen, CDL drivers, PMs, and QC techs — we hire crews for careers,
            not seasons. Average tenure: 11 years.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="Open roles" title="Now hiring across the Southwest." />
          <div className="mt-14 divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {careersOpenings.map((o, i) => (
              <Reveal key={o.title + o.location} delay={i * 0.03}>
                <a
                  href="mailto:careers@fwcis.com?subject=Application"
                  className="group flex items-center justify-between gap-6 px-7 py-6 bg-asphalt-800 hover:bg-asphalt-700 transition"
                >
                  <div>
                    <div className="font-display text-2xl">{o.title}</div>
                    <div className="text-xs uppercase tracking-[0.22em] text-white/50 mt-1">
                      {o.location} · {o.type}
                    </div>
                  </div>
                  <div className="h-10 w-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-ember-500 group-hover:border-ember-500 group-hover:text-asphalt-950 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-asphalt-900/60">
        <div className="container-x">
          <SectionHeading eyebrow="Benefits" title="Why our crews stay." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <div className="rounded-2xl border border-white/10 bg-asphalt-800 p-5">
                  <div className="h-2 w-2 rounded-full bg-ember-500 mb-3" />
                  <div className="text-white/90">{p}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Day-in-the-life videos coming soon."
        subtitle="Want to drop in before you apply? Email careers@fwcis.com — we'll arrange a ride-along."
      />
    </>
  );
}
