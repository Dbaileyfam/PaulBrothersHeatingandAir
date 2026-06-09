import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/content/site";

type ContactButtonsProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  layout?: "row" | "stack";
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
}: ContactButtonsProps) {
  const layoutClass =
    layout === "stack" ? "flex flex-col gap-3 w-full" : "flex flex-wrap gap-3";

  return (
    <div className={`${layoutClass} ${className}`}>
      <a
        href={site.phoneHref}
        className={`inline-flex items-center justify-center gap-2 rounded-lg bg-pb-orange font-semibold text-white shadow-md transition hover:bg-pb-orange-dark ${sizeStyles[size]}`}
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden />
        Call {site.phone}
      </a>
      <a
        href={site.textHref}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 border-pb-navy bg-white font-semibold text-pb-navy transition hover:bg-pb-gray-light ${sizeStyles[size]}`}
      >
        <MessageSquare className="h-4 w-4 shrink-0" aria-hidden />
        Text {site.text}
      </a>
    </div>
  );
}
