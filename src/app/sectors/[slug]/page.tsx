import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { ArrowUpRight } from "lucide-react";

const sectorMatch: Record<string, string> = {
  highways: "highway",
  airports: "airport",
  "ports-seaports": "industrial",
  municipal: "municipal",
  commercial: "commercial",
  industrial: "industrial",
};

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = sectors.find((x) => x.slug === slug);
  return { title: s?.name ?? "Sector" };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) notFound();
  const matchKey = sectorMatch[sector.slug] ?? sector.slug;
  const related = projects.filter((p) => p.sector === matchKey);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12">
        <div className="container-x">
          <Link
            href="/sectors"
            className="text-xs uppercase tracking-[0.24em] text-ink-500 hover:text-ink-950"
          >
            ← All sectors
          </Link>
          <Reveal>
            <div className="eyebrow mt-10 mb-5">— Sector Focus</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="serif font-medium tracking-[-0.02em] text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.96] text-balance max-w-5xl">
              {sector.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-600 leading-relaxed">
              {sector.summary}
            </p>
          </Reveal>
          <div className="mt-10 flex gap-3">
            <Link href="/contact" className="btn-primary">Request a scoped proposal</Link>
            <Link href="/projects" className="btn-ghost">See sector projects</Link>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <ScrollImage
            src={sector.image}
            alt={sector.name}
            aspect="aspect-[21/9]"
            priority
            parallax={8}
          />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Selected Projects"
            title={`Recent ${sector.name.toLowerCase()} work.`}
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {related.length > 0 ? (
              related.map((p) => (
                <Reveal key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="group block">
                    <ScrollImage
                      src={p.hero}
                      alt={p.name}
                      aspect="aspect-[16/10]"
                      parallax={6}
                      overlay
                    />
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-ember-500">
                          {p.location}
                        </div>
                        <div className="serif text-2xl md:text-[26px] mt-2 text-ink-950 leading-tight">
                          {p.name}
                        </div>
                      </div>
                      <div className="mt-1 h-10 w-10 shrink-0 rounded-full border border-ink-950/20 flex items-center justify-center transition group-hover:bg-ink-950 group-hover:text-cream-50">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))
            ) : (
              <p className="text-ink-500 text-lg">More projects from this sector coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
