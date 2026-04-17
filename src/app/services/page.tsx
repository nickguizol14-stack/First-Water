import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { services, projects } from "@/lib/data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Services"
            title="Every stage of asphalt, delivered by the same crew."
            subtitle="New construction to preventive maintenance — one phone number, one schedule, one warranty."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          {services.map((s, i) => {
            const related = projects.filter((p) =>
              p.serviceTypes.some((st) => st.toLowerCase().includes(s.name.split(" ")[0].toLowerCase()))
            ).slice(0, 2);
            return (
              <article
                key={s.id}
                id={s.id}
                className={`grid gap-12 lg:grid-cols-2 items-center py-20 border-t border-ink-200 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ScrollImage
                  src={s.image}
                  alt={s.name}
                  aspect="aspect-[5/4]"
                  parallax={8}
                  reveal="clip-up"
                />
                <Reveal>
                  <div>
                    <div className="eyebrow mb-4">— Service 0{i + 1}</div>
                    <h3 className="serif font-medium tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.98] text-balance">
                      {s.name}
                    </h3>
                    <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-xl">{s.blurb}</p>
                    {related.length > 0 && (
                      <div className="mt-8">
                        <div className="text-[11px] uppercase tracking-[0.24em] text-ink-500 mb-3">
                          Case studies
                        </div>
                        <ul className="space-y-2">
                          {related.map((r) => (
                            <li key={r.slug}>
                              <Link
                                href={`/projects/${r.slug}`}
                                className="text-ink-950 hover:text-ember-500 transition text-sm"
                              >
                                → {r.name} <span className="text-ink-500">· {r.location}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link href="/contact" className="btn-primary mt-10">
                      Scope this service
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
