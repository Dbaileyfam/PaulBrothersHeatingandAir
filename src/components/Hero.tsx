import { Clock, ShieldCheck, Star } from "lucide-react";
import { site } from "@/content/site";
import { ContactButtons } from "./ContactButtons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pb-navy via-pb-navy-light to-pb-sky text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-pb-orange blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pb-orange/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              24/7 Emergency HVAC
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {site.hero.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
            {site.hero.subheadline}
          </p>

          <div className="mt-8">
            <ContactButtons size="lg" showEstimate />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-pb-orange text-pb-orange" aria-hidden />
              Strong Google Reviews
            </span>
            <span>BBB A+ Accredited Business</span>
            <span>Free Estimates &amp; Second Opinions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
