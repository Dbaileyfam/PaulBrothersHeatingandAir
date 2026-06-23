import { PageMeta } from "@/components/PageMeta";
import { CustomerReviews } from "@/components/CustomerReviews";
import { ReviewsProof } from "@/components/ReviewsProof";
import { CTABanner } from "@/components/CTABanner";
import { reviewsPage } from "@/content/site";
import { routes } from "@/lib/routes";

export function ReviewsPage() {
  return (
    <>
      <PageMeta
        title={reviewsPage.metaTitle}
        description={reviewsPage.metaDescription}
        path={routes.reviews}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {reviewsPage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {reviewsPage.intro}
          </p>
        </div>
      </section>

      <ReviewsProof />
      <CustomerReviews />
      <CTABanner headline="Ready to Work With Paul Brothers?" />
    </>
  );
}
