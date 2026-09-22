export const WHATSAPP_NUMBER = "554892254344";

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export const trialWhatsappUrl = whatsappUrl(
  "Olá! Quero começar meu teste gratuito de 7 dias na Juscia.",
);

export const supportWhatsappUrl = whatsappUrl(
  "Olá! Estou com problemas e queria saber quais são os meus direitos, pode me ajudar?",
);
