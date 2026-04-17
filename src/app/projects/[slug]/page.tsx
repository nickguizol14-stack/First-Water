import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { BeforeAfter } from "@/components/before-after";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.name ?? "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);
  if (!project) notFound();

  const specs = [
    ["Location", project.location],
    ["Client", project.client],
    ["Tonnage", project.tonnage],
    ["Timeline", project.timeline],
    ["Crew", project.crew],
    ["Sector", project.sectorLabel],
  ];

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-x">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Link>
          <Reveal>
            <div className="mt-8 eyebrow">{project.sectorLabel}</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance max-w-4xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/75 max-w-3xl text-pretty">{project.scope}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={project.hero}
              alt={project.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <div>
              <div className="eyebrow mb-3">Before / After</div>
              <BeforeAfter before={project.before} after={project.after} alt={project.name} />
            </div>
            <div>
              <div className="eyebrow mb-3">Drone Flyover (final)</div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={project.drone}
                  alt={`${project.name} drone`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.22em] bg-black/60 backdrop-blur px-3 py-1.5 rounded-full">
                  Final flyover
                </div>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-3">Challenges solved</div>
              <p className="text-lg text-white/85 leading-relaxed">{project.challenges}</p>
            </div>
            <blockquote className="rounded-2xl border border-white/10 bg-asphalt-800 p-8">
              <div className="text-ember-500 text-5xl font-display leading-none">“</div>
              <p className="mt-2 text-xl text-white/90 text-pretty">{project.quote.text}</p>
              <footer className="mt-5 text-sm text-white/65">
                <span className="text-white font-semibold">{project.quote.author}</span> —{" "}
                {project.quote.role}
              </footer>
            </blockquote>
          </div>
          <aside className="space-y-3 lg:sticky lg:top-28 h-max">
            <div className="eyebrow mb-3">Project specs</div>
            <dl className="rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/5">
              {specs.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-5 py-4 bg-asphalt-800">
                  <dt className="text-xs uppercase tracking-[0.22em] text-white/50">{k}</dt>
                  <dd className="text-sm text-white text-right max-w-[60%]">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="eyebrow pt-3 mb-3">Services delivered</div>
            <div className="flex flex-wrap gap-2">
              {project.serviceTypes.map((s) => (
                <span
                  key={s}
                  className="text-[11px] uppercase tracking-[0.22em] text-white/80 border border-white/15 px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title="Need something like this paved?" />
    </>
  );
}
