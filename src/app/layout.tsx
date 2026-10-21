import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "One School — School Management Software | OnePath Solutions",
    template: "%s | One School",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.company, url: "https://onepathsolutions.com" }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/faviconicon.png", type: "image/png" }],
    shortcut: "/faviconicon.png",
    apple: "/faviconicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "One School — Smart School Management Platform",
    description:
      "Manage students, attendance, fees, parent communication, and reports in one platform built for schools.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "One School by OnePath Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One School — Smart School Management Platform",
    description:
      "Student management, attendance, fees, WhatsApp alerts, and admin dashboards — all in One School.",
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
