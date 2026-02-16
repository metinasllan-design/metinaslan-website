import Image from "next/image";
import type { Dictionary } from "../_lib/dictionaries";

interface HeroProps {
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/profile.jpg"
            alt={dict.hero.name}
            width={150}
            height={150}
            className="h-[150px] w-[150px] rounded-full border-4 border-border object-cover"
            priority
          />
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {dict.hero.name}
        </h1>
        <p className="mb-4 text-xl font-medium text-muted sm:text-2xl">
          {dict.hero.title}
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg text-muted">
          {dict.hero.tagline}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#servicios"
            className="inline-flex h-12 items-center rounded-full bg-primary px-8 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {dict.hero.cta}
          </a>
          <a
            href="#contacto"
            className="inline-flex h-12 items-center rounded-full border border-border px-8 font-medium transition-colors hover:bg-card"
          >
            {dict.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
