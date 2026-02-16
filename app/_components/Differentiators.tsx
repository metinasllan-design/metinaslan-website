import type { Dictionary } from "../_lib/dictionaries";

interface DifferentiatorsProps {
  dict: Dictionary;
}

export default function Differentiators({ dict }: DifferentiatorsProps) {
  return (
    <section id="diferenciadores" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.differentiators.heading}
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-muted">
          {dict.differentiators.subtitle}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {dict.differentiators.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">
                  {item.stat}
                </span>
                <span className="ml-2 text-sm text-muted">
                  {item.statLabel}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
