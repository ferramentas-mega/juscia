import { useState } from "react";
import { Play } from "lucide-react";

export function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-juscia-surface/30 py-20">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mx-auto mb-10 flex max-w-xl flex-col items-center justify-center text-center">
          <div className="mb-5 flex justify-center">
            <div className="rounded-lg border border-juscia-border px-4 py-1 text-sm text-juscia-muted">
              Demonstração
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-juscia-primary">
            Veja a Juscia em ação
          </h2>
          <p className="mt-5 text-juscia-muted opacity-75">
            Veja na prática como a IA atende, qualifica e resume os casos no WhatsApp do seu
            escritório.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          {open ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)]">
              <iframe
                src="https://www.youtube.com/embed/sI3Pf1Amn0s?autoplay=1"
                title="Assistir demonstração"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          ) : (
            <div
              onClick={() => setOpen(true)}
              className="relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-juscia-primary to-[hsl(220_100%_30%)] shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,.16), transparent 60%)",
                }}
              />
              <div className="relative flex flex-col items-center gap-4 p-6 text-center text-white">
                <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-sm">
                  <Play size={34} fill="#fff" className="ml-1" />
                </div>
                <div className="text-xl font-bold">Assistir demonstração</div>
                <div className="text-sm opacity-85">Veja como a Juscia funciona na prática</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
