import type { Dictionary } from "../_lib/dictionaries";

interface FooterProps {
  dict: Dictionary;
  locale: string;
}

export default function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Metin Aslan. {dict.footer.rights}
        </p>
        <nav className="flex gap-6">
          <a
            href={`/${locale}/aviso-legal`}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {dict.footer.legal}
          </a>
          <a
            href={`/${locale}/politica-privacidad`}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {dict.footer.privacy}
          </a>
          <a
            href={`/${locale}/politica-cookies`}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {dict.footer.cookies}
          </a>
        </nav>
      </div>
    </footer>
  );
}
