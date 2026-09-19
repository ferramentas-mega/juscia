import { menu, defaultWhatsappUrl } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-juscia-border bg-white/80 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-6">
          <a href="#inicio" className="flex items-center">
            <img src="/assets/logo-juscia.webp" alt="Juscia logo" className="block h-10 w-auto" />
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {menu.map((m) => (
              <a
                key={m.url}
                href={m.url}
                className="inline-flex h-10 items-center rounded-md px-4 text-sm font-medium text-[hsl(214_100%_18%)] transition-colors hover:text-juscia-primary-hover"
              >
                {m.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://juscia.io/auth/signin"
            target="_blank"
            rel="noopener"
            className="hidden h-10 items-center rounded-md px-4 text-sm font-medium text-[hsl(214_100%_18%)] transition-colors hover:text-juscia-primary-hover sm:inline-flex"
          >
            Login
          </a>
          <a
            href={defaultWhatsappUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex h-10 items-center rounded-md border border-transparent bg-juscia-whatsapp px-4 text-sm font-medium text-white transition-all hover:border-juscia-whatsapp hover:bg-white hover:text-juscia-whatsapp"
          >
            Fazer uma simulação
          </a>
        </div>
      </div>
    </header>
  );
}
