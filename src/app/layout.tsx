import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Looped | Full-Stack Developer & Creative Artist",
  description:
    "Looped is a full-stack developer and digital artist passionate about building seamless user experiences, interactive web apps, and creative interfaces.",
  keywords: [
    "Looped",
    "Full-Stack Developer",
    "Portfolio",
    "Software Engineer",
    "Creative Coder",
    "UI/UX",
    "Next.js",
    "React",
    "TailwindCSS",
    "Open Source",
  ],
  authors: [{ name: "Looped", url: "https://thelooped.tech" }],
  creator: "Looped",
  publisher: "Looped",
  openGraph: {
    title: "Looped | Full-Stack Developer & Creative Artist",
    description:
      "Portfolio of Looped - a full-stack developer and digital artist building creative interfaces and seamless user experiences.",
    url: "https://thelooped.tech",
    siteName: "Looped Portfolio",
    images: [
      {
        url: "https://thelooped.tech/logo.png",
        width: 500,
        height: 500,
        alt: "Looped Logo",
      },
      {
        url: "https://thelooped.tech/full.png",
        width: 1200,
        height: 630,
        alt: "Looped Full Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Looped | Full-Stack Developer & Creative Artist",
    description:
      "Portfolio of Looped — full-stack developer and digital artist building seamless user experiences.",
    creator: "@nonlooped",
    images: ["https://thelooped.tech/full.png"],
  },
  alternates: {
    canonical: "https://thelooped.tech",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
