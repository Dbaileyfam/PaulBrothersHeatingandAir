import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { statewideHomeSection } from "@/content/site";
import { routes } from "@/lib/routes";

export function StatewideServiceSection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sky-300">
              <MapPin className="h-5 w-5" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Midvale, UT · Salt Lake Valley
              </span>
            </div>
            <h2 className="section-heading">{statewideHomeSection.headline}</h2>
            <p className="section-subheading">{statewideHomeSection.body}</p>
            <Link
              to={routes.statewideHvacService}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-pb-sky px-6 py-3.5 text-base font-semibold text-white transition hover:bg-pb-navy-light"
            >
              {statewideHomeSection.ctaLabel}
            </Link>
          </div>

          <div className="pb-card grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">
                Daily Service
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                AC repair, furnace service, maintenance, and emergency HVAC
                across the Salt Lake Valley from our Midvale home base.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">
                Statewide Utah
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Larger replacements, commercial work, specialty installs, and
                qualifying projects — call for honest scheduling and travel
                options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
