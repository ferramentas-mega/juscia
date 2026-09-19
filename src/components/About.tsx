export function About() {
  return (
    <section id="sobre" className="scroll-mt-[100px] bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="relative flex-shrink-0 overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_hsl(220_100%_43%_/_0.4)]">
            <img
              src="/assets/about.webp"
              alt="Escritório de advocacia"
              className="block w-full max-w-md object-cover"
            />
            <div className="absolute bottom-8 left-8 flex max-w-[18rem] items-center gap-1 rounded-xl bg-white p-4">
              <div className="flex flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="Advogado"
                  className="z-[1] h-9 w-9 rounded-full border-[3px] border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="Advogado"
                  className="z-[2] -ml-4 h-9 w-9 rounded-full border-[3px] border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Advogada"
                  className="z-[3] -ml-4 h-9 w-9 rounded-full border-[3px] border-white object-cover"
                />
                <div className="z-[4] -ml-4 flex h-9 min-w-9 items-center justify-center rounded-full border-[3px] border-white bg-[#257DFF] px-2 text-xs text-white">
                  1000+
                </div>
              </div>
              <p className="text-sm font-medium text-juscia-ink">Junte-se à comunidade Juscia</p>
            </div>
          </div>
          <div className="max-w-lg text-sm text-juscia-muted">
            <h2 className="text-[30px] font-bold uppercase text-juscia-primary">QUEM DESENVOLVEU?</h2>
            <div className="h-[3px] w-24 rounded-full bg-gradient-to-r from-juscia-primary to-juscia-primary/30" />
            <p className="mt-8 text-lg font-bold text-juscia-ink">De Advogado para Advogado!</p>
            <p className="mt-4 leading-[1.7]">
              Olá! Eu sou Gustavo Barbosa, e desenvolvemos uma IA especializada para atendimentos no
              setor jurídico. Com uma vasta experiência no setor jurídico e um histórico comprovado
              de sucesso, estamos focados em ajudar advogados a escalarem seus escritórios de forma
              correta e organizada. Sabemos exatamente como apoiar advogados a alcançarem novos
              patamares em seus negócios.
            </p>
            <button className="mt-8 flex items-center gap-2 rounded-full border-none bg-gradient-to-r from-[#257DFF] to-[#257DFF]/80 px-8 py-3 font-sans text-sm text-white transition-transform hover:-translate-y-0.5">
              <span>Saiba mais</span>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
