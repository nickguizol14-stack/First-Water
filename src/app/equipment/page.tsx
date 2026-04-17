import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { equipment } from "@/lib/data";

export const metadata = { title: "Equipment & Crews" };

const techCallouts = [
  {
    name: "GPS / 3D Paving",
    copy: "Stringless paving, mainline to airfield. Blade-to-grade accuracy within 3 mm.",
  },
  {
    name: "Intelligent Compaction",
    copy: "Every pass mapped. Density and stiffness data captured and signed with every lot.",
  },
  {
    name: "Thermal Profiling",
    copy: "Continuous mat temperature monitoring from behind the paver to the roller train.",
  },
  {
    name: "IoT Fleet Telematics",
    copy: "Live dashboard of every piece of iron, every truck, every ticket. Zero ghost hours.",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Fleet & Crew"
            title="The iron, the tech, and the people behind the pour."
            subtitle="Over $180M in owned equipment, maintained in-house, run by long-tenured crews."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {equipment.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={e.image}
                    alt={e.name}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-asphalt-950/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="font-display text-2xl">{e.name}</div>
                  <div className="text-white/70 text-sm mt-2">{e.spec}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-asphalt-900/60">
        <div className="container-x">
          <SectionHeading eyebrow="Paving tech" title="The stack that keeps tolerances tight." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techCallouts.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-asphalt-800 p-6 h-full">
                  <div className="font-display text-xl">{t.name}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{t.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <SectionHeading
              eyebrow="The crews"
              title="Average crew tenure: 11 years."
              subtitle="We hire foremen and operators for careers, not jobs. That's why your project opens on time — and on spec."
            />
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
                alt="Paving crew"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
