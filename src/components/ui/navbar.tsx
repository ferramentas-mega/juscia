"use client";

import { Menu, Search } from "lucide-react";
import logoJuscia from "@/assets/logo-juscia.webp";
import { trialWhatsappUrl } from "@/lib/whatsapp";
import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}
interface NavbarProps {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}
export default function Navbar({
  logo = {
    url: "#inicio",
    alt: "Juscia logo",
    title: "Juscia"
  },
  menu = [{
    title: "Início",
    url: "#inicio"
  }, {
    title: "Sobre",
    url: "#sobre"
  }, {
    title: "Como funciona",
    url: "#como-funciona"
  }, {
    title: "Vantagens",
    url: "#vantagens"
  }, {
    title: "Planos",
    url: "#planos"
  }],
  mobileExtraLinks = [],
  auth = {
    login: {
      text: "Login",
      url: "https://juscia.io/auth/signin"
    },
    signup: {
      text: "Fazer uma simulação",
      url: trialWhatsappUrl
    }
  }
}: NavbarProps) {
  const [openSearch, setOpenSearch] = React.useState(false);
  return <section className="py-4 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center">
              <img alt={logo.alt} className="h-10 my-0" src={logoJuscia} />
            </a>
            <div className="flex items-center">
              <NavigationMenu className="[&_[data-radix-navigation-menu-viewport]]:rounded-3xl">
                <NavigationMenuList className="rounded-3xl">
                  {menu.map(item => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button variant="ghost" size="icon" onClick={() => setOpenSearch(true)}>
              
            </Button>

            {/* Auth Buttons */}
            <Button asChild variant="ghost" className="text-nav-text hover:text-nav-text-hover hover:bg-transparent">
              <a href={auth.login.url} target="_blank" rel="noopener noreferrer">{auth.login.text}</a>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground border border-transparent hover:bg-white hover:border-accent hover:text-accent transition-colors">
              <a href={auth.signup.url} target="_blank" rel="noopener noreferrer">{auth.signup.text}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center">
              <img alt={logo.alt} className="h-10" src={logoJuscia} />
            </a>
            <div className="flex items-center gap-2">
              {/* Search button mobile */}
              <Button variant="ghost" size="icon" onClick={() => setOpenSearch(true)}>
                <Search className="size-4" />
              </Button>

              {/* Menu Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center">
                        <img src={logoJuscia} alt={logo.alt} className="h-10" />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                      {menu.map(item => renderMobileMenuItem(item))}
                    </Accordion>
                    {mobileExtraLinks.length > 0 && <div className="border-t border-border py-4">
                        <div className="grid grid-cols-2 justify-start">
                          {mobileExtraLinks.map((link, idx) => <a key={idx} className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground" href={link.url}>
                              {link.name}
                            </a>)}
                        </div>
                      </div>}
                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <a href={auth.login.url} target="_blank" rel="noopener noreferrer">{auth.login.text}</a>
                      </Button>
                      <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <a href={auth.signup.url} target="_blank" rel="noopener noreferrer">{auth.signup.text}</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
        <CommandInput placeholder="Buscar páginas, recursos..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup className="text-muted-foreground" heading="Sugestões">
            <CommandItem className="text-foreground">Início</CommandItem>
            <CommandItem className="text-foreground">Planos</CommandItem>
            <CommandItem className="text-foreground">Como funciona</CommandItem>
            <CommandItem className="text-foreground">Suporte</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </section>;
}
const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return <NavigationMenuItem key={item.title} className="text-muted-foreground !rounded-3xl">
        <NavigationMenuTrigger className="!rounded-3xl">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-3xl">
          <ul className="w-80 p-3">
            <NavigationMenuLink className="!rounded-3xl">
              {item.items.map(subItem => <li key={subItem.title}>
                  <a className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground" href={subItem.url}>
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>}
                    </div>
                  </a>
                </li>)}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>;
  }
  return <a key={item.title} href={item.url} className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-nav-text transition-colors hover:text-nav-text-hover bg-white/0">
      {item.title}
    </a>;
};
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map(subItem => <a key={subItem.title} className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground" href={subItem.url}>
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>}
              </div>
            </a>)}
        </AccordionContent>
      </AccordionItem>;
  }
  return <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>;
};