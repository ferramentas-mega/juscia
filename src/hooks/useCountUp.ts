import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value from 0 to `target` once the host element enters
 * the viewport, matching the metrics section's count-up behavior.
 */
export function useCountUp(target: number, format: (v: number) => string, decimals = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(() => format(0));
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDisplay(format(target));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const dur = 1200;
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const value = target * eased;
            setDisplay(format(Number(value.toFixed(decimals))));
            if (p < 1) requestAnimationFrame(step);
            else setDisplay(format(target));
          };
          requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, format, decimals]);

  return { ref, display };
}
