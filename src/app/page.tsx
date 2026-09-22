import React from "react";
import Hero from "@/components/Hero";
import ComplianceBanner from "@/components/ComplianceBanner";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import FaqSection from "@/components/FaqSection";
import { PRODUCTS_CATALOG } from "@/data/products";

export default function Home() {
  const digitalProducts = PRODUCTS_CATALOG.filter(
    (item) => item.type === "digital_product"
  );
  const digitalServices = PRODUCTS_CATALOG.filter(
    (item) => item.type === "digital_service"
  );

  return (
    <div className="flex flex-col">
      <Hero />
      <ComplianceBanner />

      {/* SECTION 1: DIGITAL PRODUCTS */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-sky-950/80 border border-sky-800/40 text-sky-400 text-xs font-mono font-medium mb-2">
              Instant Download Products
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Developer Kits & Design Systems
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Cleanly architected assets, Next.js codebases, and Figma component libraries. Download immediately upon checkout.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2">
            Pricing: $12 • $23 • $39 • $44 • $66 • $76 • $88
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalProducts.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </section>

      {/* SECTION 2: DIGITAL SERVICES */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-800/40 text-indigo-400 text-xs font-mono font-medium mb-2">
                Fixed-Scope Engineering Services
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Turnkey Technical Implementation
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-xl">
                Hands-on audits, code reviews, and complete Vercel setup by verified senior engineers with clear delivery turnaround SLAs.
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2">
              Fixed Fees: $98 • $116 • $142 • $229
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service) => (
              <ServiceCard key={service.id} item={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ & SLA */}
      <FaqSection />
    </div>
  );
}
