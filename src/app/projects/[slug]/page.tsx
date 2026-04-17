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
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-ink-500 hover:text-ink-950 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Projects
          </Link>
          <Reveal>
            <div className="eyebrow mt-10 mb-5">— {project.sectorLabel}</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="serif font-medium tracking-[-0.02em] text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.96] text-balance max-w-5xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg md:text-xl text-ink-600 max-w-3xl leading-relaxed text-pretty">
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
              <div className="eyebrow mb-4">— Before / After</div>
              <BeforeAfter before={project.before} after={project.after} alt={project.name} />
            </div>
            <div>
              <div className="eyebrow mb-4">— Drone Flyover</div>
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
                <div className="eyebrow mb-4">— Challenges Solved</div>
                <p className="serif text-2xl md:text-3xl text-ink-950 leading-snug text-balance">
                  {project.challenges}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <blockquote className="border-l-2 border-ember-500 pl-8 py-4">
                <p className="serif text-2xl md:text-3xl text-ink-950 leading-snug text-balance">
                  “{project.quote.text}”
                </p>
                <footer className="mt-5 text-sm text-ink-500">
                  <span className="text-ink-950 font-medium">{project.quote.author}</span> —{" "}
                  {project.quote.role}
                </footer>
              </blockquote>
            </Reveal>
          </div>
          <aside className="lg:sticky lg:top-28 h-max space-y-4">
            <div className="eyebrow mb-4">— Project Specs</div>
            <dl className="rounded-2xl border border-ink-200 overflow-hidden divide-y divide-ink-200 bg-cream-50">
              {specs.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-6 py-4">
                  <dt className="text-[11px] uppercase tracking-[0.24em] text-ink-500">{k}</dt>
                  <dd className="text-sm text-ink-950 text-right max-w-[60%]">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="eyebrow pt-6 mb-4">— Services Delivered</div>
            <div className="flex flex-wrap gap-2">
              {project.serviceTypes.map((s) => (
                <span
                  key={s}
                  className="text-[11px] uppercase tracking-[0.24em] text-ink-700 border border-ink-200 px-3 py-1.5 rounded-full bg-cream-50"
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
