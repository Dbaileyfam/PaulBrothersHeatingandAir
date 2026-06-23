import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { CTABanner } from "@/components/CTABanner";
import { ContactButtons } from "@/components/ContactButtons";
import { serviceAreasPage, statewideAvailabilityNote } from "@/content/site";
import { routes } from "@/lib/routes";

export function ServiceAreasPage() {
  return (
    <>
      <PageMeta
        title={serviceAreasPage.metaTitle}
        description={serviceAreasPage.metaDescription}
        path={routes.serviceAreas}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4 inline-flex items-center gap-2 text-sky-200">
            <MapPin className="h-5 w-5" aria-hidden />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Based in Midvale, UT
            </span>
          </div>
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {serviceAreasPage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {serviceAreasPage.intro}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 pb-page-body">
              {serviceAreasPage.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="text-sm text-white/60">{statewideAvailabilityNote}</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                Salt Lake Valley Communities We Serve
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {serviceAreasPage.valleyCities.map((city) => (
                  <li
                    key={city}
                    className="rounded-lg border border-white/10 bg-pb-navy-light/40 px-4 py-3 text-center text-sm font-medium text-white"
                  >
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-white/60">
                Not listed? Call us — we may still be able to help in the valley.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <ContactButtons showEstimate />
            <Link
              to={routes.services}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              View HVAC Services
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
