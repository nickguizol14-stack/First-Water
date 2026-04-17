import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

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
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.24em] text-white/55 hover:text-hivis-500 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All sectors
          </Link>
          <Reveal>
            <div className="mt-10 mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-hivis-500" />
              <span className="eyebrow">Sector Focus</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="font-display font-black uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance max-w-5xl"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
            >
              {sector.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/65 leading-relaxed">
              {sector.summary}
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a scoped proposal <ArrowUpRight className="h-4 w-4" />
            </Link>
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

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x">
          <SectionHeading
            index="02"
            eyebrow="Selected Projects"
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
                    <div className="mt-5 flex items-start justify-between gap-4 border-t border-white/10 pt-5">
                      <div>
                        <div className="mono text-[11px] uppercase tracking-[0.24em] text-hivis-500">
                          {p.location}
                        </div>
                        <div className="font-display font-extrabold uppercase text-xl md:text-2xl mt-2 text-white leading-tight">
                          {p.name}
                        </div>
                      </div>
                      <div className="mt-1 h-10 w-10 shrink-0 border border-white/20 flex items-center justify-center transition group-hover:bg-hivis-500 group-hover:border-hivis-500 group-hover:text-tar-950">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))
            ) : (
              <p className="text-white/55 text-lg">More projects from this sector coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
