import React from "react";
import Link from "next/link";

export default function ComplianceBanner() {
  return (
    <div className="bg-slate-50 border-y border-slate-200/80 py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h4 className="text-slate-900 font-semibold text-sm">
            Merchant Compliance & Fulfillment Transparency
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            Every digital product is available for instant download. All technical services are completed within specified business turnaround SLAs.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-700">
          <Link href="/refund" className="hover:text-sky-600 underline underline-offset-4">
            Refund & Cancellation Policy
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/terms" className="hover:text-sky-600 underline underline-offset-4">
            Terms of Service
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/contact" className="hover:text-sky-600 underline underline-offset-4">
            Support Center
          </Link>
        </div>
      </div>
    </div>
  );
}