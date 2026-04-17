import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";

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
      <section className="relative pt-32 pb-20 isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={sector.image} alt={sector.name} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-asphalt-950/75" />
        </div>
        <div className="container-x pt-16">
          <div className="eyebrow mb-4">Sector focus</div>
          <h1 className="font-display text-5xl md:text-7xl text-balance max-w-4xl">{sector.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 text-pretty">{sector.summary}</p>
          <div className="mt-10 flex gap-4">
            <Link href="/contact" className="btn-primary">Request a scoped proposal</Link>
            <Link href="/projects" className="btn-ghost">See sector projects</Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Selected projects"
            title={`Recent ${sector.name.toLowerCase()} work.`}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {related.length > 0 ? (
              related.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group relative block overflow-hidden rounded-2xl border border-white/10"
                  >
                    <div className="aspect-[16/9] relative">
                      <Image src={p.hero} alt={p.name} fill sizes="50vw" className="object-cover transition duration-[1200ms] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-asphalt-950/20 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-6">
                        <div className="text-white/60 text-xs uppercase tracking-[0.18em]">{p.location}</div>
                        <div className="font-display text-2xl mt-1">{p.name}</div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))
            ) : (
              <p className="text-white/60 text-lg">More projects from this sector coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
