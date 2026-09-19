import {
  MessageSquare,
  Shield,
  BarChart3,
  Scale,
  FileText,
  Users,
  Brain,
  Smartphone,
  CheckCheck,
  CreditCard,
  Headphones,
  Lock,
  Link2,
  TrendingUp,
  FileCheck2,
  Mail,
  MessageCircle,
  Mic,
  Filter,
  Phone,
  Contact,
  Gavel,
  ShieldCheck,
  Building2,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";

type IconComponent = LucideIcon | typeof InstagramIcon;

export const WHATSAPP_NUMBER = "554892254344";

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappUrl = whatsappUrl(
  "Olá! Estou com problemas e queria saber quais são os meus direitos, pode me ajudar?",
);

export const menu = [
  { title: "Início", url: "#inicio" },
  { title: "Sobre", url: "#sobre" },
  { title: "Como funciona", url: "#como-funciona" },
  { title: "Vantagens", url: "#vantagens" },
  { title: "Planos", url: "#planos" },
];

// ---------- Vantagens ----------
export type Vantagem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  gridArea: string;
};

export const vantagens: Vantagem[] = [
  {
    icon: MessageSquare,
    title: "Maximize seu atendimento",
    desc: "Gerencie múltiplas conversas ao mesmo tempo, otimizando a eficiência e focando nos casos que demandam atenção personalizada.",
    gridArea: "1 / 1 / 2 / 5",
  },
  {
    icon: Users,
    title: "CRM simples e inteligente",
    desc: "Nosso CRM integrado facilita a qualificação de leads e o envio para os departamentos certos, tornando o acompanhamento de cada caso mais fácil.",
    gridArea: "1 / 5 / 2 / 9",
  },
  {
    icon: MessageCircle,
    title: "Bate-papo ao vivo",
    desc: "Utilize o bate-papo ao vivo integrando a Juscia ao seu WhatsApp de forma rápida e simples, com apenas alguns cliques.",
    gridArea: "1 / 9 / 2 / 13",
  },
  {
    icon: Mic,
    title: "Não escute mais áudio",
    desc: "Chega de ouvir áudio do cliente, deixe que a Juscia escute e transcreva para você de forma automática.",
    gridArea: "2 / 1 / 3 / 5",
  },
  {
    icon: Filter,
    title: "Filtre curiosos",
    desc: "Com a Juscia, você elimina curiosos de forma eficiente com um resumo de conversa que filtra interações e fornece apenas as informações relevantes.",
    gridArea: "2 / 5 / 3 / 9",
  },
  {
    icon: Smartphone,
    title: "Ative de forma fácil",
    desc: "Integre de forma simples seu WhatsApp, basta ler o QR code e pronto, a Juscia já está funcionando sem a necessidade de personalizações.",
    gridArea: "2 / 9 / 3 / 13",
  },
];

// ---------- Legal logos (social proof marquee) ----------
export const legalIcons: LucideIcon[] = [
  Scale,
  Gavel,
  FileText,
  ShieldCheck,
  Building2,
  Users,
  Clock,
  Scale,
  Gavel,
  FileText,
  ShieldCheck,
  Building2,
  Users,
  Clock,
];

// ---------- Feature tabs ----------
export type TabDef = {
  label: string;
  icon: LucideIcon;
  video?: string;
  img?: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
};

export const tabsRaw: TabDef[] = [
  {
    label: "Chat Ao Vivo",
    icon: MessageSquare,
    video: "/videos/feature-demo.webm",
    badge: "IA Avançada",
    title: "Automatize tarefas repetitivas",
    description:
      "Deixe a inteligência artificial cuidar das tarefas burocráticas enquanto você foca no que realmente importa: seus clientes.",
    buttonText: "Conhecer recursos",
  },
  {
    label: "CRM",
    icon: Users,
    img: "/assets/dashboard.png",
    badge: "CRM Jurídico",
    title: "Organize sua carteira de clientes",
    description:
      "Tenha uma visão completa de cada cliente, processos em andamento e histórico de atendimentos em um único lugar.",
    buttonText: "Ver funcionalidades",
  },
  {
    label: "Análise",
    icon: BarChart3,
    img: "/assets/dashboard-wide.jpg",
    badge: "Templates Prontos",
    title: "Gere documentos em segundos",
    description:
      "Utilize modelos pré-configurados e geração automática com IA para criar petições, contratos e pareceres rapidamente.",
    buttonText: "Explorar modelos",
  },
  {
    label: "Contatos",
    icon: Contact,
    img: "/assets/dashboard.png",
    badge: "Gestão de Contatos",
    title: "Gerencie seus contatos",
    description:
      "Organize e acesse facilmente todos os contatos do seu escritório em um único lugar centralizado.",
    buttonText: "Ver contatos",
  },
];

// ---------- How it works (timeline) ----------
export type TimelineMedia = { type: "video" | "image" | "qr"; src?: string; alt?: string };

export type TimelineStep = {
  title: string;
  heading: string;
  desc: string;
  media: TimelineMedia[];
};

export const steps: TimelineStep[] = [
  {
    title: "Passo 1",
    heading: "Configure a Sua Assistente",
    desc: "Defina o tom de voz, as áreas de atuação e as informações do seu escritório. A IA aprende o seu jeito de atender em poucos minutos.",
    media: [
      { type: "video", src: "/videos/timeline-step1.webm" },
      { type: "image", src: "/assets/dashboard.png", alt: "Configuração da assistente" },
    ],
  },
  {
    title: "Passo 2",
    heading: "Escaneie o QR Code",
    desc: "Conecte seu número em segundos. Basta ler o QR Code — sem instalar nada e sem precisar de personalizações.",
    media: [
      { type: "qr" },
      { type: "image", src: "/assets/dashboard-wide.jpg", alt: "WhatsApp conectado" },
    ],
  },
  {
    title: "Passo 3",
    heading: "Sua Assistente Pronta Para Atender!",
    desc: "A Juscia já qualifica os leads, transcreve áudios e resume cada caso no CRM. Você entra só na hora de fechar a proposta.",
    media: [
      { type: "image", src: "/assets/dashboard.png", alt: "Atendimentos em andamento" },
      { type: "video", src: "/videos/feature-demo.webm" },
    ],
  },
];

// ---------- Accelerate tasks accordion ----------
export const accordionRaw = [
  {
    title: "Assistente Virtual",
    img: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  { title: "Geração de Documentos", img: "/assets/dashboard-wide.jpg" },
  {
    title: "Chatbot Jurídico",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Agente de IA",
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop",
  },
  {
    title: "Análise de Processos",
    img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
  },
];

// ---------- Realtime tracking display cards ----------
export const displayCardsRaw = [
  {
    title: "Novo lead",
    description: "Cliente qualificado pela IA",
    date: "Agora mesmo",
    offset: "",
    hover: "translateY(-72px)",
    gray: true,
  },
  {
    title: "Follow-up",
    description: "Retorno automático enviado",
    date: "Há 2 dias",
    offset: "translate(48px, 40px)",
    hover: "translate(48px, -36px)",
    gray: true,
  },
  {
    title: "Resumo do caso",
    description: "Gerado com I.A",
    date: "Hoje",
    offset: "translate(96px, 80px)",
    hover: "translate(96px, 8px)",
    gray: false,
  },
];

// ---------- Success cases gallery ----------
export const galleryUrls = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop",
];

// ---------- Testimonials ----------
export type Testimonial = { text: string; image: string; name: string; role: string };

export const testimonialsData: Testimonial[] = [
  {
    text: "A Juscia transformou completamente nosso atendimento inicial. Conseguimos qualificar leads 24/7 e nossa taxa de conversão aumentou 40%.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Dra. Ana Paula Silva",
    role: "Sócia, Silva & Advogados",
  },
  {
    text: "Implementação rápida e intuitiva. Em poucos dias já estávamos atendendo clientes automaticamente no WhatsApp com resultados impressionantes.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Dr. Carlos Mendes",
    role: "Advogado Trabalhista",
  },
  {
    text: "O suporte da Juscia é excepcional. Sempre disponíveis para ajudar e otimizar nossos fluxos de atendimento jurídico.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Dra. Mariana Costa",
    role: "Diretora de Operações",
  },
  {
    text: "A IA da Juscia compreende as necessidades dos clientes e faz um acolhimento humanizado. Nossos advogados agora focam apenas em fechar propostas.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Dr. Roberto Almeida",
    role: "CEO, Almeida Advocacia",
  },
  {
    text: "Economizamos horas de trabalho repetitivo. A Juscia qualifica os leads e nossa equipe entra apenas quando realmente necessário.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Dra. Juliana Santos",
    role: "Coordenadora Jurídica",
  },
  {
    text: "ROI comprovado em menos de 2 meses. A automação do atendimento inicial mudou nosso escritório para melhor.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Dra. Patricia Lima",
    role: "Analista de Negócios",
  },
  {
    text: "Nossos clientes adoram o atendimento rápido e personalizado no WhatsApp. A Juscia entende contexto jurídico como nenhuma outra solução.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Dr. Fernando Ribeiro",
    role: "Diretor de Marketing",
  },
  {
    text: "A solução superou todas as expectativas. A Juscia entendeu perfeitamente as particularidades do nosso escritório.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Dra. Camila Rocha",
    role: "Gerente Comercial",
  },
  {
    text: "Desde que implementamos a Juscia, nossa presença digital e taxa de fechamento aumentaram significativamente.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Dr. Lucas Martins",
    role: "Sócio Fundador",
  },
];

// ---------- Pricing plans ----------
export type PlanFeature = { icon: LucideIcon; text: string };

export type PlanRaw = {
  name: string;
  description: string;
  price: number;
  yearlyPrice: number;
  popular?: boolean;
  features: PlanFeature[];
  includesTitle: string;
  includes: string[];
};

export const plansRaw: PlanRaw[] = [
  {
    name: "Plano básico",
    description: "Perfeito para pequenas demandas!",
    price: 197,
    yearlyPrice: 157.6,
    features: [
      { icon: Brain, text: "100 atendimentos completos por IA" },
      { icon: Users, text: "3 atendentes" },
      { icon: Smartphone, text: "1 instância de WhatsApp" },
    ],
    includesTitle: "Recursos incluídos:",
    includes: [
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
    yearlyPrice: 317.6,
    popular: true,
    features: [
      { icon: Brain, text: "300 atendimentos completos por I.A /mês" },
      { icon: Users, text: "7 Atendentes" },
      { icon: Smartphone, text: "3 instâncias de WhatsApp" },
    ],
    includesTitle: "Tudo do Básico, mais:",
    includes: [
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
    yearlyPrice: 397.6,
    features: [
      { icon: Brain, text: "1000 atendimentos completos por I.A /mês" },
      { icon: Users, text: "100 Atendentes" },
      { icon: Smartphone, text: "7 instâncias de WhatsApp" },
    ],
    includesTitle: "Tudo do Intermediário, mais:",
    includes: [
      "Escuta e Transcreve áudios",
      "Resumo do Caso com I.A",
      "Follow-up Automático",
      "Chat Ao Vivo",
      "CRM Kanban Inteligente",
    ],
  },
];

export { CheckCheck as PlanIncludeIcon };

// ---------- FAQ ----------
export type FaqItem = { id: string; icon: LucideIcon; title: string; content: string };

export const faqRaw: FaqItem[] = [
  {
    id: "1",
    icon: Shield,
    title: "O que torna a Juscia única?",
    content:
      "A Juscia se destaca pelo seu design intuitivo, recursos avançados de automação com IA e integração perfeita com fluxos de trabalho jurídicos. Focamos em criar uma experiência que combina simplicidade com funcionalidades poderosas.",
  },
  {
    id: "2",
    icon: CreditCard,
    title: "Como funciona a estrutura de preços?",
    content:
      "Oferecemos planos flexíveis e transparentes, projetados para escalar conforme suas necessidades. Cada plano inclui um conjunto de recursos essenciais, com funcionalidades adicionais conforme você avança. Todos os planos começam com um período de teste gratuito.",
  },
  {
    id: "3",
    icon: Headphones,
    title: "Qual tipo de suporte vocês oferecem?",
    content:
      "Fornecemos suporte abrangente através de múltiplos canais. Isso inclui chat ao vivo, documentação detalhada, tutoriais em vídeo e gerentes de conta dedicados para clientes empresariais.",
  },
  {
    id: "4",
    icon: Lock,
    title: "A Juscia é segura para dados sensíveis?",
    content:
      "Sim! A segurança é nossa prioridade. Utilizamos criptografia de ponta a ponta, armazenamento em servidores seguros e seguimos todas as normas da LGPD para proteção de dados jurídicos.",
  },
  {
    id: "5",
    icon: Link2,
    title: "Posso integrar com outros sistemas?",
    content:
      "A Juscia oferece integrações com os principais sistemas utilizados por escritórios de advocacia, incluindo sistemas de gestão, calendários e ferramentas de comunicação.",
  },
];

// ---------- Metrics (Resultados) ----------
export type MetricDef = {
  title: string;
  period: string;
  value: string;
  color: string;
  icon: LucideIcon;
  data: number[];
  fmt: (v: number) => string;
};

export const metricDefs: MetricDef[] = [
  {
    title: "Atendimentos realizados",
    period: "Últimos 28 dias",
    value: "128.400",
    color: "hsl(220 100% 43%)",
    icon: MessageSquare,
    data: [2000, 4500, 2000, 5200, 1500, 6100, 3000, 6800, 2000, 1000, 4000, 2000, 3000, 2000, 6238],
    fmt: (v) => `${(v / 1000).toFixed(1).replace(".", ",")}k`,
  },
  {
    title: "Contratos fechados",
    period: "Últimos 28 dias",
    value: "6.238",
    color: "hsl(142 76% 36%)",
    icon: FileCheck2,
    data: [2000, 4500, 2000, 5200, 1500, 5100, 2500, 6800, 1800, 1000, 3000, 2000, 2700, 2000, 4238],
    fmt: (v) => `${(v / 1000).toFixed(1).replace(".", ",")}k`,
  },
  {
    title: "Aumento de contratos",
    period: "Últimos 28 dias",
    value: "+42%",
    color: "hsl(225 35% 15%)",
    icon: TrendingUp,
    data: [2000, 3500, 2000, 5200, 1200, 4100, 3500, 5800, 2000, 800, 3000, 1000, 4000, 2000, 4238],
    fmt: (v) => `+${Math.round(v / 101)}%`,
  },
];

// ---------- CTA final people avatars ----------
export const ctaPeople = [
  {
    name: "João Silva",
    designation: "Advogado Criminal",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Roberto Santos",
    designation: "Advogado Trabalhista",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60",
  },
  {
    name: "Maria Oliveira",
    designation: "Advogada Civil",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=60",
  },
  {
    name: "Ana Costa",
    designation: "Advogada Empresarial",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
  },
  {
    name: "Carlos Mendes",
    designation: "Advogado Tributário",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Fernanda Lima",
    designation: "Advogada de Família",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=200&q=80",
  },
];

// ---------- Footer ----------
export const footerPrimary = [
  { label: "Fazer uma simulação", href: defaultWhatsappUrl, icon: Phone },
  { label: "Entrar na plataforma", href: "https://juscia.io/auth/signin", icon: Lock },
];

export const footerSecondary = [
  { label: "Termos de Uso", href: "https://juscia.com.br/termos-de-uso" },
  { label: "Política de Privacidade", href: "https://juscia.com.br/politica-de-privacidade" },
  { label: "Planos", href: "#planos" },
  { label: "Suporte", href: "mailto:contato@juscia.io" },
];

export const footerSocial: { label: string; href: string; icon: IconComponent }[] = [
  { label: "Instagram", href: "https://www.instagram.com/juscia.io/", icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Juscia", icon: YoutubeIcon },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=554892254344", icon: Phone },
  { label: "Email", href: "mailto:contato@juscia.io", icon: Mail },
];

export const marqueeLabels = [
  "Atendimento 24/7",
  "Resumo do Caso com I.A",
  "Follow-up Automático",
  "CRM Kanban Inteligente",
  "Transcreve áudios",
  "Filtra curiosos",
];
