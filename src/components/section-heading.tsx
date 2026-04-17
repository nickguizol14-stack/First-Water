import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const titleColor = tone === "dark" ? "text-cream-50" : "text-ink-950";
  const subColor = tone === "dark" ? "text-cream-50/70" : "text-ink-600";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <div className="eyebrow mb-5">{eyebrow}</div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`serif font-medium tracking-[-0.02em] text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.98] text-balance ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-6 text-lg md:text-xl leading-relaxed text-pretty ${subColor}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
