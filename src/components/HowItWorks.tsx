import { steps, type TimelineMedia } from "@/lib/content";
import { useTimelineProgress } from "@/hooks/useTimelineProgress";
import { LazyVideo } from "@/components/ui/LazyVideo";

function MediaTile({ media }: { media: TimelineMedia }) {
  const box =
    "block h-60 w-full rounded-lg border border-juscia-border object-cover shadow-[0_10px_15px_-3px_hsl(220_100%_43%_/_0.1)]";
  if (media.type === "video") {
    return <LazyVideo src={media.src!} muted loop playsInline className={box} />;
  }
  if (media.type === "qr") {
    return (
      <div className={`${box} flex flex-col items-center justify-center gap-3.5 bg-white`}>
        <div
          className="h-24 w-24 rounded-lg border-[6px] border-white outline outline-2 outline-[hsl(214_20%_88%)]"
          style={{
            background: "repeating-conic-gradient(hsl(225 35% 15%) 0 25%, #fff 0 50%) 0 0/16px 16px",
          }}
        />
        <span className="text-[13px] font-semibold text-juscia-muted">Leia com o WhatsApp</span>
      </div>
    );
  }
  return <img src={media.src} alt={media.alt} className={box} />;
}

export function HowItWorks() {
  const { trackRef, progressRef } = useTimelineProgress();

  return (
    <section id="como-funciona" className="w-full scroll-mt-[100px]">
      <div className="w-full bg-white px-4 sm:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-4 py-20 sm:px-10">
          <h2 className="mb-4 max-w-3xl text-center text-3xl font-bold tracking-[-0.02em] text-juscia-primary">
            Como funciona a Juscia
          </h2>
          <p className="max-w-md text-center text-sm text-juscia-muted">
            Conheça a jornada de transformação do atendimento jurídico com inteligência artificial.
          </p>
        </div>
        <div ref={trackRef} className="relative mx-auto max-w-[1280px] overflow-hidden pb-20">
          {steps.map((st) => (
            <div key={st.title} className="flex justify-start gap-6 pt-32 sm:gap-10 md:pt-40">
              <div className="sticky top-32 z-40 flex w-full max-w-xs flex-shrink-0 flex-row items-center self-start md:top-40">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <div className="h-4 w-4 rounded-full border border-juscia-border bg-juscia-surface" />
                </div>
                <h3 className="pl-20 text-3xl font-bold text-juscia-muted md:text-[48px]">
                  {st.title}
                </h3>
              </div>
              <div className="relative w-full px-4">
                <p className="mb-3 text-2xl font-bold text-juscia-primary sm:text-[30px]">
                  {st.heading}
                </p>
                <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-juscia-muted">
                  {st.desc}
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {st.media.map((m, i) => (
                    <MediaTile key={i} media={m} />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div
            className="absolute left-8 top-0 h-full w-0.5 overflow-hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, hsl(214 20% 90%) 20%, hsl(214 20% 90%) 80%, transparent 99%)",
              maskImage:
                "linear-gradient(to bottom,transparent 0%,#000 10%,#000 90%,transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom,transparent 0%,#000 10%,#000 90%,transparent 100%)",
            }}
          >
            <div
              ref={progressRef}
              className="absolute inset-x-0 top-0 h-0 w-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(to top, hsl(258 90% 66%) 0%, hsl(220 100% 50%) 10%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
