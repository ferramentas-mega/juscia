import { vantagens } from "@/lib/content";

export function Advantages() {
  return (
    <section id="vantagens" className="scroll-mt-[100px] bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mx-auto mb-12 flex max-w-xl flex-col items-center justify-center text-center">
          <div className="mb-5 flex justify-center">
            <div className="rounded-lg border border-juscia-border bg-juscia-badge-bg px-4 py-1 text-sm text-juscia-badge-fg">
              Vantagens
            </div>
          </div>
          <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.04em] text-juscia-primary sm:text-[40px] md:text-[48px]">
            Por que advogados escolhem a Juscia
          </h2>
          <p className="mt-5 text-base text-juscia-muted opacity-75">
            Inteligência artificial treinada para o contexto jurídico brasileiro, do primeiro
            contato ao fechamento do contrato.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {vantagens.map((v) => (
            <li
              key={v.title}
              className="min-h-[14rem] list-none lg:[grid-area:var(--area)]"
              style={{ "--area": v.gridArea } as React.CSSProperties}
            >
              <div className="h-full rounded-3xl border-[0.75px] border-juscia-border p-3">
                <div className="relative flex h-full flex-col justify-between gap-6 rounded-xl border-[0.75px] border-juscia-border bg-[rgba(232,241,255,.6)] p-6 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]">
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <div className="flex w-fit rounded-lg border-[0.75px] border-juscia-border bg-juscia-primary p-2 text-white">
                      <v.icon size={16} />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="pt-0.5 text-2xl font-semibold leading-[1.875rem] tracking-[-0.04em] text-balance text-juscia-ink">
                        {v.title}
                      </h3>
                      <p className="text-base leading-[1.375rem] text-juscia-muted">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
