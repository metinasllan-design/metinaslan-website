import type { Dictionary } from "../_lib/dictionaries";
import PricingCard from "./PricingCard";

interface PricingProps {
  dict: Dictionary;
  locale: string;
}

export default function Pricing({ dict, locale }: PricingProps) {
  return (
    <section id="tarifas" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.pricing.heading}
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-muted">
          {dict.pricing.subtitle}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {dict.pricing.items.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              unit={plan.unit}
              prefix={dict.pricing.from}
              description={plan.description}
              features={[...plan.features]}
              highlighted={"highlighted" in plan && plan.highlighted === true}
              cta={dict.pricing.cta}
              locale={locale}
            />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          {dict.pricing.vat}
        </p>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold">
            {dict.pricing.comparisonHeading}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {dict.pricing.comparison.headers.map((h, i) => (
                    <th
                      key={h || "empty"}
                      className={`px-4 py-3 text-left font-medium text-muted ${
                        i === 1 ? "bg-primary/5" : ""
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dict.pricing.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="px-4 py-3 font-medium">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td
                        key={val}
                        className={`px-4 py-3 ${
                          i === 0
                            ? "bg-primary/5 font-semibold text-primary"
                            : "text-muted"
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
