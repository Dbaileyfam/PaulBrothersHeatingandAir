import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { CTABanner } from "@/components/CTABanner";
import { homeServiceCards, serviceNavLinks, servicesPage } from "@/content/site";
import { routes } from "@/lib/routes";

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title={servicesPage.metaTitle}
        description={servicesPage.metaDescription}
        path={routes.services}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {servicesPage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {servicesPage.intro}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceNavLinks
              .filter((link) => link.to !== routes.services)
              .map((link) => {
                const card = homeServiceCards.find((c) => c.to === link.to);
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="pb-card group flex h-full flex-col p-6 transition hover:border-sky-400/30"
                    >
                      <h2 className="text-lg font-bold text-white">{link.label}</h2>
                      {card ? (
                        <p className="mt-2 flex-1 text-sm text-white/70">{card.summary}</p>
                      ) : null}
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-300 group-hover:text-white">
                        Learn more
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
