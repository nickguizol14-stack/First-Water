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
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "backdrop-blur-md bg-asphalt-950/75 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl tracking-wide">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-ember-500" />
          <span>FIRST WATER</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+12145550123"
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <Phone className="h-4 w-4" /> (214) 555-0123
          </a>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
        <button
          className="lg:hidden rounded-full border border-white/15 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-asphalt-900">
          <div className="container-x py-6 flex flex-col gap-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium"
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
