import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set([items[0]?.id]));

  function toggle(id: string) {
    setOpenIds((prev) => {
      if (!allowMultiple) {
        return prev.has(id) ? new Set<string>() : new Set([id]);
      }
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = `${baseId}-${item.id}`;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-white/10 bg-pb-navy-light/40 transition hover:border-sky-400/25"
          >
            <button
              type="button"
              id={`${panelId}-trigger`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-white">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-sky-300 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={`${panelId}-trigger`}
              className={`grid transition-[grid-template-rows] duration-200 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-white/75">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
