import React from "react";
import Link from "next/link";

export default function RefundPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700">
        <Link href="/" className="text-sky-600 hover:text-sky-700 text-sm font-medium mb-8 inline-block">
          ← Back to Storefront
        </Link>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Refund & Cancellation Policy</h1>
        <p className="text-xs text-slate-500 font-mono mb-8">Effective Date: September 2026 | Last Updated: September 2026</p>

        <div className="space-y-8 text-sm leading-relaxed border-t border-slate-200 pt-8">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Our Commitment to Fair Dealing</h2>
            <p>
              At Digital Solution, customer satisfaction is our top priority. We believe in transparent policies that protect both our buyers and the integrity of our digital engineering deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Digital Product Downloads ($12 – $229)</h2>
            <p className="mb-2">
              Due to the non-tangible, irrevocable nature of digital downloads (code templates, Figma files, icon bundles, and software boilerplates), sales are generally final once the download link is accessed. However, we provide refunds under the following conditions within <strong>14 days of purchase</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Technical Defect or Corrupted Files:</strong> If a downloaded archive has broken components, corrupt files, or critical bugs that our engineering team cannot rectify within 48 hours of reporting.</li>
              <li><strong>Material Misrepresentation:</strong> If the deliverable fundamentally differs from the specifications displayed on the product description page.</li>
              <li><strong>Duplicate Transaction:</strong> Accidental double charges will be refunded immediately in full upon notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. How to Request a Refund</h2>
            <p>
              To submit a refund request, send an email to <a href="mailto:support@digitalsolutionpro.shop" className="text-sky-600 underline font-medium">support@digitalsolutionpro.shop</a> with your Creem Order ID, purchase date, and reason for the request. Our support team responds to all refund inquiries within <strong>24 business hours</strong>. Approved refunds are credited back to your original payment method via Creem within 3–7 banking days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}