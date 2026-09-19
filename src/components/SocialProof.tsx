import { legalIcons } from "@/lib/content";

export function SocialProof() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4">
        <div className="text-center">
          <div className="bg-gradient-to-r from-juscia-muted to-juscia-ink bg-clip-text text-xl font-bold tracking-tight text-transparent">
            Escritórios de advocacia de todo o Brasil confiam na Juscia
          </div>
          <div className="mt-2 bg-gradient-to-r from-[hsl(220_100%_50%)] to-[hsl(220_100%_35%)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-[48px]">
            +1000 advogados já automatizam o atendimento
          </div>
        </div>
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee-x items-center gap-[72px]">
            {legalIcons.concat(legalIcons).map((Icon, i) => (
              <span
                key={i}
                className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center text-[hsl(214_12%_55%)]"
              >
                <Icon size={40} strokeWidth={1.5} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
