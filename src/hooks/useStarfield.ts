import { useCallback, useEffect, useRef, useState } from "react";

export type Star = { top: number; left: number; size: number; duration: number; delay: number };

function makeStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    });
  }
  return stars;
}

/** Mouse-reactive starfield parallax used behind the pricing section. */
export function useStarfield(count = 120) {
  const [stars] = useState(() => makeStars(count));
  const hostRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef(0);

  const update = useCallback(() => {
    const host = hostRef.current;
    if (!host) return;
    const nodes = host.querySelectorAll<HTMLElement>("[data-star]");
    const r = host.getBoundingClientRect();
    const m = mouseRef.current;
    const radius = 600;
    nodes.forEach((n) => {
      if (!m) {
        n.style.transform = "translate(0,0)";
        return;
      }
      const sx = r.left + (parseFloat(n.dataset.l || "0") / 100) * r.width;
      const sy = r.top + (parseFloat(n.dataset.t || "0") / 100) * r.height;
      const dx = m.x - sx;
      const dy = m.y - sy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        const f = 1 - dist / radius;
        n.style.transform = `translate(${dx * f * 0.5}px, ${dy * f * 0.5}px)`;
      } else {
        n.style.transform = "translate(0,0)";
      }
    });
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        update();
      });
    },
    [update],
  );

  const onMouseLeave = useCallback(() => {
    mouseRef.current = null;
    update();
  }, [update]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { stars, hostRef, onMouseMove, onMouseLeave };
}
