"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/nav";
import { Menu, X } from "lucide-react";

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
          ? "backdrop-blur-md bg-cream-50/80 border-b border-ink-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500 transition group-hover:scale-150" />
          <span className="serif text-[22px] tracking-tight text-ink-950 font-medium">
            First Water
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9 text-[13px] font-medium text-ink-700">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative hover:text-ink-950 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+12145550123"
            className="text-[13px] font-medium text-ink-500 hover:text-ink-950"
          >
            (214) 555-0123
          </a>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
        <button
          className="lg:hidden rounded-full border border-ink-950/20 p-2 text-ink-950"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-200 bg-cream-50">
          <div className="container-x py-6 flex flex-col gap-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="serif text-2xl text-ink-950"
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
