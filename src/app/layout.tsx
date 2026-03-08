import "./globals.css";
import { Navbar } from "@components/_common/navbar/Navbar";
import { Footer } from "@components/_common/footer/Footer";
import CookieBanner from "@components/_common/cookies/CookieBanner";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: "Autoescuela Rayán | Autoescuela en Alcorcón, Madrid",
    template: "%s | Autoescuela Rayán",
  },
  description:
    "Autoescuela en Alcorcón, Madrid. Obtén tu carnet de conducir con vehículos modernos, profesores expertos y un método personalizado. Permisos B, AM, A1, A2 y A. Tu autoescuela de confianza en Alcorcón.",
  keywords: [
    "autoescuela alcorcón",
    "autoescuela en alcorcón",
    "autoescuelas alcorcón",
    "carnet de conducir alcorcón",
    "permiso de conducir alcorcón",
    "autoescuela madrid",
    "autoescuela barata alcorcón",
    "sacarse el carnet alcorcón",
    "clases de conducir alcorcón",
    "autoescuela rayán",
    "autoescuela rayan alcorcón",
    "permiso B alcorcón",
    "autoescuela cerca de mí alcorcón",
    "mejor autoescuela alcorcón",
  ],
  authors: [{ name: "Autoescuela Rayán" }],
  creator: "Autoescuela Rayán",
  publisher: "Autoescuela Rayán",
  metadataBase: new URL("https://autoescuelaalcorcon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Autoescuela Rayán",
    title: "Autoescuela Rayán | Tu autoescuela en Alcorcón, Madrid",
    description:
      "Autoescuela en Alcorcón con vehículos modernos, profesores expertos y método personalizado. Permisos B, AM, A1, A2 y A. ¡Empieza hoy!",
    url: "https://autoescuelaalcorcon.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoescuela Rayán | Autoescuela en Alcorcón",
    description:
      "Obtén tu carnet de conducir en Alcorcón con la mejor formación. Vehículos modernos y profesores expertos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Autoescuela Rayán",
  description:
    "Autoescuela en Alcorcón, Madrid. Obtén tu carnet de conducir con vehículos modernos, profesores expertos y un método personalizado.",
  url: "https://autoescuelaalcorcon.com",
  telephone: "+34 916 000 000",
  email: "rayanautoescuela@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Ministro Fernández Ordóñez, 6",
    addressLocality: "Alcorcón",
    addressRegion: "Madrid",
    postalCode: "28924",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.3456,
    longitude: -3.8311,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
  areaServed: {
    "@type": "City",
    name: "Alcorcón",
  },
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="beforeInteractive"
        />
        <Navbar />
        <Analytics/>
        <SpeedInsights/>
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
