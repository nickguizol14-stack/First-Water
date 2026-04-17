import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";

export const metadata = { title: "About" };

const leadership = [
  { name: "Nick Guizol", role: "President & CEO", years: "26 yrs paving" },
  { name: "Marisol Ortega", role: "Chief Operating Officer", years: "22 yrs heavy civil" },
  { name: "Darius Whitaker", role: "VP, Airfield Division", years: "19 yrs FAA work" },
  { name: "Alicia Park", role: "VP, Commercial & Municipal", years: "17 yrs owner rep" },
  { name: "Samir Patel", role: "Director, QC & Lab", years: "SHRP-qualified, 15 yrs" },
  { name: "Rhett Connolly", role: "Director of Safety", years: "CHST, OSHA-500" },
];

const values = [
  { title: "Do the math twice.", copy: "Mix design, density, yield — we rerun the numbers before iron moves." },
  { title: "Own the schedule.", copy: "Weather is a variable, not an excuse. We plan for the variable." },
  { title: "The ground tells the truth.", copy: "Core it, test it, fix it. Never hide a sub-grade problem under hot mix." },
  { title: "Crews before contracts.", copy: "Long tenures build good pavement. Good pavement wins contracts." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-16">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="— About Us"
            title="38 years. One line of work. Done well."
            subtitle="First Water started as a three-truck paving outfit in North Texas in 1988. Four generations of superintendents later, we run the largest independent paving operation in the Southwest."
          />
          <ScrollImage
            src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1800&auto=format&fit=crop"
            alt="First Water crew"
            aspect="aspect-[4/5]"
            parallax={10}
            reveal="clip-up"
          />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x">
          <SectionHeading eyebrow="— Values" title="Four operating principles — since 1988." />
          <div className="mt-16 grid gap-px md:grid-cols-2 bg-ink-200 border border-ink-200 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="bg-cream-50 p-10 h-full">
                  <div className="serif text-3xl text-ember-500">0{i + 1}</div>
                  <div className="mt-4 serif text-2xl text-ink-950">{v.title}</div>
                  <p className="mt-3 text-ink-600 leading-relaxed">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="— Leadership" title="Running the operation." />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="border-t border-ink-200 pt-6">
                  <div className="serif text-2xl text-ink-950">{l.name}</div>
                  <div className="text-ember-500 text-[11px] uppercase tracking-[0.26em] mt-2">
                    {l.role}
                  </div>
                  <div className="text-sm text-ink-500 mt-3">{l.years}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="— Community"
            title="We live here too."
            subtitle="$2.1M given to STEM education, vocational training, and veteran hiring programs across our service region since 2018."
          />
          <ScrollImage
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1800&auto=format&fit=crop"
            alt="Community"
            aspect="aspect-[4/3]"
            parallax={8}
            reveal="clip-up"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
