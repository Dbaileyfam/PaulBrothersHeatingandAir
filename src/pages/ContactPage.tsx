import { PageMeta } from "@/components/PageMeta";
import { ContactSection } from "@/components/ContactSection";
import { CTABanner } from "@/components/CTABanner";
import { contactPage } from "@/content/site";
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
        </div>
      </section>

      <ContactSection headline="Get a Free HVAC Estimate" />
      <CTABanner
        headline="Need Emergency HVAC Service?"
        subtext="24/7 emergency AC and furnace repair in the Salt Lake Valley. Call or text now."
      />
    </>
  );
}
