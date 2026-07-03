import { Link } from "react-router-dom";
import { ArrowRight, Fan, Flame, Wrench, Settings, Wind, AirVent, Building2 } from "lucide-react";
import { homeServiceCards } from "@/content/site";
import { routes } from "@/lib/routes";

const icons = [Fan, Flame, Wrench, Settings, Wind, AirVent];

export function ServicesPreview() {
  return (
    <section className="pb-section-alt py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="section-heading">HVAC Services in Midvale &amp; the Salt Lake Valley</h2>
          <p className="section-subheading">
            Repairs, installations, maintenance, and emergency service from a
            Midvale-based team you can call directly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServiceCards.map((service, index) => {
            const Icon = icons[index] ?? Fan;
            return (
              <article
                key={service.to}
                className="pb-card flex flex-col p-6 transition hover:border-sky-400/30 hover:bg-pb-navy-light/70"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-white/70">
                  {service.summary}
                </p>
                <Link
                  to={service.to}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition hover:text-white"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to={routes.services}
            className="inline-flex items-center gap-2 rounded-lg bg-pb-sky px-6 py-3 text-sm font-semibold text-white transition hover:bg-pb-navy-light"
          >
            View All Services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to={routes.commercialHvac}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Building2 className="h-4 w-4" aria-hidden />
            Commercial HVAC
          </Link>
        </div>
      </div>
    </section>
  );
}
