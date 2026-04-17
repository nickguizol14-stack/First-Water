import { SectionHeading } from "@/components/section-heading";
import { SectorCards } from "@/components/sector-cards";
import { CtaBand } from "@/components/cta-band";

export const metadata = { title: "Sectors" };

export default function SectorsPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <SectionHeading
            eyebrow="— Sectors"
            title="Every heavy-civil vertical."
            subtitle="The mix, the crew, the schedule, the paperwork — tuned for your sector before we mobilize."
          />
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x">
          <SectorCards />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
