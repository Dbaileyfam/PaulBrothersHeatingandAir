import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { site } from "@/content/site";
import { ContactButtons } from "./ContactButtons";

type ContactSectionProps = {
  headline?: string;
  intro?: string;
};

export function ContactSection({
  headline = "Schedule HVAC Service in Midvale Today",
  intro = "Need AC repair, furnace service, or a free estimate? Call or text Paul Brothers Heating & Air — we respond quickly and serve all of Salt Lake County.",
}: ContactSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-pb-border bg-gradient-to-br from-pb-sky-light to-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="section-heading">{headline}</h2>
              <p className="section-subheading">{intro}</p>
              <div className="mt-8">
                <ContactButtons size="lg" layout="stack" showEstimate className="max-w-sm" />
              </div>
            </div>

            <div className="border-t border-pb-border bg-white p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <h3 className="text-lg font-bold text-pb-navy">Contact Info</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={site.phoneHref}
                    className="group flex items-start gap-3 text-pb-navy transition hover:text-pb-sky"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-pb-gray">
                        Call
                      </span>
                      <span className="font-semibold">{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.textHref}
                    className="group flex items-start gap-3 text-pb-navy transition hover:text-pb-sky"
                  >
                    <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-pb-gray">
                        Text
                      </span>
                      <span className="font-semibold">{site.text}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="group flex items-start gap-3 text-pb-navy transition hover:text-pb-sky"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-pb-gray">
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
                    className="group flex items-start gap-3 text-pb-navy transition hover:text-pb-sky"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-pb-gray">
                        Address
                      </span>
                      <span className="font-semibold">{site.address.full}</span>
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
