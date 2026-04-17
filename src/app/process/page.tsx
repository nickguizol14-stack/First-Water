import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { processSteps } from "@/lib/data";

const images = [
  "https://images.unsplash.com/photo-1617886322207-6f504e7472e4?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502866815647-4ba33d27b495?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488404890693-cc066391d1e5?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2000&auto=format&fit=crop",
];

export const metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="— The Process"
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
              className={`grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center py-20 border-t border-ink-200 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div>
                  <div className="serif text-[12vw] md:text-[9vw] lg:text-[8rem] text-ember-500 leading-none tracking-tight">
                    {s.step}
                  </div>
                  <h3 className="serif text-3xl md:text-4xl mt-6 text-ink-950 text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-lg text-ink-600 max-w-xl leading-relaxed">{s.copy}</p>
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
