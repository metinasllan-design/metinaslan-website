import type { Dictionary } from "../_lib/dictionaries";

interface ResourcesProps {
  dict: Dictionary;
}

export default function Resources({ dict }: ResourcesProps) {
  return (
    <section id="recursos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.resources.heading}
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-muted">
          {dict.resources.subtitle}
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {dict.resources.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {item.tag}
              </span>
              <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs text-muted">
                {dict.resources.comingSoon}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
