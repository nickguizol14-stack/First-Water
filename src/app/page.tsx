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
import { ScrollImage } from "@/components/scroll-image";
import { processSteps } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="section-pad">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="— Selected Work"
              title="Projects we're proud to have laid."
              subtitle="Corridor reconstructions, nightly runway closures, and commercial lots paved around live operations."
            />
            <Link
              href="/projects"
              className="text-[11px] uppercase tracking-[0.28em] text-ink-950 hover:text-ember-500 transition border-b border-ink-950 pb-1"
            >
              All projects →
            </Link>
          </div>
          <ProjectGrid />
        </div>
      </section>

      {/* Editorial full-bleed image block with scroll reveal */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <Reveal>
              <div>
                <div className="eyebrow mb-5">— Craft</div>
                <h3 className="serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1] tracking-[-0.02em] text-balance">
                  Density is earned on the roller pass, not the shop drawing.
                </h3>
                <p className="mt-6 text-lg text-ink-600 max-w-md leading-relaxed">
                  We run intelligent compaction with full coverage mapping. Every square foot of
                  pavement we hand over is signed, logged, and traceable.
                </p>
              </div>
            </Reveal>
            <ScrollImage
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2200&auto=format&fit=crop"
              alt="Roller compacting fresh asphalt mat"
              aspect="aspect-[16/10]"
              parallax={10}
              reveal="clip-up"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Services"
            title="Every stage of asphalt life."
            subtitle="From greenfield mainline paving to the seal coat that buys you another decade — we run the whole lifecycle."
          />
          <div className="mt-16">
            <ServicesStrip />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Sectors"
            title="From runways to retail."
            subtitle="We build for the specifications your sector demands, and the schedule your operation requires."
          />
          <div className="mt-16">
            <SectorCards />
          </div>
        </div>
      </section>

      {/* Alternating parallax image rail */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-1">
            <ScrollImage
              src="https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=1800&auto=format&fit=crop"
              alt=""
              aspect="aspect-[3/4]"
              parallax={12}
              reveal="clip-up"
            />
          </div>
          <div className="md:col-span-7 md:row-start-1 md:col-start-6 md:mt-24">
            <ScrollImage
              src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2200&auto=format&fit=crop"
              alt=""
              aspect="aspect-[4/3]"
              parallax={6}
              reveal="clip-up"
            />
          </div>
          <div className="md:col-span-6 md:col-start-2 md:-mt-16">
            <ScrollImage
              src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=2000&auto=format&fit=crop"
              alt=""
              aspect="aspect-[4/3]"
              parallax={10}
              reveal="clip-up"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="— Footprint"
              title="Paving the Southwest corridor."
              subtitle="Seven regional shops, twenty-three asphalt plant partnerships, and crews mobile enough to run projects 600 miles from base."
            />
            <div className="mt-10 grid grid-cols-2 gap-5 max-w-md">
              {[
                ["7", "Regional shops"],
                ["23", "Plant partnerships"],
                ["600 mi", "Mobilization radius"],
                ["24/7", "Night-ops capable"],
              ].map(([k, v]) => (
                <Reveal key={v as string}>
                  <div>
                    <div className="serif text-4xl text-ink-950 tracking-tight">{k}</div>
                    <div className="text-[11px] uppercase tracking-[0.26em] text-ink-500 mt-2">
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
            eyebrow="— Process"
            title="Six steps from site walk to striping."
            subtitle="Every project runs the same play — because predictability is how schedules hold."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="rounded-2xl border border-ink-200 p-8 bg-cream-50 h-full transition hover:border-ink-950/40 hover:shadow-[0_16px_40px_-24px_rgba(11,12,14,0.25)]">
                  <div className="serif text-5xl text-ember-500 tracking-tight">{s.step}</div>
                  <div className="mt-5 serif text-2xl text-ink-950">{s.title}</div>
                  <p className="mt-3 text-[15px] text-ink-600 leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Clients"
            title="Trusted by DOTs, airports, and the largest private owners in the region."
            align="center"
          />
          <div className="mt-16">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
