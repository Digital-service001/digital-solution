import React from "react";
import Hero from "@/components/Hero";
import ComplianceBanner from "@/components/ComplianceBanner";
import ProductCard from "@/components/ProductCard";
import FaqSection from "@/components/FaqSection";
import { PRODUCTS_CATALOG } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const standardProducts = PRODUCTS_CATALOG.filter(
    (item) => item.price < 90
  );
  const enterpriseProducts = PRODUCTS_CATALOG.filter(
    (item) => item.price >= 90
  );

  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <ComplianceBanner />

      {/* SECTION 1: DEVELOPER KITS & UI TEMPLATES ($12 - $88) */}
      <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-medium mb-2">
              Instant Download Products
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Developer Kits & UI Templates
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Cleanly architected assets, Next.js codebases, and Figma component libraries. Download immediately upon checkout.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardProducts.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </section>

      {/* SECTION 2: ADVANCED BOILERPLATES & MASTER SUITES ($98 - $229) */}
      <section id="enterprise" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-medium mb-2">
                Production-Ready Software Packages
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Advanced Boilerplates & Master Suites
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Comprehensive full-stack boilerplates, automated performance toolkits, and all-access master software archives with extended commercial licensing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseProducts.map((suite) => (
              <ProductCard key={suite.id} item={suite} highlight={true} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO SECTION 1: WHY CHOOSE DIGITAL SOLUTION */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-medium mb-2">
            Engineered For Builders
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Why Creators & Startups Choose Digital Solution
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            We build production-grade design systems, Next.js application boilerplates, and developer toolkits so you can launch faster with full codebase ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-lg mb-4">
              ⚡
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Instant Digital Delivery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated delivery immediately after purchase. Direct ZIP archives, Figma master files, and private GitHub repository access.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
              🛠️
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Production-Ready Code</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Crafted strictly with Next.js 14, TypeScript, and modern Tailwind CSS. 100/100 Lighthouse performance and zero technical debt.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
              📜
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Commercial License</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every digital asset includes full royalty-free commercial rights. Build unlimited client websites or commercial software products.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg mb-4">
              🔒
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Permanent Ownership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              One-time purchase with no recurring fees. You own your code forever with lifetime access to bugfixes and version upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* SEO SECTION 2: HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-medium mb-2">
              Transparent Process
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              How Instant Fulfillment Works in 3 Simple Steps
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              From checkout to launch, getting your digital assets is instant and seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
              <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full mb-4 inline-block">
                STEP 01
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Choose Your Product</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Browse our catalog of UI kits, landing page templates, full-stack boilerplates, or complete all-in-one developer bundles.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
              <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full mb-4 inline-block">
                STEP 02
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Secure Checkout</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete your order securely through Creem using credit/debit card, Apple Pay, or Google Pay with 256-bit bank encryption.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full mb-4 inline-block">
                STEP 03
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Download & Deploy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive your automated download link and GitHub repository invitation immediately via email. Extract, run locally, and deploy to Vercel in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SECTION 3: KEYWORD-RICH TECHNICAL ECOSYSTEM & OVERVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-medium">
              Software Architecture Standard
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Modern Web Codebases & Production Digital Products
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At <strong>Digital Solution</strong>, we specialize in developing high-performance web templates, responsive Figma design kits, and enterprise developer boilerplates. Whether you need a high-converting Next.js landing page, an accessible Figma design system compliant with WCAG standards, or a production-ready SaaS authentication boilerplate, our digital products are built for modern web standards.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Modern Frameworks</h4>
                <p className="text-slate-600">Next.js 14 App Router, React 18, TypeScript, and semantic Tailwind CSS.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Global Hosting</h4>
                <p className="text-slate-600">Optimized for Vercel edge deployment with automated CI/CD workflows.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-lg space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Software Highlights</h3>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                Next.js 14 Server-Side Rendering (SSR) & Static Export
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                Core Web Vitals Optimization & Lighthouse 100/100 Target
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                WCAG 2.1 AA Accessible Figma Components & Tokens
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                Encrypted Checkout via Creem (Merchant of Record)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                Dedicated Support Desk with 24h Response SLA
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-700/60">
              <Link
                href="/contact"
                className="inline-block w-full py-2.5 text-center bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
              >
                Contact Product Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ & SLA */}
      <FaqSection />
    </div>
  );
}