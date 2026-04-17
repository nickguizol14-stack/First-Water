import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = { title: "Contact" };

const offices = [
  { city: "Irving, TX (HQ)", addr: "4400 Industrial Pkwy, Irving, TX 75038" },
  { city: "Houston, TX", addr: "9100 Clinton Dr, Houston, TX 77029" },
  { city: "Oklahoma City, OK", addr: "7220 NW Expressway, OKC, OK 73132" },
  { city: "Phoenix, AZ", addr: "3800 W Van Buren St, Phoenix, AZ 85009" },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Contact"
            title="Let's scope the job."
            subtitle="Tell us about the site. A superintendent calls within one business day to walk it with you."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-asphalt-800 p-6">
              <div className="eyebrow mb-4">Direct</div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-ember-500 mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-[0.18em]">Office</div>
                    <a href="tel:+12145550123" className="hover:text-ember-500">(214) 555-0123</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-ember-500 mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-[0.18em]">Field dispatch (24/7)</div>
                    <a href="tel:+12145550177" className="hover:text-ember-500">(214) 555-0177</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-ember-500 mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-[0.18em]">Email</div>
                    <a href="mailto:hello@fwcis.com" className="hover:text-ember-500">hello@fwcis.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-ember-500 mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-[0.18em]">Hours</div>
                    <div>Mon–Fri, 7a–7p CT · field crews 24/7</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-asphalt-800 p-6">
              <div className="eyebrow mb-4">Offices</div>
              <ul className="space-y-4 text-sm">
                {offices.map((o) => (
                  <li key={o.city} className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-ember-500 mt-0.5" />
                    <div>
                      <div className="text-white font-semibold">{o.city}</div>
                      <div className="text-white/60">{o.addr}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
