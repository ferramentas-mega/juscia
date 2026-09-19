import { testimonialsData } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

const columns = [
  { items: testimonialsData.slice(0, 3), duration: 15, animation: "animate-marquee-y-a" },
  { items: testimonialsData.slice(3, 6), duration: 19, animation: "animate-marquee-y-b" },
  { items: testimonialsData.slice(6, 9), duration: 17, animation: "animate-marquee-y-c" },
];

export function Testimonials() {
  return (
    <section className="relative my-12 mb-20 bg-white">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4">
        <div className="mx-auto flex max-w-[540px] flex-col items-center justify-center">
          <div className="flex justify-center">
            <Badge>Depoimentos</Badge>
          </div>
          <h2 className="mt-5 text-center text-3xl font-bold tracking-[-0.04em] text-juscia-primary">
            Avaliações de advogados que usam a Juscia
          </h2>
          <p className="mt-5 text-center text-juscia-muted">
            Veja como escritórios de advocacia aumentaram a taxa de conversão com atendimento
            automatizado no WhatsApp.
          </p>
        </div>
        <div
          className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom,transparent,#000 25%,#000 75%,transparent)",
            WebkitMaskImage: "linear-gradient(to bottom,transparent,#000 25%,#000 75%,transparent)",
          }}
        >
          {columns.map((col, ci) => {
            const items = col.items.concat(col.items);
            return (
              <div key={ci} className="overflow-hidden">
                <div className={`flex flex-col gap-6 pb-6 ${col.animation}`}>
                  {items.map((t, i) => (
                    <div
                      key={i}
                      className="w-full max-w-xs rounded-xl border border-juscia-border bg-white p-10 shadow-[0_10px_30px_-12px_hsl(220_100%_43%_/_0.2)]"
                    >
                      <div className="text-[15px] leading-relaxed text-juscia-ink">{t.text}</div>
                      <div className="mt-5 flex items-center gap-2">
                        <img
                          src={t.image}
                          alt={t.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <div className="font-medium leading-tight tracking-[-0.02em] text-juscia-ink">
                            {t.name}
                          </div>
                          <div className="text-sm leading-tight tracking-[-0.02em] text-juscia-muted opacity-60">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
