import { Link } from "react-router-dom";
import {
  Award,
  Clock,
  Handshake,
  Heart,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

const icons = [
  Heart,
  ShieldCheck,
  ClipboardCheck,
  Handshake,
  Clock,
  Award,
];

type AboutSectionProps = {
  compact?: boolean;
};

export function AboutSection({ compact = false }: AboutSectionProps) {
  return (
    <section className="border-t border-white/10 pb-section-alt py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Paul Brothers Heating &amp; Air?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            As a family-owned mobile HVAC company, we combine technical
            expertise with honest, neighborly service. You get clear
            communication, fair pricing, and work done right the first time.
          </p>
          {compact ? (
            <Link
              to={routes.aboutUs}
              className="mt-6 inline-flex text-sm font-semibold text-pb-orange transition hover:text-white"
            >
              Learn more about us →
            </Link>
          ) : null}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.trustSignals.map((signal, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <div
                key={signal.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pb-orange/20 text-pb-orange">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold">{signal.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
