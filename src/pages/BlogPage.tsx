import { PageMeta } from "@/components/PageMeta";
import { CTABanner } from "@/components/CTABanner";
import { blogPage } from "@/content/site";
import { routes } from "@/lib/routes";

export function BlogPage() {
  return (
    <>
      <PageMeta
        title={blogPage.metaTitle}
        description={blogPage.metaDescription}
        path={routes.blog}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {blogPage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {blogPage.intro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="pb-card mx-auto max-w-3xl px-6 py-12 text-center">
          <p className="text-lg font-semibold text-white">Articles coming soon</p>
          <p className="mt-3 text-white/70">
            Check back for HVAC maintenance tips, seasonal advice, and local
            heating and cooling insights for the Salt Lake Valley and
            surrounding areas.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
