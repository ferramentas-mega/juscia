import { ArrowRight } from "lucide-react";
import { ctaPeople } from "@/lib/content";

type Props = { onOpenSignup: () => void };

export function FinalCta({ onOpenSignup }: Props) {
  return (
    <section className="px-4 py-16">
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-juscia-primary to-juscia-primary/80 px-6 py-[75px] text-center text-white sm:px-10">
        <div
          className="pointer-events-none absolute inset-0 animate-sheen"
          style={{
            background: "linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)",
          }}
        />
        <div className="relative flex flex-wrap items-center justify-center gap-4">
          <div className="flex">
            {ctaPeople.map((p, i) => (
              <img
                key={p.name}
                src={p.image}
                alt={p.name}
                title={`${p.name} — ${p.designation}`}
                className="h-14 w-14 rounded-full border-2 border-white object-cover transition-transform hover:-translate-y-1 hover:scale-105"
                style={{ marginLeft: i ? -16 : 0 }}
              />
            ))}
          </div>
          <p className="ml-4 text-xs font-medium">Junte-se a mais de 1.000 advogados</p>
        </div>
        <h2 className="relative mt-5 max-w-xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-[32px] font-semibold leading-[1.25] text-transparent sm:text-[40px] md:text-[48px] md:leading-[60px]">
          Desbloqueie sua próxima grande oportunidade.
        </h2>
        <button
          onClick={onOpenSignup}
          className="relative mt-8 flex items-center gap-2 rounded-full border-none bg-white px-8 py-3 font-sans text-sm font-semibold uppercase text-juscia-primary transition-transform hover:scale-105"
        >
          Começar teste gratuito <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
