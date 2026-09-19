import { useState } from "react";
import { Plus } from "lucide-react";
import { faqRaw } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section className="w-full bg-gradient-to-b from-transparent via-juscia-surface/50 to-transparent py-16">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-3 text-[30px] font-semibold text-juscia-primary">Perguntas Frequentes</h2>
          <p className="text-sm text-juscia-muted">
            Dúvidas frequentes sobre a IA da Juscia para advogados
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          {faqRaw.map((f) => {
            const open = openId === f.id;
            return (
              <div key={f.id} className="border-b border-juscia-border py-2">
                <button
                  onClick={() => setOpenId(open ? null : f.id)}
                  className={cn(
                    "flex w-full flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-relaxed transition-all",
                    open ? "text-juscia-primary" : "text-juscia-ink",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex flex-shrink-0 opacity-60">
                      <f.icon size={16} />
                    </span>
                    <span>{f.title}</span>
                  </span>
                  <span
                    className={cn(
                      "inline-flex flex-shrink-0 opacity-60 transition-transform",
                      open ? "rotate-[135deg]" : "rotate-0",
                    )}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                {open && (
                  <p className="py-1 pb-3 pl-7 text-[15px] leading-relaxed text-juscia-muted">
                    {f.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
