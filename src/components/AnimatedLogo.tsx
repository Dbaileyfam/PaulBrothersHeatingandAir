const logoSrc = `${import.meta.env.BASE_URL}paul-brothers-logo.png`;

const embers = [
  { left: "18%", delay: "0s", duration: "2.8s", size: "6px" },
  { left: "28%", delay: "0.6s", duration: "3.2s", size: "4px" },
  { left: "38%", delay: "1.1s", duration: "2.5s", size: "5px" },
  { left: "48%", delay: "0.3s", duration: "3.5s", size: "7px" },
  { left: "58%", delay: "1.4s", duration: "2.9s", size: "4px" },
  { left: "68%", delay: "0.8s", duration: "3.1s", size: "6px" },
  { left: "78%", delay: "1.8s", duration: "2.7s", size: "5px" },
  { left: "22%", delay: "2.1s", duration: "3.4s", size: "3px" },
  { left: "52%", delay: "2.4s", duration: "2.6s", size: "4px" },
  { left: "72%", delay: "1.6s", duration: "3.3s", size: "5px" },
] as const;

const snowflakes = [
  { left: "12%", delay: "0s", duration: "4.5s", size: "5px" },
  { left: "22%", delay: "1.2s", duration: "5.2s", size: "4px" },
  { left: "32%", delay: "0.5s", duration: "4.8s", size: "6px" },
  { left: "42%", delay: "2.1s", duration: "5.5s", size: "4px" },
  { left: "52%", delay: "0.9s", duration: "4.2s", size: "5px" },
  { left: "62%", delay: "1.7s", duration: "5.8s", size: "4px" },
  { left: "72%", delay: "0.3s", duration: "4.9s", size: "6px" },
  { left: "82%", delay: "2.5s", duration: "5.1s", size: "3px" },
  { left: "18%", delay: "3.1s", duration: "4.6s", size: "4px" },
  { left: "48%", delay: "3.4s", duration: "5.3s", size: "5px" },
  { left: "68%", delay: "2.8s", duration: "4.4s", size: "4px" },
  { left: "88%", delay: "1.5s", duration: "5.6s", size: "5px" },
] as const;

export function AnimatedLogo() {
  return (
    <div className="pb-logo-showcase relative mx-auto w-full max-w-xl sm:max-w-2xl">
      <div
        className="pb-logo-glow-warm pointer-events-none absolute -top-6 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-red-500/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pb-logo-glow-cool pointer-events-none absolute -bottom-4 left-1/2 h-28 w-3/4 -translate-x-1/2 rounded-full bg-sky-400/25 blur-3xl"
        aria-hidden
      />

      <div className="pb-logo-particles pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {embers.map((ember, i) => (
          <span
            key={`ember-${i}`}
            className="pb-ember absolute bottom-[42%] rounded-full bg-gradient-to-t from-orange-600 to-yellow-300"
            style={{
              left: ember.left,
              width: ember.size,
              height: ember.size,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
            }}
          />
        ))}
        {snowflakes.map((flake, i) => (
          <span
            key={`snow-${i}`}
            className="pb-snowflake absolute top-[48%] rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
            }}
          />
        ))}
      </div>

      <div className="pb-logo-frame relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/40">
        <div
          className="pb-logo-shimmer pointer-events-none absolute inset-0 z-20"
          aria-hidden
        />
        <img
          src={logoSrc}
          alt="Paul Brothers Heating & Air — heating and cooling services in Midvale, Utah"
          width={640}
          height={200}
          className="relative z-10 h-auto w-full"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
