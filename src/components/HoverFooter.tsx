"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageSquare } from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";
function HoverFooter() {
  const footerLinks = [{
    title: "Termos de uso & Política de Privacidade",
    links: [{
      label: "Funcionalidades",
      href: "#"
    }, {
      label: "Integrações",
      href: "#"
    }, {
      label: "Preços",
      href: "#"
    }, {
      label: "FAQ",
      href: "#"
    }]
  }, {
    title: "Nossas Redes Sociais",
    links: [{
      label: "Sobre",
      href: "#"
    }, {
      label: "Blog",
      href: "#"
    }, {
      label: "Carreiras",
      href: "#"
    }, {
      label: "Contato",
      href: "#"
    }]
  }, {
    title: "Nossos contatos",
    links: [{
      label: "Privacidade",
      href: "#"
    }, {
      label: "Termos de Uso",
      href: "#"
    }, {
      label: "LGPD",
      href: "#"
    }, {
      label: "Cookies",
      href: "#"
    }]
  }];
  const contactInfo = [{
    icon: <Mail size={18} className="text-primary" />,
    text: "contato@megaia.com.br",
    href: "mailto:contato@megaia.com.br"
  }, {
    icon: <Phone size={18} className="text-primary" />,
    text: "+55 (11) 9999-9999",
    href: "tel:+5511999999999"
  }, {
    icon: <MapPin size={18} className="text-primary" />,
    text: "São Paulo, Brasil"
  }];
  const socialLinks = [{
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "#"
  }, {
    icon: <Instagram size={20} />,
    label: "Instagram",
    href: "#"
  }];
  return <footer className="bg-secondary/50 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative bg-[#0370ff]/[0.26]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 lg:col-span-2 mr-[88px]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">Mega IA</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">Copyright© 2025 Juscia, All rights reserved. </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map(section => <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => <li key={link.label} className="relative">
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <hr className="border-t border-border my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Contact info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {contactInfo.map((item, i) => <div key={i} className="flex items-center space-x-2">
                {item.icon}
                {item.href ? <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.text}
                  </a> : <span className="text-muted-foreground">{item.text}</span>}
              </div>)}
          </div>

          {/* Social icons */}
          <div className="flex space-x-6 text-muted-foreground">
            {socialLinks.map(({
            icon,
            label,
            href
          }) => <a key={label} href={href} aria-label={label} className="hover:text-primary transition-colors">
                {icon}
              </a>)}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} Mega IA. Todos os direitos reservados.
        </p>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="MEGA IA" className="z-50 bg-black/0" />
      </div>

      <FooterBackgroundGradient />
    </footer>;
}
export default HoverFooter;