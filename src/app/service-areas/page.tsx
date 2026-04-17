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
      <section className="pt-40 pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Service areas"
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
        <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a, i) => (
            <Reveal key={a.city} delay={i * 0.04}>
              <Link
                href="/contact"
                className="group rounded-2xl border border-white/10 bg-asphalt-800 p-6 block hover:border-ember-500 transition"
              >
                <MapPin className="h-5 w-5 text-ember-500" />
                <div className="mt-4 font-display text-2xl">
                  {a.city}, {a.state}
                </div>
                <p className="mt-2 text-sm text-white/70">{a.lead}</p>
                <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-white/50 group-hover:text-ember-500 transition">
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
