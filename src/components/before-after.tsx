"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  alt = "",
}: {
  before: string;
  after: string;
  alt?: string;
}) {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onPointer = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPct((x / rect.width) * 100);
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 cursor-ew-resize select-none"
      onMouseMove={(e) => e.buttons === 1 && onPointer(e.clientX)}
      onMouseDown={(e) => onPointer(e.clientX)}
      onTouchMove={(e) => onPointer(e.touches[0].clientX)}
    >
      <Image src={after} alt={`${alt} after`} fill className="object-cover" sizes="100vw" />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <div className="relative h-full w-full" style={{ aspectRatio: "16/9" }}>
          <Image src={before} alt={`${alt} before`} fill className="object-cover" sizes="100vw" />
        </div>
      </div>
      <div
        className="absolute inset-y-0 w-0.5 bg-ember-500 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]"
        style={{ left: `${pct}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-ember-500 text-asphalt-950 font-bold text-xs flex items-center justify-center">
          ◀ ▶
        </div>
      </div>
      <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.24em] bg-black/60 backdrop-blur px-2.5 py-1 rounded-full">
        Before
      </div>
      <div className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.24em] bg-ember-500 text-asphalt-950 px-2.5 py-1 rounded-full font-semibold">
        After
      </div>
    </div>
  );
}
