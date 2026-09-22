import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Transparent Deliverables & Guaranteed 24-72h Service SLAs
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Production-Ready Digital Products &{" "}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Technical Web Services
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed mb-10">
          Boutique digital toolkits, Next.js code boilerplates, Figma design systems, and fixed-scope implementation services built by senior engineers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#products"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base shadow-lg shadow-sky-500/25 transition-all text-center"
          >
            Browse Products (From $12)
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white font-semibold text-base transition-colors text-center"
          >
            View Fixed Services (From $98)
          </Link>
        </div>

        {/* Verification badges */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 text-xs uppercase tracking-wider font-mono">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Instant Digital Fulfillment
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Encrypted Creem Checkout
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            14-Day Refund Guarantee
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Clean Commercial License
          </div>
        </div>
      </div>
    </section>
  );
}
