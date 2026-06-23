import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { statewidePage } from "@/content/site";
import { routes } from "@/lib/routes";

export function StatewideHvacServicePage() {
  return (
    <>
      <PageMeta
        title={statewidePage.metaTitle}
        description={statewidePage.metaDescription}
        path={routes.statewideHvacService}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
            Based in Midvale, Utah
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {statewidePage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {statewidePage.intro}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl space-y-5 px-4 pb-page-body">
          {statewidePage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="pb-section-alt border-t border-white/10 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="pb-card p-8">
              <h2 className="text-2xl font-bold text-white">
                {statewidePage.coreAreaTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-white/75">
                {statewidePage.coreAreaBody}
              </p>
              <Link
                to={routes.contactUs}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition hover:text-white"
              >
                Request valley service
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="pb-card p-8">
              <h2 className="text-2xl font-bold text-white">
                {statewidePage.statewideTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-white/75">
                {statewidePage.statewideBody}
              </p>
              <ul className="mt-6 space-y-3">
                {statewidePage.qualifyingProjects.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-pb-orange"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-pb-navy-light/40 px-6 py-4 text-center text-sm leading-relaxed text-white/70">
            {statewidePage.honestNote}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-heading text-center">HVAC Services We Offer</h2>
          <p className="section-subheading mx-auto text-center">
            Explore our heating and cooling services — available across the Salt
            Lake Valley daily, with statewide options for qualifying projects.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {statewidePage.serviceLinks.map((link) => (
              <li key={`${link.to}-${link.label}`}>
                <Link
                  to={link.to}
                  className="pb-card flex items-center justify-between px-5 py-4 text-sm font-semibold text-white transition hover:border-sky-400/30 hover:bg-pb-navy-light/70"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-sky-300" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection
        headline="Ask About Statewide HVAC Service"
        intro="Tell us where you are in Utah and what you need — we'll give you a straight answer on availability, travel, and next steps. No pressure, just honest guidance."
      />
      <CTABanner
        headline="Salt Lake Valley Service Available Daily"
        subtext="Based in Midvale, we serve the valley every day. Call or text to schedule repairs, estimates, or emergency HVAC in our core service area."
      />
    </>
  );
}
