import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { services, projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            index="01"
            eyebrow="Services"
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
                className={`grid gap-12 lg:grid-cols-2 items-center py-20 border-t border-white/10 ${
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
                    <div className="mb-4 flex items-center gap-3">
                      <span className="mono text-[11px] text-hivis-500 tabular-nums">0{i + 1}</span>
                      <span className="h-px w-10 bg-hivis-500" />
                      <span className="eyebrow">Service</span>
                    </div>
                    <h3
                      className="font-display font-black uppercase leading-[0.95] tracking-[-0.01em] text-white text-balance"
                      style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
                    >
                      {s.name}
                    </h3>
                    <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-xl">{s.blurb}</p>
                    {related.length > 0 && (
                      <div className="mt-8">
                        <div className="mono text-[11px] uppercase tracking-[0.24em] text-white/50 mb-3">
                          Case studies
                        </div>
                        <ul className="space-y-2">
                          {related.map((r) => (
                            <li key={r.slug}>
                              <Link
                                href={`/projects/${r.slug}`}
                                className="text-white hover:text-hivis-500 transition text-sm inline-flex items-center gap-2"
                              >
                                → {r.name} <span className="text-white/45">· {r.location}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link href="/contact" className="btn-primary mt-10">
                      Scope this service <ArrowUpRight className="h-4 w-4" />
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
