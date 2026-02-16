import type { Dictionary } from "../_lib/dictionaries";

interface FAQProps {
  dict: Dictionary;
}

export default function FAQ({ dict }: FAQProps) {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          {dict.faq.heading}
        </h2>
        <p className="mb-12 text-lg text-muted">{dict.faq.subtitle}</p>
        <div className="divide-y divide-border">
          {dict.faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer items-center justify-between py-5 text-left text-base font-medium transition-colors hover:text-primary">
                {item.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-4 shrink-0 text-muted transition-transform group-open:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
