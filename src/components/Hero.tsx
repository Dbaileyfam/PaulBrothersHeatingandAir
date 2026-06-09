import { Clock, ShieldCheck, Star } from "lucide-react";
import { site } from "@/content/site";
import { AnimatedLogo } from "./AnimatedLogo";
import { ContactButtons } from "./ContactButtons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-pb-navy to-pb-navy-light text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-red-600/40 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-sky-500/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-12 text-center sm:py-16 lg:py-20">
        <AnimatedLogo />

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pb-orange/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              24/7 Emergency HVAC
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            {site.hero.subheadline}
          </p>

          <div className="mt-8 flex justify-center">
            <ContactButtons size="lg" showEstimate />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
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
