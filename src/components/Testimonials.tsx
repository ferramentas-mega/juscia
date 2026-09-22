import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
const testimonials = [{
  text: "A Juscia transformou completamente nosso atendimento inicial. Conseguimos qualificar leads 24/7 e nossa taxa de conversão aumentou 40%.",
  image: "https://randomuser.me/api/portraits/women/1.jpg",
  name: "Dra. Ana Paula Silva",
  role: "Sócia, Silva & Advogados"
}, {
  text: "Implementação rápida e intuitiva. Em poucos dias já estávamos atendendo clientes automaticamente no WhatsApp com resultados impressionantes.",
  image: "https://randomuser.me/api/portraits/men/2.jpg",
  name: "Dr. Carlos Mendes",
  role: "Advogado Trabalhista"
}, {
  text: "O suporte da Juscia é excepcional. Sempre disponíveis para ajudar e otimizar nossos fluxos de atendimento jurídico.",
  image: "https://randomuser.me/api/portraits/women/3.jpg",
  name: "Dra. Mariana Costa",
  role: "Diretora de Operações"
}, {
  text: "A IA da Juscia compreende as necessidades dos clientes e faz um acolhimento humanizado. Nossos advogados agora focam apenas em fechar propostas.",
  image: "https://randomuser.me/api/portraits/men/4.jpg",
  name: "Dr. Roberto Almeida",
  role: "CEO, Almeida Advocacia"
}, {
  text: "Economizamos horas de trabalho repetitivo. A Juscia qualifica os leads e nossa equipe entra apenas quando realmente necessário.",
  image: "https://randomuser.me/api/portraits/women/5.jpg",
  name: "Dra. Juliana Santos",
  role: "Coordenadora Jurídica"
}, {
  text: "ROI comprovado em menos de 2 meses. A automação do atendimento inicial mudou nosso escritório para melhor.",
  image: "https://randomuser.me/api/portraits/women/6.jpg",
  name: "Dra. Patricia Lima",
  role: "Analista de Negócios"
}, {
  text: "Nossos clientes adoram o atendimento rápido e personalizado no WhatsApp. A Juscia entende contexto jurídico como nenhuma outra solução.",
  image: "https://randomuser.me/api/portraits/men/7.jpg",
  name: "Dr. Fernando Ribeiro",
  role: "Diretor de Marketing"
}, {
  text: "A solução superou todas as expectativas. A Juscia entendeu perfeitamente as particularidades do nosso escritório.",
  image: "https://randomuser.me/api/portraits/women/8.jpg",
  name: "Dra. Camila Rocha",
  role: "Gerente Comercial"
}, {
  text: "Desde que implementamos a Juscia, nossa presença digital e taxa de fechamento aumentaram significativamente.",
  image: "https://randomuser.me/api/portraits/men/9.jpg",
  name: "Dr. Lucas Martins",
  role: "Sócio Fundador"
}];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const Testimonials = () => {
  return <section className="bg-background mt-12 mb-20 relative md:mt-[65px]">
      <div className="container z-10 mx-auto">
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
      }} className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg bg-[#e9f2ff] text-[#272d41]">
              Depoimentos
            </div>
          </div>

          <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold tracking-tighter mt-5 text-primary lg:text-3xl text-center text-3xl">
            Avaliações de advogados que usam a Juscia
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Veja como escritórios de advocacia aumentaram a taxa de conversão com atendimento
            automatizado no WhatsApp.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>;
};
export default Testimonials;