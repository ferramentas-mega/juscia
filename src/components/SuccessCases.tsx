import { galleryUrls } from "@/lib/content";

export function SuccessCases() {
  const images = galleryUrls.concat(galleryUrls);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1280px] px-4 pb-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-juscia-primary">
          Nossos Casos de Sucesso
        </h2>
        <p className="mx-auto max-w-xl text-center text-juscia-muted">
          Escritórios de advocacia que ganharam produtividade com a IA da Juscia
        </p>
      </div>
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <div className="relative z-10 flex w-full items-center justify-center py-8">
          <div
            className="w-full max-w-6xl"
            style={{
              maskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)",
              WebkitMaskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)",
            }}
          >
            <div className="flex w-max animate-marquee-x-slow gap-6 [animation-play-state:running] hover:[animation-play-state:paused]">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="h-80 w-80 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)] transition-all duration-300 hover:scale-105 hover:brightness-110"
                >
                  <img
                    src={src}
                    alt={`Caso de sucesso ${(i % galleryUrls.length) + 1}`}
                    loading="lazy"
                    className="block h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
