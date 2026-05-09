import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://veneer.com.ar";
const TITLE = "Veneer — Carpintería a medida y colecciones | Yerba Buena, Tucumán";
const DESCRIPTION =
  "Carpintería de melamina premium en Yerba Buena, Tucumán. Cocinas, placares, oficinas y proyectos integrales a medida —y colecciones standalone propias: bar, living, dormitorio, mesas. Co-creación con arquitectos y estudios. Clientes: Bonafide, Hospital Padilla.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Veneer" },
  description: DESCRIPTION,
  keywords: [
    "Veneer",
    "carpintería Tucumán",
    "muebles a medida Tucumán",
    "melamina Yerba Buena",
    "cocinas a medida",
    "placares a medida",
    "muebles para arquitectos",
    "carpintería premium Argentina",
    "mobiliario corporativo Tucumán",
    "colecciones de muebles",
    "mueble bar",
    "rack TV",
    "mesa de quincho",
    "cama box",
    "comoda",
  ],
  authors: [{ name: "Veneer" }],
  creator: "Veneer",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Veneer",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL + "#business",
  name: "Veneer",
  alternateName: "Veneer Carpintería",
  url: SITE_URL,
  description: DESCRIPTION,
  image: SITE_URL + "/opengraph-image",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yerba Buena",
    addressRegion: "Tucumán",
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Tucumán" },
    { "@type": "Country", name: "Argentina" },
  ],
  knowsAbout: [
    "Carpintería de melamina",
    "Muebles a medida",
    "Cocinas integrales",
    "Placares a medida",
    "Mobiliario corporativo",
    "Mobiliario para oficinas",
    "Colecciones standalone",
    "Mueble bar con cava",
    "Living TV modular",
    "Mesa de quincho",
    "Cama box con cajones",
    "Co-creación con arquitectos",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veneer",
  url: SITE_URL,
  founder: { "@type": "Person", name: "José" },
  brand: { "@type": "Brand", name: "Veneer" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#manifiesto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--ink)] focus:text-[var(--paper)] focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
        >
          Saltar al contenido
        </a>
        <LenisProvider>{children}</LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
