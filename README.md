# Juscia — Landing Page

Landing page de conversão da Juscia, plataforma de IA que atende, qualifica e
resume casos de clientes de escritórios de advocacia diretamente no WhatsApp.

Portado a partir do handoff de design (`Juscia Site.dc.html`) para um app de
produção com **React + TypeScript + Vite + Tailwind CSS v4**, seguindo os
tokens de design, a copy e os comportamentos especificados no handoff.

## Stack

- React 19 + TypeScript
- Vite 8 (com `@tailwindcss/vite`)
- Tailwind CSS v4 (tokens de design em `src/index.css` via `@theme`)
- [lucide-react](https://lucide.dev/) para ícones

## Estrutura

```
src/
  components/       # As 17 seções da landing page + modal de cadastro
    ui/             # Primitivos (Badge, Sparkline)
  hooks/            # Efeitos de scroll/parallax/reveal replicados do protótipo
  lib/
    content.ts      # Toda a copy e os dados (planos, FAQ, depoimentos, etc.)
    utils.ts        # Helper `cn` (clsx + tailwind-merge)
public/
  assets/           # Imagens do handoff (logo, dashboard, about)
  videos/           # Vídeos .webm do handoff
```

## Rodando localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção
```

## Notas

- `assets/mega-logo.png` foi preservado no pacote de design mas **não é usado**
  no site (marca legada, conforme o handoff).
- Todos os CTAs apontam para o WhatsApp
  (`https://api.whatsapp.com/send?phone=554892254344`) ou âncoras internas.
- SEO (title, meta tags, Open Graph, Twitter Card e JSON-LD com
  Organization/SoftwareApplication/FAQPage) está em `index.html`.
