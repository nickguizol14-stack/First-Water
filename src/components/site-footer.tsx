import Link from "next/link";
import { footerGroups } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-cream-50">
      <div className="container-x pt-24 pb-14 grid gap-14 md:grid-cols-5">
        <div className="md:col-span-2 space-y-6">
          <div className="serif text-4xl tracking-tight">
            First Water
          </div>
          <p className="text-cream-50/60 max-w-sm text-sm leading-relaxed">
            Heavy-civil asphalt paving. Miles of mainline. Runways you can hear land on. Parking
            lots that outlive their tenants.
          </p>
          <div className="text-sm text-cream-50/60 space-y-1">
            <div>4400 Industrial Pkwy, Irving, TX 75038</div>
            <div>
              <a className="hover:text-cream-50" href="tel:+12145550123">
                (214) 555-0123
              </a>{" "}
              · <a className="hover:text-cream-50" href="mailto:hello@fwcis.com">hello@fwcis.com</a>
            </div>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <div className="text-[11px] uppercase tracking-[0.28em] text-ember-500 mb-5 font-medium">
              {group.title}
            </div>
            <ul className="space-y-3 text-sm text-cream-50/75">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream-50 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-cream-50/45">
          <div>© {new Date().getFullYear()} First Water Construction & Infrastructure Services</div>
          <div>NAPA Diamond · FAA P-401 · TxDOT Prequalified · EMR 0.68</div>
        </div>
      </div>
    </footer>
  );
}
