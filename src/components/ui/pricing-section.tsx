"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NumberFlow from "@number-flow/react";
import { MessageSquare, Users, Brain, Bell, Headphones, LayoutDashboard, Search, Mic, Smartphone, CheckCheck } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { trialWhatsappUrl } from "@/lib/whatsapp";

const plans = [
  {
    name: "Plano básico",
    description: "Perfeito para pequenas demandas!",
    price: 197,
    yearlyPrice: 157.60,
    buttonText: "Teste por 7 dias Grátis",
    buttonVariant: "outline" as const,
    features: [
      { text: "100 atendimentos completos por IA", icon: <Brain className="h-4 w-4" /> },
      { text: "3 atendentes", icon: <Users className="h-4 w-4" /> },
      { text: "1 instância de WhatsApp", icon: <Smartphone className="h-4 w-4" /> },
    ],
    includes: [
      "Recursos incluídos:",
      "Resumo do Caso com I.A",
      "Follow-up Automático",
      "Chat Ao Vivo",
      "CRM Kanban Inteligente",
      "Busca de Processos",
    ],
  },
  {
    name: "Plano intermediário",
    description: "Feito para atendimentos multicanal!",
    price: 397,
    yearlyPrice: 317.60,
    buttonText: "Teste por 7 dias Grátis",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "300 atendimentos completos por I.A /mês", icon: <Brain className="h-4 w-4" /> },
      { text: "7 Atendentes", icon: <Users className="h-4 w-4" /> },
      { text: "3 instâncias de WhatsApp", icon: <Smartphone className="h-4 w-4" /> },
    ],
    includes: [
      "Tudo do Básico, mais:",
      "Escuta e Transcreve áudios",
      "Resumo do Caso com I.A",
      "Follow-up Automático",
      "Chat Ao Vivo",
      "CRM Kanban Inteligente",
    ],
  },
  {
    name: "Plano premium",
    description: "Para altas demandas",
    price: 497,
    yearlyPrice: 397.60,
    buttonText: "Teste por 7 dias Grátis",
    buttonVariant: "outline" as const,
    features: [
      { text: "1000 atendimentos completos por I.A /mês", icon: <Brain className="h-4 w-4" /> },
      { text: "100 Atendentes", icon: <Users className="h-4 w-4" /> },
      { text: "7 instâncias de WhatsApp", icon: <Smartphone className="h-4 w-4" /> },
    ],
    includes: [
      "Tudo do Intermediário, mais:",
      "Escuta e Transcreve áudios",
      "Resumo do Caso com I.A",
      "Follow-up Automático",
      "Chat Ao Vivo",
      "CRM Kanban Inteligente",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("1"); // Default to yearly

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative flex rounded-full bg-muted/50 p-1 border">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {selected === "0" && (
            <motion.div
              layoutId="pricing-switch"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">Mensal</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-4 sm:py-2 py-1.5 font-medium transition-colors ${
            selected === "1"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {selected === "1" && (
            <motion.div
              layoutId="pricing-switch"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            Anual
            <span className="text-xs font-semibold bg-background text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
              Economize 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true); // Default to yearly
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div className="w-full py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Escolha o plano ideal para o seu{" "}
          <span className="text-primary">escritório</span>
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Planos de IA para advogados a partir de R${" "}
          {isYearly ? "157,60 por mês no plano anual" : "197 por mês"}. Teste 7 dias grátis, sem
          cartão de crédito.
        </p>
      </motion.div>

      <div className="flex justify-center mb-10">
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </div>

      <div
        ref={pricingRef}
        className="grid gap-6 md:grid-cols-3 md:gap-6 lg:gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            custom={index}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card
              className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "ring-2 ring-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "hover:shadow-lg"
              }`}
            >
              <CardHeader className="p-6 pb-4 text-center">
                <div className="flex flex-col items-center mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="text-xs font-semibold px-3 py-1 bg-primary text-primary-foreground rounded-full mt-2">
                      Mais Popular
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg text-foreground">R$</span>
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-extrabold text-foreground"
                    />
                    <span className="text-muted-foreground ml-1">
                      /{isYearly ? "mês" : "mês"}
                    </span>
                  </div>
                  {isYearly && (
                  <p className="text-xs text-primary mt-1">
                    Cobrado anualmente (R${(plan.yearlyPrice * 12).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
                  </p>
                  )}
                  {isYearly && (
                    <p className="text-xs text-muted-foreground line-through opacity-70">
                      R${plan.price}/mês
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-grow p-6 pt-0">
                <Button
                  asChild
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                      : ""
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  <a href={trialWhatsappUrl} target="_blank" rel="noopener noreferrer">
                    {plan.buttonText}
                  </a>
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                      <span className="text-sm text-foreground">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    {plan.includes[0]}
                  </p>
                  <div className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCheck className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
