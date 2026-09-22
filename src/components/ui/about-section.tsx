"use client";

import React from "react";
const aboutItems = [{
  icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
  title: "Atendimento Instantâneo",
  description: "IA que responde em segundos — sem filas de espera para seus clientes."
}, {
  icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
  title: "Interface Intuitiva",
  description: "Design moderno e fácil de usar para advogados de qualquer nível técnico."
}, {
  icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
  title: "Integração Simples",
  description: "Conecte ao seu site ou WhatsApp em minutos, sem conhecimento técnico."
}, {
  icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png",
  title: "Base de Conhecimento",
  description: "Treine a IA com suas áreas de atuação e casos de sucesso."
}, {
  icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png",
  title: "Totalmente Personalizável",
  description: "Adapte cores, tom de voz e respostas à identidade do seu escritório."
}, {
  icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png",
  title: "IA Jurídica Especializada",
  description: "Treinada com conhecimento jurídico brasileiro para respostas precisas."
}];
export function AboutSection() {
  return <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-foreground">
          Por que escolher a Juscia?
        </h2>
        <p className="text-sm text-muted-foreground text-center mt-2 max-w-lg mx-auto">
          Uma plataforma completa para transformar o atendimento jurídico do seu escritório com inteligência artificial.
        </p>
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 pt-16">
          <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#257DFF]/20"></div>
          {aboutItems.map((item, index) => <div key={index}>
              <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
                <img src={item.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
export function AboutHero() {
  return <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative shadow-2xl shadow-primary/40 rounded-2xl overflow-hidden shrink-0">
            <img className="max-w-md w-full object-cover rounded-2xl" alt="Escritório de advocacia" src="/lovable-uploads/f97aae45-8cc2-4144-856e-985721aa8b1a.png" />
            <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-background p-4 rounded-xl">
              <div className="flex -space-x-4 shrink-0">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Advogado" className="size-9 rounded-full border-[3px] border-background hover:-translate-y-1 transition z-[1]" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="Advogado" className="size-9 rounded-full border-[3px] border-background hover:-translate-y-1 transition z-[2]" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="Advogada" className="size-9 rounded-full border-[3px] border-background hover:-translate-y-1 transition z-[3]" />
                <div className="flex items-center justify-center text-xs text-primary-foreground h-9 px-2 min-w-9 rounded-full border-[3px] border-background bg-[#257DFF] hover:-translate-y-1 transition z-[4]">1000+</div>
              </div>
              <p className="text-sm font-medium text-foreground">Junte-se à comunidade Juscia</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground max-w-lg">
            <h2 className="uppercase text-primary text-3xl font-bold">QUEM DESENVOLVEU?</h2>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary/30"></div>
            <p className="mt-8 text-lg font-bold text-foreground">De Advogado para Advogado!</p>
            <p className="mt-4">
              Olá! Eu sou Gustavo Barbosa, e desenvolvemos uma IA especializada para atendimentos no
              setor jurídico. Com uma vasta experiência no setor jurídico e um histórico comprovado
              de sucesso, estamos focados em ajudar advogados a escalarem seus escritórios de forma
              correta e organizada. Sabemos exatamente como apoiar advogados a alcançarem novos
              patamares em seus negócios.
            </p>
            <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#257DFF] to-[#257DFF]/80 py-3 px-8 rounded-full text-white">
              <span>Saiba mais</span>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>;
}