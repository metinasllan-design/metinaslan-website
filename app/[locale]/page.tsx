import { getDictionary } from "../_lib/dictionaries";
import { SITE_CONFIG } from "../_lib/constants";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Services from "../_components/Services";
import Pricing from "../_components/Pricing";
import Contact from "../_components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <Services dict={dict} />
      <Pricing dict={dict} locale={locale} />
      <Contact dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Metin Aslan - Servicios de Automatización Digital para PYMES",
            url: SITE_CONFIG.url,
            description:
              "Consultoría de automatización de procesos y transformación digital para PYMES. Automatización con IA y No-Code en Vallès Occidental, Barcelona.",
            priceRange: "€€",
            areaServed: "ES",
          }),
        }}
      />
    </>
  );
}
