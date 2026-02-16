import type { Dictionary } from "../_lib/dictionaries";

interface AboutProps {
  dict: Dictionary;
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="sobre-mi" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          {dict.about.heading}
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          <p>{dict.about.p1}</p>
          <p>{dict.about.p2}</p>
          <p>{dict.about.p3}</p>
        </div>
      </div>
    </section>
  );
}
