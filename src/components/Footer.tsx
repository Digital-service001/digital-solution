import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand block */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                Digital<span className="text-sky-400">-Solution</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Specialized digital asset studio providing vetted UI kits, production Next.js boilerplates, and senior engineering technical services for modern web ventures.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Fulfillment via encrypted email & private GitHub repo transfer. Payments securely processed via Creem.
            </div>
          </div>

          {/* Catalog links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">Products & Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Digital Asset Packs ($12 - $88)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Technical Audits ($98 - $116)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Turnkey Deployment ($142 - $229)
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Delivery SLAs & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">Legal & Compliance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support SLA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Digital-Solution. All rights reserved. Registered Digital Product & Technical Service Merchant.
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
