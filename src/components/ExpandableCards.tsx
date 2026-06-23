import { useState } from "react";
import { ChevronRight } from "lucide-react";

export type ExpandableCardItem = {
  id: string;
  title: string;
  description: string;
};

type ExpandableCardsProps = {
  items: ExpandableCardItem[];
};

export function ExpandableCards({ items }: ExpandableCardsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <div className="space-y-2">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition ${
                isActive
                  ? "border-sky-400/40 bg-sky-500/10 text-white"
                  : "border-white/10 bg-pb-navy-light/30 text-white/80 hover:border-white/20 hover:bg-pb-navy-light/50"
              }`}
            >
              <span className="text-sm font-semibold">{item.title}</span>
              <ChevronRight
                className={`h-4 w-4 shrink-0 text-sky-300 transition ${
                  isActive ? "translate-x-0.5" : ""
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      {active ? (
        <div className="pb-card min-h-[12rem] p-6">
          <h3 className="text-lg font-bold text-white">{active.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {active.description}
          </p>
        </div>
      ) : null}
    </div>
  );
}
