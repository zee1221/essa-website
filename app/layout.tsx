import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ESSA — Ethiopian Street Sports Association",
  description:
    "Changing Lives Through Street Sports. Empowering Ethiopian youth, refugees, and underserved communities through football and community programs.",
  keywords: [
    "Ethiopian street sports",
    "ESSA",
    "Ethiopia football",
    "youth empowerment Ethiopia",
    "street football Addis Ababa",
    "nonprofit Ethiopia sports",
  ],
  openGraph: {
    title: "ESSA — Ethiopian Street Sports Association",
    description: "Changing Lives Through Street Sports",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESSA — Ethiopian Street Sports Association",
    description: "Changing Lives Through Street Sports",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-essa-dark text-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
