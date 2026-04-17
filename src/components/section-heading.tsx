import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  index,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  index?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-4xl ${alignCls}`}>
      <div className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : ""}`}>
        {index && <span className="mono text-[11px] text-hivis-500 tabular-nums">{index}</span>}
        <span className="h-px w-10 bg-hivis-500" />
        {eyebrow && <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>}
      </div>
      <Reveal delay={0.05}>
        <h2
          className="font-display font-black uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance"
          style={{ fontSize: "clamp(2rem, 5.4vw, 4.8rem)" }}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-white/65 leading-relaxed text-pretty max-w-2xl">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
