import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700">
        <Link href="/" className="text-sky-600 hover:text-sky-700 text-sm font-medium mb-8 inline-block">
          ← Back to Storefront
        </Link>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Terms of Service</h1>
        <p className="text-xs text-slate-500 font-mono mb-8">Effective Date: September 2026 | Last Updated: September 2026</p>

        <div className="space-y-8 text-sm leading-relaxed border-t border-slate-200 pt-8">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview & Agreement</h2>
            <p>
              Welcome to Digital Solution (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By purchasing digital assets or software templates from our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not purchase or access our digital products.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Products Offered</h2>
            <p className="mb-2">
              Digital Solution operates exclusively as a digital product provider. All items available for purchase are downloadable software assets and developer toolkits ($12 to $229 USD), including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>UI vector icon bundles and asset packages (SVG, PNG, Figma formats).</li>
              <li>Figma component libraries and modern web design systems.</li>
              <li>Next.js 14 and Tailwind CSS frontend templates and full-stack API boilerplates.</li>
              <li>Performance optimization toolkits and security architecture codebases.</li>
              <li>Turnkey multi-tenant SaaS application starter kits and all-access master bundles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Instant Digital Fulfillment</h2>
            <p>
              All digital products are delivered automatically and immediately upon confirmed payment via Creem. A secure download link, license key, and private GitHub repository access instructions are displayed on the order confirmation screen and dispatched to the customer&apos;s billing email address within seconds of transaction completion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Commercial License & Intellectual Property</h2>
            <p>
              Upon purchasing a digital product, Digital Solution grants you a non-exclusive, perpetual, royalty-free worldwide commercial license to use, customize, and incorporate the code or design assets into unlimited personal or commercial projects. You may not sub-license, resell, or distribute the raw source files or templates as standalone digital stock items.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Payments & Billing</h2>
            <p>
              All prices are denominated in USD. Payments are processed securely via Creem (Merchant of Record). We do not store your complete credit card credentials on our servers. By completing an order, you authorize the one-time charge for the selected digital product. We do not charge recurring subscriptions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Digital Solution shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital assets or software templates.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">7. Contact Information</h2>
            <p>
              For questions regarding these Terms of Service or license clarification, please contact our support team at <a href="mailto:support@digitalsolutionpro.shop" className="text-sky-600 underline font-medium">support@digitalsolutionpro.shop</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}