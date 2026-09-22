import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Shield, CreditCard, Headphones, Lock, Link2, Plus } from "lucide-react";
const JUSCIA_FAQS = [{
  id: "1",
  icon: Shield,
  title: "O que torna a Juscia única?",
  content: "A Juscia se destaca pelo seu design intuitivo, recursos avançados de automação com IA e integração perfeita com fluxos de trabalho jurídicos. Focamos em criar uma experiência que combina simplicidade com funcionalidades poderosas."
}, {
  id: "2",
  icon: CreditCard,
  title: "Como funciona a estrutura de preços?",
  content: "Oferecemos planos flexíveis e transparentes, projetados para escalar conforme suas necessidades. Cada plano inclui um conjunto de recursos essenciais, com funcionalidades adicionais conforme você avança. Todos os planos começam com um período de teste gratuito."
}, {
  id: "3",
  icon: Headphones,
  title: "Qual tipo de suporte vocês oferecem?",
  content: "Fornecemos suporte abrangente através de múltiplos canais. Isso inclui chat ao vivo, documentação detalhada, tutoriais em vídeo e gerentes de conta dedicados para clientes empresariais."
}, {
  id: "4",
  icon: Lock,
  title: "A Juscia é segura para dados sensíveis?",
  content: "Sim! A segurança é nossa prioridade. Utilizamos criptografia de ponta a ponta, armazenamento em servidores seguros e seguimos todas as normas da LGPD para proteção de dados jurídicos."
}, {
  id: "5",
  icon: Link2,
  title: "Posso integrar com outros sistemas?",
  content: "A Juscia oferece integrações com os principais sistemas utilizados por escritórios de advocacia, incluindo sistemas de gestão, calendários e ferramentas de comunicação."
}];
export function FaqSectionWrapper() {
  return <section className="py-16 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-primary">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-muted-foreground">
            Dúvidas frequentes sobre a IA da Juscia para advogados
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full" defaultValue="1">
            {JUSCIA_FAQS.map(item => <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&[data-state=open]]:text-primary [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                    <span className="flex items-center gap-3">
                      <item.icon size={16} strokeWidth={2} className="shrink-0 opacity-60" aria-hidden="true" />
                      <span>{item.title}</span>
                    </span>
                    <Plus size={16} strokeWidth={2} className="shrink-0 opacity-60 transition-transform duration-200" aria-hidden="true" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
}