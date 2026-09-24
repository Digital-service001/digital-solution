import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Solution | Premium Digital Products & Web Development Services",
  description: "Browse high-performance Next.js templates, comprehensive Figma design systems, and turnkey web engineering services with guaranteed delivery SLAs.",
  keywords: [
    "Digital Solution",
    "digital products",
    "web development services",
    "Next.js templates",
    "Figma design system",
    "website speed audit",
    "code security review",
    "Vercel deployment service",
    "developer assets",
    "Tailwind CSS components"
  ],
  authors: [{ name: "Digital Solution" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Digital Solution | Digital Products & Fixed-Scope Web Services",
    description: "Curated code templates, Figma UI systems, and fixed-scope web engineering services. Instant fulfillment and verified turnaround SLAs.",
    url: "https://digitalsolutionpro.shop",
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