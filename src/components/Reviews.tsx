import { Star } from "lucide-react";
import { featuredReviews } from "@/content/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="pb-section-alt py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading mx-auto">
            Paul Brothers Heating &amp; Air is proud to earn strong Google
            reviews from homeowners and businesses across the Salt Lake Valley
            and surrounding areas.
          </p>
          <div className="mt-4 inline-flex items-center gap-1 text-pb-orange">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
            ))}
            <span className="ml-2 text-sm font-semibold text-white">
              5.0 stars · Nearly 200 reviews
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredReviews.slice(0, 3).map((review) => (
            <blockquote
              key={review.id}
              className="pb-card flex flex-col p-6"
            >
              <div className="mb-3 flex gap-0.5 text-pb-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/75">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-white">
                — {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
