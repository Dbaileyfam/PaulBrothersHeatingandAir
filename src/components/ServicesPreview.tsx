import { Link } from "react-router-dom";
import { ArrowRight, Fan, Flame, Wind, AirVent, Building2, ShieldAlert } from "lucide-react";
import { homeServiceCards } from "@/content/site";

const icons = [Fan, Flame, Wind, AirVent, Building2, ShieldAlert];

export function ServicesPreview() {
  return (
    <section className="pb-section-alt py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="section-heading">
            HVAC Services for the Salt Lake Valley &amp; Surrounding Areas
          </h2>
          <p className="section-subheading">
            From AC repair and furnace service to ductwork and emergency HVAC,
            Paul Brothers Heating &amp; Air delivers dependable mobile service for
            homes and businesses across the Salt Lake Valley and all surrounding
            areas — we&apos;ll travel wherever the job takes us.
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
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
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
      </div>
    </section>
  );
}
