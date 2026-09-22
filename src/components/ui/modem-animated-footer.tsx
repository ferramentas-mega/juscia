import React from "react";
import { Link } from "react-router-dom";
import { NotepadTextDashed } from "lucide-react";
import { cn } from "@/lib/utils";
import logoJuscia from "@/assets/logo-juscia.webp";
import logoIcon from "@/assets/logo-icon.webp";
interface FooterLink {
  label: string;
  href: string;
}
interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}
interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}
export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className
}: FooterProps) => {
  const isExternalLink = (href: string) => href.startsWith("http") || href.startsWith("mailto:");
  const renderLink = (href: string, children: React.ReactNode, className?: string, target?: string) => {
    if (isExternalLink(href)) {
      return <a href={href} className={className} target={target || "_blank"} rel="noopener noreferrer">
          {children}
        </a>;
    }
    return <Link to={href} className={className}>
        {children}
      </Link>;
  };
  return <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t mt-20 relative bg-white">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <img alt={brandName} className="h-10 sm:h-12 w-auto" src={logoJuscia} />
                </div>
                <p className="text-muted-foreground font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && <div className="flex mb-8 mt-3 gap-4">
                  {socialLinks.map((link, index) => <a key={index} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                      <div className="w-6 h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>)}
                </div>}

              {navLinks.length > 0 && <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground max-w-full px-4">
                  {navLinks.map((link, index) => <React.Fragment key={index}>
                      {renderLink(link.href, link.label, "hover:text-foreground duration-300 hover:font-semibold")}
                    </React.Fragment>)}
                </div>}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row px-4 md:px-0 md:flex md:items-center md:justify-between">
            <p className="text-base text-muted-foreground text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. Todos os direitos reservados.
            </p>
            {creatorName && creatorUrl && <nav className="flex gap-4">
                <a href={creatorUrl} target="_blank" rel="noopener noreferrer" className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:font-medium">
                  Crafted by {creatorName}
                </a>
              </nav>}
          </div>
        </div>

        {/* Large background text */}
        <div className="leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4" style={{
        fontSize: 'clamp(3rem, 12vw, 10rem)',
        maxWidth: '95vw',
        color: '#E9F2FF'
      }}>
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo */}
        <div className="absolute hover:border-foreground duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 border-border flex items-center justify-center p-3 -translate-x-1/2 z-10">
          <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-2xl flex items-center justify-center overflow-hidden">
            <img src={logoIcon} alt="Juscia" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-28 w-full h-24"></div>
      </footer>
    </section>;
};