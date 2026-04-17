import { SectionHeading } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";
import { ProjectMap } from "@/components/project-map";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Our Work"
            title="Projects, filterable by sector and service."
            subtitle="Tap any card for the drone flyover, before/after scrubber, and the crew behind the job."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <ProjectGrid />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Footprint"
            title="Where we've laid asphalt."
            subtitle="Hover a pin to see the project. Dense in the Texas triangle, radiating out to the full Southwest."
          />
          <Reveal>
            <div className="mt-14">
              <ProjectMap />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Yours could be the next pin on this map." />
    </>
  );
}
