import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { trialWhatsappUrl } from "@/lib/whatsapp";
const people = [{
  id: 1,
  name: "João Silva",
  designation: "Advogado Criminal",
  image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
}, {
  id: 2,
  name: "Roberto Santos",
  designation: "Advogado Trabalhista",
  image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
}, {
  id: 3,
  name: "Maria Oliveira",
  designation: "Advogada Civil",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
}, {
  id: 4,
  name: "Ana Costa",
  designation: "Advogada Empresarial",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
}, {
  id: 5,
  name: "Carlos Mendes",
  designation: "Advogado Tributário",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
}, {
  id: 6,
  name: "Fernanda Lima",
  designation: "Advogada de Família",
  image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
}];
const CTA = () => {
  return <section className="py-16 px-4">
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-100px"
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }} className="relative max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-primary to-primary/80 rounded-2xl p-10 text-primary-foreground overflow-hidden py-[75px]">
        {/* Animated glow effect */}
        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" animate={{
        x: ["-100%", "100%"]
      }} transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }} />
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex flex-wrap items-center justify-center gap-4">
          <AnimatedTooltip items={people} />
          <p className="ml-4 font-medium text-xs">Junte-se a mais de 1.000 advogados</p>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-xl mt-5 bg-gradient-to-r from-primary-foreground to-primary-foreground/70 text-transparent bg-clip-text">
          Desbloqueie sua próxima grande oportunidade.
        </motion.h1>

        <motion.a href={trialWhatsappUrl} target="_blank" rel="noopener noreferrer" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.98
      }} className="px-8 py-3 text-primary bg-primary-foreground hover:bg-primary-foreground/90 transition-all rounded-full uppercase text-sm font-semibold mt-8 flex items-center gap-2">
          Começar teste gratuito
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>;
};
export default CTA;