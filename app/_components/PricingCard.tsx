interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
  prefix: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  locale: string;
}

export default function PricingCard({
  title,
  price,
  unit,
  prefix,
  description,
  features,
  highlighted,
  cta,
  locale,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border p-6 ${
        highlighted
          ? "border-primary bg-primary/5 shadow-md"
          : "border-border bg-card"
      }`}
    >
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted">{description}</p>
      <div className="mb-6">
        <span className="text-sm text-muted">{prefix} </span>
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-sm text-muted"> {unit}</span>
      </div>
      <ul className="mb-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`/${locale}#contacto`}
        className={`inline-flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
          highlighted
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "border border-border hover:bg-card"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
