import React from "react";
import { Timeline } from "@/components/ui/timeline";

const mediaBox =
  "rounded-lg h-20 md:h-44 lg:h-60 w-full object-cover shadow-lg shadow-primary/10";

const QrTile = () => (
  <div className={`${mediaBox} bg-card border border-border flex flex-col items-center justify-center gap-2`}>
    <div
      className="h-10 w-10 md:h-16 md:w-16 rounded-md border-4 border-background outline outline-2 outline-border"
      style={{
        background:
          "repeating-conic-gradient(hsl(var(--foreground)) 0 25%, transparent 0 50%) 0 0/8px 8px",
      }}
    />
    <span className="text-muted-foreground text-xs">Leia com o WhatsApp</span>
  </div>
);

const TimelineSection = () => {
  const data = [
    {
      title: "Passo 1",
      content: (
        <div>
          <p className="mb-3 font-bold md:text-3xl text-primary text-3xl">
            Configure a Sua Assistente
          </p>
          <p className="mb-8 text-sm md:text-base text-muted-foreground max-w-xl">
            Defina o tom de voz, as áreas de atuação e as informações do seu escritório. A IA
            aprende o seu jeito de atender em poucos minutos.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <video
              src="/videos/timeline-step1.webm"
              className={mediaBox}
              autoPlay
              muted
              loop
              playsInline
            />
            <img
              src="/lovable-uploads/0b29361d-b37b-4773-9528-96bfbe6af10a.png"
              alt="Configuração da assistente"
              className={mediaBox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Passo 2",
      content: (
        <div>
          <p className="mb-3 font-bold text-primary md:text-3xl text-3xl">Escaneie o QR Code</p>
          <p className="mb-8 text-sm md:text-base text-muted-foreground max-w-xl">
            Conecte seu número em segundos. Basta ler o QR Code — sem instalar nada e sem precisar
            de personalizações.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <QrTile />
            <img
              src="/lovable-uploads/65839ffd-2644-4559-a144-d564a32d3be6.jpg"
              alt="WhatsApp conectado"
              className={mediaBox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Passo 3",
      content: (
        <div>
          <p className="mb-3 font-bold text-primary md:text-3xl text-3xl">
            Sua Assistente Pronta Para Atender!
          </p>
          <p className="mb-8 text-sm md:text-base text-muted-foreground max-w-xl">
            A Juscia já qualifica os leads, transcreve áudios e resume cada caso no CRM. Você
            entra só na hora de fechar a proposta.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/0b29361d-b37b-4773-9528-96bfbe6af10a.png"
              alt="Atendimentos em andamento"
              className={mediaBox}
            />
            <video
              src="/videos/feature-demo.webm"
              className={mediaBox}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section className="w-full">
      <Timeline data={data} />
    </section>
  );
};
export default TimelineSection;
