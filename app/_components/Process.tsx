import type { Dictionary } from "../_lib/dictionaries";

interface ProcessProps {
  dict: Dictionary;
}

export default function Process({ dict }: ProcessProps) {
  return (
    <section id="proceso" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.process.heading}
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-muted">
          {dict.process.subtitle}
        </p>
        <div className="space-y-8">
          {dict.process.phases.map((phase) => (
            <div
              key={phase.number}
              className="flex gap-6 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                {phase.number}
              </span>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
