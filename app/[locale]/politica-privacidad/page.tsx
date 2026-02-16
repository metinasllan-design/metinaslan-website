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
  return { title: dict.privacy.title, description: dict.privacy.description };
}

export default async function PoliticaPrivacidad({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-10 text-3xl font-bold tracking-tight">
        {dict.privacy.title}
      </h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.controllerHeading}
          </h2>
          <ul className="list-inside list-disc space-y-1">
            <li><strong>{dict.privacy.controller}:</strong> {LEGAL.titular}</li>
            <li><strong>{dict.legal.nie}:</strong> {LEGAL.nie}</li>
            <li><strong>{dict.legal.address}:</strong> {LEGAL.domicilio}</li>
            <li><strong>{dict.legal.emailLabel}:</strong> {LEGAL.email}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.dataHeading}
          </h2>
          <p>{dict.privacy.dataIntro}</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            {dict.privacy.dataItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.purposeHeading}
          </h2>
          <ul className="list-inside list-disc space-y-1">
            {dict.privacy.purposeItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.basisHeading}
          </h2>
          <ul className="list-inside list-disc space-y-1">
            {dict.privacy.basisItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.retentionHeading}
          </h2>
          <p>{dict.privacy.retentionText}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.recipientsHeading}
          </h2>
          <p>{dict.privacy.recipientsText}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.rightsHeading}
          </h2>
          <p>{dict.privacy.rightsIntro}</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            {dict.privacy.rightsItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-3">
            {dict.privacy.rightsContact}{" "}
            <a
              href={`mailto:${LEGAL.email}`}
              className="text-primary hover:underline"
            >
              {LEGAL.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.privacy.securityHeading}
          </h2>
          <p>{dict.privacy.securityText}</p>
        </section>

        <p className="pt-4 text-xs">{dict.privacy.lastUpdated}</p>
      </div>
    </article>
  );
}
