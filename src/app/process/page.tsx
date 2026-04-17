import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { processSteps } from "@/lib/data";

const img = (seed: string) => `https://picsum.photos/seed/fw-${seed}/2000/1300`;
const images = [
  img("process-01"),
  img("process-02"),
  img("process-03"),
  img("process-04"),
  img("process-05"),
  img("process-06"),
];

export const metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            index="01"
            eyebrow="The Process"
            title="From first call to final stripe — exactly what happens."
            subtitle="Especially useful if you've never managed a commercial paving job. Nothing hidden."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          {processSteps.map((s, i) => (
            <div
              key={s.step}
              className={`grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center py-20 border-t border-white/10 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="mono text-[11px] uppercase tracking-[0.24em] text-hivis-500">Step</span>
                    <span
                      className="font-display font-black text-white leading-none tabular-nums tracking-tight"
                      style={{ fontSize: "clamp(5rem, 9vw, 8rem)" }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold uppercase text-2xl md:text-3xl mt-6 text-white tracking-wide text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-lg text-white/60 max-w-xl leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
              <ScrollImage
                src={images[i]}
                alt={s.title}
                aspect="aspect-[16/10]"
                parallax={8}
                reveal={i % 2 === 0 ? "clip-up" : "clip-down"}
              />
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Ready for step 01?" subtitle="We'll walk the site this week." />
    </>
  );
}
