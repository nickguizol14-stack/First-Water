import Link from "next/link";
import { footerGroups } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-asphalt-950">
      <div className="container-x py-20 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <div className="font-display text-3xl tracking-wide">
            FIRST <span className="text-ember-500">WATER</span>
          </div>
          <p className="text-white/60 max-w-sm text-sm">
            Heavy-civil asphalt paving. Miles of mainline. Runways you can hear land on. Parking
            lots that outlive their tenants.
          </p>
          <div className="text-sm text-white/60 space-y-1">
            <div>4400 Industrial Pkwy, Irving, TX 75038</div>
            <div>
              <a className="hover:text-white" href="tel:+12145550123">
                (214) 555-0123
              </a>{" "}
              · <a className="hover:text-white" href="mailto:hello@fwcis.com">hello@fwcis.com</a>
            </div>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <div className="text-xs uppercase tracking-[0.24em] text-ember-500 mb-4 font-semibold">
              {group.title}
            </div>
            <ul className="space-y-3 text-sm text-white/75">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-white/40">
          <div>© {new Date().getFullYear()} First Water Construction & Infrastructure Services</div>
          <div>NAPA Diamond · FAA P-401 · TxDOT Prequalified · EMR 0.68</div>
        </div>
      </div>
    </footer>
  );
}
