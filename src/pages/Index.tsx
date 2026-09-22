import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import VideoSection from "@/components/VideoSection";
import TimelineSection from "@/components/TimelineSection";
import BentoGallerySection from "@/components/BentoGallerySection";
import GlowingFeaturesSection from "@/components/GlowingFeaturesSection";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import { Footer } from "@/components/ui/modem-animated-footer";
import Testimonials from "@/components/Testimonials";
import SpotlightCardsSection from "@/components/SpotlightCardsSection";
import LogoCarouselSection from "@/components/LogoCarouselSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import { AboutSection, AboutHero } from "@/components/ui/about-section";
import { FaqSectionWrapper } from "@/components/FaqSectionWrapper";
import { Instagram, Youtube, Mail, Phone, MessageSquare } from "lucide-react";
import chatIcon from "@/assets/chat-icon.svg";
import crmIcon from "@/assets/crm-icon.svg";
import analiseIcon from "@/assets/analise-icon.svg";
import contatosIcon from "@/assets/contatos-icon.svg";
import { trialWhatsappUrl } from "@/lib/whatsapp";
const featureTabs = [{
  value: "tab-1",
  icon: <img src={chatIcon} alt="Chat" className="h-6 w-6 shrink-0" />,
  label: "Chat Ao Vivo",
  content: {
    badge: "IA Avançada",
    title: "Automatize tarefas repetitivas",
    description: "Deixe a inteligência artificial cuidar das tarefas burocráticas enquanto você foca no que realmente importa: seus clientes.",
    buttonText: "Conhecer recursos",
    imageSrc: "/lovable-uploads/65839ffd-2644-4559-a144-d564a32d3be6.jpg",
    imageAlt: "Dashboard Juscia - Automação Inteligente",
    videoUrl: "/videos/feature-demo.webm"
  }
}, {
  value: "tab-2",
  icon: <img src={crmIcon} alt="CRM" className="h-8 w-8 shrink-0" />,
  label: "CRM",
  content: {
    badge: "CRM Jurídico",
    title: "Organize sua carteira de clientes",
    description: "Tenha uma visão completa de cada cliente, processos em andamento e histórico de atendimentos em um único lugar.",
    buttonText: "Ver funcionalidades",
    imageSrc: "/lovable-uploads/0b29361d-b37b-4773-9528-96bfbe6af10a.png",
    imageAlt: "Gestão de Clientes Juscia"
  }
}, {
  value: "tab-3",
  icon: <img src={analiseIcon} alt="Análise" className="h-8 w-8 shrink-0" />,
  label: "Análise",
  content: {
    badge: "Templates Prontos",
    title: "Gere documentos em segundos",
    description: "Utilize modelos pré-configurados e geração automática com IA para criar petições, contratos e pareceres rapidamente.",
    buttonText: "Explorar modelos",
    imageSrc: "/lovable-uploads/65839ffd-2644-4559-a144-d564a32d3be6.jpg",
    imageAlt: "Documentos Jurídicos Juscia"
  }
}, {
  value: "tab-4",
  icon: <img src={contatosIcon} alt="Contatos" className="h-8 w-8 shrink-0" />,
  label: "Contatos",
  content: {
    badge: "Gestão de Contatos",
    title: "Gerencie seus contatos",
    description: "Organize e acesse facilmente todos os contatos do seu escritório em um único lugar centralizado.",
    buttonText: "Ver contatos",
    imageSrc: "/lovable-uploads/0b29361d-b37b-4773-9528-96bfbe6af10a.png",
    imageAlt: "Contatos Juscia"
  }
}];
const socialLinks = [{
  icon: <Instagram className="w-6 h-6" />,
  href: "https://www.instagram.com/juscia.io/",
  label: "Instagram"
}, {
  icon: <Youtube className="w-6 h-6" />,
  href: "https://www.youtube.com/@Juscia",
  label: "YouTube"
}, {
  icon: <Phone className="w-6 h-6" />,
  href: "https://api.whatsapp.com/send?phone=554892254344",
  label: "WhatsApp"
}, {
  icon: <Mail className="w-6 h-6" />,
  href: "mailto:contato@juscia.io",
  label: "Email"
}];
const navLinks = [{
  label: "Planos",
  href: "#planos"
}, {
  label: "Entrar na plataforma",
  href: "https://juscia.io/auth/signin"
}, {
  label: "Suporte",
  href: "mailto:contato@juscia.io"
}, {
  label: "Termos de Uso",
  href: "https://juscia.com.br/termos-de-uso"
}, {
  label: "Política de Privacidade",
  href: "https://juscia.com.br/politica-de-privacidade"
}];
const Index = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="inicio" />
        <Hero />
        <LogoCarouselSection />
        <div id="vantagens">
          <GlowingFeaturesSection />
        </div>
        <div id="funcionalidades" className="hidden md:block">
          <Feature108 tabs={featureTabs} className="mt-0" />
        </div>
        <div id="como-funciona">
          <TimelineSection />
        </div>
        <BentoGallerySection />
        <SpotlightCardsSection />
        <ImageSliderSection />
        <Testimonials />
        <VideoSection />
        <Pricing />

        <div id="sobre">
          <AboutHero />
        </div>
        <FaqSectionWrapper />
        <CTA />
      </main>
      <div id="contato">
        <Footer brandName="Juscia" brandDescription="IA jurídica que atende, qualifica e resume os casos dos seus clientes automaticamente no WhatsApp." socialLinks={socialLinks} navLinks={navLinks} brandIcon={<MessageSquare className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 drop-shadow-lg text-sidebar-primary" />} className="text-primary bg-primary-foreground py-[12px]" />
      </div>
    </div>;
};
export default Index;