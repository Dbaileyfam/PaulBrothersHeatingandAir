import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ServicePageContent } from "@/content/site";
import { statewideAvailabilityNote } from "@/content/site";
import { routes } from "@/lib/routes";
import { PageMeta } from "./PageMeta";
import { ContactButtons } from "./ContactButtons";
import { CTABanner } from "./CTABanner";

type ServicePageLayoutProps = {
  content: ServicePageContent;
};

export function ServicePageLayout({ content }: ServicePageLayoutProps) {
  return (
    <>
      <PageMeta
        title={content.metaTitle}
        description={content.metaDescription}
        path={content.path}
      />

      <section className="bg-gradient-to-br from-pb-deep via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            {content.title}
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {content.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {content.intro}
          </p>
          <div className="mt-8">
            <ContactButtons size="lg" showEstimate />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-5 pb-page-body">
              {content.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-white/60">
              {statewideAvailabilityNote}
            </p>
          </div>
          <aside className="pb-card h-fit p-6">
            <h2 className="text-lg font-bold text-white">What We Offer</h2>
            <ul className="mt-4 space-y-3">
              {content.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-white/85"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pb-orange"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ContactButtons layout="stack" showEstimate />
            </div>
          </aside>
        </div>
      </section>

      {content.faqs && content.faqs.length > 0 ? (
        <section className="border-t border-white/10 pb-section-alt py-12">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold text-white">Common Questions</h2>
            <dl className="mt-6 space-y-6">
              {content.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/75">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-white">Related Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {content.relatedServices.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-pb-navy-light/40 px-5 py-4 text-sm font-semibold text-white transition hover:border-sky-400/40 hover:bg-pb-navy-light/70"
              >
                {item.label}
                <ArrowRight
                  className="h-4 w-4 text-sky-300 transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <Link to={routes.services} className="font-semibold text-sky-300 hover:text-white">
              View all HVAC services →
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        headline="Need HVAC Help in Midvale?"
        subtext="Call or text for a free estimate or 24/7 emergency service in the Salt Lake Valley."
      />
    </>
  );
}
