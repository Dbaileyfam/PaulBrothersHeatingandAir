import { useEffect, useRef, useState } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
  size: number;
  tone: "blue" | "red";
  delayMs: number;
};

export function CursorSparkles() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0, t: 0 });
  const glowRef = useRef<HTMLDivElement>(null);
  const toneRef = useRef<"blue" | "red">("blue");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reducedMotion.matches || !finePointer.matches) return;

    const onMove = (e: MouseEvent) => {
      glowRef.current?.style.setProperty("--cursor-x", `${e.clientX}px`);
      glowRef.current?.style.setProperty("--cursor-y", `${e.clientY}px`);

      const now = performance.now();
      const dx = e.clientX - lastRef.current.x;
      const dy = e.clientY - lastRef.current.y;
      const distance = Math.hypot(dx, dy);
      const elapsed = now - lastRef.current.t;
      if (distance < 14 || elapsed < 16) return;

      lastRef.current = { x: e.clientX, y: e.clientY, t: now };
      toneRef.current = toneRef.current === "blue" ? "red" : "blue";

      const burst: Spark[] = Array.from({ length: 3 }).map((_, i) => ({
        id: idRef.current++,
        x: e.clientX + (Math.random() * 16 - 8),
        y: e.clientY + (Math.random() * 16 - 8),
        size: 4 + Math.random() * 6,
        tone:
          i % 2 === 0
            ? toneRef.current
            : toneRef.current === "blue"
              ? "red"
              : "blue",
        delayMs: i * 30,
      }));

      setSparks((prev) => [...prev.slice(-36), ...burst]);
    };

    const cleanup = window.setInterval(() => {
      setSparks((prev) => prev.slice(-24));
    }, 600);

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.clearInterval(cleanup);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden
        className="pb-cursor-glow pointer-events-none fixed inset-0 z-[1]"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className={
              spark.tone === "blue" ? "pb-spark-blue" : "pb-spark-red"
            }
            style={{
              left: spark.x,
              top: spark.y,
              width: spark.size,
              height: spark.size,
              animationDelay: `${spark.delayMs}ms`,
            }}
          />
        ))}
      </div>
    </>
  );
}
