const proofItems = [
  {
    title: "5.0 Star Rating",
    description: "Nearly 200 customer reviews across Google/Birdeye.",
  },
  {
    title: "BBB A+ Accredited",
    description: "Accredited by the Better Business Bureau with an A+ rating.",
  },
  {
    title: "No-Pressure Service",
    description:
      "Customers often mention honest recommendations and no unnecessary upsells.",
  },
  {
    title: "Fast Local Response",
    description:
      "Recommended by Utah homeowners for responsive, reliable HVAC service.",
  },
] as const;

export function ReviewsProof() {
  return (
    <section className="reviews-proof border-t border-white/10 pb-section-alt py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow text-sm font-semibold uppercase tracking-wide text-sky-300">
          Trusted Local HVAC Service
        </p>
        <h2 className="section-heading mt-2 max-w-3xl">
          Known for Honest Work, Fair Pricing, and Fast Response
        </h2>

        <div className="proof-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item) => (
            <div key={item.title} className="pb-card p-6">
              <strong className="block text-lg font-bold text-white">
                {item.title}
              </strong>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
