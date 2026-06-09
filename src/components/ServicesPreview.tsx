import { Link } from "react-router-dom";
import { ArrowRight, Fan, Flame, Wind, AirVent, Building2, ShieldAlert } from "lucide-react";
import { homeServiceCards } from "@/content/site";

const icons = [Fan, Flame, Wind, AirVent, Building2, ShieldAlert];

export function ServicesPreview() {
  return (
    <section className="bg-pb-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="section-heading">
            HVAC Services in Midvale &amp; Salt Lake County
          </h2>
          <p className="section-subheading">
            From AC repair and furnace service to ductwork and emergency HVAC,
            Paul Brothers Heating &amp; Air delivers dependable solutions for
            homes and businesses throughout the Wasatch Front.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServiceCards.map((service, index) => {
            const Icon = icons[index] ?? Fan;
            return (
              <article
                key={service.to}
                className="flex flex-col rounded-2xl border border-pb-border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pb-sky-light text-pb-sky">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-pb-navy">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-pb-gray">
                  {service.summary}
                </p>
                <Link
                  to={service.to}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-pb-sky transition hover:text-pb-navy"
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
