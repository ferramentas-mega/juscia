import type { SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

function OABIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
      <text x="50" y="58" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">OAB</text>
    </svg>
  );
}

function BalanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 3V21M12 3L3 8L5 14H3C3 16.2091 4.79086 18 7 18C9.20914 18 11 16.2091 11 14H9L11 8M12 3L21 8L19 14H21C21 16.2091 19.2091 18 17 18C14.7909 18 13 16.2091 13 14H15L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GavelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14.5 5.5L18.5 9.5M5 19L9.5 14.5M10.5 6.5L17.5 13.5L19.5 11.5L12.5 4.5L10.5 6.5ZM3 21H10V20C10 18.8954 9.10457 18 8 18H5C3.89543 18 3 18.8954 3 20V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 21H21M6 21V7L12 3L18 7V21M9 21V15H15V21M9 10H9.01M15 10H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const allLogos = [
  { name: "OAB", id: 1, img: OABIcon },
  { name: "Balança", id: 2, img: BalanceIcon },
  { name: "Martelo", id: 3, img: GavelIcon },
  { name: "Documento", id: 4, img: DocumentIcon },
  { name: "Escudo", id: 5, img: ShieldIcon },
  { name: "Escritório", id: 6, img: BuildingIcon },
  { name: "Clientes", id: 7, img: PeopleIcon },
  { name: "Tempo", id: 8, img: ClockIcon },
];

export function LogoCarouselSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8 px-4">
        <div className="text-center">
          <GradientHeading variant="secondary" size="sm">
            Escritórios de advocacia de todo o Brasil confiam na Juscia
          </GradientHeading>
          <GradientHeading variant="blue" size="xl">
            +1000 advogados já automatizam o atendimento
          </GradientHeading>
        </div>

        <LogoCarousel columnCount={4} logos={allLogos} />
      </div>
    </section>
  );
}

export default LogoCarouselSection;
