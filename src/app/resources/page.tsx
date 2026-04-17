import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { resources } from "@/lib/data";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            index="01"
            eyebrow="Resources"
            title="Field notes from the road."
            subtitle="Straight answers on pavement life, maintenance strategy, and when to spend."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.05}>
              <Link href={`/resources/${r.slug}`} className="group block">
                <ScrollImage
                  src={r.image}
                  alt={r.title}
                  aspect="aspect-[16/10]"
                  parallax={6}
                  reveal="clip-up"
                />
                <div className="mt-5 border-t border-white/10 pt-5">
                  <div className="mono text-[11px] uppercase tracking-[0.26em] text-hivis-500 tabular-nums">
                    {new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {r.readMin} min read
                  </div>
                  <div className="font-display font-extrabold uppercase text-xl md:text-2xl mt-3 text-white leading-tight tracking-wide text-balance group-hover:text-hivis-500 transition">
                    {r.title}
                  </div>
                  <p className="mt-3 text-[15px] text-white/60 leading-relaxed">{r.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
