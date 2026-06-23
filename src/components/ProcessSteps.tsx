import { useState } from "react";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-xl border px-4 py-4 text-left transition ${
                isActive
                  ? "border-pb-orange/50 bg-pb-orange/10"
                  : "border-white/10 bg-pb-navy-light/30 hover:border-white/20"
              }`}
            >
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  isActive
                    ? "bg-pb-orange text-white"
                    : "bg-white/10 text-white/70"
                }`}
              >
                {index + 1}
              </span>
              <p className="mt-3 text-sm font-semibold text-white">{step.title}</p>
            </button>
          );
        })}
      </div>

      {active ? (
        <div className="pb-card mt-6 p-6">
          <p className="text-sm leading-relaxed text-white/80">{active.description}</p>
        </div>
      ) : null}
    </div>
  );
}
