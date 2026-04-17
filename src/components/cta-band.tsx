import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  title = "Got a lot, a runway, or a corridor to pave?",
  subtitle = "Scope, estimate, and schedule within a week. Let's walk the site.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488404890693-cc066391d1e5?q=80&w=2000&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-asphalt-950/85" />
      <div className="container-x py-24 md:py-32 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-balance">{title}</h2>
        <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+12145550123" className="btn-ghost">
            Call (214) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
}
