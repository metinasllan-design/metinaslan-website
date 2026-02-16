import { getDictionary } from "../_lib/dictionaries";
import { SITE_CONFIG } from "../_lib/constants";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Differentiators from "../_components/Differentiators";
import Market from "../_components/Market";
import Services from "../_components/Services";
import Process from "../_components/Process";
import Showcases from "../_components/Showcases";
import Pricing from "../_components/Pricing";
import FAQ from "../_components/FAQ";
import Resources from "../_components/Resources";
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
      <Differentiators dict={dict} />
      <Market dict={dict} />
      <Services dict={dict} />
      <Process dict={dict} />
      <Showcases dict={dict} />
      <Pricing dict={dict} locale={locale} />
      <FAQ dict={dict} />
      <Resources dict={dict} />
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
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 41.5328,
                longitude: 2.1839,
              },
              geoRadius: "50000",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "C/ Estruc, 9",
              addressLocality: "Barcelona",
              addressRegion: "Barcelona",
              postalCode: "08002",
              addressCountry: "ES",
            },
            founder: {
              "@type": "Person",
              name: "Metin Aslan",
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Koç University",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "ESEI / UCAM",
                },
              ],
              knowsAbout: [
                "Process Automation",
                "No-Code Development",
                "AI Integration",
                "Financial Auditing",
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: dict.faq.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
