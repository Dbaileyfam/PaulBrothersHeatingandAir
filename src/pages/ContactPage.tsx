import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { ContactForm } from "@/components/ContactForm";
import { CTABanner } from "@/components/CTABanner";
import { ContactButtons } from "@/components/ContactButtons";
import { contactPage, site } from "@/content/site";
import { routes } from "@/lib/routes";

export function ContactPage() {
  return (
    <>
      <PageMeta
        title={contactPage.metaTitle}
        description={contactPage.metaDescription}
        path={routes.contact}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {contactPage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {contactPage.intro}
          </p>
          <div className="mt-8">
            <ContactButtons size="lg" showEstimate={false} />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <ContactForm />

            <div className="space-y-6">
              <div className="pb-card p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white">Contact Info</h2>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href={site.phoneHref}
                      className="flex items-start gap-3 text-white transition hover:text-sky-300"
                    >
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                          Call
                        </span>
                        <span className="font-semibold">{site.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.textHref}
                      className="flex items-start gap-3 text-white transition hover:text-sky-300"
                    >
                      <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                          Text
                        </span>
                        <span className="font-semibold">{site.text}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.emailHref}
                      className="flex items-start gap-3 text-white transition hover:text-sky-300"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                          Email
                        </span>
                        <span className="font-semibold">{site.email}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.address.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-white transition hover:text-sky-300"
                    >
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pb-orange" aria-hidden />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                          {site.address.label}
                        </span>
                        <span className="font-semibold">{site.address.full}</span>
                        <span className="mt-1 block text-xs text-white/50">
                          {site.address.note}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-pb-navy-light/30 p-6">
                <p className="text-sm font-semibold text-white">Need help right now?</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  For 24/7 emergency AC or furnace repair in the Salt Lake Valley,
                  call or text — we respond day and night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need Emergency HVAC Service?"
        subtext="24/7 emergency AC and furnace repair in the Salt Lake Valley. Call or text now."
      />
    </>
  );
}
