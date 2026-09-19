import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { plansRaw, PlanIncludeIcon } from "@/lib/content";
import { useStarfield } from "@/hooks/useStarfield";
import { usePillPosition } from "@/hooks/usePillPosition";
import { cn } from "@/lib/utils";

function fmt(n: number) {
  return n.toFixed(2).replace(".", ",");
}

function AnimatedPrice({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prev = useRef(value);
  const [display, setDisplay] = useState(() => value.toFixed(decimals).replace(".", ","));

  useEffect(() => {
    const from = prev.current;
    const target = value;
    if (from === target) return;
    const start = performance.now();
    const dur = 650;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = from + (target - from) * eased;
      setDisplay(v.toFixed(decimals).replace(".", ","));
      if (p < 1) raf = requestAnimationFrame(step);
      else {
        setDisplay(target.toFixed(decimals).replace(".", ","));
        prev.current = target;
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, decimals]);

  return (
    <span ref={ref} className="price-pulse">
      {display}
    </span>
  );
}

type Props = { onOpenSignup: () => void };

export function Pricing({ onOpenSignup }: Props) {
  const [billing, setBilling] = useState<"mensal" | "anual">("anual");
  const isYearly = billing === "anual";
  const { stars, hostRef, onMouseMove, onMouseLeave } = useStarfield();
  const { pillRef, mensalRef, anualRef } = usePillPosition(billing);
  const { ref: sectionRef, revealed } = useSectionReveal();

  const pricingSubtitle = `Planos de IA para advogados a partir de R$ ${
    isYearly ? "157,60 por mês no plano anual" : "197 por mês"
  }. Teste 7 dias grátis, sem cartão de crédito.`;

  return (
    <section
      id="planos"
      ref={hostRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative scroll-mt-[100px] overflow-hidden bg-gradient-to-b from-white to-juscia-surface/30 px-4 pt-20"
    >
      <div
        className="pointer-events-none absolute inset-x-[20%] top-0 z-0 h-3/5 w-3/5"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, hsl(220 100% 43% / .10) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {stars.map((s, i) => (
          <div
            key={i}
            data-star="1"
            data-t={s.top}
            data-l={s.left}
            className="absolute rounded-full bg-juscia-primary opacity-0"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
              animation: `jsTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div ref={sectionRef} className="relative z-[1]">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2
            className={cn(
              "mb-3 text-[28px] font-bold leading-tight tracking-[-0.02em] text-juscia-ink sm:text-[32px] md:text-[36px]",
              revealed && "reveal-animate",
            )}
          >
            Escolha o plano ideal para o seu <span className="text-juscia-primary">escritório</span>
          </h2>
          <p
            className={cn("mx-auto max-w-xl text-lg text-juscia-muted", revealed && "reveal-animate")}
            style={revealed ? { animationDelay: "0.12s" } : undefined}
          >
            {pricingSubtitle}
          </p>
        </div>

        <div className={cn("flex justify-center", revealed && "reveal-animate")} style={revealed ? { animationDelay: "0.24s" } : undefined}>
          <div className="relative z-20 mx-auto flex w-fit rounded-full border border-juscia-border bg-juscia-surface/60 p-1">
            <div
              ref={pillRef}
              className="absolute inset-y-1 left-0 z-0 w-0 rounded-full bg-juscia-primary shadow-[0_6px_16px_-8px_hsl(220_100%_43%_/_0.9)] transition-[transform,width] duration-[450ms]"
              style={{ transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)" }}
            />
            <button
              ref={mensalRef}
              onClick={() => setBilling("mensal")}
              className={cn(
                "relative z-10 h-12 w-fit rounded-full px-6 text-[15px] font-medium transition-colors",
                isYearly ? "text-juscia-muted" : "text-white",
              )}
            >
              <span className="relative z-[2]">Mensal</span>
            </button>
            <button
              ref={anualRef}
              onClick={() => setBilling("anual")}
              className={cn(
                "relative z-10 h-12 w-fit rounded-full px-6 text-[15px] font-medium transition-colors",
                isYearly ? "text-white" : "text-juscia-muted",
              )}
            >
              <span className="relative z-[2] inline-flex items-center gap-2">
                Anual
                <span className="whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-juscia-primary">
                  Economize 20%
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-[80rem] grid-cols-1 gap-4 py-6 md:grid-cols-3">
          {plansRaw.map((p) => {
            const val = isYearly ? p.yearlyPrice : p.price;
            const decimals = isYearly ? 2 : 0;
            return (
              <div
                key={p.name}
                className={cn(
                  "relative flex h-full flex-col rounded-[22px] bg-white transition-all duration-300",
                  revealed && "reveal-animate",
                  p.popular
                    ? "border-2 border-juscia-primary shadow-[0_34px_64px_-28px_hsl(220_100%_43%_/_0.45)] md:-translate-y-1.5"
                    : "border border-juscia-border shadow-[0_1px_3px_rgb(0_0_0_/_0.06)]",
                )}
                style={revealed ? { animationDelay: "0.36s" } : undefined}
              >
                {p.popular && (
                  <div className="absolute left-1/2 top-0 z-[5] -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-juscia-primary px-4 py-1.5 shadow-[0_10px_22px_-10px_hsl(220_100%_43%)]">
                      <Star size={16} fill="#fff" color="#fff" />
                      <span className="text-sm font-semibold text-white">Mais Popular</span>
                    </div>
                  </div>
                )}
                <div className="p-6 text-left">
                  <h3 className="mb-2 text-[30px] font-semibold text-[#111827]">{p.name}</h3>
                  <p className="mb-4 text-sm text-[#4b5563]">{p.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-[36px] font-semibold tabular-nums text-[#111827]">
                      R$ {isYearly ? <AnimatedPrice value={val} decimals={decimals} /> : String(p.price)}
                    </span>
                    <span className="ml-1 text-[#4b5563]">/mês</span>
                  </div>
                  {isYearly && (
                    <p className="mt-1.5 text-xs text-juscia-primary">
                      Cobrado anualmente (R${fmt(p.yearlyPrice * 12)})
                    </p>
                  )}
                </div>
                <div className="px-6 pb-6">
                  <button
                    onClick={onOpenSignup}
                    className={cn(
                      "mb-6 block w-full rounded-xl py-3.5 text-center text-[15.5px] font-bold transition-all",
                      p.popular
                        ? "border border-juscia-primary bg-juscia-primary text-white shadow-[0_10px_24px_-12px_hsl(220_100%_43%_/_0.8)]"
                        : "border border-[hsl(214_20%_88%)] bg-white text-juscia-ink",
                    )}
                  >
                    Teste por 7 dias Grátis
                  </button>
                  <ul className="flex flex-col gap-2 py-5 font-semibold">
                    {p.features.map((f) => (
                      <li key={f.text} className="flex items-center">
                        <span className="mr-3 flex flex-shrink-0 place-content-center text-[#262626]">
                          <f.icon size={16} />
                        </span>
                        <span className="text-sm text-[#4b5563]">{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 border-t border-juscia-border pt-4">
                    <h4 className="mb-1 text-base font-medium text-[#111827]">{p.includesTitle}</h4>
                    <ul className="flex flex-col gap-2 font-semibold">
                      {p.includes.map((label) => (
                        <li key={label} className="flex items-center">
                          <span className="mr-3 flex h-6 w-6 flex-shrink-0 place-content-center rounded-full border border-juscia-primary bg-[#eff6ff] text-juscia-primary">
                            <PlanIncludeIcon size={16} />
                          </span>
                          <span className="text-sm text-[#4b5563]">{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pb-12 text-center">
          <p className="text-[#4b5563]">Todos os planos incluem período de teste gratuito de 7 dias</p>
        </div>
      </div>
    </section>
  );
}

function useSectionReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, revealed };
}
