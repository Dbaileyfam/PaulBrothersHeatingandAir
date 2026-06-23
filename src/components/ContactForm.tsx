import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Send } from "lucide-react";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

const serviceOptions = [
  "AC Repair",
  "Furnace Repair",
  "HVAC Installation",
  "HVAC Maintenance",
  "Indoor Air Quality",
  "Ductwork",
  "Commercial HVAC",
  "Emergency Service",
  "Other / Not Sure",
] as const;

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const [submitting, setSubmitting] = useState(false);

  const formAction = "https://formsubmit.co/paulbrothersut@gmail.com";

  const nextUrl = useMemo(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    return `${window.location.origin}${base}${routes.contact}?sent=1`;
  }, []);

  if (sent) {
    return (
      <div className="pb-card flex flex-col items-center justify-center p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-sky-300" aria-hidden />
        <h2 className="mt-4 text-xl font-bold text-white">Message Sent</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
          Thanks for reaching out. A Paul Brothers team member will get back to
          you shortly. For urgent HVAC issues, call{" "}
          <a href={site.phoneHref} className="font-semibold text-sky-300 hover:text-white">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      method="POST"
      className="pb-card p-6 sm:p-8"
      onSubmit={() => setSubmitting(true)}
    >
      <h2 className="text-xl font-bold text-white">Request a Free Estimate</h2>
      <p className="mt-2 text-sm text-white/70">
        Fill out the form and we'll respond as soon as possible.
      </p>

      <input type="hidden" name="_subject" value="New HVAC estimate request — Paul Brothers website" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
              Name *
            </span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-white/15 bg-pb-navy/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
              Phone *
            </span>
            <input
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              className="w-full rounded-lg border border-white/15 bg-pb-navy/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
              placeholder="(385) 555-1234"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Email *
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-white/15 bg-pb-navy/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
            placeholder="you@email.com"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Service Needed
          </span>
          <select
            name="service"
            defaultValue=""
            className="w-full rounded-lg border border-white/15 bg-pb-navy/60 px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
          >
            <option value="" disabled className="bg-pb-navy text-white/50">
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="bg-pb-navy text-white">
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Message *
          </span>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full resize-y rounded-lg border border-white/15 bg-pb-navy/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
            placeholder="Tell us about your HVAC issue or project..."
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-pb-sky px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-pb-navy-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden />
          {submitting ? "Sending..." : "Send Request"}
        </button>
      </div>
    </form>
  );
}
