import {
  Building2,
  Fan,
  Flame,
  ShieldAlert,
  Wind,
  Wrench,
  AirVent,
} from "lucide-react";
import { services } from "@/content/site";

const icons = [Fan, Flame, Wrench, Wind, AirVent, ShieldAlert, Building2];

export function Services() {
  return (
    <section id="services" className="bg-pb-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="section-heading">
            HVAC Services in Midvale &amp; Salt Lake County
          </h2>
          <p className="section-subheading">
            From routine maintenance to emergency repairs, Paul Brothers Heating
            &amp; Air delivers dependable heating and cooling solutions for
            homes and businesses throughout the Wasatch Front.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Wrench;
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-2xl border border-pb-border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pb-sky-light text-pb-sky">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-pb-navy">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-pb-gray">
                  {service.summary}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-pb-border pt-4">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-pb-navy"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pb-orange"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
