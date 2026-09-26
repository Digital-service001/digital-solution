import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Solution | Premium Digital Products & Developer Toolkits",
  description: "Browse production-ready Next.js code templates, comprehensive Figma design systems, and developer toolkits. Instant automated digital download upon checkout.",
  keywords: [
    "Digital Solution",
    "digital products",
    "developer kits",
    "Next.js templates",
    "Figma design system",
    "Tailwind CSS components",
    "software boilerplates",
    "digital downloads",
    "code templates",
    "SaaS starter kit"
  ],
  authors: [{ name: "Digital Solution" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Digital Solution | Premium Digital Products & Developer Toolkits",
    description: "Curated code templates, Figma UI systems, and developer boilerplates. Instant automated fulfillment with commercial licensing.",
    url: "https://www.digitalsolutionpro.shop",
    siteName: "Digital Solution",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}