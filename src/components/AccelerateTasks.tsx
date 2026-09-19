import { useState } from "react";
import { accordionRaw } from "@/lib/content";
import { cn } from "@/lib/utils";

export function AccelerateTasks() {
  const [active, setActive] = useState(4);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-10 lg:px-[89px]">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-juscia-primary sm:text-[40px] md:text-[48px]">
              Acelere suas tarefas <br className="hidden sm:block" />
              jurídicas com IA
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-juscia-muted lg:pr-[122px]">
              Automatize processos complexos e ganhe produtividade com nossa plataforma de
              inteligência artificial especializada para o setor jurídico.
            </p>
            <div className="mt-8">
              <a
                href="#planos"
                className="inline-block rounded-lg bg-juscia-primary px-8 py-3 font-semibold text-white shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1)] transition-colors hover:bg-juscia-primary-hover"
              >
                Começar Agora
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-start gap-6 overflow-x-auto px-0.5 py-6">
              {accordionRaw.map((a, i) => {
                const on = i === active;
                return (
                  <div
                    key={a.title}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "relative h-[450px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-[width] duration-700 ease-in-out",
                      on ? "w-[400px]" : "w-[60px]",
                    )}
                  >
                    <img
                      src={a.img}
                      alt={a.title}
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.onerror = null;
                        el.src = `https://placehold.co/400x450/2d3748/ffffff?text=${encodeURIComponent(a.title)}`;
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <span
                      className={cn(
                        "absolute text-center text-lg font-semibold text-white transition-all duration-300 ease-in-out",
                        on
                          ? "bottom-6 left-1/2 max-w-[150px] -translate-x-1/2 rotate-0"
                          : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap",
                      )}
                    >
                      {a.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
