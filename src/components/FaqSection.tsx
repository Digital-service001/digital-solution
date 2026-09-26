import React from "react";

export default function FaqSection() {
  const faqs = [
    {
      q: "How are digital product downloads delivered?",
      a: "Immediately upon successful payment through Creem, you will receive an automated confirmation email with your direct download link, license key, and GitHub repository access. Fulfillment is 100% instant and automated 24/7."
    },
    {
      q: "What file formats and assets are included?",
      a: "Depending on the product, you receive clean Next.js 14 / TypeScript source code archives, Figma design libraries (.fig), raw SVG vector icon files, Notion workspace duplicate links, and comprehensive documentation PDFs."
    },
    {
      q: "What is your refund policy?",
      a: "We offer a 14-day refund guarantee. If a downloaded codebase or digital file has a technical defect, corrupted file, or critical bug that cannot be rectified within 48 hours of reporting, a 100% full refund is issued through Creem."
    },
    {
      q: "What payment methods are supported?",
      a: "All payments are securely handled through Creem (our Merchant of Record), supporting major credit and debit cards (Visa, MasterCard, American Express), Apple Pay, and Google Pay with bank-grade 256-bit SSL encryption."
    },
    {
      q: "Can I use purchased templates and assets in client/commercial projects?",
      a: "Yes. All purchases come with a royalty-free commercial license permitting unlimited end-products for yourself or your paying clients. You may not resell or redistribute the raw source files as standalone stock items."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50/60 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-medium mb-3">
            Common Inquiries
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-2 text-slate-600 text-sm">
            Everything you need to know about our digital downloads, file formats, and commercial licensing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200/80 bg-white shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}