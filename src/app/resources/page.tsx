import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { resources } from "@/lib/data";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Resources"
            title="Field notes from the road."
            subtitle="Straight answers on pavement life, maintenance strategy, and when to spend."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.05}>
              <Link
                href={`/resources/${r.slug}`}
                className="group block rounded-2xl border border-white/10 overflow-hidden bg-asphalt-800"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                    {new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {r.readMin} min read
                  </div>
                  <div className="font-display text-2xl mt-3 text-balance">{r.title}</div>
                  <p className="mt-3 text-sm text-white/70">{r.excerpt}</p>
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
