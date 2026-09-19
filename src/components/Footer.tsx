import { ArrowUp } from "lucide-react";
import { footerPrimary, footerSecondary, footerSocial, marqueeLabels } from "@/lib/content";
import { useFooterScroll } from "@/hooks/useFooterScroll";
import { useMagnetic } from "@/hooks/useMagnetic";

const glassPill =
  "border border-juscia-primary/22 bg-gradient-to-br from-juscia-primary/10 to-white/60 shadow-[0_12px_30px_-10px_hsl(220_100%_43%_/_0.3),inset_0_1px_1px_#fff] backdrop-blur-md no-underline transition-[background,border-color,box-shadow] duration-[400ms]";

function MagneticLink({ children, className, ...rest }: React.ComponentProps<"a">) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>();
  return (
    <a ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className} {...rest}>
      {children}
    </a>
  );
}

function MagneticButton({ children, className, ...rest }: React.ComponentProps<"button">) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove as unknown as React.MouseEventHandler<HTMLButtonElement>}
      onMouseLeave={onMouseLeave as unknown as React.MouseEventHandler<HTMLButtonElement>}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

const marqueeItems = marqueeLabels.concat(marqueeLabels);

export function Footer() {
  const { wrapRef, giantRef, headingRef, linksRef } = useFooterScroll();

  return (
    <section
      id="contato"
      ref={wrapRef}
      className="relative h-screen min-h-[720px] w-full scroll-mt-[100px] overflow-hidden"
    >
      <footer className="absolute inset-0 flex flex-col justify-between overflow-hidden bg-white text-juscia-ink">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vh] w-[80vw] animate-breathe rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(220 100% 43% / .14) 0%, hsl(220 100% 60% / .09) 40%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[size:60px_60px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(220 100% 43% / .07) 1px, transparent 1px), linear-gradient(to bottom, hsl(220 100% 43% / .07) 1px, transparent 1px)",
            maskImage: "linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)",
          }}
        />
        <div
          ref={giantRef}
          className="pointer-events-none absolute bottom-[4vh] left-1/2 select-none whitespace-nowrap font-black leading-[0.75] tracking-[-0.05em] text-transparent"
          style={{
            transform: "translateX(-50%)",
            fontSize: "13vw",
            WebkitTextStroke: "1px hsl(220 100% 43% / .22)",
            background: "linear-gradient(180deg, hsl(220 100% 43% / .28) 0%, hsl(220 100% 43% / .04) 70%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          JUSCIA
        </div>

        <div
          className="absolute left-0 top-12 z-10 w-full overflow-hidden border-y border-juscia-primary/18 bg-juscia-primary/[0.06] py-4 shadow-[0_25px_50px_-12px_hsl(220_100%_43%_/_0.18)] backdrop-blur-md"
          style={{ transform: "rotate(-2deg) scale(1.1)" }}
        >
          <div className="flex w-max animate-marquee-x-slow text-[13px] font-bold uppercase tracking-[0.3em] text-[hsl(220_60%_42%)]">
            {marqueeItems.map((label, i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span>{label}</span>
                <span className="text-juscia-primary/60">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-20 flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6">
          <h2
            ref={headingRef}
            className="mb-12 text-center text-[52px] font-black leading-none tracking-[-0.045em] sm:text-[68px] md:text-[84px]"
            style={{
              background: "linear-gradient(180deg, hsl(220 100% 43%) 0%, hsl(220 100% 62%) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 6px 24px hsl(220 100% 43% / .35))",
            }}
          >
            Pronto para começar?
          </h2>
          <div ref={linksRef} className="flex w-full flex-col items-center gap-6">
            <div className="flex w-full flex-wrap justify-center gap-4">
              {footerPrimary.map((p) => (
                <MagneticLink
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className={`${glassPill} inline-flex cursor-pointer items-center gap-3 rounded-full px-10 py-5 text-base font-bold text-juscia-primary`}
                >
                  <p.icon size={22} />
                  {p.label}
                </MagneticLink>
              ))}
            </div>
            <div className="mt-2 flex w-full flex-wrap justify-center gap-3">
              {footerSecondary.map((f) => (
                <MagneticLink
                  key={f.label}
                  href={f.href}
                  target="_blank"
                  rel="noopener"
                  className={`${glassPill} inline-flex cursor-pointer items-center rounded-full px-6 py-3 text-sm font-semibold text-[hsl(220_60%_40%)]`}
                >
                  {f.label}
                </MagneticLink>
              ))}
            </div>
            <div className="mt-1 flex flex-wrap justify-center gap-3">
              {footerSocial.map((s) => (
                <MagneticLink
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className={`${glassPill} inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-juscia-primary`}
                >
                  <s.icon size={20} />
                </MagneticLink>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 flex w-full flex-col items-center justify-between gap-6 px-6 pb-8 sm:flex-row sm:px-12">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[hsl(220_30%_48%)]">
            © 2026 Juscia. Todos os direitos reservados.
          </div>
          <div className={`${glassPill} flex cursor-default items-center gap-2.5 rounded-full px-6 py-3`}>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[hsl(220_40%_50%)]">
              Fale com a gente
            </span>
            <a
              href="https://api.whatsapp.com/send?phone=554892254344"
              target="_blank"
              rel="noopener"
              className="text-sm font-extrabold text-juscia-primary"
            >
              (48) 9 9225-4344
            </a>
            <span className="text-juscia-primary/40">·</span>
            <a href="mailto:contato@juscia.io" className="text-sm font-extrabold text-juscia-primary">
              contato@juscia.io
            </a>
          </div>
          <MagneticButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className={`${glassPill} flex h-12 w-12 cursor-pointer items-center justify-center rounded-full p-0 text-juscia-primary`}
          >
            <ArrowUp size={20} />
          </MagneticButton>
        </div>
      </footer>
    </section>
  );
}
