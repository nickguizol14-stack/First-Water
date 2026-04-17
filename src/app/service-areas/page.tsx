import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ProjectMap } from "@/components/project-map";
import { CtaBand } from "@/components/cta-band";
import { serviceAreas } from "@/lib/data";
import { MapPin } from "lucide-react";

export const metadata = { title: "Service Areas" };

export default function ServiceAreasPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Service Areas"
            title="Where we pave — city by city."
            subtitle="Seven regional offices and a 600-mile mobilization radius keep us close to the work."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <Reveal>
            <ProjectMap />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-ink-200 border border-ink-200 rounded-2xl overflow-hidden">
          {serviceAreas.map((a, i) => (
            <Reveal key={a.city} delay={i * 0.04}>
              <Link
                href="/contact"
                className="group bg-cream-50 p-8 block h-full transition hover:bg-white"
              >
                <MapPin className="h-5 w-5 text-ember-500" />
                <div className="mt-4 serif text-2xl text-ink-950">
                  {a.city}, {a.state}
                </div>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{a.lead}</p>
                <div className="mt-6 text-[11px] uppercase tracking-[0.26em] text-ink-500 group-hover:text-ember-500 transition">
                  Request regional proposal →
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
