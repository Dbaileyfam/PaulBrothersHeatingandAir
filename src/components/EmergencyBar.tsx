import { Phone } from "lucide-react";
import { site } from "@/content/site";

export function EmergencyBar() {
  return (
    <div className="bg-pb-orange py-3 text-center text-white">
      <p className="px-4 text-sm font-semibold sm:text-base">
        <Phone className="mr-1.5 inline h-4 w-4 shrink-0" aria-hidden />
        24/7 Emergency HVAC Service —{" "}
        <a
          href={site.phoneHref}
          className="underline underline-offset-2 hover:text-white/90"
        >
          Call or text {site.phone}
        </a>
      </p>
    </div>
  );
}
