import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { equipment } from "@/lib/data";

export const metadata = { title: "Equipment & Crews" };

const techCallouts = [
  { name: "GPS / 3D Paving", copy: "Stringless paving, mainline to airfield. Blade-to-grade accuracy within 3 mm." },
  { name: "Intelligent Compaction", copy: "Every pass mapped. Density and stiffness data captured and signed with every lot." },
  { name: "Thermal Profiling", copy: "Continuous mat temperature monitoring from behind the paver to the roller train." },
  { name: "IoT Fleet Telematics", copy: "Live dashboard of every piece of iron, every truck, every ticket. Zero ghost hours." },
];

export default function EquipmentPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Fleet & Crew"
            title="The iron, the tech, and the people behind the pour."
            subtitle="Over $180M in owned equipment, maintained in-house, run by long-tenured crews."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid gap-10 md:grid-cols-2">
          {equipment.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.05}>
              <div>
                <ScrollImage
                  src={e.image}
                  alt={e.name}
                  aspect="aspect-[16/10]"
                  parallax={6}
                  reveal="clip-up"
                />
                <div className="mt-5">
                  <div className="serif text-2xl md:text-[26px] text-ink-950">{e.name}</div>
                  <div className="text-ink-600 text-sm mt-2 leading-relaxed">{e.spec}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x">
          <SectionHeading eyebrow="— Paving Tech" title="The stack that keeps tolerances tight." />
          <div className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-4 bg-ink-200 border border-ink-200 rounded-2xl overflow-hidden">
            {techCallouts.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="bg-cream-50 p-7 h-full">
                  <div className="serif text-ember-500 text-xl">0{i + 1}</div>
                  <div className="serif text-xl mt-4 text-ink-950">{t.name}</div>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">{t.copy}</p>
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
              eyebrow="— The Crews"
              title="Average crew tenure: 11 years."
              subtitle="We hire foremen and operators for careers, not jobs. That's why your project opens on time — and on spec."
            />
          </div>
          <ScrollImage
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1800&auto=format&fit=crop"
            alt="Paving crew"
            aspect="aspect-[5/6]"
            parallax={10}
            reveal="clip-up"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
