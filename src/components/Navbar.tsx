import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              Digital<span className="text-sky-600"> Solution</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 -mt-1 font-mono font-medium">
              Digital Products & Developer Kits
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link href="/#templates" className="hover:text-slate-950 transition-colors">
            Templates & Kits
          </Link>
          <Link href="/#enterprise" className="hover:text-slate-950 transition-colors">
            Master Suites
          </Link>
          <Link href="/#why-us" className="hover:text-slate-950 transition-colors">
            Why Us
          </Link>
          <Link href="/#how-it-works" className="hover:text-slate-950 transition-colors">
            How It Works
          </Link>
          <Link href="/#faq" className="hover:text-slate-950 transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-slate-950 transition-colors">
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#templates"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    </header>
  );
}