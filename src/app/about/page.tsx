import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
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
      <section className="pt-40 pb-16">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About us"
              title="38 years. One line of work. Done well."
              subtitle="First Water started as a three-truck paving outfit in North Texas in 1988. Four generations of superintendents later, we run the largest independent paving operation in the Southwest."
            />
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1600&auto=format&fit=crop"
                alt="First Water crew"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-asphalt-900/60">
        <div className="container-x">
          <SectionHeading eyebrow="Values" title="Four operating principles — since 1988." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-asphalt-800 p-7">
                  <div className="font-display text-3xl text-ember-500">0{i + 1}</div>
                  <div className="mt-3 font-display text-2xl">{v.title}</div>
                  <p className="mt-2 text-white/75">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="Running the operation." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-asphalt-800 p-6">
                  <div className="font-display text-2xl">{l.name}</div>
                  <div className="text-ember-500 text-xs uppercase tracking-[0.22em] mt-1">{l.role}</div>
                  <div className="text-sm text-white/70 mt-3">{l.years}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-asphalt-900/60">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Community"
              title="We live here too."
              subtitle="$2.1M given to STEM education, vocational training, and veteran hiring programs across our service region since 2018."
            />
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop"
                alt="Community"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
