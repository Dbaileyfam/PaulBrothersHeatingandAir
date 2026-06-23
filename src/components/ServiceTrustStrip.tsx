import { BadgeCheck, Clock, DollarSign, Shield } from "lucide-react";

const trustItems = [
  {
    icon: DollarSign,
    title: "Up-Front Pricing",
    description: "Honest quotes before work begins.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Valley-wide when you need help fast.",
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates",
    description: "No-pressure second opinions.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "BBB A+ Accredited technicians.",
  },
] as const;

export function ServiceTrustStrip() {
  return (
    <section className="border-b border-white/10 bg-pb-navy-light/20 py-8">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-pb-navy-light/30 px-4 py-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-300">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
