import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageMeta } from "@/components/PageMeta";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsProof } from "@/components/ReviewsProof";
import { CustomerReviews } from "@/components/CustomerReviews";
import { CTABanner } from "@/components/CTABanner";
import { aboutPage } from "@/content/site";
import { routes } from "@/lib/routes";

export function AboutUsPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      <PageMeta
        title={aboutPage.metaTitle}
        description={aboutPage.metaDescription}
        path={routes.aboutUs}
      />

      <section className="bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {aboutPage.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            {aboutPage.intro}
          </p>
        </div>
      </section>

      <ReviewsProof />

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl space-y-5 px-4 pb-page-body">
          {aboutPage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <AboutSection />
      <CustomerReviews />
      <CTABanner />
    </>
  );
}
