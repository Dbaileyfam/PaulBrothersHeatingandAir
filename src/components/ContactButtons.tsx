import { Link } from "react-router-dom";
import { Phone, MessageSquare, ClipboardCheck, Star } from "lucide-react";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

type ContactButtonsProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  layout?: "row" | "stack";
  showEstimate?: boolean;
  showReviews?: boolean;
  /** Use compact labels (Call Now / Text Us) vs showing phone numbers */
  compact?: boolean;
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function ContactButtons({
  size = "md",
  className = "",
  layout = "row",
  showEstimate = false,
  showReviews = false,
  compact = true,
}: ContactButtonsProps) {
  const layoutClass =
    layout === "stack" ? "flex flex-col gap-3 w-full" : "flex flex-wrap gap-3";

  const callLabel = compact ? "Call Now" : `Call ${site.phone}`;
  const textLabel = compact ? "Text Us" : `Text ${site.text}`;

  return (
    <div className={`${layoutClass} ${className}`}>
      <a
        href={site.phoneHref}
        className={`inline-flex items-center justify-center gap-2 rounded-lg bg-pb-orange font-semibold text-white shadow-md transition hover:bg-pb-orange-dark ${sizeStyles[size]}`}
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden />
        {callLabel}
      </a>
      <a
        href={site.textHref}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 bg-white/10 font-semibold text-white transition hover:bg-white/20 ${sizeStyles[size]}`}
      >
        <MessageSquare className="h-4 w-4 shrink-0" aria-hidden />
        {textLabel}
      </a>
      {showEstimate ? (
        <Link
          to={routes.contact}
          className={`inline-flex items-center justify-center gap-2 rounded-lg bg-pb-sky font-semibold text-white transition hover:bg-pb-navy-light ${sizeStyles[size]}`}
        >
          <ClipboardCheck className="h-4 w-4 shrink-0" aria-hidden />
          Get a Free Estimate
        </Link>
      ) : null}
      {showReviews ? (
        <Link
          to={`${routes.aboutUs}#customer-reviews`}
          className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 bg-white/10 font-semibold text-white transition hover:bg-white/20 ${sizeStyles[size]}`}
        >
          <Star className="h-4 w-4 shrink-0" aria-hidden />
          Read Our Reviews
        </Link>
      ) : null}
    </div>
  );
}
