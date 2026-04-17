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
      className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 cursor-ew-resize select-none bg-tar-900"
      onMouseMove={(e) => e.buttons === 1 && onPointer(e.clientX)}
      onMouseDown={(e) => onPointer(e.clientX)}
      onTouchMove={(e) => onPointer(e.touches[0].clientX)}
    >
      <Image
        src={after}
        alt={`${alt} after`}
        fill
        className="object-cover img-industrial"
        sizes="100vw"
      />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <div className="relative h-full w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={before}
            alt={`${alt} before`}
            fill
            className="object-cover img-industrial"
            sizes="100vw"
          />
        </div>
      </div>
      <div
        className="absolute inset-y-0 w-[2px] bg-hivis-500 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]"
        style={{ left: `${pct}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 bg-hivis-500 text-tar-950 mono text-xs flex items-center justify-center font-bold">
          ◀ ▶
        </div>
      </div>
      <div className="absolute top-4 left-4 chip">Before</div>
      <div className="absolute top-4 right-4 chip bg-hivis-500/95 text-tar-950 border-transparent font-semibold">
        After
      </div>
    </div>
  );
}
