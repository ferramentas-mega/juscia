import { useEffect, useState } from "react";
import { ArrowRight, Check, CircleCheck, X } from "lucide-react";
import { whatsappUrl } from "@/lib/content";

const benefits = [
  "Sem cartão de crédito",
  "Ativação em minutos com QR Code",
  "Atendimento 24/7 no seu WhatsApp",
  "Cancele quando quiser",
];

const avatars = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
];

type Props = { open: boolean; onClose: () => void };

export function SignupModal({ open, onClose }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whats, setWhats] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const firstName = nome.trim().split(/\s+/)[0] || "";
  const waLink = whatsappUrl(
    `Olá! Quero começar meu teste gratuito de 7 dias na Juscia.${nome ? `\nNome: ${nome}` : ""}${email ? `\nE-mail: ${email}` : ""}${whats ? `\nWhatsApp: ${whats}` : ""}`,
  );

  const submit = () => {
    const cleanWhats = whats.replace(/\D/g, "");
    if (nome.trim().length < 2) return setError("Digite seu nome completo.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError("Digite um e-mail válido.");
    if (cleanWhats.length < 10) return setError("Digite um WhatsApp válido com DDD.");
    setError("");
    setSent(true);
    try {
      window.open(waLink, "_blank", "noopener");
    } catch {
      /* ignore popup blockers */
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(8,20,45,.55)] p-6 backdrop-blur-sm"
      style={{ animation: "jsFadeIn .25s ease both" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-[900px] grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-[0_40px_90px_-30px_rgba(0,30,90,.55)] md:grid-cols-2"
        style={{ animation: "jsModalIn .4s cubic-bezier(.16,1,.3,1) both" }}
      >
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-juscia-primary to-[hsl(220_100%_26%)] p-10 text-white">
          <div
            className="pointer-events-none absolute -right-[30%] -top-[20%] h-4/5 w-4/5 rounded-full blur-[30px]"
            style={{ background: "radial-gradient(circle,rgba(255,255,255,.22),transparent 70%)" }}
          />
          <div className="relative">
            <div className="inline-flex rounded-xl bg-white px-4 py-2.5">
              <img src="/assets/logo-juscia.webp" alt="Juscia" className="block h-7 w-auto" />
            </div>
            <h3 className="mt-7 text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[30px]">
              Teste a Juscia por 7 dias, sem compromisso
            </h3>
            <div className="mt-7 flex flex-col gap-3.5">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-white/18">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-white/92">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 flex items-center gap-3 border-t border-white/20 pt-6">
            <div className="flex">
              {avatars.map((a, i) => (
                <img
                  key={a}
                  src={a}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  style={{ marginLeft: i ? -10 : 0 }}
                />
              ))}
            </div>
            <span className="text-[13px] font-medium text-white/85">+1000 advogados já utilizam</span>
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-10">
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-juscia-border bg-white text-juscia-muted transition-all hover:bg-juscia-surface hover:text-juscia-ink"
          >
            <X size={18} />
          </button>

          {sent ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(142_76%_36%_/_0.12)] text-[hsl(142_76%_32%)]">
                <CircleCheck size={30} />
              </span>
              <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-juscia-ink">
                Tudo certo, {firstName}!
              </h3>
              <p className="text-[15px] leading-relaxed text-juscia-muted">
                Abrimos o WhatsApp para você falar com a nossa equipe e liberar o teste de 7 dias.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-juscia-whatsapp px-6.5 py-3.5 font-bold text-white transition-colors hover:bg-juscia-whatsapp-hover"
              >
                Abrir o WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-juscia-ink">
                Falta pouco!
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-juscia-muted">
                Preencha seus dados e comece agora seu teste gratuito de 7 dias.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-juscia-ink">Nome</span>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="w-full rounded-xl border border-[hsl(214_20%_88%)] bg-[hsl(214_25%_98%)] px-4 py-3 text-[15px] text-juscia-ink outline-none transition-all focus:border-juscia-primary focus:shadow-[0_0_0_3px_hsl(220_100%_43%_/_0.15)]"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-juscia-ink">E-mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@escritorio.com.br"
                    className="w-full rounded-xl border border-[hsl(214_20%_88%)] bg-[hsl(214_25%_98%)] px-4 py-3 text-[15px] text-juscia-ink outline-none transition-all focus:border-juscia-primary focus:shadow-[0_0_0_3px_hsl(220_100%_43%_/_0.15)]"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-juscia-ink">WhatsApp</span>
                  <input
                    type="tel"
                    value={whats}
                    onChange={(e) => setWhats(e.target.value)}
                    placeholder="(48) 9 9999-9999"
                    className="w-full rounded-xl border border-[hsl(214_20%_88%)] bg-[hsl(214_25%_98%)] px-4 py-3 text-[15px] text-juscia-ink outline-none transition-all focus:border-juscia-primary focus:shadow-[0_0_0_3px_hsl(220_100%_43%_/_0.15)]"
                  />
                </label>
              </div>
              {error && <p className="mt-3 text-[13px] font-semibold text-[hsl(0_72%_48%)]">{error}</p>}
              <button
                onClick={submit}
                className="mt-6 w-full rounded-xl bg-juscia-primary py-3.5 text-base font-bold text-white shadow-[0_12px_26px_-12px_hsl(220_100%_43%)] transition-colors hover:bg-[hsl(220_100%_38%)]"
              >
                Teste por 7 dias Grátis
              </button>
              <p className="mt-3.5 text-center text-xs text-[hsl(214_10%_55%)]">
                7 dias grátis, só será cobrado após essa semana de uso.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
