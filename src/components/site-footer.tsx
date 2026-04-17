import Link from "next/link";
import { footerGroups } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="bg-tar-900 border-t border-white/5">
      <div className="h-[3px] hivis-stripe" />
      <div className="container-x pt-20 pb-12 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 bg-hivis-500 text-tar-950 font-black text-base">
              FW
            </span>
            <span className="font-display font-extrabold text-xl uppercase tracking-[0.14em]">
              First Water
            </span>
          </div>
          <p className="text-white/55 max-w-sm text-sm leading-relaxed">
            Heavy-civil asphalt paving. Miles of mainline. Runways you can hear land on. Parking
            lots that outlive their tenants.
          </p>
          <div className="mono text-xs text-white/55 space-y-1 uppercase tracking-[0.14em]">
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
            <div className="mono text-[11px] uppercase tracking-[0.24em] text-hivis-500 mb-5">
              — {group.title}
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
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          <div>© {new Date().getFullYear()} First Water Construction & Infrastructure Services</div>
          <div>NAPA Diamond · FAA P-401 · TxDOT Prequalified · EMR 0.68</div>
        </div>
      </div>
    </footer>
  );
}
