import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One School",
  description: "One School is a premium, all-in-one school management platform designed to streamline administrative tasks, enhance communication between parents and teachers, and provide a seamless digital experience for educational institutions.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "One School",
    description: "The digital spine for your institution — connecting students, parents, teachers, and administrators in one premium SaaS ecosystem.",
    images: ["/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "One School",
    description: "Streamline your institution with the ultimate smart school management system.",
    images: ["/hero.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
