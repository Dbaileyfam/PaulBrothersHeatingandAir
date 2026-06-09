import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";
import { ContactButtons } from "./ContactButtons";

type CTABannerProps = {
  headline?: string;
  subtext?: string;
};

export function CTABanner({
  headline = "Ready for HVAC Service in Midvale?",
  subtext = "Call, text, or request a free estimate — we serve all of Salt Lake County.",
}: CTABannerProps) {
  return (
    <section className="bg-pb-navy py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{headline}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">{subtext}</p>
        <div className="mt-8 flex justify-center">
          <ContactButtons size="lg" showEstimate />
        </div>
        <p className="mt-6 text-sm text-white/70">
          Call{" "}
          <a href={site.phoneHref} className="font-semibold text-white underline">
            {site.phone}
          </a>{" "}
          · Text{" "}
          <a href={site.textHref} className="font-semibold text-white underline">
            {site.text}
          </a>{" "}
          ·{" "}
          <Link to={routes.contactUs} className="font-semibold text-white underline">
            Contact online
          </Link>
        </p>
      </div>
    </section>
  );
}
