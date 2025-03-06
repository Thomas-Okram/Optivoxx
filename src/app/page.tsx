import HomePage from "./componets/HomePage";
import type { Metadata } from "next";
import Head from "next/head";

// Updated metadata with themeColor and colorScheme correctly placed outside of viewport
export const metadata: Metadata = {
  title: "Optivoxx Technologies",
  description:
    "Your vision, my code - Creating powerful digital experiences that drive growth. Join 20+ satisfied clients who've transformed their online presence.",
  icons: {
    icon: "/images/001.png", // This points to /public/images/001.png
  },
  robots: "index, follow",
  authors: [
    {
      name: "Okram Thomas Meitei, Director of Optivoxx Technologies Private Limited",
      url: "https://www.optivoxx.com",
    },
  ],
  creator: "Okram Thomas Meitei",
  publisher: "Optivoxx Technologies Private Limited",
  openGraph: {
    title:
      "Okram Thomas Meitei | Building Digital Success Stories | Full Stack & AI Expert",
    description:
      "Your vision, my code - Creating powerful digital experiences that drive growth. Join 20+ satisfied clients who've transformed their online presence.",
    url: "https://optivoxx.com/",
    siteName: "Optivoxx Technologies",
    images: [
      {
        url: `https://optivoxx.com/images/001.png`,
        width: 1800,
        height: 945,
        alt: "Okram Thomas Meitei - Full Stack Developer & AI Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  // Remove themeColor and colorScheme from here
};

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta tags for theme color and color scheme */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
