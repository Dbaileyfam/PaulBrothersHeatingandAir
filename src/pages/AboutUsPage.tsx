import { PageMeta } from "@/components/PageMeta";
import { AboutSection } from "@/components/AboutSection";
import { CustomerReviews } from "@/components/CustomerReviews";
import { ReviewsProof } from "@/components/ReviewsProof";
import { CTABanner } from "@/components/CTABanner";
import { aboutUsPage } from "@/content/site";
import { routes } from "@/lib/routes";

export function AboutUsPage() {
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

      <ReviewsProof />

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl space-y-5 px-4 pb-page-body">
          {aboutUsPage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <AboutSection />
      <CustomerReviews />
      <CTABanner headline="Ready to Work With Paul Brothers?" />
    </>
  );
}
