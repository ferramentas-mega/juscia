import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";

const accordionItems = [
  {
    id: 1,
    title: 'Assistente Virtual',
    imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Geração de Documentos',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Chatbot Jurídico',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Agente de IA',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Análise de Processos',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
  },
];

const BentoGallerySection = () => {
  return (
    <LandingAccordionItem
      items={accordionItems}
      title={<>Acelere suas tarefas<br />jurídicas com IA</>}
      description="Automatize processos complexos e ganhe produtividade com nossa plataforma de inteligência artificial especializada para o setor jurídico."
      ctaText="Começar Agora"
      ctaHref="#planos"
    />
  );
};

export default BentoGallerySection;
