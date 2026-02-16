import type { Metadata } from "next";
import { getDictionary } from "../../_lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.cookies.title, description: dict.cookies.description };
}

export default async function PoliticaCookies({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-10 text-3xl font-bold tracking-tight">
        {dict.cookies.title}
      </h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.cookies.whatHeading}
          </h2>
          <p>{dict.cookies.whatText}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.cookies.usedHeading}
          </h2>
          <p>{dict.cookies.usedText}</p>
          <p className="mt-2">{dict.cookies.usedText2}</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.cookies.manageHeading}
          </h2>
          <p>{dict.cookies.manageText}</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            {dict.cookies.manageItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {dict.cookies.updateHeading}
          </h2>
          <p>{dict.cookies.updateText}</p>
        </section>

        <p className="pt-4 text-xs">{dict.cookies.lastUpdated}</p>
      </div>
    </article>
  );
}
