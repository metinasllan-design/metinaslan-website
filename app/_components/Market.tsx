import type { Dictionary } from "../_lib/dictionaries";

interface MarketProps {
  dict: Dictionary;
}

export default function Market({ dict }: MarketProps) {
  return (
    <section id="mercado" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.market.heading}
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-muted">
          {dict.market.subtitle}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.market.stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold">{stat.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          {dict.market.footer}
        </p>
      </div>
    </section>
  );
}
