import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { AboutSection } from "@/components/AboutSection";
import { CustomerReviews } from "@/components/CustomerReviews";
import { CTABanner } from "@/components/CTABanner";
import {
  aboutUsPage,
  serviceAreasSection,
  statewideAvailabilityNote,
} from "@/content/site";
import { routes } from "@/lib/routes";

export function AboutUsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <PageMeta
        title={aboutUsPage.metaTitle}
        description={aboutUsPage.metaDescription}
        path={routes.aboutUs}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {aboutUsPage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {aboutUsPage.intro}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl space-y-5 px-4 pb-page-body">
          {aboutUsPage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <AboutSection />
      <CustomerReviews />

      <section
        id="service-areas"
        className="scroll-mt-28 border-t border-white/10 py-14 sm:py-18"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-sky-300">
              <MapPin className="h-5 w-5" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Based in Midvale, UT · Wasatch Front
              </span>
            </div>
            <h2 className="section-heading">{serviceAreasSection.headline}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {serviceAreasSection.intro}
            </p>
            <div className="mt-5 space-y-5 pb-page-body">
              {serviceAreasSection.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="text-sm text-white/60">{statewideAvailabilityNote}</p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Wasatch Front Communities We Serve
            </h3>
            <p className="mt-3 max-w-3xl text-white/70">
              From the Salt Lake Valley to Utah Valley, Davis and Weber counties,
              and nearby mountain communities.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {serviceAreasSection.regions.map((region) => (
                <div key={region.name} className="pb-card p-6">
                  <h4 className="text-base font-bold text-sky-300">
                    {region.name}
                  </h4>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {region.cities.map((city) => (
                      <li
                        key={city}
                        className="rounded-md border border-white/5 bg-pb-navy-light/30 px-3 py-2 text-center text-xs font-medium text-white/90 sm:text-sm"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/60">
              Don&apos;t see your city? Call us — we may still be able to help
              anywhere along the Wasatch Front.
            </p>
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Work With Paul Brothers?" />
    </>
  );
}
