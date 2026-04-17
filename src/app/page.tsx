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
import { processSteps, gallery } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="section-pad border-t border-white/10">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <SectionHeading
              index="01"
              eyebrow="Selected Work"
              title="Projects we're proud to have laid."
              subtitle="Corridor reconstructions, nightly runway closures, and commercial lots paved around live operations."
            />
            <Link
              href="/projects"
              className="mono text-[11px] uppercase tracking-[0.28em] text-white/70 hover:text-hivis-500 transition border-b border-white/30 hover:border-hivis-500 pb-1 flex items-center gap-2"
            >
              All projects <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ProjectGrid />
        </div>
      </section>

      {/* Editorial block — craft */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <Reveal>
              <div>
                <div className="eyebrow mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-hivis-500" /> Craft
                </div>
                <h3 className="font-display font-black uppercase text-[clamp(1.8rem,3.8vw,3.2rem)] leading-[0.95] tracking-[-0.01em] text-white text-balance">
                  Density is earned on the roller pass — not the shop drawing.
                </h3>
                <p className="mt-6 text-lg text-white/60 max-w-md leading-relaxed">
                  We run intelligent compaction with full coverage mapping. Every square foot of
                  pavement we hand over is signed, logged, and traceable.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm">
                  {[
                    ["98.5%", "Target density"],
                    ["100%", "Coverage mapped"],
                  ].map(([k, v]) => (
                    <div key={v} className="border-l-2 border-hivis-500 pl-4">
                      <div className="font-display font-black text-3xl text-white tabular-nums">{k}</div>
                      <div className="mono text-[10px] uppercase tracking-[0.24em] text-white/50 mt-1">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <ScrollImage
              src={gallery.craft}
              alt="Roller compacting fresh asphalt mat"
              aspect="aspect-[16/10]"
              parallax={10}
              reveal="clip-up"
            />
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x">
          <SectionHeading
            index="02"
            eyebrow="Services"
            title="Every stage of asphalt life."
            subtitle="From greenfield mainline paving to the seal coat that buys you another decade — we run the whole lifecycle."
          />
          <div className="mt-16">
            <ServicesStrip />
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10">
        <div className="container-x">
          <SectionHeading
            index="03"
            eyebrow="Sectors"
            title="From runways to retail."
            subtitle="We build for the specifications your sector demands, and the schedule your operation requires."
          />
          <div className="mt-16">
            <SectorCards />
          </div>
        </div>
      </section>

      {/* Alternating parallax image rail */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="container-x grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-1">
            <ScrollImage
              src={gallery.rail1}
              alt=""
              aspect="aspect-[3/4]"
              parallax={12}
              reveal="clip-up"
            />
          </div>
          <div className="md:col-span-7 md:row-start-1 md:col-start-6 md:mt-24">
            <ScrollImage
              src={gallery.rail2}
              alt=""
              aspect="aspect-[4/3]"
              parallax={6}
              reveal="clip-up"
            />
          </div>
          <div className="md:col-span-6 md:col-start-2 md:-mt-16">
            <ScrollImage
              src={gallery.rail3}
              alt=""
              aspect="aspect-[4/3]"
              parallax={10}
              reveal="clip-up"
            />
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              index="04"
              eyebrow="Footprint"
              title="Paving the Southwest corridor."
              subtitle="Seven regional shops, twenty-three asphalt plant partnerships, and crews mobile enough to run projects 600 miles from base."
            />
            <div className="mt-10 grid grid-cols-2 gap-0 max-w-md border-t border-l border-white/10">
              {[
                ["7", "Regional shops"],
                ["23", "Plant partners"],
                ["600 mi", "Mobilization"],
                ["24/7", "Night-ops"],
              ].map(([k, v]) => (
                <Reveal key={v as string}>
                  <div className="border-r border-b border-white/10 p-5">
                    <div className="font-display font-black text-4xl text-white tabular-nums">{k}</div>
                    <div className="mono text-[10px] uppercase tracking-[0.26em] text-white/50 mt-2">
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

      <section className="section-pad border-t border-white/10">
        <div className="container-x">
          <SectionHeading
            index="05"
            eyebrow="Process"
            title="Six steps from site walk to striping."
            subtitle="Every project runs the same play — because predictability is how schedules hold."
          />
          <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="border-r border-b border-white/10 p-8 bg-tar-950 h-full transition hover:bg-tar-900 -mr-px -mb-px">
                  <div className="flex items-baseline gap-3">
                    <span className="mono text-[11px] uppercase tracking-[0.24em] text-hivis-500">Step</span>
                    <span className="font-display font-black text-5xl text-white tabular-nums leading-none">{s.step}</span>
                  </div>
                  <div className="mt-6 font-display font-extrabold uppercase text-xl text-white tracking-wide">{s.title}</div>
                  <p className="mt-3 text-[15px] text-white/55 leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x">
          <SectionHeading
            index="06"
            eyebrow="Clients"
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
