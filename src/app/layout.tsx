import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vidracariacriativa.com.br"),
  title: "Vidraçaria Criativa - Vidros e Esquadrias em Anápolis e Região",
  description: "A Vidraçaria Criativa é especialista em instalação de vidros temperados, espelhos, boxes de banheiro, sacadas e esquadrias de alumínio em Anápolis/GO. Qualidade e segurança para sua obra.",
  keywords: ["vidraçaria em anápolis", "vidro temperado anápolis", "box de banheiro anápolis", "instalação de vidros go", "esquadrias de alumínio anápolis", "espelhos decorativos", "vidraçaria criativa"],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Vidraçaria Criativa" }],
  openGraph: {
    title: "Vidraçaria Criativa - Qualidade em Vidros e Esquadrias",
    description: "Sua vidraçaria de confiança em Anápolis. Instalamos box, sacadas, espelhos e esquadrias com acabamento premium.",
    url: "https://www.vidracariacriativa.com.br",
    siteName: "Vidraçaria Criativa",
    images: [
      {
        url: "/logo-final.png",
        width: 1200,
        height: 630,
        alt: "Vidraçaria Criativa - Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidraçaria Criativa",
    description: "Vidros e Esquadrias em Anápolis e Região",
    images: ["/logo-final.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Glazier",
              "name": "Vidraçaria Criativa",
              "image": "https://www.vidracariacriativa.com.br/logo-final.png",
              "description": "Vidraçaria em Anápolis especializada em vidros temperados, box de banheiro, espelhos e esquadrias de alumínio.",
              "@id": "https://www.vidracariacriativa.com.br",
              "url": "https://www.vidracariacriativa.com.br",
              "telephone": "+5562993243379",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Maria de Fátima Santos Ribeiro, 21 - St. Sul 3A Etapa",
                "addressLocality": "Anápolis",
                "addressRegion": "GO",
                "postalCode": "75106-725",
                "addressCountry": "BR"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Anápolis",
                  "sameAs": "https://pt.wikipedia.org/wiki/An%C3%A1polis"
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
