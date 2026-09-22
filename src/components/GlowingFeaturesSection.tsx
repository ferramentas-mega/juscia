import { MessageSquare, Users, MessageCircle, Mic, Filter, Smartphone } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const GlowingFeaturesSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }} viewport={{
        once: true
      }} className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-12">
          <div className="flex justify-center mb-5">
            <div className="border border-border py-1 px-4 rounded-lg text-sm bg-[#e9f2ff] text-[#272d41]">
              Vantagens
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter bg-primary-foreground text-primary">
            Por que advogados escolhem a Juscia
          </h2>
          <p className="mt-5 opacity-75 text-muted-foreground">
            Inteligência artificial treinada para o contexto jurídico brasileiro, do primeiro
            contato ao fechamento do contrato.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem]">
          <GridItem area="md:[grid-area:1/1/2/5]" icon={<MessageSquare className="h-4 w-4" />} title="Maximize seu atendimento" description="Gerencie múltiplas conversas ao mesmo tempo, otimizando a eficiência e focando nos casos que demandam atenção personalizada." />
          <GridItem area="md:[grid-area:1/5/2/9]" icon={<Users className="h-4 w-4" />} title="CRM simples e inteligente" description="Nosso CRM integrado facilita a qualificação de leads e o envio para os departamentos certos, tornando o acompanhamento de cada caso mais fácil." />
          <GridItem area="md:[grid-area:1/9/2/13]" icon={<MessageCircle className="h-4 w-4" />} title="Bate-papo ao vivo" description="Utilize o bate-papo ao vivo integrando a Juscia ao seu WhatsApp de forma rápida e simples, com apenas alguns cliques." />
          <GridItem area="md:[grid-area:2/1/3/5]" icon={<Mic className="h-4 w-4" />} title="Não escute mais áudio" description="Chega de ouvir áudio do cliente, deixe que a Juscia escute e transcreva para você de forma automática." />
          <GridItem area="md:[grid-area:2/5/3/9]" icon={<Filter className="h-4 w-4" />} title="Filtre curiosos" description="Com a Juscia, você elimina curiosos de forma eficiente com um resumo de conversa que filtra interações e fornece apenas as informações relevantes." />
          <GridItem area="md:[grid-area:2/9/3/13]" icon={<Smartphone className="h-4 w-4" />} title="Ative de forma fácil" description="Integre de forma simples seu WhatsApp, basta ler o QR code e pronto, a Juscia já está funcionando sem a necessidade de personalizações." />
        </ul>
      </div>
    </section>;
};
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}
const GridItem = ({
  area,
  icon,
  title,
  description
}: GridItemProps) => {
  return <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 bg-[#e8f1ff]/60">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border p-2 bg-primary text-primary-foreground">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>;
};
export default GlowingFeaturesSection;