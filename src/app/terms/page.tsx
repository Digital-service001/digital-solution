import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-300">
      <Link href="/" className="text-sky-400 hover:text-sky-300 text-sm font-medium mb-8 inline-block">
        ← Back to Storefront
      </Link>

      <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Terms of Service</h1>
      <p className="text-xs text-slate-500 font-mono mb-8">Effective Date: September 22, 2026 | Last Updated: September 2026</p>

      <div className="space-y-8 text-sm leading-relaxed border-t border-slate-800 pt-8">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Overview & Agreement</h2>
          <p>
            Welcome to Digital-Solution (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By purchasing digital assets or technical services from our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not purchase or access our products or services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. Products & Services Offered</h2>
          <p className="mb-2">Digital-Solution provides two distinct classifications of deliverables:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Digital Products (Instant Fulfillment):</strong> Downloadable files including icon sets, architecture diagrams, Figma design systems, Notion workspace templates, and Next.js/Tailwind source code templates ($12 to $88 USD).</li>
            <li><strong>Fixed-Scope Technical Services:</strong> Specialized technical audits, code security architecture reviews, turnkey deployment assistance, and website setup packages ($110 to $229 USD).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Delivery & Fulfillment Timelines</h2>
          <p className="mb-2">
            <strong>Digital Downloads:</strong> Delivered immediately upon confirmed transaction via Creem. A secure download URL and license key are displayed on the confirmation page and dispatched to your billing email address.
          </p>
          <p>
            <strong>Technical Services:</strong> Delivered according to the specified Service Level Agreement (SLA) stated on the product page (ranging between 24 and 72 business hours) following receipt of required client input via our onboarding intake form.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Commercial License & Intellectual Property</h2>
          <p>
            Upon purchasing a digital product, Digital-Solution grants you a non-exclusive, perpetual, royalty-free worldwide commercial license to use, modify, and incorporate the code or design assets into unlimited personal or commercial projects. You may not sub-license, resell, or distribute the raw source files or templates as standalone digital assets.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. Payments & Billing</h2>
          <p>
            All prices are denominated in USD. Payments are processed securely via Creem. We do not store your full credit card credentials on our servers. By completing an order, you authorize the one-time charge for the selected product or service tier.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Digital-Solution shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital assets or implementation recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">7. Contact Information</h2>
          <p>
            For questions regarding these Terms of Service or license clarification, please contact our support team at <a href="mailto:support@digital-solution.com" className="text-sky-400 underline">support@digital-solution.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}