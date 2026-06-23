import { Truck } from "lucide-react";
import { site } from "@/content/site";
import { ContactButtons } from "./ContactButtons";

export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-heading">{site.serviceArea.headline}</h2>
            <p className="section-subheading">{site.serviceArea.description}</p>

            <div className="pb-card mt-8 flex items-start gap-3 p-4">
              <Truck
                className="mt-0.5 h-5 w-5 shrink-0 text-sky-300"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-white">We Come to You</p>
                <p className="mt-1 text-sm text-white/70">
                  {site.serviceArea.travelNote} Call or text to schedule service
                  at your home or business.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
              Communities We Serve
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {site.serviceAreas.map((city) => (
                <li
                  key={city}
                  className="rounded-lg border border-white/10 bg-pb-navy-light/40 px-4 py-3 text-center text-sm font-medium text-white"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/60">
              {site.serviceArea.citiesNote}
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
