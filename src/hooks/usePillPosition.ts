import { useEffect, useRef } from "react";

/** Slides the Mensal/Anual toggle's active pill under the selected button. */
export function usePillPosition(active: "mensal" | "anual") {
  const pillRef = useRef<HTMLDivElement | null>(null);
  const mensalRef = useRef<HTMLButtonElement | null>(null);
  const anualRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const pill = pillRef.current;
    const btn = active === "anual" ? anualRef.current : mensalRef.current;
    if (!pill || !btn) return;
    pill.style.width = `${btn.offsetWidth}px`;
    pill.style.transform = `translateX(${btn.offsetLeft}px)`;
  }, [active]);

  return { pillRef, mensalRef, anualRef };
}
