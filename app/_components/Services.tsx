import type { Dictionary } from "../_lib/dictionaries";
import ServiceCard from "./ServiceCard";

const ICONS = ["search", "workflow", "code", "lightbulb"];

interface ServicesProps {
  dict: Dictionary;
}

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="servicios" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.services.heading}
        </h2>
        <p className="mb-4 max-w-2xl text-lg text-muted">
          {dict.services.subtitle}
        </p>
        <p className="mb-12 max-w-2xl text-sm italic text-muted">
          {dict.services.targetNote}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {dict.services.items.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={ICONS[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
