"use client";

import { useState } from "react";
import type { Dictionary } from "../_lib/dictionaries";

interface HeaderProps {
  dict: Dictionary;
  locale: string;
}

export default function Header({ dict, locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLocale = locale === "es" ? "en" : "es";

  const navLinks = [
    { label: dict.nav.services, href: `/${locale}#servicios` },
    { label: dict.nav.process, href: `/${locale}#proceso` },
    { label: dict.nav.showcases, href: `/${locale}#casos` },
    { label: dict.nav.pricing, href: `/${locale}#tarifas` },
    { label: dict.nav.contact, href: `/${locale}#contacto` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href={`/${locale}`} className="text-lg font-bold tracking-tight">
          Metin Aslan
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`/${otherLocale}`}
            className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background transition-opacity hover:opacity-80"
          >
            {otherLocale === "es" ? "ES" : "EN"}
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`/${otherLocale}`}
                className="mt-2 inline-block rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-background transition-opacity hover:opacity-80"
              >
                {otherLocale === "es" ? "Español" : "English"}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
