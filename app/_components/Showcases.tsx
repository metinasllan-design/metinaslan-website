import type { Dictionary } from "../_lib/dictionaries";

interface ShowcasesProps {
  dict: Dictionary;
}

export default function Showcases({ dict }: ShowcasesProps) {
  return (
    <section id="casos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.showcases.heading}
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-muted">
          {dict.showcases.subtitle}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.showcases.items.map((item) => (
            <div
              key={item.sector}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                {item.sector}
              </p>
              <p className="mb-3 text-sm text-muted">
                <span className="font-medium text-foreground">
                  {dict.showcases.challengeLabel}:{" "}
                </span>
                {item.challenge}
              </p>
              <p className="text-sm leading-relaxed">
                <span className="font-medium text-foreground">
                  {dict.showcases.solutionLabel}:{" "}
                </span>
                {item.solution}
              </p>
              <div className="mt-auto border-t border-border pt-4 mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {dict.showcases.resultLabel}
                </p>
                <p className="text-2xl font-bold text-primary">
                  {item.metric}
                </p>
                <p className="text-xs text-muted">{item.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
