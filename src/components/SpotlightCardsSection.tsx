import { GlowCard } from "@/components/ui/spotlight-card";
import { Scale, FileText, Users } from "lucide-react";
const SpotlightCardsSection = () => {
  const cards = [{
    icon: <Scale className="w-10 h-10 text-primary" />,
    title: "Gestão de Processos",
    description: "Acompanhe todos os seus processos em tempo real com alertas automáticos.",
    glowColor: "blue" as const
  }, {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Documentos Inteligentes",
    description: "Gere petições e contratos automaticamente com IA avançada.",
    glowColor: "blue" as const
  }, {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Relacionamento",
    description: "Mantenha seus clientes informados com comunicação automatizada.",
    glowColor: "blue" as const
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl font-bold text-primary mb-4 text-3xl">
            Recursos que transformam seu escritório
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
            Descubra como a Juscia pode otimizar sua prática jurídica
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-8 md:gap-10 px-px md:flex md:flex-row">
          {cards.map((card, index) => <GlowCard key={index} glowColor={card.glowColor} size="md">
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </GlowCard>)}
        </div>
      </div>
    </section>;
};
export default SpotlightCardsSection;