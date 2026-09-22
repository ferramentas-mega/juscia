import PricingSection from "@/components/ui/pricing-section";

const Pricing = () => {
  return (
    <section id="planos" className="bg-gradient-to-b from-background to-muted/30">
      <PricingSection />
      <div className="text-center pb-12 animate-fade-in">
        <p className="text-muted-foreground">
          Todos os planos incluem período de teste gratuito de 7 dias
        </p>
      </div>
    </section>
  );
};

export default Pricing;
