import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
              Digital<span className="text-sky-400">-Solution</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 -mt-1 font-mono">
              Digital Assets & Services
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/#products" className="hover:text-white transition-colors">
            Digital Downloads
          </Link>
          <Link href="/#services" className="hover:text-white transition-colors">
            Technical Services
          </Link>
          <Link href="/#faq" className="hover:text-white transition-colors">
            Delivery & FAQ
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#products"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/25 transition-all"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    </header>
  );
}
