import { Geist, Geist_Mono } from "next/font/google";
import { getDictionary } from "../_lib/dictionaries";
import { locales } from "../_lib/dictionaries";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header dict={dict} locale={locale} />
        <main>{children}</main>
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
