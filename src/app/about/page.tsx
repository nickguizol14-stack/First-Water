import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { CtaBand } from "@/components/cta-band";
import { gallery } from "@/lib/data";

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
            index="01"
            eyebrow="About Us"
            title="38 years. One line of work. Done well."
            subtitle="First Water started as a three-truck paving outfit in North Texas in 1988. Four generations of superintendents later, we run the largest independent paving operation in the Southwest."
          />
          <ScrollImage
            src={gallery.crew}
            alt="First Water crew"
            aspect="aspect-[4/5]"
            parallax={10}
            reveal="clip-up"
          />
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x">
          <SectionHeading index="02" eyebrow="Values" title="Four operating principles — since 1988." />
          <div className="mt-16 grid md:grid-cols-2 border-t border-l border-white/10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="bg-tar-950 p-10 h-full border-r border-b border-white/10 -mr-px -mb-px">
                  <div className="mono text-[11px] text-hivis-500 tabular-nums uppercase tracking-[0.24em]">0{i + 1}</div>
                  <div className="mt-4 font-display font-extrabold uppercase text-xl md:text-2xl text-white tracking-wide">{v.title}</div>
                  <p className="mt-3 text-white/60 leading-relaxed">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10">
        <div className="container-x">
          <SectionHeading index="03" eyebrow="Leadership" title="Running the operation." />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="border-t-2 border-hivis-500 pt-6">
                  <div className="font-display font-extrabold uppercase text-lg md:text-xl text-white tracking-wide">{l.name}</div>
                  <div className="mono text-hivis-500 text-[11px] uppercase tracking-[0.26em] mt-2">
                    {l.role}
                  </div>
                  <div className="text-sm text-white/55 mt-3">{l.years}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-tar-900">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            index="04"
            eyebrow="Community"
            title="We live here too."
            subtitle="$2.1M given to STEM education, vocational training, and veteran hiring programs across our service region since 2018."
          />
          <ScrollImage
            src={gallery.community}
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
