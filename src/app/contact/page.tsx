import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-300">
      <Link href="/" className="text-sky-400 hover:text-sky-300 text-sm font-medium mb-8 inline-block">
        ← Back to Storefront
      </Link>

      <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Customer Support & Inquiries</h1>
      <p className="text-slate-400 text-sm mb-10">
        Have questions regarding a digital template, service delivery, or custom requirement? Our team is here to assist.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800 pt-10">
        {/* Support details */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
            <h3 className="text-base font-bold text-white mb-2">Email Support</h3>
            <p className="text-xs text-slate-400 mb-3">Direct channel for order inquiries, delivery assistance, and licensing:</p>
            <a href="mailto:support@digital-solution.com" className="text-sky-400 font-semibold text-sm hover:underline">
              support@digital-solution.com
            </a>
            <div className="mt-3 text-[11px] text-slate-500 font-mono">
              Response SLA: Within 24 business hours
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
            <h3 className="text-base font-bold text-white mb-2">Service Fulfillment Desk</h3>
            <p className="text-xs text-slate-400 mb-2">
              For active service orders ($110, $116, $142, $229), track your deliverable progress or submit credentials via:
            </p>
            <a href="mailto:delivery@digital-solution.com" className="text-indigo-400 font-semibold text-sm hover:underline">
              delivery@digital-solution.com
            </a>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
            <h3 className="text-base font-bold text-white mb-1">Business Identity</h3>
            <p className="text-xs text-slate-400">
              Digital-Solution (Digital Product & Technical Services)<br />
              Secure payments processed via Creem (Merchant of Record).
            </p>
          </div>
        </div>

        {/* Quick inquiry form preview */}
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/70">
          <h3 className="text-base font-bold text-white mb-4">Send a Message</h3>
          <form className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Alex Morgan"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">Your Email</label>
              <input
                type="email"
                placeholder="alex@company.com"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">Inquiry Type</label>
              <select className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500">
                <option>Product Download Support</option>
                <option>Technical Service Order ($110 - $229)</option>
                <option>Commercial Licensing Question</option>
                <option>Refund Request</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="How can we assist you?"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors"
            >
              Submit Support Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}