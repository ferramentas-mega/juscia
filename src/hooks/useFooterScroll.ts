import { useEffect, useRef } from "react";

/** Parallax + fade-in for the footer's giant "JUSCIA" wordmark, heading and links. */
export function useFooterScroll() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const giantRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const wrap = wrapRef.current;
        if (!wrap) return;
        const r = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.max(0, Math.min(1, (vh - r.top) / vh));
        if (giantRef.current) {
          giantRef.current.style.transform = `translateX(-50%) translateY(${(1 - p) * 10}vh) scale(${0.8 + 0.2 * p})`;
          giantRef.current.style.opacity = String(p);
        }
        const p2 = Math.max(0, Math.min(1, (vh * 0.75 - r.top) / (vh * 0.45)));
        if (headingRef.current) {
          headingRef.current.style.transform = `translateY(${(1 - p2) * 50}px)`;
          headingRef.current.style.opacity = String(p2);
        }
        const p3 = Math.max(0, Math.min(1, (vh * 0.6 - r.top) / (vh * 0.45)));
        if (linksRef.current) {
          linksRef.current.style.transform = `translateY(${(1 - p3) * 50}px)`;
          linksRef.current.style.opacity = String(p3);
        }
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

  return { wrapRef, giantRef, headingRef, linksRef };
}
