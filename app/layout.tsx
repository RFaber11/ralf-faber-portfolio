import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ralffaber.com"),

  title: {
    default: "Ralf Faber | Portrait & Fashion Photographer",
    template: "%s | Ralf Faber",
  },

  description:
    "Contemporary portrait and fashion photography by Ralf Faber. Based in the Netherlands and available for portrait, fashion and commercial commissions.",

  keywords: [
    "Ralf Faber",
    "portrait photographer",
    "fashion photographer",
    "editorial photographer",
    "photographer Netherlands",
    "portrait photography Netherlands",
    "fashion photography Netherlands",
  ],

  authors: [
    {
      name: "Ralf Faber",
    },
  ],

  creator: "Ralf Faber",
  publisher: "Ralf Faber",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ralf Faber",
    title: "Ralf Faber | Portrait & Fashion Photographer",
    description:
      "A curated selection of contemporary portrait and fashion photography.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait photography by Ralf Faber",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ralf Faber | Portrait & Fashion Photographer",
    description:
      "A curated selection of contemporary portrait and fashion photography.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable}`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}