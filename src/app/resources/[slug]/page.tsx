import Link from "next/link";
import { notFound } from "next/navigation";
import { resources } from "@/lib/data";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = resources.find((x) => x.slug === slug);
  return { title: r?.title ?? "Resource" };
}

const body = `
Asphalt is a living material. It ages by oxidation, traffic loading, thermal cycling, and water intrusion — and every one of those factors is manageable if you know what to look for.

## The honest answer

Most commercial lots get 18–22 years from a new pavement before full reconstruction is required — *if* they're maintained. Without maintenance, that window drops to 8–12 years. The variable is not the asphalt; it's the owner.

## What kills pavement

Water, UV, and overloading. In that order. Seal coating at year 3, again at year 7, and a mill-overlay at year 12 resets the clock on all three. Skip those and you're paying full replacement costs on a 12-year timeline instead of a 20-year one.

## What to do this quarter

Walk the lot with a superintendent. Core two or three suspicious areas. Pull an ARAN or visual distress survey if the lot is over 5 acres. The cheap diagnostic pays for itself in the first budget cycle.
`;

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = resources.find((x) => x.slug === slug);
  if (!r) notFound();
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12">
        <div className="container-x">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.24em] text-white/55 hover:text-hivis-500 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Resources
          </Link>
          <div className="max-w-3xl mt-10">
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-hivis-500" />
              {new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {r.readMin} min read
            </div>
            <h1
              className="font-display font-black uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            >
              {r.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/65 leading-relaxed">{r.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <ScrollImage
            src={r.image}
            alt={r.title}
            aspect="aspect-[21/9]"
            priority
            parallax={8}
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x max-w-3xl">
          {body.trim().split("\n\n").map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display font-extrabold uppercase text-2xl md:text-3xl mt-14 mb-4 text-white tracking-wide">
                  {para.replace(/^## /, "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mt-6 text-lg text-white/70 leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>
      </section>

      <CtaBand title="Walk the lot with us." subtitle="Free site visit, no sales pitch." />
    </>
  );
}
