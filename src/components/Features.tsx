import { Bot, Clock, TrendingUp, Shield, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "IA Avançada",
      description: "Inteligência artificial treinada especificamente para atendimento jurídico, compreendendo contextos complexos.",
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Seus clientes recebem respostas imediatas a qualquer hora do dia, sem precisar esperar.",
    },
    {
      icon: TrendingUp,
      title: "Mais Conversões",
      description: "Capture leads qualificados automaticamente e aumente suas taxas de conversão em até 3x.",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Todos os dados são criptografados e protegidos conforme a LGPD e normas da OAB.",
    },
    {
      icon: Zap,
      title: "Integração Simples",
      description: "Configure em minutos e integre facilmente com seu WhatsApp Business existente.",
    },
    {
      icon: Users,
      title: "Qualificação Inteligente",
      description: "A IA qualifica automaticamente os leads, priorizando casos com maior potencial.",
    },
  ];

  return (
    <section id="vantagens" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Vantagens que transformam
            <span className="block text-primary mt-2">seu escritório</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologia de ponta para automatizar seu atendimento e escalar seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-elevated group animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
