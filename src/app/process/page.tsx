import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { processSteps } from "@/lib/data";

export const metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="The process"
            title="From first call to final stripe — exactly what happens."
            subtitle="Especially useful if you've never managed a commercial paving job. Nothing hidden."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x space-y-16">
          {processSteps.map((s, i) => (
            <Reveal key={s.step}>
              <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="font-display text-7xl md:text-9xl text-ember-500 leading-none">
                    {s.step}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl mt-4 text-balance">{s.title}</h3>
                  <p className="mt-4 text-lg text-white/75 text-pretty max-w-xl">{s.copy}</p>
                </div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1617886322207-6f504e7472e4",
                        "1502866815647-4ba33d27b495",
                        "1488404890693-cc066391d1e5",
                        "1523413651479-597eb2da0ad6",
                        "1473042904451-00171c69419d",
                        "1545454675-3531b543be5d",
                      ][i]
                    }?q=80&w=1800&auto=format&fit=crop`}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Ready for step 01?" subtitle="We'll walk the site this week." />
    </>
  );
}
