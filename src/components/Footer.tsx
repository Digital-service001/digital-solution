import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand block */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-xs">
                D
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Digital<span className="text-sky-600"> Solution</span>
              </span>
            </div>
            <p className="text-slate-600 max-w-sm leading-relaxed text-xs">
              Specialized digital software studio providing vetted Figma UI systems, production Next.js boilerplates, and developer toolkits for modern tech ventures.
            </p>
            
            {/* Prominent Support Email */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 inline-block">
              <span className="text-slate-500 block text-[11px] font-medium">Customer Support Email:</span>
              <a
                href="mailto:support@digitalsolutionpro.shop"
                className="text-sky-600 hover:text-sky-700 font-semibold text-xs flex items-center gap-1.5 mt-0.5"
              >
                <svg className="w-3.5 h-3.5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@digitalsolutionpro.shop
              </a>
            </div>

            <div className="text-[11px] text-slate-500 font-mono">
              Fulfillment via automated encrypted email & private repo access. Payments securely processed via Creem.
            </div>
          </div>

          {/* Catalog links */}
          <div>
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3">Digital Products</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#templates" className="hover:text-slate-900 transition-colors">
                  UI Kits & Templates ($12 - $88)
                </Link>
              </li>
              <li>
                <Link href="/#enterprise" className="hover:text-slate-900 transition-colors">
                  Software Toolkits ($98 - $116)
                </Link>
              </li>
              <li>
                <Link href="/#enterprise" className="hover:text-slate-900 transition-colors">
                  Full SaaS Codebases ($142 - $229)
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-slate-900 transition-colors">
                  Delivery Info & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div>
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3">Legal & Compliance</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/terms" className="hover:text-slate-900 transition-colors">
                  Terms of Service & Licensing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-slate-900 transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">
                  Contact & Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Digital Solution. All rights reserved. Registered Digital Product Merchant.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <span>Payments powered by Creem</span>
            <span>•</span>
            <span>PCI-DSS Level 1 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}