import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { site } from "@/content/site";
import { ContactButtons } from "./ContactButtons";

type ContactSectionProps = {
  headline?: string;
  intro?: string;
};

export function ContactSection({
  headline = "Schedule HVAC Service Today",
  intro = "Need AC repair, furnace service, or a free estimate? Call or text Paul Brothers Heating & Air — we respond quickly and our mobile technicians come to you throughout the Salt Lake Valley and beyond.",
}: ContactSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pb-navy-light/80 to-pb-navy/90 shadow-xl shadow-black/30">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="section-heading">{headline}</h2>
              <p className="section-subheading">{intro}</p>
              <div className="mt-8">
                <ContactButtons size="lg" layout="stack" showEstimate className="max-w-sm" />
              </div>
            </div>

            <div className="border-t border-white/10 bg-pb-navy-light/40 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <h3 className="text-lg font-bold text-white">Contact Info</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={site.phoneHref}
                    className="group flex items-start gap-3 text-white transition hover:text-sky-300"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                        Call
                      </span>
                      <span className="font-semibold">{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.textHref}
                    className="group flex items-start gap-3 text-white transition hover:text-sky-300"
                  >
                    <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                        Text
                      </span>
                      <span className="font-semibold">{site.text}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="group flex items-start gap-3 text-white transition hover:text-sky-300"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                        Email
                      </span>
                      <span className="font-semibold">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.address.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-white transition hover:text-sky-300"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                        {site.address.label}
                      </span>
                      <span className="font-semibold">{site.address.full}</span>
                      <span className="mt-1 block text-xs text-white/50">
                        {site.address.note}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
