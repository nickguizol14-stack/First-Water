import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { services, projects } from "@/lib/data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Services"
            title="Every stage of asphalt, delivered by the same crew."
            subtitle="New construction to preventive maintenance — one phone number, one schedule, one warranty."
          />
        </div>
      </section>

      <section className="pb-24 space-y-4">
        <div className="container-x">
          {services.map((s, i) => {
            const related = projects.filter((p) =>
              p.serviceTypes.some((st) => st.toLowerCase().includes(s.name.split(" ")[0].toLowerCase()))
            ).slice(0, 2);
            return (
              <Reveal key={s.id}>
                <article
                  id={s.id}
                  className={`grid gap-10 lg:grid-cols-2 items-center py-16 border-b border-white/5 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(min-width:1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="eyebrow mb-3">Service 0{i + 1}</div>
                    <h3 className="font-display text-4xl md:text-5xl text-balance">{s.name}</h3>
                    <p className="mt-5 text-lg text-white/75 text-pretty max-w-xl">{s.blurb}</p>
                    {related.length > 0 && (
                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-[0.22em] text-white/45 mb-3">
                          Case studies
                        </div>
                        <ul className="space-y-2">
                          {related.map((r) => (
                            <li key={r.slug}>
                              <Link
                                href={`/projects/${r.slug}`}
                                className="text-white hover:text-ember-500 transition text-sm"
                              >
                                → {r.name} <span className="text-white/50">· {r.location}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link href="/contact" className="btn-primary mt-8">
                      Scope this service
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
