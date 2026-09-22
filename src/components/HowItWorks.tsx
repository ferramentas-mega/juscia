import { Smartphone, MessageCircle, Target, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      number: "01",
      title: "Cliente entra em contato",
      description: "Seu cliente inicia uma conversa pelo WhatsApp do escritório, a qualquer hora do dia.",
    },
    {
      icon: MessageCircle,
      number: "02",
      title: "IA compreende e responde",
      description: "Nossa inteligência artificial entende o caso, faz perguntas relevantes e coleta informações importantes.",
    },
    {
      icon: Target,
      number: "03",
      title: "Qualificação automática",
      description: "O sistema qualifica automaticamente o lead, identificando o potencial e a urgência do caso.",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Você recebe leads prontos",
      description: "Receba notificações com leads qualificados direto no seu CRM, prontos para o primeiro atendimento.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Como funciona
            <span className="block text-primary mt-2">a Juscia</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Processo simples e automatizado em 4 etapas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Connector line (hidden on mobile and last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}

                  <div className="relative text-center">
                    {/* Number badge */}
                    <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-soft">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
