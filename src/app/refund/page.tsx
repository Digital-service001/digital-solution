import React from "react";
import Link from "next/link";

export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-300">
      <Link href="/" className="text-sky-400 hover:text-sky-300 text-sm font-medium mb-8 inline-block">
        ← Back to Storefront
      </Link>

      <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Refund & Cancellation Policy</h1>
      <p className="text-xs text-slate-500 font-mono mb-8">Effective Date: September 22, 2026 | Last Updated: September 2026</p>

      <div className="space-y-8 text-sm leading-relaxed border-t border-slate-800 pt-8">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Our Commitment to Fair Dealing</h2>
          <p>
            At Digital-Solution, customer satisfaction is our top priority. We believe in transparent policies that protect both our buyers and the integrity of our digital engineering deliverables.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. Digital Product Downloads ($12 – $88)</h2>
          <p className="mb-2">
            Due to the non-tangible, irrevocable nature of digital downloads (code templates, Figma files, icon bundles), all sales are generally final once the download link is accessed. However, we provide refunds under the following conditions within <strong>14 days of purchase</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Technical Defect or Corrupted Files:</strong> If a downloaded archive has broken components, corrupt files, or critical bugs that our engineering team cannot rectify within 48 hours of reporting.</li>
            <li><strong>Material Misrepresentation:</strong> If the deliverable fundamentally differs from the specifications displayed on the product description page.</li>
            <li><strong>Duplicate Transaction:</strong> Accidental double charges will be refunded immediately in full upon notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Fixed-Scope Technical Services ($98 – $229)</h2>
          <p className="mb-2">
            For technical audits, code reviews, and turnkey deployment packages:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Cancellation Prior to Work Commencement:</strong> If you request a cancellation before our team has begun review (within 12 hours of order placement), you are entitled to a 100% full refund.</li>
            <li><strong>SLA Delivery Guarantee:</strong> If we fail to deliver your audit report or deployment handoff within the guaranteed SLA window without prior client communication, you may request a full refund.</li>
            <li><strong>Revision Period:</strong> All service orders include 7 days of follow-up questions and one round of minor configuration adjustments free of charge.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. How to Request a Refund</h2>
          <p>
            To submit a refund request, send an email to <a href="mailto:support@digital-solution.com" className="text-sky-400 underline">support@digital-solution.com</a> with your Creem Order ID, purchase date, and reason for the request. Our support team responds to all refund inquiries within <strong>24 business hours</strong>. Approved refunds are credited back to your original payment method via Creem within 3–7 banking days.
          </p>
        </section>
      </div>
    </div>
  );
}
