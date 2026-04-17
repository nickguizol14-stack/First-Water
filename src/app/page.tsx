import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";
import { ServicesStrip } from "@/components/services-strip";
import { SectorCards } from "@/components/sector-cards";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";
import { ProjectMap } from "@/components/project-map";
import { Reveal } from "@/components/reveal";
import { processSteps } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="section-pad">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Featured work"
              title="Projects we're proud to have laid."
              subtitle="Corridor reconstructions, nightly runway closures, and commercial lots paved around live operations."
            />
            <Link
              href="/projects"
              className="text-sm uppercase tracking-[0.22em] text-ember-500 hover:text-white transition"
            >
              All projects →
            </Link>
          </div>
          <ProjectGrid />
        </div>
      </section>

      <section className="section-pad bg-asphalt-900/70">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Services that cover every mile of asphalt life."
            subtitle="From greenfield mainline paving to the seal coat that buys you another decade — we run the whole lifecycle."
          />
          <div className="mt-14">
            <ServicesStrip />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sectors"
            title="From runways to retail."
            subtitle="We build for the specifications your sector demands, and the schedule your operation requires."
          />
          <div className="mt-14">
            <SectorCards />
          </div>
        </div>
      </section>

      <section className="section-pad bg-asphalt-900/70">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Geographic footprint"
              title="Paving the Southwest corridor."
              subtitle="Seven regional shops, twenty-three asphalt plant partnerships, and crews mobile enough to run projects 600 miles from base."
            />
            <div className="mt-8 grid grid-cols-2 gap-5 max-w-md">
              {[
                ["7", "Regional shops"],
                ["23", "Plant partnerships"],
                ["600 mi", "Crew mobilization radius"],
                ["24/7", "Night ops capable"],
              ].map(([k, v]) => (
                <Reveal key={v as string}>
                  <div>
                    <div className="font-display text-3xl">{k}</div>
                    <div className="text-xs uppercase tracking-[0.22em] text-white/50 mt-1">
                      {v}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <ProjectMap />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Six steps from site walk to striping."
            subtitle="Every project runs the same play — because predictability is how schedules hold."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 p-7 bg-asphalt-800 h-full">
                  <div className="font-display text-5xl text-ember-500">{s.step}</div>
                  <div className="mt-4 text-xl font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-asphalt-900/70">
        <div className="container-x">
          <SectionHeading
            eyebrow="What clients say"
            title="Trusted by DOTs, airports, and the largest private owners in the region."
            align="center"
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
