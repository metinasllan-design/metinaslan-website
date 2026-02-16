import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://metinaslan.com";
  const locales = ["es", "en"];
  const pages = ["", "/aviso-legal", "/politica-privacidad", "/politica-cookies"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("monthly" as const) : ("yearly" as const),
      priority: page === "" ? 1 : 0.3,
    }))
  );
}
