import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { tabsRaw } from "@/lib/content";
import { cn } from "@/lib/utils";
import { LazyVideo } from "@/components/ui/LazyVideo";

export function Features() {
  const [active, setActive] = useState(0);
  const tab = tabsRaw[active];

  return (
    <section id="funcionalidades" className="scroll-mt-[100px] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full border border-juscia-border px-3 py-0.5 text-xs font-semibold text-juscia-ink">
            Funcionalidades
          </span>
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.02em] text-juscia-ink">
            Funcionalidades da plataforma de IA jurídica
          </h2>
          <p className="text-juscia-muted">
            Chat ao vivo, CRM jurídico, geração de documentos e gestão de contatos em um só lugar.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-10">
          {tabsRaw.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition-all",
                  isActive ? "bg-juscia-surface text-juscia-primary" : "text-juscia-muted",
                )}
              >
                <t.icon size={22} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-[1280px] rounded-2xl bg-juscia-surface/70 p-6 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2">
            <div className="flex w-full flex-col gap-5">
              <span className="w-fit rounded-full border border-juscia-border bg-white px-3 py-0.5 text-xs font-semibold text-juscia-ink">
                {tab.badge}
              </span>
              <h3 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-juscia-ink md:text-[48px]">
                {tab.title}
              </h3>
              <p className="text-lg leading-relaxed text-juscia-muted">{tab.description}</p>
              <a
                href="#planos"
                className="mt-2.5 inline-flex w-fit items-center gap-2 rounded-md bg-juscia-primary px-8 py-0 text-sm font-medium text-white transition-colors hover:bg-juscia-primary-hover"
                style={{ height: 44 }}
              >
                {tab.buttonText} <ArrowRight size={16} />
              </a>
            </div>
            <div className="flex aspect-16/10 w-full items-center justify-center overflow-hidden rounded-xl bg-white/50">
              {tab.video ? (
                <LazyVideo
                  key={tab.video}
                  src={tab.video}
                  muted
                  loop
                  playsInline
                  className="block h-full w-full rounded-xl object-cover"
                />
              ) : (
                <img
                  key={tab.img}
                  src={tab.img}
                  alt={tab.label}
                  className="block h-full w-full rounded-xl object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
