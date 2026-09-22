import React from "react";

export default function FaqSection() {
  const faqs = [
    {
      q: "How are digital product downloads delivered?",
      a: "Immediately upon successful payment through Creem, you will receive an automated confirmation email with your direct download link and GitHub repository access instructions. Access is permanent and includes lifetime file updates."
    },
    {
      q: "How does fixed-scope service fulfillment work?",
      a: "When you purchase a technical service ($110, $116, $142, or $229), you will be redirected to an onboarding questionnaire where you submit your website URL, repository link, or setup credentials securely. Our senior engineers begin review within 12 hours and deliver final reports or deployments within the stated 24-72h SLA."
    },
    {
      q: "What is your refund policy?",
      a: "We offer a 14-day refund policy. For digital products, if a technical defect cannot be resolved by our support team within 48 hours, a full refund is issued. For services, if work has not yet commenced or the agreed deliverable criteria are not met, you are entitled to a 100% refund."
    },
    {
      q: "What payment methods are supported?",
      a: "All payments are securely handled through Creem, supporting major credit/debit cards (Visa, MasterCard, American Express), Apple Pay, and Google Pay with bank-grade 256-bit encryption."
    },
    {
      q: "Can I use purchased templates and assets in client/commercial projects?",
      a: "Yes. All purchases come with a royalty-free commercial license permitting unlimited end-products for yourself or your paying clients."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-2 text-slate-400 text-sm">
            Everything you need to know about our digital deliverables, fulfillment turnaround, and guarantees.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}