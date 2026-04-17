import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { BeforeAfter } from "@/components/before-after";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
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
      <section className="pt-32 md:pt-40 pb-12">
        <div className="container-x">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.24em] text-white/55 hover:text-hivis-500 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Projects
          </Link>
          <Reveal>
            <div className="mt-10 mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-hivis-500" />
              <span className="eyebrow">{project.sectorLabel}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="font-display font-black uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance max-w-5xl"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
            >
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg md:text-xl text-white/65 max-w-3xl leading-relaxed text-pretty">
              {project.scope}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <ScrollImage
            src={project.hero}
            alt={project.name}
            aspect="aspect-[21/9]"
            priority
            parallax={8}
            reveal="clip-up"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-14">
            <div>
              <div className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-hivis-500" /> Before / After
              </div>
              <BeforeAfter before={project.before} after={project.after} alt={project.name} />
            </div>
            <div>
              <div className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-hivis-500" /> Drone Flyover
              </div>
              <ScrollImage
                src={project.drone}
                alt={`${project.name} drone`}
                aspect="aspect-[16/9]"
                parallax={8}
                overlay
              />
            </div>
            <Reveal>
              <div>
                <div className="eyebrow mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-hivis-500" /> Challenges Solved
                </div>
                <p className="font-display font-bold uppercase text-2xl md:text-3xl text-white leading-[1.1] tracking-tight text-balance">
                  {project.challenges}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <blockquote className="border-l-2 border-hivis-500 pl-8 py-4">
                <p className="font-display font-bold uppercase text-2xl md:text-3xl text-white leading-[1.1] tracking-tight text-balance">
                  “{project.quote.text}”
                </p>
                <footer className="mt-5 mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                  <span className="text-white">{project.quote.author}</span> —{" "}
                  {project.quote.role}
                </footer>
              </blockquote>
            </Reveal>
          </div>
          <aside className="lg:sticky lg:top-28 h-max space-y-4">
            <div className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-hivis-500" /> Project Specs
            </div>
            <dl className="border border-white/10 divide-y divide-white/10 bg-tar-900">
              {specs.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-6 py-4">
                  <dt className="mono text-[10px] uppercase tracking-[0.24em] text-white/45">{k}</dt>
                  <dd className="text-sm text-white text-right max-w-[60%] tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="eyebrow pt-6 mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-hivis-500" /> Services Delivered
            </div>
            <div className="flex flex-wrap gap-2">
              {project.serviceTypes.map((s) => (
                <span
                  key={s}
                  className="chip"
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
