import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital-Solution | Digital Products & Web Development Services",
  description: "Curated code templates, Figma UI systems, and fixed-scope web engineering services. Instant fulfillment and verified turnaround SLAs.",
  keywords: ["Next.js templates", "Figma design system", "web development services", "digital products", "website audit", "Vercel deployment"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
