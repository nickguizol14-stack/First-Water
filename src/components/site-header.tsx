"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/nav";
import { Menu, X, Phone } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-tar-950/80 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Hi-vis stripe accent */}
      <div className="h-[3px] hivis-stripe" />
      <div className="container-x flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid place-items-center h-8 w-8 bg-hivis-500 text-tar-950 font-black text-sm">
            FW
          </span>
          <span className="font-display font-extrabold text-lg uppercase tracking-[0.14em] text-white">
            First Water
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 mono text-[12px] uppercase tracking-[0.18em] text-white/70">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-hivis-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+12145550123"
            className="flex items-center gap-2 mono text-[12px] uppercase tracking-[0.18em] text-white/60 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" /> (214) 555-0123
          </a>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
        <button
          className="lg:hidden border border-white/20 p-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-tar-900">
          <div className="container-x py-6 flex flex-col gap-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display font-bold text-xl uppercase tracking-wider text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
