import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ServicePageContent } from "@/content/service-pages";
import { statewideAvailabilityNote } from "@/content/site";
import { routes } from "@/lib/routes";
import { PageMeta } from "./PageMeta";
import { ContactButtons } from "./ContactButtons";
import { CTABanner } from "./CTABanner";
import { ServiceTrustStrip } from "./ServiceTrustStrip";
import { ExpandableCards } from "./ExpandableCards";
import { ProcessSteps } from "./ProcessSteps";
import { Accordion } from "./Accordion";

type ServicePageLayoutProps = {
  content: ServicePageContent;
};

export function ServicePageLayout({ content }: ServicePageLayoutProps) {
  const navSections = content.sections.filter(
    (section) => section.id !== "overview",
  );

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

      <ServiceTrustStrip />

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0 space-y-14">
              {content.sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="section-heading">{section.title}</h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 pb-page-body">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-5 space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm text-white/80"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pb-orange"
                            aria-hidden
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.items && section.items.length > 0 ? (
                    <div className="mt-6">
                      <ExpandableCards items={section.items} />
                    </div>
                  ) : null}
                </article>
              ))}

              {content.process && content.process.length > 0 ? (
                <article id="process" className="scroll-mt-28">
                  <h2 className="section-heading">How It Works</h2>
                  <p className="section-subheading">
                    From your first call to a comfortable home — here's what to
                    expect.
                  </p>
                  <div className="mt-8">
                    <ProcessSteps steps={content.process} />
                  </div>
                </article>
              ) : null}

              {content.brands && content.brands.length > 0 ? (
                <article id="brands" className="scroll-mt-28">
                  <h2 className="section-heading">Brands We Service</h2>
                  <p className="section-subheading">
                    Our technicians work on all major equipment brands.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {content.brands.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full border border-white/10 bg-pb-navy-light/40 px-4 py-2 text-sm font-medium text-white/85"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </article>
              ) : null}

              <p className="text-sm leading-relaxed text-white/60">
                {statewideAvailabilityNote}
              </p>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="pb-card p-6">
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
              </div>

              {navSections.length > 0 ? (
                <nav
                  className="pb-card hidden p-5 lg:block"
                  aria-label="On this page"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                    On This Page
                  </p>
                  <ul className="mt-3 space-y-2">
                    {navSections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-white/70 transition hover:text-white"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                    {content.process ? (
                      <li>
                        <a
                          href="#process"
                          className="text-sm text-white/70 transition hover:text-white"
                        >
                          How It Works
                        </a>
                      </li>
                    ) : null}
                    {content.faqs ? (
                      <li>
                        <a
                          href="#faqs"
                          className="text-sm text-white/70 transition hover:text-white"
                        >
                          Common Questions
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      {content.faqs && content.faqs.length > 0 ? (
        <section
          id="faqs"
          className="scroll-mt-28 border-t border-white/10 pb-section-alt py-12 sm:py-16"
        >
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="section-heading">Common Questions</h2>
            <p className="section-subheading">
              Tap a question to see the answer.
            </p>
            <div className="mt-8">
              <Accordion
                items={content.faqs.map((faq, index) => ({
                  id: `faq-${index}`,
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </div>
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
            <Link
              to={routes.services}
              className="font-semibold text-sky-300 hover:text-white"
            >
              View all HVAC services →
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        headline={content.cta?.headline ?? "Need HVAC Help in Midvale?"}
        subtext={
          content.cta?.subtext ??
          "Call or text for a free estimate or 24/7 emergency service in the Salt Lake Valley."
        }
      />
    </>
  );
}
