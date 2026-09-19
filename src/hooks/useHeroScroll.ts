import { useEffect, useRef } from "react";

/**
 * Drives the hero's scroll-controlled 3D "container scroll" effect:
 * the dashboard card rotates from ~20deg to 0deg and scales up while the
 * header text parallaxes upward as the hero leaves the viewport.
 */
export function useHeroScroll() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const box = boxRef.current;
        const card = cardRef.current;
        const head = headerRef.current;
        if (!box || !card) return;
        const r = box.getBoundingClientRect();
        const span = r.height - window.innerHeight;
        let p = span > 0 ? -r.top / span : 0;
        p = Math.max(0, Math.min(1, p));
        const isMobile = window.innerWidth <= 768;
        const from = isMobile ? 0.7 : 1.05;
        const to = isMobile ? 0.9 : 1;
        card.style.transform = `rotateX(${20 - 20 * p}deg) scale(${from + (to - from) * p})`;
        if (head) head.style.transform = `translateY(${-100 * p}px)`;
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

  return { boxRef, cardRef, headerRef };
}
