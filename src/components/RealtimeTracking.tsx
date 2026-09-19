import { ArrowRight, Sparkles } from "lucide-react";
import { displayCardsRaw } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { defaultWhatsappUrl } from "@/lib/content";

export function RealtimeTracking() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="flex flex-wrap items-center gap-12">
          <div className="min-w-[300px] flex-1 basis-[400px]">
            <Badge>Em tempo real</Badge>
            <h2 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-juscia-primary sm:text-[36px] md:text-[44px]">
              Acompanhe cada atendimento sem levantar um dedo
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-juscia-muted">
              A IA qualifica o lead, envia o follow-up e resume o caso. Você recebe tudo pronto e
              entra apenas na hora de fechar a proposta.
            </p>
            <div className="mt-8">
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-juscia-primary px-8 py-3.5 font-semibold text-white shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1)] transition-colors hover:bg-juscia-primary-hover"
              >
                Fazer uma simulação <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="flex min-h-[400px] min-w-[320px] flex-1 basis-[420px] items-center justify-center px-0 py-10">
            <div
              className="grid w-full max-w-md pb-20 pr-0 sm:pr-24"
              style={{ gridTemplateAreas: "'stack'" }}
            >
              {displayCardsRaw.map((c) => (
                <div
                  key={c.title}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = `skewY(-8deg) ${c.hover}`;
                    el.style.filter = "none";
                    el.style.borderColor = "hsl(220 100% 43% / .35)";
                    const veil = el.firstElementChild as HTMLElement | null;
                    if (veil) veil.style.opacity = "0";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = `skewY(-8deg)${c.offset ? " " + c.offset : ""}`;
                    el.style.filter = c.gray ? "grayscale(100%)" : "none";
                    el.style.borderColor = "hsl(214 20% 90%)";
                    const veil = el.firstElementChild as HTMLElement | null;
                    if (veil) veil.style.opacity = c.gray ? "1" : "0";
                  }}
                  style={{
                    gridArea: "stack",
                    transform: `skewY(-8deg)${c.offset ? " " + c.offset : ""}`,
                    filter: c.gray ? "grayscale(100%)" : "none",
                  }}
                  className="relative flex h-36 w-full max-w-[22rem] select-none flex-col justify-between rounded-xl border-2 border-juscia-border bg-[rgba(232,241,255,.7)] p-4 backdrop-blur-sm transition-all duration-700"
                >
                  <div
                    className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-full rounded-xl transition-opacity duration-700"
                    style={{ background: c.gray ? "rgba(255,255,255,.5)" : "transparent", opacity: c.gray ? 1 : 0 }}
                  />
                  <div
                    className="pointer-events-none absolute right-[-4px] top-[-5%] z-[1] h-[110%] w-80 rounded-xl"
                    style={{ background: "linear-gradient(to left,#fff,transparent)" }}
                  />
                  <div className="relative z-[2] flex items-center gap-2">
                    <span className="relative inline-flex rounded-full bg-[hsl(220_100%_30%)] p-1 text-[#93c5fd]">
                      <Sparkles size={16} />
                    </span>
                    <p className="text-lg font-medium text-juscia-primary">{c.title}</p>
                  </div>
                  <p className="relative z-[2] whitespace-nowrap text-lg text-juscia-ink">
                    {c.description}
                  </p>
                  <p className="relative z-[2] text-juscia-muted">{c.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
