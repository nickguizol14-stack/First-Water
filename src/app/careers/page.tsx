import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { careersOpenings, gallery } from "@/lib/data";
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
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            index="01"
            eyebrow="Careers"
            title="Long careers on the road, not short ones on a job site."
            subtitle="Paver operators, foremen, CDL drivers, PMs, and QC techs — we hire crews for careers, not seasons. Average tenure: 11 years."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <ScrollImage
            src={gallery.heroMain}
            alt="Crew at work"
            aspect="aspect-[21/9]"
            priority
            parallax={8}
          />
        </div>
      </section>

      <section className="section-pad border-t border-white/10">
        <div className="container-x">
          <SectionHeading index="02" eyebrow="Open Roles" title="Now hiring across the Southwest." />
          <div className="mt-14 border-t border-white/10">
            {careersOpenings.map((o, i) => (
              <Reveal key={o.title + o.location} delay={i * 0.03}>
                <a
                  href="mailto:careers@fwcis.com?subject=Application"
                  className="group flex items-center justify-between gap-6 py-7 border-b border-white/10 transition hover:bg-tar-900 px-3 -mx-3"
                >
                  <div>
                    <div className="mono text-[11px] uppercase tracking-[0.24em] text-hivis-500 tabular-nums">— 0{i + 1}</div>
                    <div className="font-display font-extrabold uppercase text-xl md:text-2xl mt-2 text-white leading-tight tracking-wide">
                      {o.title}
                    </div>
                    <div className="mono text-[11px] uppercase tracking-[0.26em] text-white/55 mt-2">
                      {o.location} · {o.type}
                    </div>
                  </div>
                  <div className="h-11 w-11 shrink-0 border border-white/20 flex items-center justify-center group-hover:bg-hivis-500 group-hover:border-hivis-500 group-hover:text-tar-950 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x">
          <SectionHeading index="03" eyebrow="Benefits" title="Why our crews stay." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {perks.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <div className="bg-tar-950 p-7 border-r border-b border-white/10 -mr-px -mb-px h-full">
                  <div className="mono text-[11px] text-hivis-500 tabular-nums uppercase tracking-[0.24em]">0{i + 1}</div>
                  <div className="text-white mt-4 leading-relaxed">{p}</div>
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
