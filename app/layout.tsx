import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Metin Aslan | Consultor de Automatización Digital para PYMES",
    template: "%s | Metin Aslan",
  },
  description:
    "Consultor de automatización digital para PYMES en Barcelona. Automatizo procesos administrativos con IA y No-Code. Ahorra 10-15 horas semanales.",
  metadataBase: new URL("https://metinaslan.com"),
  openGraph: {
    title: "Metin Aslan | Consultor de Automatización Digital para PYMES",
    description:
      "Automatizo procesos administrativos de tu negocio con IA y herramientas No-Code. Vallès Occidental, Barcelona.",
    url: "https://metinaslan.com",
    siteName: "Metin Aslan",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://metinaslan.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
