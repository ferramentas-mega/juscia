import { useEffect, useRef } from "react";

/** Grows the "Como funciona" timeline's progress bar as the user scrolls past it. */
export function useTimelineProgress() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = trackRef.current;
        const bar = progressRef.current;
        if (!el || !bar) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.9;
        const end = -r.height + vh * 0.5;
        let p = (start - r.top) / (start - end);
        p = Math.max(0, Math.min(1, p));
        bar.style.height = `${p * r.height}px`;
        bar.style.opacity = p > 0.01 ? "1" : "0";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { trackRef, progressRef };
}
