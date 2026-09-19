import { useCallback, useRef } from "react";

/**
 * Magnetic-pill hover effect used across the footer links: the element
 * follows the cursor slightly and springs back on leave.
 */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transition = "transform .4s cubic-bezier(.16,1,.3,1)";
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px) rotateX(${-y * 0.12}deg) rotateY(${x * 0.12}deg) scale(1.05)`;
    el.style.borderColor = "hsl(220 100% 43% / .45)";
  }, []);

  const onMouseLeave = useCallback((e: React.MouseEvent<T>) => {
    const el = e.currentTarget;
    el.style.transition = "transform 1s cubic-bezier(.16,1.3,.3,1), border-color .4s";
    el.style.transform = "none";
    el.style.borderColor = "hsl(214 20% 88%)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
