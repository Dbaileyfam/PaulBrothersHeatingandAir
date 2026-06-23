import { useMemo, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import {
  birdeyeReviewsUrl,
  customerReviews,
  googleReviewsUrl,
  reviewStats,
  type CustomerReview,
  type ReviewCategory,
} from "@/content/reviews";

const INITIAL_VISIBLE = 9;
const LOAD_MORE_COUNT = 6;

const filters: { id: "all" | ReviewCategory; label: string }[] = [
  { id: "all", label: "All Reviews" },
  { id: "ac", label: "AC" },
  { id: "heating", label: "Heating" },
  { id: "emergency", label: "Emergency" },
  { id: "installation", label: "Installation" },
  { id: "service", label: "Service" },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-pb-orange" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <article className="pb-card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <StarRating />
        <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/60">
          {review.source}
        </span>
      </div>

      {review.headline ? (
        <h3 className="mt-4 text-base font-bold text-white">{review.headline}</h3>
      ) : null}

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <footer className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-white">{review.author}</p>
        {review.date ? (
          <p className="mt-0.5 text-xs text-white/50">{review.date}</p>
        ) : null}
      </footer>
    </article>
  );
}

export function CustomerReviews() {
  const [activeFilter, setActiveFilter] = useState<"all" | ReviewCategory>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredReviews = useMemo(() => {
    if (activeFilter === "all") return customerReviews;
    return customerReviews.filter((review) =>
      review.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  function handleFilterChange(filter: "all" | ReviewCategory) {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE);
  }

  return (
    <section id="customer-reviews" className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">
            Customer Reviews
          </p>
          <h2 className="section-heading mt-2">
            What Utah Homeowners Are Saying
          </h2>
          <p className="section-subheading">
            Real feedback from Google, Yelp, and customers across the Salt Lake
            Valley. Paul Brothers Heating &amp; Air maintains a{" "}
            {reviewStats.rating.toFixed(1)}-star rating with nearly{" "}
            {reviewStats.totalReviews} reviews.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="pb-card inline-flex items-center gap-3 px-5 py-3">
            <div className="flex items-center gap-1 text-pb-orange">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
              ))}
            </div>
            <div>
              <p className="text-lg font-bold text-white">
                {reviewStats.rating.toFixed(1)} / 5.0
              </p>
              <p className="text-xs text-white/60">
                Based on {reviewStats.totalReviews}+ reviews
              </p>
            </div>
          </div>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition hover:text-white"
          >
            Read on Google
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={birdeyeReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition hover:text-white"
          >
            View on Birdeye
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter reviews by service type"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive ? "true" : "false"}
                onClick={() => handleFilterChange(filter.id)}
                className={
                  isActive
                    ? "rounded-full bg-pb-orange px-4 py-2 text-sm font-semibold text-white"
                    : "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-white/25 hover:text-white"
                }
              >
                {filter.label}
                {filter.id !== "all" ? (
                  <span className="ml-1.5 text-white/50">
                    (
                    {
                      customerReviews.filter((review) =>
                        review.categories.includes(filter.id as ReviewCategory),
                      ).length
                    }
                    )
                  </span>
                ) : (
                  <span className="ml-1.5 text-white/50">
                    ({customerReviews.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-white/50">
          Showing {visibleReviews.length} of {filteredReviews.length} reviews
          {activeFilter !== "all"
            ? ` tagged ${filters.find((f) => f.id === activeFilter)?.label.toLowerCase()}`
            : ""}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
              className="rounded-lg border-2 border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15"
            >
              Load more reviews
            </button>
          </div>
        ) : null}

        <p className="mt-10 text-center text-sm text-white/60">
          Have more reviews to share?{" "}
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-300 underline transition hover:text-white"
          >
            Leave a review on Google
          </a>{" "}
          — we&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
}
