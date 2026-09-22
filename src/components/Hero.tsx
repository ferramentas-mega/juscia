import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";
import { trialWhatsappUrl } from "@/lib/whatsapp";
const Hero = () => {
  return <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={<div className="space-y-4 md:space-y-6 text-center flex flex-col items-center px-4 md:px-0">
            {/* Badge */}
            <div className="flex max-w-fit items-center justify-center space-x-2 rounded-full bg-primary/10 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-sm border border-primary/20">
              <span className="text-xs md:text-sm font-medium text-foreground">
                IA jurídica que atende no WhatsApp 24h por dia
              </span>
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
              <span className="text-3xl font-bold mt-1 leading-tight md:leading-none my-px md:text-6xl">
                Inteligência Artificial
              </span>
              <br />
              <span className="text-3xl font-bold mt-1 leading-tight md:leading-none bg-gradient-to-r from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] bg-clip-text text-transparent my-0 md:text-6xl">
                para Advogados
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base md:text-lg text-muted-foreground px-2 md:px-0">
              A Juscia atende, qualifica e resume os casos dos seus clientes automaticamente no
              WhatsApp. Filtre curiosos, ganhe horas por semana e feche mais contratos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 py-6 md:py-[58px] pb-12 md:pb-[96px] pt-0 sm:flex sm:flex-row w-full sm:w-auto">
              <a href={trialWhatsappUrl} target="_blank" rel="noopener noreferrer" className="h-11 md:h-12 flex items-center justify-center rounded-full bg-primary px-6 md:px-8 text-sm md:text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg w-full sm:w-auto">
                Testar 7 dias grátis
              </a>
              <a href="#planos" className="h-11 md:h-12 flex items-center justify-center rounded-full border-2 border-primary px-6 md:px-8 text-sm md:text-base font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 w-full sm:w-auto">
                Ver planos e preços
              </a>
            </div>
          </div>} className="mt-12 pb-0 pt-[240px] mb-px md:mt-[65px]">
        <img alt="Juscia Dashboard Preview" draggable={false} src="/lovable-uploads/0b29361d-b37b-4773-9528-96bfbe6af10a.png" className="mx-auto rounded-2xl h-full object-left-top w-full object-cover" />
      </ContainerScroll>
    </div>;
};
export default Hero;