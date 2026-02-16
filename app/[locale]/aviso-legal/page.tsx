import type { Metadata } from "next";
import { getDictionary } from "../../_lib/dictionaries";
import { LEGAL } from "../../_lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.legal.title, description: dict.legal.description };
}

export default async function AvisoLegal({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-10 text-3xl font-bold tracking-tight">
        {dict.legal.title}
      </h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.legal.identificationHeading}
          </h2>
          <p>{dict.legal.identificationIntro}</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li><strong>{dict.legal.holder}:</strong> {LEGAL.titular}</li>
            <li><strong>{dict.legal.nie}:</strong> {LEGAL.nie}</li>
            <li><strong>{dict.legal.address}:</strong> {LEGAL.domicilio}</li>
            <li><strong>{dict.legal.emailLabel}:</strong> {LEGAL.email}</li>
            <li><strong>{dict.legal.activity}:</strong> {LEGAL.actividad}</li>
            <li><strong>{dict.legal.iae}:</strong> {LEGAL.epigrafeIAE}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.legal.objectHeading}
          </h2>
          <p>{dict.legal.objectText}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.legal.contractingHeading}
          </h2>
          <ul className="list-inside list-disc space-y-2">
            {dict.legal.contractingItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.legal.ipHeading}
          </h2>
          <p>{dict.legal.ipText}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.legal.liabilityHeading}
          </h2>
          <p>{dict.legal.liabilityText}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.legal.jurisdictionHeading}
          </h2>
          <p>{dict.legal.jurisdictionText}</p>
        </section>
      </div>
    </article>
  );
}
