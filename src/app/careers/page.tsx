import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
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
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Careers"
            title="Long careers on the road, not short ones on a job site."
            subtitle="Paver operators, foremen, CDL drivers, PMs, and QC techs — we hire crews for careers, not seasons. Average tenure: 11 years."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <ScrollImage
            src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=2600&auto=format&fit=crop"
            alt="Crew at work"
            aspect="aspect-[21/9]"
            priority
            parallax={8}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="— Open Roles" title="Now hiring across the Southwest." />
          <div className="mt-14 border-t border-ink-200">
            {careersOpenings.map((o, i) => (
              <Reveal key={o.title + o.location} delay={i * 0.03}>
                <a
                  href="mailto:careers@fwcis.com?subject=Application"
                  className="group flex items-center justify-between gap-6 py-7 border-b border-ink-200 transition hover:bg-cream-100 px-3 -mx-3 rounded-lg"
                >
                  <div>
                    <div className="serif text-2xl md:text-[28px] text-ink-950 leading-tight">
                      {o.title}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.26em] text-ink-500 mt-2">
                      {o.location} · {o.type}
                    </div>
                  </div>
                  <div className="h-11 w-11 shrink-0 rounded-full border border-ink-950/20 flex items-center justify-center group-hover:bg-ink-950 group-hover:text-cream-50 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x">
          <SectionHeading eyebrow="— Benefits" title="Why our crews stay." />
          <div className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-ink-200 border border-ink-200 rounded-2xl overflow-hidden">
            {perks.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <div className="bg-cream-50 p-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-ember-500 mb-3" />
                  <div className="text-ink-950">{p}</div>
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
