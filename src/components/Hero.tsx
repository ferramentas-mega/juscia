import { ArrowRight } from "lucide-react";
import { useHeroScroll } from "@/hooks/useHeroScroll";
import { defaultWhatsappUrl } from "@/lib/content";

export function Hero() {
  const { boxRef, cardRef, headerRef } = useHeroScroll();

  return (
    <section className="flex flex-col overflow-hidden">
      <div id="inicio" className="h-[89px]" />
      <div ref={boxRef} className="relative flex h-[68rem] items-center justify-center px-4 py-4 sm:px-10">
        <div className="relative w-full py-6" style={{ perspective: "1000px" }}>
          <div
            ref={headerRef}
            className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center will-change-transform"
          >
            <div className="flex w-fit max-w-full items-center justify-center gap-2 rounded-full border border-juscia-primary/20 bg-juscia-primary/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-juscia-ink">
                IA jurídica que atende no WhatsApp 24h por dia
              </span>
              <ArrowRight className="inline-flex text-juscia-primary" size={16} />
            </div>
            <h1 className="text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-juscia-ink sm:text-[48px] md:text-[60px]">
              <span className="block">Inteligência Artificial</span>
              <span className="block bg-gradient-to-r from-juscia-primary to-[hsl(220_100%_35%)] bg-clip-text text-transparent">
                para Advogados
              </span>
            </h1>
            <p className="max-w-[672px] text-lg leading-relaxed text-juscia-muted">
              A Juscia atende, qualifica e resume os casos dos seus clientes automaticamente no
              WhatsApp. Filtre curiosos, ganhe horas por semana e feche mais contratos.
            </p>
            <div className="flex items-center justify-center gap-4 pb-16">
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center rounded-full bg-juscia-primary px-8 text-base font-medium text-white shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1)] transition-all hover:scale-105 hover:bg-juscia-primary-hover"
              >
                Testar 7 dias grátis
              </a>
              <a
                href="#planos"
                className="inline-flex h-12 items-center rounded-full border-2 border-juscia-primary bg-transparent px-8 text-base font-medium text-juscia-primary transition-all hover:scale-105 hover:bg-juscia-primary hover:text-white"
              >
                Ver planos e preços
              </a>
            </div>
          </div>
          <div
            ref={cardRef}
            className="mx-auto -mt-12 h-[26rem] w-full max-w-4xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222] p-4 shadow-[0_12px_28px_-12px_rgba(15,30,70,.28),0_44px_80px_-44px_rgba(15,30,70,.42)] will-change-transform sm:h-[32rem] md:h-[40rem]"
          >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-juscia-surface">
              <img
                src="/assets/dashboard.png"
                alt="Juscia Dashboard Preview"
                draggable={false}
                className="mx-auto block h-full w-full rounded-2xl object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
