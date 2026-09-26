import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700">
        <Link href="/" className="text-sky-600 hover:text-sky-700 text-sm font-medium mb-8 inline-block">
          ← Back to Storefront
        </Link>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-xs text-slate-500 font-mono mb-8">Effective Date: September 2026 | Last Updated: September 2026</p>

        <div className="space-y-8 text-sm leading-relaxed border-t border-slate-200 pt-8">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Information We Collect</h2>
            <p className="mb-2">We collect only the minimum required information necessary to deliver your digital software downloads:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Customer Account & Contact Information:</strong> Name and email address provided during checkout to facilitate product download links and invoice receipts.</li>
              <li><strong>Payment Transaction Data:</strong> Transaction ID, timestamp, and order total collected via our merchant of record partner, Creem. We never have access to or store your complete card number.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. How We Use Your Information</h2>
            <p>
              We use your personal data exclusively to: fulfill digital download orders, deliver download keys, provide customer support, and send transactional notices. We do not sell, rent, or trade your personal information to third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Data Security & Storage</h2>
            <p>
              All checkout interactions occur over 256-bit TLS encrypted connections managed by Creem. Digital download links are dispatched securely to your verified email address.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Your Data Rights</h2>
            <p>
              Under GDPR and CCPA, you have the right to request access to your personal data, request corrections, or request complete deletion of your customer records. To exercise these rights, email <a href="mailto:support@digitalsolutionpro.shop" className="text-sky-600 underline font-medium">support@digitalsolutionpro.shop</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Updates to This Policy</h2>
            <p>
              We may occasionally update this Privacy Policy to reflect changes in our legal obligations or payment processing practices. Any revisions will be reflected with an updated effective date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}