import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <div className="eyebrow mb-4">{eyebrow}</div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg text-white/70 text-pretty">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
