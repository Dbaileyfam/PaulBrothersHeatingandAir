import { MapPin } from "lucide-react";
import { site } from "@/content/site";
import { ContactButtons } from "./ContactButtons";

export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-heading">
              Serving Salt Lake County &amp; Surrounding Cities
            </h2>
            <p className="section-subheading">
              Based in Midvale, Utah, we provide fast, reliable HVAC service
              throughout Salt Lake County. Whether you need AC repair in Sandy,
              furnace service in Murray, or a new system in Draper, our local
              technicians are ready to help.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-pb-border bg-pb-gray-light p-4">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-pb-sky"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-pb-navy">Our Location</p>
                <a
                  href={site.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-pb-gray transition hover:text-pb-sky"
                >
                  {site.address.full}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-pb-gray">
              Cities We Serve
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {site.serviceAreas.map((city) => (
                <li
                  key={city}
                  className="rounded-lg border border-pb-border bg-white px-4 py-3 text-center text-sm font-medium text-pb-navy"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-pb-gray">
              Not sure if we cover your neighborhood? Call or text — we&apos;re
              happy to confirm service availability in your area.
            </p>
            <div className="mt-6">
              <ContactButtons showEstimate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
